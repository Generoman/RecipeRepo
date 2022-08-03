import AbstractRecipeService from "./AbstractRecipeService";
import RecipeDTO from "../data/dtos/RecipeDTO";
import IRecipeRepo from "../repos/IRecipeRepo";

export default class RecipeService extends AbstractRecipeService {
  constructor(recipeRepo: IRecipeRepo) {
    super(recipeRepo);
  }

  async deleteRecipe(id: string, user: string): Promise<void> {
    const recipeToDelete = await this.retrieveRecipeById(id);
    if (recipeToDelete.author !== user) {
      throw new Error("User mismatch");
    }
    await this.recipeRepo.delete(id);
  }

  async retrieveAllRecipes(): Promise<RecipeDTO[]> {
    return await this.recipeRepo.retrieve();
  }

  async retrieveRecipeById(id: string): Promise<RecipeDTO> {
    return await this.recipeRepo.retrieveById(id);
  }

  async retrieveRecipesByUser(user: string): Promise<RecipeDTO[]> {
    return await this.recipeRepo.retrieveByUser(user);
  }

  async saveRecipe(recipeDTO: RecipeDTO): Promise<RecipeDTO> {
    return await this.recipeRepo.save(recipeDTO);
  }

  async updateRecipe(recipe: RecipeDTO, user: string): Promise<RecipeDTO> {
    if (!recipe.id) {
      throw new Error("No ID provided");
    }
    if (recipe.author !== user) {
      throw new Error("User mismatch");
    }
    return await this.recipeRepo.update(recipe);
  }
}
