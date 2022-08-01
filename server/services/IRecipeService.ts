import RecipeDTO from "../data/dtos/RecipeDTO";
import IService from "./IService";

export default interface IRecipeService extends IService {
  save(recipeDTO: RecipeDTO): RecipeDTO;

  retrieveAll(): RecipeDTO[];

  retrieveById(id: string): RecipeDTO | null;

  retrieveByUser(user: string): RecipeDTO[] | null;

  update(recipe: RecipeDTO, user: string): RecipeDTO;

  delete(recipe: RecipeDTO, user: string): void;
}
