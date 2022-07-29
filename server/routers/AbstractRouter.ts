import express, { IRouter } from "express";
import IMainService from "../services/IMainService";

export abstract class AbstractRouter {
  protected router = express.Router();

  protected constructor(protected service: IMainService) {}

  abstract fetchRoutes(): IRouter;
}
