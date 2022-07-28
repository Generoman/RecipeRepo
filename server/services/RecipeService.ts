import IRecipeService from "./IRecipeService";
import RecipeDTO from "../dtos/RecipeDTO";

export default class RecipeService implements IRecipeService {
  delete(recipe: RecipeDTO, user: string): void {}

  retrieveAll(): RecipeDTO[] {
    return [];
  }

  retrieveById(id: string): RecipeDTO | null {
    return null;
  }

  retrieveByUser(user: string): RecipeDTO[] | null {
    return null;
  }

  save(recipeDTO: RecipeDTO): RecipeDTO {
    return new RecipeDTO();
  }

  update(recipe: RecipeDTO, user: string): RecipeDTO | null {
    return null;
  }
}
