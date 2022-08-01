import AbstractRouter from "./AbstractRouter";
import { ILoginService } from "../services/ILoginService";
import e from "express";

export default class LoginRouter extends AbstractRouter {
  constructor(service: ILoginService) {
    super(service);
  }

  fetchRoutes(): e.IRouter {
    throw new Error("Not implemented");
  }
}
