import IRepo from "./IRepo";
import RecipeDTO from "../data/dtos/RecipeDTO";
import { Category } from "../data/enums/Category";

export default interface IRecipeRepo extends IRepo<RecipeDTO> {
  retrieveById(id: string): Promise<RecipeDTO>;

  retrieveByUser(user: string): Promise<RecipeDTO[]>;

  retrieveByTags(tags: string[]): Promise<RecipeDTO[]>;

  retrieveByCategory(category: Category): Promise<RecipeDTO[]>;
}
