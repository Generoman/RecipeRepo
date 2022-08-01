import AbstractRecipeService from "./AbstractRecipeService";
import RecipeDTO from "../data/dtos/RecipeDTO";
import { cheeseSandwich } from "../__mocks__/data/mockRecipeDTOs";
import IRecipeRepo from "../repos/IRecipeRepo";

export default class RecipeService extends AbstractRecipeService {
  constructor(recipeRepo: IRecipeRepo) {
    super(recipeRepo);
  }

  async deleteRecipe(id: string, user: string): Promise<void> {}

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
    return [];
  }

  async saveRecipe(recipeDTO: RecipeDTO): Promise<RecipeDTO> {
    // TODO: remove mocked return value
    return cheeseSandwich;
  }

  async updateRecipe(recipe: RecipeDTO, user: string): Promise<RecipeDTO> {
    // TODO: remove mocked return value
    return cheeseSandwich;
  }
}
