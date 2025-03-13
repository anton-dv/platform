import { AxiosError } from "axios";
import { APIProfile } from "../../models/scheme/APIProfile";
import { Profile } from "../../models/types/Profile";

export const parseProfile = (apiProfile: APIProfile | AxiosError): Profile | null => {
  if ((apiProfile as AxiosError).isAxiosError) return null;
  apiProfile = apiProfile as APIProfile;

  return {
    username:  apiProfile.profile.username,
    image:     apiProfile.profile.image,
  }
}

