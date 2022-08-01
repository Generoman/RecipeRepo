import IRecipeRepo from "./IRecipeRepo";
import DTO from "../data/dtos/DTO";
import { cheeseSandwich } from "../__mocks__/data/mockRecipeDTOs";
import RecipeDTO from "../data/dtos/RecipeDTO";
import { Category } from "../data/enums/Category";

export default class RecipeRepo implements IRecipeRepo {
  delete(id: string): void {}

  retrieve(): RecipeDTO[] {
    return [];
  }

  retrieveById(id: string): RecipeDTO {
    // TODO: remove mocked return value
    return cheeseSandwich;
  }

  retrieveByUser(user: string): RecipeDTO[] {
    return [];
  }

  save(dto: DTO): RecipeDTO {
    // TODO: remove mocked return value
    return cheeseSandwich;
  }

  update(dto: DTO): RecipeDTO {
    // TODO: remove mocked return value
    return cheeseSandwich;
  }

  retrieveByCategory(category: Category): RecipeDTO[] {
    return [];
  }

  retrieveByTags(tags: string[]): RecipeDTO[] {
    return [];
  }
}
