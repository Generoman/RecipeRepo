import IngredientDTO from "./IngredientDTO";
import { Category } from "../enums/Category";
import { Difficulty } from "../enums/Difficulty";

export default class RecipeDTO {
  constructor(
    title: string,
    portions: number,
    author: string,
    ingredients: IngredientDTO,
    categories: Category[],
    tags: string[],
    instructions: string,
    image: string,
    difficulty: Difficulty
  ) {}
}
