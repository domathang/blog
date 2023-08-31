import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MainClothes } from './dto/main-clothes.dto';
import { Product } from './dto/product.dto';

@Controller()
export class ClothesController {
  @Get('/main/clothes')
  async getMainClothes(
    @Headers('AccessToken') accessToken: string,
  ): Promise<MainClothes> {
    return;
  }

  @Post('/clothes')
  async createClothes(
    @Headers('AccessToken') accessToken: string,
    @Body() body: Product,
  ): Promise<void> {
    return;
  }

  @Patch('/clothes/:id')
  async updateClothes(
    @Headers('AccessToken') accessToken: string,
    @Param('id') clothesId: string,
    @Body() body: Product,
  ): Promise<void> {
    return;
  }

  @Get('/clothes/:id')
  async getClothesDetail(
    @Headers('AccessToken') accessToken: string,
    @Param('id') clothesId: string,
  ): Promise<void> {
    return;
  }

  @Delete('/clothes/:id')
  async deleteClothes(
    @Headers('AccessToken') accessToken: string,
    @Param('id') clothesId: string,
  ): Promise<void> {
    return;
  }
}
