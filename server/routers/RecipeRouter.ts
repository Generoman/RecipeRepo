import { AbstractRouter } from "./AbstractRouter";
import e from "express";
import IImageService from "../services/IImageService";
import IRecipeService from "../services/IRecipeService";

export default class RecipeRouter extends AbstractRouter {
  private readonly imageService: IImageService;

  constructor(recipeService: IRecipeService, imageService: IImageService) {
    super(recipeService);
    this.imageService = imageService;
  }

  fetchRoutes(): e.IRouter {
    const router = this.router;
    const service = this.service;
    const imageService = this.imageService;

    return router;
  }
}
