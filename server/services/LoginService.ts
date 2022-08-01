import { ILoginService } from "./ILoginService";
import UserInfoDTO from "../data/dtos/UserInfoDTO";

export default class LoginService implements ILoginService {
  logIn(accessToken: any): boolean {
    throw new Error("Not implemented");
  }

  retrieveUserInfo(accessToken: any): UserInfoDTO {
    throw new Error("Not implemented");
  }
}
