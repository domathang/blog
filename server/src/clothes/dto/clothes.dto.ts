import { IsDateString, IsNotEmpty } from 'class-validator';
import { ClothesKindEnum } from '../enum/clothes-kind.enum';

export class ClothesDto {
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
  @IsNotEmpty({groups: ['create']})
  @IsDateString()
  purchaseDate: string;
}
