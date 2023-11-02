import { IsDateString, IsNotEmpty } from 'class-validator';
import { ClothesKindEnum } from '../enum/clothes-kind.enum';
import { PartialType } from '@nestjs/mapped-types';

export class CreateClothesDto {
  @IsNotEmpty()
  imgUrl: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  kind: ClothesKindEnum;
  @IsNotEmpty()
  brand: string;
  @IsNotEmpty()
  size: string;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  link: string;
  @IsNotEmpty()
  color: string;
  @IsNotEmpty()
  @IsDateString()
  purchaseDate: string;
}

export class UpdateClothesDto extends PartialType(CreateClothesDto) {}
