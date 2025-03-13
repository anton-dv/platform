import { Profiles } from "../services/Profiles";

export const useProfile = () => ({ get: Profiles.get });

