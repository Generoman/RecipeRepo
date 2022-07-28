import { AbstractRouter } from "./AbstractRouter";
import e from "express";
import { ILoginService } from "../services/ILoginService";

export default class RecipeRouter extends AbstractRouter {
  constructor(service: ILoginService) {
    super(service);
  }

  fetchRoutes(): e.IRouter {
    const router = this.router;
    const service = this.service;

    return router;
  }
}
