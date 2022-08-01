import RecipeDTO from "../data/dtos/RecipeDTO";
import IService from "./IService";

export default interface IRecipeService extends IService {
  saveRecipe(recipeDTO: RecipeDTO): RecipeDTO;

  retrieveAllRecipes(): RecipeDTO[];

  retrieveRecipeById(id: string): RecipeDTO;

  retrieveRecipeByUser(user: string): RecipeDTO[];

  updateRecipe(recipe: RecipeDTO, user: string): RecipeDTO;

  deleteRecipe(id: string, user: string): void;
}
