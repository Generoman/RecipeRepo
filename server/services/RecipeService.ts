import AbstractRecipeService from "./AbstractRecipeService";
import RecipeDTO from "../data/dtos/RecipeDTO";
import IRecipeRepo from "../repos/IRecipeRepo";

export default class RecipeService extends AbstractRecipeService {
  constructor(recipeRepo: IRecipeRepo) {
    super(recipeRepo);
  }

  async deleteRecipe(id: string, user: string): Promise<void> {
    throw new Error("Not implemented");
  }

  async retrieveAllRecipes(): Promise<RecipeDTO[]> {
    return await this.recipeRepo.retrieve();
  }

  async retrieveRecipeById(id: string): Promise<RecipeDTO> {
    try {
      return await this.recipeRepo.retrieveById(id);
    } catch (error) {
      throw error;
    }
  }

  async retrieveRecipeByUser(user: string): Promise<RecipeDTO[]> {
    throw new Error("Not implemented");
  }

  async saveRecipe(recipeDTO: RecipeDTO): Promise<RecipeDTO> {
    throw new Error("Not implemented");
  }

  async updateRecipe(recipe: RecipeDTO, user: string): Promise<RecipeDTO> {
    throw new Error("Not implemented");
  }
}
