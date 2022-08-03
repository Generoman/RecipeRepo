import IRecipeRepo from "../repos/IRecipeRepo";
import RecipeService from "../services/RecipeService";
import RecipeRepo from "../repos/RecipeRepo";
import { createMock } from "ts-auto-mock";
import { method, On } from "ts-auto-mock/extension";
import {
  badCarrotCake,
  blueberryBananaMilkshake,
  cheeseSandwich,
  recipeMissingAuthor,
  recipeNotInArray,
  userKath,
  userRoman,
} from "../__mocks__/data/mockRecipeDTOs";
import RecipeDTO from "../data/dtos/RecipeDTO";

describe("When running methods on RecipeService, ", () => {
  let mockRecipeRepo: IRecipeRepo;
  let service: RecipeService;
  let mockedRetrieveAll: jest.Mock;
  let mockedRetrieveById: jest.Mock;
  let mockedSave: jest.Mock;
  let mockedRetrieveByUser: jest.Mock;
  let mockedRetrieveByTags: jest.Mock;
  let mockedRetrieveByCategory: jest.Mock;
  let mockedUpdate: jest.Mock;
  let mockedDelete: jest.Mock;
  let recipesInMemory: RecipeDTO[];

  beforeAll(() => {
    mockRecipeRepo = createMock<RecipeRepo>();

    mockedRetrieveAll = On(mockRecipeRepo).get(method((repo) => repo.retrieve));
    mockedRetrieveById = On(mockRecipeRepo).get(
      method((repo) => repo.retrieveById)
    );
    mockedSave = On(mockRecipeRepo).get(method((repo) => repo.save));
    mockedRetrieveByUser = On(mockRecipeRepo).get(
      method((repo) => repo.retrieveByUser)
    );
    mockedRetrieveByTags = On(mockRecipeRepo).get(
      method((repo) => repo.retrieveByTags)
    );
    mockedRetrieveByCategory = On(mockRecipeRepo).get(
      method((repo) => repo.retrieveByCategory)
    );
    mockedUpdate = On(mockRecipeRepo).get(method((repo) => repo.update));
    mockedDelete = On(mockRecipeRepo).get(method((repo) => repo.delete));

    mockedRetrieveAll.mockImplementation(() => recipesInMemory);
    mockedRetrieveById.mockImplementation((id: string) => {
      const parsedId = parseInt(id) - 1;
      if (parsedId >= recipesInMemory.length || parsedId < 0) {
        throw new Error("Recipe not found");
      }
      return recipesInMemory[parsedId];
    });
    mockedSave.mockImplementation((dto: RecipeDTO) => {
      if (dto.author === "" || !dto.author) {
        throw new Error("Recipe missing author");
      }

      dto.id = (recipesInMemory.length + 1).toString();
      recipesInMemory.push(dto);

      return dto;
    });
    mockedDelete.mockImplementation((id: string) => {
      for (let i = 0; i < recipesInMemory.length; i++) {
        if (recipesInMemory[i].id === id) {
          recipesInMemory.splice(i, 1);
          return;
        }
      }
      throw new Error("Recipe not found");
    });
    mockedRetrieveByUser.mockImplementation((user: string) => {
      const returnValue: RecipeDTO[] = [];

      for (let i = 0; i < recipesInMemory.length; i++) {
        if (recipesInMemory[i].author === user) {
          returnValue.push(recipesInMemory[i]);
        }
      }
      if (returnValue.length === 0) {
        throw new Error("No recipes found");
      }
      return returnValue;
    });
    mockedUpdate.mockImplementation((dto: RecipeDTO) => {
      for (let i = 0; i < recipesInMemory.length; i++) {
        if (dto.id === recipesInMemory[i].id) {
          recipesInMemory[i] = dto;
          return dto;
        }
      }
      throw new Error("This error should NEVER occur");
    });

    service = new RecipeService(mockRecipeRepo);
  });

  beforeEach(() => {
    recipesInMemory = [badCarrotCake, cheeseSandwich, blueberryBananaMilkshake];
    recipeNotInArray.id = undefined;
  });

  it("should save and return a recipe", async () => {
    const result = await service.saveRecipe(recipeNotInArray);

    expect(recipesInMemory).toContain(recipeNotInArray);
    expect(result.id).toEqual("4");
    expect(result).toEqual(recipesInMemory[recipesInMemory.length - 1]);
  });

  it("should NOT save a recipe missing a user/author", async () => {
    await expect(service.saveRecipe(recipeMissingAuthor)).rejects.toThrow(
      "Recipe missing author"
    );
  });

  it("should retrieve all recipes", async () => {
    const result = await service.retrieveAllRecipes();

    expect(result[0]).toEqual(badCarrotCake);
    expect(result[1]).toEqual(cheeseSandwich);
    expect(result[2]).toEqual(blueberryBananaMilkshake);
  });

  it("should retrieve one recipe given an id", async () => {
    const result1 = await service.retrieveRecipeById("1");
    const result2 = await service.retrieveRecipeById("2");
    const result3 = await service.retrieveRecipeById("3");

    expect(result1).toEqual(badCarrotCake);
    expect(result2).toEqual(cheeseSandwich);
    expect(result3).toEqual(blueberryBananaMilkshake);
  });

  it("should NOT return recipe given a non-existing/wrong id", async () => {
    await expect(service.retrieveRecipeById("500")).rejects.toThrow(
      "Recipe not found"
    );
  });

  it("should retrieve all recipes by a given user", async () => {
    const result = await service.retrieveRecipesByUser(userRoman);

    expect(result).toContain(badCarrotCake);
    expect(result).toContain(cheeseSandwich);
    expect(result).not.toContain(blueberryBananaMilkshake);
  });

  it("should NOT return recipes given a non-existing/wrong user", async () => {
    await expect(service.retrieveRecipesByUser("")).rejects.toThrow(
      "No recipes found"
    );
  });

  it("should update a recipe", async () => {
    const recipeToUpdate = recipeNotInArray;
    recipeToUpdate.id = "1";
    recipeToUpdate.author = userRoman;

    const result = await service.updateRecipe(recipeToUpdate, userRoman);
    expect(result).not.toEqual(badCarrotCake);
    expect(result.id).toEqual(badCarrotCake.id);
    expect(result.author).toEqual(badCarrotCake.author);
  });

  it("should NOT update a non-existing recipe", async () => {
    await expect(
      service.updateRecipe(recipeNotInArray, userKath)
    ).rejects.toThrow("No ID provided");
  });

  it("should NOT update a recipe given a non-existing/wrong user", async () => {
    await expect(service.updateRecipe(badCarrotCake, userKath)).rejects.toThrow(
      "User mismatch"
    );
  });

  it("should delete a recipe", async () => {
    await service.deleteRecipe(badCarrotCake.id!, userRoman);

    expect(recipesInMemory).not.toContain(badCarrotCake);
  });

  it("should throw error when deleting a non-existing recipe", async () => {
    await expect(service.deleteRecipe("500", userRoman)).rejects.toThrow(
      "Recipe not found"
    );
  });

  it("should NOT delete a recipe given a non-existing/wrong user", async () => {
    await expect(
      service.deleteRecipe(badCarrotCake.id!, userKath)
    ).rejects.toThrow("User mismatch");
  });

  it("should retrieve all recipes in a given category", () => {
    throw new Error("Not implemented");
  });

  it("should throw error if no recipes exist in given category", () => {
    throw new Error("Not implemented");
  });

  it("should retrieve all recipes with a given tag", () => {
    throw new Error("Not implemented");
  });

  it("should throw error if no recipes exist with a given tag", () => {
    throw new Error("Not implemented");
  });
});
