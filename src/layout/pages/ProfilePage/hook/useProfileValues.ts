import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import { Validator } from "../../../../utils/validator/Validator";
import { avatarRules } from "../rules/avatar.rules";
import { emailRules } from "../rules/email.rules";
import { passwordRules } from "../rules/password.rules";
import { usernameRules } from "../rules/username.rules";
import {
  resetProfile,
  setProfileEmailError,
  setProfileEmailValue,
  setProfileImageError,
  setProfileImageValue,
  setProfilePasswordError,
  setProfilePasswordValue,
  setProfileUsernameError,
  setProfileUsernameValue
} from "../slice/profileEdit.slice";

export const useProfileValues = () => {
  const dispatch = useAppDispatch();

  const values = useAppSelector(state => state.profile.values);
  const errors = useAppSelector(state => state.profile.errors);

  return {
    reset: () => { dispatch(resetProfile()); },
    values: {
      username: values.username,
      password: values.password,
      email: values.email,
      image: values.image,
    },
    errors: {
      username: errors.username,
      password: errors.password,
      email: errors.email,
      image: errors.image,
    },
    set: {
      username: (username: string) => {
        dispatch(setProfileUsernameValue(username));
        dispatch(setProfileUsernameError(undefined));
      },
      password: (password: string) => {
        dispatch(setProfilePasswordValue(password));
        dispatch(setProfilePasswordError(undefined));
      },
      email: (email: string) => {
        dispatch(setProfileEmailValue(email));
        dispatch(setProfileEmailError(undefined));
      },
      image: (email: string) => {
        dispatch(setProfileImageValue(email));
        dispatch(setProfileImageError(undefined));
      },
    },
    validate: () => {
      const usernameMessage = Validator.validate(values.username, usernameRules);
      const emailMessage = Validator.validate(values.email, emailRules);
      const passwordMessage = Validator.validate(values.password, passwordRules);
      const avatarMessage = Validator.validate(values.image as string, avatarRules);

      dispatch(setProfileUsernameError(usernameMessage));
      dispatch(setProfilePasswordError(passwordMessage));
      dispatch(setProfileEmailError(emailMessage));
      dispatch(setProfileImageError(avatarMessage));

      return !usernameMessage && !emailMessage && !passwordMessage && !avatarMessage;
    }
  }
}
