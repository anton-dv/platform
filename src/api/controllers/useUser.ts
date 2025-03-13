import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { setUser } from "../../app/store/slices/userSlice.slice";
import { Authorization } from "../models/types/Authorization";
import { User } from "../models/types/User";
import { Users } from "../services/Users";
import { APIResponse } from "../models/types/APIResponse";
import { Profile } from "../models/types/Profile";

export const useUser = () => {
  const dispatch = useAppDispatch();
  const current = useAppSelector(state => state.user.current);

  const updateCurrent = (response: APIResponse<User>): APIResponse<User> => {
    if (!response.isError) dispatch(setUser(response.data as User));
    return response;
  }

  if (current === undefined) {
    updateCurrent({
      isError: false,
      data: Users.load(),
      error: {},
    });
  };

  return {
    current: current || null,
    isCurrent: (author: Profile) => {
      return current?.username === author.username;
    },
    signin: async (data: Authorization) => {
      return updateCurrent(await Users.signin(data));
    },
    signup: async (data: Authorization) => {
      return updateCurrent(await Users.signup(data));
    },
    update: async (data: Authorization & Profile) => {
      if (!current) return {
        isError: true,
        error: { token: "Not found.", }
      };
      return updateCurrent(await Users.update(data, current.token));
    },
    logout: () => {
      Users.clear();
      dispatch(setUser(null))
    },
  }
}
