import { ClothingEnumType } from "../types/ClothingEnum";


export type clothingProps = {
  clothingId?: string;
  clothingDescription?: string;
  clothingImage: string;
  clothingName: string;
  clothingPrice: number;
  clothingType?: ClothingEnumType;
};
