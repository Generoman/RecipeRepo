import { Units } from "../enums/Units";
import DTO from "./DTO";

export default class IngredientDTO implements DTO {
  constructor(
    public name: string,
    public quantity: number,
    public unit: Units
  ) {}
}
