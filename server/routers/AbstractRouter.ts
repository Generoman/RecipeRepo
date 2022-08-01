import express, { IRouter } from "express";
import IService from "../services/IService";

export default abstract class AbstractRouter {
  protected router = express.Router();

  protected constructor(protected service: IService) {}

  abstract fetchRoutes(): IRouter;
}
