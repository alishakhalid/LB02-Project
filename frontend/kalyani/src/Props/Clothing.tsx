import { ClothingEnumType } from "../types/ClothingEnum";
import { v4 as uuid } from "uuid";
import { TypeOf } from "yup";
const id = uuid();

export type clothingProps = {
  clothingId?: typeof id;
  clothingDescription?: string;
  clothingImage: string;
  clothingName: string;
  clothingPrice: number;
  clothingType?: ClothingEnumType;
};
