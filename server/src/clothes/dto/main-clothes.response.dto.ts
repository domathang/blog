import { Expose, Type } from 'class-transformer';

class ClothesPreview {
  @Expose() imgUrl: string;
  @Expose() price: number;
  @Expose() brand: string;
  @Expose() name: string;
}

export class MainClothesResponse {
  @Expose() colors: string[];
  @Expose() brands: string[];
  @Expose() topCnt: number;
  @Expose() bottomCnt: number;
  @Expose() outerCnt: number;
  @Expose() shoesCnt: number;
  @Expose() accCnt: number;
  @Expose() innerwearCnt: number;
  @Expose() hatCnt: number;
  @Expose()
  @Type(() => ClothesPreview)
  clothesList: ClothesPreview[];
}
