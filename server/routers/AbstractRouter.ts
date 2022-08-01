import express, { IRouter } from "express";
import IService from "../services/IService";

export abstract class AbstractRouter {
  protected router = express.Router();

  protected constructor(protected service: IService) {}

  abstract fetchRoutes(): IRouter;
}
