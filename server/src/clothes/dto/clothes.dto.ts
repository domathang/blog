import { ClothesKindEnum } from '../enum/clothes-kind.enum';

export class ClothesDto {
  imgUrl: string;
  name: string;
  kind: ClothesKindEnum;
  brand: string;
  size: string;
  price: number;
  purchaseLink: string;
  color: string;
  purchaseDate: string;
}
