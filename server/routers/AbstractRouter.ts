import express, { IRouter } from "express";
import { ILoginService } from "../services/ILoginService";

export abstract class AbstractRouter {
  protected router = express.Router();

  protected constructor(protected service: ILoginService) {}

  abstract fetchRoutes(): IRouter;
}
