import RecipeDTO from "../data/dtos/RecipeDTO";
import IService from "./IService";
import IRecipeRepo from "../repos/IRecipeRepo";

export default abstract class AbstractRecipeService implements IService {
  protected constructor(protected recipeRepo: IRecipeRepo) {}

  abstract saveRecipe(recipeDTO: RecipeDTO): Promise<RecipeDTO>;

  abstract retrieveAllRecipes(): Promise<RecipeDTO[]>;

  abstract retrieveRecipeById(id: string): Promise<RecipeDTO>;

  abstract retrieveRecipeByUser(user: string): Promise<RecipeDTO[]>;

  abstract updateRecipe(recipe: RecipeDTO, user: string): Promise<RecipeDTO>;

  abstract deleteRecipe(id: string, user: string): Promise<void>;
}
