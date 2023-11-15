import { IngredientTypes } from '@constants/Ingredient/Types';
import PagingRq from '@interface/rq/PagingRq';

export default class IngredientThumnailRq extends PagingRq {
  types?: IngredientTypes[];

  constructor(pagingRq: PagingRq, ingredientTypes?: IngredientTypes[]) {
    super(pagingRq);
    this.types = ingredientTypes?.map((type) => type);
  }
}
