import IMainService from "./IMainService";
import UserInfoDTO from "../data/dtos/UserInfoDTO";

export interface ILoginService extends IMainService {
  logIn(accessToken: any): boolean;

  retrieveUserInfo(accessToken: any): UserInfoDTO;
}
