import IService from "./IService";
import UserInfoDTO from "../data/dtos/UserInfoDTO";

export interface ILoginService extends IService {
  logIn(accessToken: any): boolean;

  retrieveUserInfo(accessToken: any): UserInfoDTO;
}
