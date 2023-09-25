import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ClothesDTO } from './dto/clothes.dto';
import { MainClothesResponse } from './dto/main-clothes.response.dto';

@UseGuards(JwtAuthGuard)
@Controller()
export class ClothesController {
  constructor(private clothesService: ClothesService) {}

  @Get('/main/clothes/:userId')
  async getMainClothes(@Param('userId') userId: number) {
    return this.clothesService.getMainClothes(userId);
  }

  @Post('/clothes')
  async createClothes(@Body() body: ClothesDTO) {
    return;
  }

  @Patch('/clothes/:id')
  async updateClothes(
    @Param('id') clothesId: string,
    @Body() body: ClothesDTO,
  ) {
    return;
  }

  @Get('/clothes/:id')
  async getClothesDetail(
    @Headers('AccessToken') accessToken: string,
    @Param('id') clothesId: string,
  ) {
    return;
  }

  @Delete('/clothes/:id')
  async deleteClothes(
    @Headers('AccessToken') accessToken: string,
    @Param('id') clothesId: string,
  ) {
    return;
  }
}
