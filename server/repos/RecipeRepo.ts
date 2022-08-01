import IRecipeRepo from "./IRecipeRepo";
import DTO from "../data/dtos/DTO";
import { cheeseSandwich } from "../__mocks__/data/mockRecipeDTOs";
import RecipeDTO from "../data/dtos/RecipeDTO";
import { Category } from "../data/enums/Category";

export default class RecipeRepo implements IRecipeRepo {
  async delete(id: string): Promise<void> {}

  async retrieve(): Promise<RecipeDTO[]> {
    return [];
  }

  async retrieveById(id: string): Promise<RecipeDTO> {
    // TODO: remove mocked return value
    return cheeseSandwich;
  }

  async retrieveByUser(user: string): Promise<RecipeDTO[]> {
    return [];
  }

  async save(dto: DTO): Promise<RecipeDTO> {
    // TODO: remove mocked return value
    return cheeseSandwich;
  }

  async update(dto: DTO): Promise<RecipeDTO> {
    // TODO: remove mocked return value
    return cheeseSandwich;
  }

  async retrieveByCategory(category: Category): Promise<RecipeDTO[]> {
    return [];
  }

  async retrieveByTags(tags: string[]): Promise<RecipeDTO[]> {
    return [];
  }
}
