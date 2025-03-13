import { APIProfile } from "../models/scheme/APIProfile";
import { Request } from "../models/Request";
import { parseProfile } from "./utils/parseProfile";
import { Profile } from "../models/types/Profile";

export class Profiles {
  static async get(name: string): Promise<Profile | null> {
    const response = await Request.get<APIProfile>(["profiles", name]);
    return parseProfile(response);
  }
}
