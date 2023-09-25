import { ClothesKind } from '../enum/clothes-kind';

export class ClothesDTO {
  imgUrl: string;
  name: string;
  kind: ClothesKind;
  brand: string;
  size: string;
  price: number;
  purchaseLink: string;
  color: string;
  purchaseDate: string;
}
