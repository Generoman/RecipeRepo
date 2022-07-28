import RecipeDTO from "../dtos/RecipeDTO";

export default interface IRecipeService {
  save(recipeDTO: RecipeDTO): RecipeDTO;

  retrieveAll(): RecipeDTO[];

  retrieveById(id: string): RecipeDTO | null;

  retrieveByUser(user: string): RecipeDTO[] | null;

  update(recipe: RecipeDTO, user: string): RecipeDTO | null;

  delete(recipe: RecipeDTO, user: string): void;
}
