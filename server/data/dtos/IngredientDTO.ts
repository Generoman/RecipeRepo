import { Units } from "../enums/Units";
import DTO from "./DTO";

export default class IngredientDTO implements DTO {
  constructor(name: string, quantity: number, unit: Units) {}
}
