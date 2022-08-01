import IRecipeService from "./IRecipeService";
import RecipeDTO from "../data/dtos/RecipeDTO";
import { cheeseSandwich } from "../__mocks__/data/mockRecipeDTOs";

export default class RecipeService implements IRecipeService {
  deleteRecipe(id: string, user: string): void {}

  retrieveAllRecipes(): RecipeDTO[] {
    return [];
  }

  retrieveRecipeById(id: string): RecipeDTO {
    // TODO: remove mocked return value
    return cheeseSandwich;
  }

  retrieveRecipeByUser(user: string): RecipeDTO[] {
    return [];
  }

  saveRecipe(recipeDTO: RecipeDTO): RecipeDTO {
    // TODO: remove mocked return value
    return cheeseSandwich;
  }

  updateRecipe(recipe: RecipeDTO, user: string): RecipeDTO {
    // TODO: remove mocked return value
    return cheeseSandwich;
  }
}
