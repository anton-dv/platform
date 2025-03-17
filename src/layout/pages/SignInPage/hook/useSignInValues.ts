import { useState } from "react";
import { Authorization } from "../../../../api/models/types/Authorization";
import { Validator } from "../../../../utils/validator/Validator";
import { emailRules } from "../rules/email.rules";
import { passwordRules } from "../rules/password.rules";

export const useSignInValues = () => {
  const defaultValue = { password: "", email: "" };

  const [values, setValues] = useState<Authorization>(defaultValue);
  const [errors, setErrors] = useState<Authorization>(defaultValue);

  return {
    reset: () => {
      setValues(defaultValue);
      setErrors(defaultValue);
    },
    values,
    errors,
    set: {
      password: (password: string) => {
        setValues(prev => ({ ...prev, password }));
        setErrors(prev => ({ ...prev, password: "" }));
      },
      email: (email: string) => {
        setValues(prev => ({ ...prev, email }));
        setErrors(prev => ({ ...prev, email: "" }));
      }
    },
    validate: () => {
      const emailMessage = Validator.validate(values.email, emailRules);
      const passwordMessage = Validator.validate(values.password, passwordRules);

      setErrors({ email: emailMessage || "", password: passwordMessage || "" });

      return !emailMessage && !passwordMessage;
    }
  }
}
