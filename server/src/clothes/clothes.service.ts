import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MainClothesResponse } from './dto/main-clothes.response.dto';
import { Builder } from 'builder-pattern';
import { ClothesKindEnum } from './enum/clothes-kind.enum';
import { instanceToPlain } from 'class-transformer';
import { SortEnum } from './enum/sort.enum';
import { CreateClothesDto, UpdateClothesDto } from './dto/clothes.dto';

@Injectable()
export class ClothesService {
  constructor(private prisma: PrismaService) {}

  async getMainClothes(
    userId: number,
    offset: number,
    limit: number,
    brandFilter: string[],
    colorFilter: string[],
    kindFilter: string[],
    price1: number,
    price2: number,
    sort: string,
    period: string,
    dateFrom: string,
    dateTo: string,
  ) {
    // 쿼리하는 코드 분리(쿼리 매니저를 만들든 함수로 빼든)
    const clothes = await this.prisma.clothes.findMany({
      where: {
        ownerId: userId,
        ...(brandFilter ? { brand: { in: brandFilter } } : {}),
        ...(colorFilter ? { color: { in: colorFilter } } : {}),
        ...(kindFilter ? { kind: { in: kindFilter } } : {}),
        price: {
          gte: price1,
          lte: price2,
        },
        purchaseDate: {
          gte: new Date(dateFrom),
          lte: new Date(dateTo),
        },
      },
      orderBy: {
        ...(sort === SortEnum.NEW
          ? { purchaseDate: 'asc' }
          : sort === SortEnum.OLD
          ? { purchaseDate: 'desc' }
          : sort === SortEnum.PRICE_LOW
          ? { price: 'asc' }
          : sort === SortEnum.PRICE_HIGH
          ? { price: 'desc' }
          : {}),
      },
      skip: offset,
      take: limit,
    });

    const brands = await this.prisma.clothes
      .findMany({
        where: {
          ownerId: userId,
        },
        select: {
          brand: true,
        },
        distinct: ['brand'],
      })
      .then((r) => {
        const brands = r.map((x) => {
          return x.brand;
        });
        return brands;
      });

    const colors = await this.prisma.clothes
      .findMany({
        where: {
          ownerId: userId,
        },
        select: {
          color: true,
        },
        distinct: ['color'],
      })
      .then((r) => {
        const colors = r.map((x) => {
          return x.color;
        });
        return colors;
      });

    const resultKindCount = await this.prisma.clothes
      .groupBy({
        by: ['kind'],
        _count: { _all: true },
      })
      .then((x) =>
        x.reduce((newObj, obj) => {
          newObj[obj.kind] = obj._count._all;
          return newObj;
        }, {}),
      );

    return instanceToPlain(
      Builder(MainClothesResponse)
        .colors(colors)
        .brands(brands)
        .topCnt(resultKindCount[ClothesKindEnum.TOP])
        .bottomCnt(resultKindCount[ClothesKindEnum.BOTTOM])
        .outerCnt(resultKindCount[ClothesKindEnum.OUTER])
        .shoesCnt(resultKindCount[ClothesKindEnum.SHOES])
        .accCnt(resultKindCount[ClothesKindEnum.ACC])
        .innerwearCnt(resultKindCount[ClothesKindEnum.INNERWEAR])
        .hatCnt(resultKindCount[ClothesKindEnum.HAT])
        .clothesList(clothes)
        .build(),
      { excludeExtraneousValues: true },
    );
  }

  async createClothes(dto: CreateClothesDto) {
    const clothes = await this.prisma.clothes.create({
      data: { ...dto, purchaseDate: new Date(dto.purchaseDate) },
    });
    return clothes.id;
  }

  async updateClothes(clothesId: number, dto: UpdateClothesDto) {
    const clothes = await this.prisma.clothes.update({
      where: { id: clothesId },
      data: {
        ...dto,
        ...(dto.purchaseDate
          ? { purchaseDate: new Date(dto.purchaseDate) }
          : {}),
      },
    });
    return clothes.id;
  }
}
