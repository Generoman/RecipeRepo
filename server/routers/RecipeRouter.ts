import AbstractRouter from "./AbstractRouter";
import e from "express";
import IImageService from "../services/IImageService";
import AbstractRecipeService from "../services/AbstractRecipeService";

export default class RecipeRouter extends AbstractRouter {
  private readonly imageService: IImageService;

  constructor(
    recipeService: AbstractRecipeService,
    imageService: IImageService
  ) {
    super(recipeService);
    this.imageService = imageService;
  }

  fetchRoutes(): e.IRouter {
    // TODO: Implement logic

    return this.router;
  }
}
