import IngredientDTO from "./IngredientDTO";
import { Category } from "../enums/Category";
import { Difficulty } from "../enums/Difficulty";
import DTO from "./DTO";

export default class RecipeDTO implements DTO {
  constructor(
    title: string,
    portions: number,
    author: string,
    ingredients: IngredientDTO[],
    categories: Category[],
    tags: string[],
    instructions: string,
    difficulty: Difficulty,
    id?: string,
    image?: string
  ) {}
}
