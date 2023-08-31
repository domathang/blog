import { ClothesKind } from '../enum/clothes-kind';

export class Product {
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
