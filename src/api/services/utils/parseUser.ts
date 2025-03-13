import { AxiosError } from "axios";
import { APIUser } from "../../models/scheme/APIUser"
import { User } from "../../models/types/User"
import { parseError } from "./parseError";
import { APIResponse } from "../../models/types/APIResponse";

export const parseUser = (apiUser: APIUser | AxiosError): APIResponse<User> => {
  if ((apiUser as AxiosError).isAxiosError) return {
    isError: true,
    error: parseError(apiUser as AxiosError),
    data: undefined,
  };

  apiUser = apiUser as APIUser;

  return {
    isError: false,
    data: {
      username: apiUser.user.username,
      email: apiUser.user.email,
      image: apiUser.user.image,
      token: apiUser.user.token,
    },
    error: {}
  }
}
