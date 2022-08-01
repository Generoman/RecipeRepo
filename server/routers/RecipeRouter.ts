import { AbstractRouter } from "./AbstractRouter";
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
    const router = this.router;
    const service = this.service;
    const imageService = this.imageService;

    // TODO: Implement logic

    return router;
  }
}
