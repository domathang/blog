import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Headers,
  Param,
  ParseArrayPipe,
  ParseEnumPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateClothesDto, UpdateClothesDto } from './dto/clothes.dto';
import { SortEnum } from './enum/sort.enum';
import { ClothesKindEnum } from './enum/clothes-kind.enum';
import { group } from 'console';
import { UserCtx } from 'src/auth/decorators/user-ctx.decorator';
import { UserContext } from 'src/auth/decorators/user-context.dto';

@UseGuards(JwtAuthGuard)
@Controller()
export class ClothesController {
  constructor(private clothesService: ClothesService) {}

  @Get('/main/clothes/:userId')
  async getMainClothes(
    @Param('userId') userId: number,
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
    @Query('limit', new DefaultValuePipe(8), ParseIntPipe) limit: number,
    @Query(
      'brands',
      new ParseArrayPipe({ items: String, separator: ',', optional: true }),
    )
    brands: string[],
    @Query(
      'colors',
      new ParseArrayPipe({ items: String, separator: ',', optional: true }),
    )
    colors: string[],
    @Query(
      'kinds',
      new ParseArrayPipe({ items: String, separator: ',', optional: true }),
    )
    kinds: string[],
    @Query('price1', new DefaultValuePipe(0), ParseIntPipe)
    price1: number,
    @Query('price2', new DefaultValuePipe(9999999), ParseIntPipe)
    price2: number,
    @Query('sort', new DefaultValuePipe('new'), new ParseEnumPipe(SortEnum))
    sort: string,
    @Query('period') period: string,
    @Query('dateFrom', new DefaultValuePipe(new Date('1900-01-01')))
    dateFrom: string,
    @Query('dateTo', new DefaultValuePipe(new Date())) dateTo: string,
  ) {
    // console.log();

    return this.clothesService.getMainClothes(
      userId,
      offset,
      limit,
      brands,
      colors,
      kinds,
      price1,
      price2,
      sort,
      period,
      dateFrom,
      dateTo,
    );
  }

  @Post('/clothes')
  async createClothes(
    @UserCtx() userCtx: UserContext,
    @Body() dto: CreateClothesDto,
  ) {
    return this.clothesService.createClothes(userCtx.id, dto);
  }

  @Patch('/clothes/:id')
  async updateClothes(
    @Param('id') clothesId: number,
    @Body() dto: UpdateClothesDto,
  ) {
    return this.clothesService.updateClothes(clothesId, dto);
  }

  @Get('/clothes/:id')
  async getClothesDetail(
    @Param('id') clothesId: number,
  ) {
    return this.clothesService.getClothesDetail(clothesId);
  }

  @Delete('/clothes/:id')
  async deleteClothes(@UserCtx() userCtx: UserContext, @Param('id') clothesId: number) {
    return this.clothesService.deleteClothes(userCtx.id, clothesId);
  }
}
