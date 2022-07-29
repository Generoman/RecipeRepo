import RecipeDTO from "../data/dtos/RecipeDTO";
import IMainService from "./IMainService";

export default interface IRecipeService extends IMainService {
  save(recipeDTO: RecipeDTO): RecipeDTO;

  retrieveAll(): RecipeDTO[];

  retrieveById(id: string): RecipeDTO | null;

  retrieveByUser(user: string): RecipeDTO[] | null;

  update(recipe: RecipeDTO, user: string): RecipeDTO;

  delete(recipe: RecipeDTO, user: string): void;
}
