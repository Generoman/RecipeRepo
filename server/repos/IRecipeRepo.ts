import IRepo from "./IRepo";
import RecipeDTO from "../data/dtos/RecipeDTO";
import { Category } from "../data/enums/Category";

export default interface IRecipeRepo extends IRepo<RecipeDTO> {
  retrieveById(id: string): RecipeDTO;

  retrieveByUser(user: string): RecipeDTO[];

  retrieveByTags(tags: string[]): RecipeDTO[];

  retrieveByCategory(category: Category): RecipeDTO[];
}
