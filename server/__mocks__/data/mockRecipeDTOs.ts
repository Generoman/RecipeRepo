import RecipeDTO from "../../data/dtos/RecipeDTO";
import IngredientDTO from "../../data/dtos/IngredientDTO";
import { Units } from "../../data/enums/Units";
import { Category } from "../../data/enums/Category";
import { Difficulty } from "../../data/enums/Difficulty";

const userRoman = "roman181@gmail.com";
const userKath = "katfisch123@gmail.com";

const carrots = new IngredientDTO("gulrot", 4, Units.PIECE);
const milkL = new IngredientDTO("melk", 1, Units.LITER);
const flour = new IngredientDTO("mel", 0.5, Units.KILOGRAM);
const ingredients1 = [carrots, milkL, flour];

const cheese = new IngredientDTO("skive ost", 1, Units.PIECE);
const margarine = new IngredientDTO("margarin", 10, Units.GRAM);
const bread = new IngredientDTO("brødskive", 1, Units.PIECE);
const ingredients2 = [cheese, margarine, bread];

const iceCream = new IngredientDTO("vaniljeis", 3, Units.TABLESPOON);
const blueberries = new IngredientDTO("blåbær", 2, Units.TABLESPOON);
const milkDl = new IngredientDTO("melk", 3, Units.DECILITER);
const banana = new IngredientDTO("banan", 1, Units.PIECE);
const ingredients3 = [iceCream, blueberries, milkDl, banana];

export const badCarrotCake = new RecipeDTO(
  "Shitty gulrotkake",
  4,
  userRoman,
  ingredients1,
  [Category.DESSERT, Category.SNACKS],
  ["dårlig", "kake"],
  "bland alt sammen og håp på det beste",
  Difficulty.EASY,
  "1"
);

export const cheeseSandwich = new RecipeDTO(
  "Brødblings med ost",
  1,
  userRoman,
  ingredients2,
  [Category.SNACKS, Category.BREAKFAST, Category.LUNCH],
  ["billig", "brødmat"],
  "Smør på brødet og ha på osten",
  Difficulty.EASY,
  "2"
);

export const blueberryBananaMilkshake = new RecipeDTO(
  "Banan- og blåbærmilkshake",
  1,
  userKath,
  ingredients3,
  [Category.BREAKFAST, Category.LUNCH, Category.SNACKS, Category.DESSERT],
  ["sunt", "frukt", "milkshake"],
  "Miks alt sammen med stavmikser og drikk",
  Difficulty.EASY,
  "3"
);

export const mockDataRecipes = [
  badCarrotCake,
  cheeseSandwich,
  blueberryBananaMilkshake,
];
