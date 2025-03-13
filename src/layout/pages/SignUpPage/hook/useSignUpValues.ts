import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import { Validator } from "../../../../utils/validator/Validator";
import { emailRules } from "../rules/email.rules";
import { passwordRules } from "../rules/password.rules";
import { repeatRules } from "../rules/repeat.rules";
import { usernameRules } from "../rules/username.rules";
import {
  resetSignUp,
  setSignUpAgreeError,
  setSignUpAgreeValue,
  setSignUpEmailError,
  setSignUpEmailValue,
  setSignUpPasswordError,
  setSignUpPasswordValue,
  setSignUpRepeatError,
  setSignUpRepeatValue,
  setSignUpUsernameError,
  setSignUpUsernameValue
} from "../slice/signUpSlice.slice";


export const useSignUpValues = () => {
  const dispatch = useAppDispatch();

  const values = useAppSelector(state => state.signUp.values);
  const errors = useAppSelector(state => state.signUp.errors);

  return {
    reset: () => { dispatch(resetSignUp()); },

    values: {
      username: values.username,
      email: values.email,
      password: values.password,
      repeat: values.repeat,
      agree: values.agree,
    },
    errors: {
      username: errors.username,
      email: errors.email,
      password: errors.password,
      repeat: errors.repeat,
      agree: errors.agree,
    },
    set: {
      username: (username: string) => {
        dispatch(setSignUpUsernameValue(username));
        dispatch(setSignUpUsernameError(undefined));
      },
      email: (email: string) => {
        dispatch(setSignUpEmailValue(email));
        dispatch(setSignUpEmailError(undefined));
      },
      password: (password: string) => {
        dispatch(setSignUpPasswordValue(password));
        dispatch(setSignUpPasswordError(undefined));
      },
      repeat: (repeat: string) => {
        dispatch(setSignUpRepeatValue(repeat));
        dispatch(setSignUpRepeatError(undefined));
      },
      agree: (agree: boolean) => {
        dispatch(setSignUpAgreeValue(agree));
        dispatch(setSignUpAgreeError(undefined));
      }
    },
    validate: () => {
      const usernameMessage = Validator.validate(values.username as string, usernameRules);
      const emailMessage = Validator.validate(values.email, emailRules);
      const passwordMessage = Validator.validate(values.password, passwordRules);

      const repeatOk = values.password === values.repeat && !!values.repeat;

      dispatch(setSignUpUsernameError(usernameMessage));
      dispatch(setSignUpEmailError(emailMessage));
      dispatch(setSignUpPasswordError(passwordMessage));
      dispatch(setSignUpAgreeError(!values.agree));

      if (!repeatOk) {
        const repeatMessage = Validator.validate(values.repeat, repeatRules);
        dispatch(setSignUpRepeatError(repeatMessage))
      }

      return !usernameMessage && !emailMessage && !passwordMessage && repeatOk && values.agree;
    }
  }
}
