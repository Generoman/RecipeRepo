import IRecipeRepo from "../repos/IRecipeRepo";
import RecipeService from "../services/RecipeService";
import RecipeRepo from "../repos/RecipeRepo";
import { createMock } from "ts-auto-mock";
import { method, On } from "ts-auto-mock/extension";
import {
  badCarrotCake,
  blueberryBananaMilkshake,
  cheeseSandwich,
  mockDataRecipes,
} from "../__mocks__/data/mockRecipeDTOs";

describe("Tests for RecipeService", () => {
  let mockRecipeRepo: IRecipeRepo;
  let service: RecipeService;
  let mockedRetrieveAll: jest.Mock;
  let mockedRetrieveById: jest.Mock;

  beforeAll(() => {
    mockRecipeRepo = createMock<RecipeRepo>();

    mockedRetrieveAll = On(mockRecipeRepo).get(method((repo) => repo.retrieve));

    mockedRetrieveById = On(mockRecipeRepo).get(
      method((repo) => repo.retrieveById)
    );

    service = new RecipeService(mockRecipeRepo);
  });

  it("should save and return a recipe", async () => {
    //
  });

  it("should NOT save a recipe missing a user/author", async () => {
    //
  });

  it("should retrieve all recipes", async () => {
    mockedRetrieveAll.mockImplementation(() => mockDataRecipes);

    const result = await service.retrieveAllRecipes();

    expect(result[0]).toEqual(badCarrotCake);
    expect(result[1]).toEqual(cheeseSandwich);
    expect(result[2]).toEqual(blueberryBananaMilkshake);
  });

  it("should retrieve one recipe given an id", async () => {
    mockedRetrieveById.mockImplementation((id: string) => {
      return mockDataRecipes[parseInt(id) - 1];
    });

    const result1 = await service.retrieveRecipeById("1");
    const result2 = await service.retrieveRecipeById("2");
    const result3 = await service.retrieveRecipeById("3");

    expect(result1).toEqual(badCarrotCake);
    expect(result2).toEqual(cheeseSandwich);
    expect(result3).toEqual(blueberryBananaMilkshake);
  });

  it("should NOT return recipe given a non-existing/wrong id", async () => {
    mockedRetrieveById.mockImplementation((id: string) => {
      const index = parseInt(id) - 1;
      if (index > 2 || index < 0) throw new Error("Recipe not found");
      return mockDataRecipes[index];
    });

    await expect(service.retrieveRecipeById("4")).rejects.toThrow(
      "Recipe not found"
    );
  });

  it("should retrieve all recipes by a given user", async () => {
    //
  });

  it("should NOT return recipes given a non-existing/wrong user", async () => {
    //
  });

  it("should update a recipe", async () => {
    //
  });

  it("should NOT update a non-existing recipe", async () => {
    //
  });

  it("should NOT update a recipe given a non-existing/wrong user", async () => {
    //
  });

  it("should delete a recipe", async () => {
    //
  });

  it("should NOT delete a recipe given a non-existing/wrong user", async () => {
    //
  });
});
