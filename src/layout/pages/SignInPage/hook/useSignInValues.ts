import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import { Validator } from "../../../../utils/validator/Validator";
import { emailRules } from "../rules/email.rules";
import { passwordRules } from "../rules/password.rules";

import { resetSignIn, setSignInEmailError, setSignInEmailValue, setSignInPasswordError, setSignInPasswordValue } from "../slice/signInPage.slice";

export const useSignInValues = () => {
  const dispatch = useAppDispatch();

  const values = useAppSelector(state => state.signIn.values);
  const errors = useAppSelector(state => state.signIn.errors);

  return {
    reset: () => { dispatch(resetSignIn()); },
    values: {
      password: values.password,
      email: values.email,
    },
    errors: {
      password: errors.password,
      email: errors.email,
    },
    set: {
      password: (password: string) => {
        dispatch(setSignInPasswordValue(password));
        dispatch(setSignInPasswordError(undefined));
      },
      email: (email: string) => {
        dispatch(setSignInEmailValue(email));
        dispatch(setSignInEmailError(undefined));
      }
    },
    validate: () => {
      const emailMessage = Validator.validate(values.email, emailRules);
      const passwordMessage = Validator.validate(values.password, passwordRules);

      dispatch(setSignInEmailError(emailMessage));
      dispatch(setSignInPasswordError(passwordMessage));

      return !emailMessage && !passwordMessage;
    }
  }
}
