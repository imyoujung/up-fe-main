import FindAttachFileDto from '@interface/rs/FindAttachFileDto';
import PagingRs from '@interface/rs/PagingRs';

export default interface IngredientThumnailMyRs extends PagingRs {
  content: IngredientThumnailDto[];
}

export interface IngredientThumnailDto {
  ingredientSn: number;
  name: string;
  description: string;
  abv: number;
  imageFile: FindAttachFileDto;
  addedIngredientYn: boolean;
}
