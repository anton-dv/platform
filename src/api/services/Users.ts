import { Request } from "../models/Request";
import { APIUser } from "../models/scheme/APIUser";
import { AxiosError } from "axios";
import { parseUser } from "./utils/parseUser";
import { User } from "../models/types/User";
import { Authorization } from "../models/types/Authorization";
import { APIResponse } from "../models/types/APIResponse";
import { Profile } from "../models/types/Profile";

export class Users {
  static load = () => UserLocal.load();
  static clear = () => UserLocal.save(null);

  static async signup(data: Authorization): Promise<APIResponse<User>> {
    return this.current(await Request.post<APIUser>("users", { user: data }));
  }

  static async signin(data: Authorization): Promise<APIResponse<User>> {
    return this.current(await Request.post<APIUser>(["users", "login"], { user: data }));
  }

  static async update(data: Authorization & Profile, token: string): Promise<APIResponse<User>> {
    const user = {
      username: data.username || undefined,
      email: data.email || undefined,
      password: data.password || undefined,
      image: data.image === "null" ? null : data.image || undefined,
    }

    return this.current(await Request.put<APIUser>("user", { user }, token));
  }

  private static async current(apiUser: APIUser | AxiosError): Promise<APIResponse<User>> {
    const result = parseUser(apiUser);
    if (result.isError) return result;

    const response = await Request.get<APIUser>("user", undefined, result.data?.token);
    const user = parseUser(response);

    UserLocal.save(user.isError ? null : user.data as User);

    return user;
  }
}


class UserLocal {
  static load(): User | null {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) as User : null;
  }

  static save(user: User | null): void {
    localStorage.setItem("user", JSON.stringify(user));
  }
}
