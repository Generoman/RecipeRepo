import IngredientDTO from "./IngredientDTO";
import { Category } from "../enums/Category";
import { Difficulty } from "../enums/Difficulty";
import DTO from "./DTO";

export default class RecipeDTO implements DTO {
  constructor(
    public title: string,
    public portions: number,
    public author: string,
    public ingredients: IngredientDTO[],
    public categories: Category[],
    public tags: string[],
    public instructions: string,
    public difficulty: Difficulty,
    public id?: string,
    public image?: string
  ) {}
}
