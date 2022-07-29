import { ILoginService } from "./ILoginService";
import UserInfoDTO from "../data/dtos/UserInfoDTO";

export default class LoginService implements ILoginService {
  logIn(accessToken: any): boolean {
    return false;
  }

  retrieveUserInfo(accessToken: any): UserInfoDTO {
    return new UserInfoDTO("temp@temp.temp", "Temp Temperson");
  }
}
