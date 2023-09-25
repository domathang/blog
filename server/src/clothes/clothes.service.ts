import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { when } from 'joi';
import { PrismaService } from 'src/prisma.service';
import { MainClothesResponse } from './dto/main-clothes.response.dto';
import { Builder } from 'builder-pattern';
import { ClothesKind } from './enum/clothes-kind';
import { classToPlain, instanceToPlain, plainToClass } from 'class-transformer';

@Injectable()
export class ClothesService {
  constructor(private prisma: PrismaService) {}

  async getMainClothes(userId: number) {
    const clothes = await this.prisma.clothes.findMany({
      where: {
        ownerId: userId,
      },
      orderBy: {
        purchaseDate: 'asc',
      },
      take: 10,
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
        .topCnt(resultKindCount[ClothesKind.TOP])
        .bottomCnt(resultKindCount[ClothesKind.BOTTOM])
        .outerCnt(resultKindCount[ClothesKind.OUTER])
        .shoesCnt(resultKindCount[ClothesKind.SHOES])
        .accCnt(resultKindCount[ClothesKind.ACC])
        .innerwearCnt(resultKindCount[ClothesKind.INNERWEAR])
        .hatCnt(resultKindCount[ClothesKind.HAT])
        .clothesList(clothes)
        .build(),
      { excludeExtraneousValues: true },
    );
  }
}
