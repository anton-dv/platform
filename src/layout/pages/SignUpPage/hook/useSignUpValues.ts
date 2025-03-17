import { useState } from "react";
import { Authorization } from "../../../../api/models/types/Authorization";
import { Validator } from "../../../../utils/validator/Validator";
import { emailRules } from "../rules/email.rules";
import { passwordRules } from "../rules/password.rules";
import { repeatRules } from "../rules/repeat.rules";
import { usernameRules } from "../rules/username.rules";

export type SignUpValues = Authorization & { repeat: string, agree: boolean };

export const useSignUpValues = () => {
  const defaultValue = { password: "", email: "", username: "", repeat: "", agree: false };

  const [values, setValues] = useState<SignUpValues>(defaultValue);
  const [errors, setErrors] = useState<SignUpValues>(defaultValue);

  return {
    reset: () => {
      setValues(defaultValue);
      setErrors(defaultValue);
    },

    values,
    errors,
    set: {
      username: (username: string) => {
        setValues(prev => ({ ...prev, username }));
        setErrors(prev => ({ ...prev, username: "" }));
      },
      email: (email: string) => {
        setValues(prev => ({ ...prev, email }));
        setErrors(prev => ({ ...prev, email: "" }));
      },
      password: (password: string) => {
        setValues(prev => ({ ...prev, password }));
        setErrors(prev => ({ ...prev, password: "" }));
      },
      repeat: (repeat: string) => {
        setValues(prev => ({ ...prev, repeat }));
        setErrors(prev => ({ ...prev, repeat: "" }));
      },
      agree: (agree: boolean) => {
        setValues(prev => ({ ...prev, agree }));
        setErrors(prev => ({ ...prev, agree: false }));
      }
    },
    validate: () => {
      const usernameMessage = Validator.validate(values.username as string, usernameRules);
      const emailMessage = Validator.validate(values.email, emailRules);
      const passwordMessage = Validator.validate(values.password, passwordRules);

      const repeatOk = values.password === values.repeat && !!values.repeat;

      setErrors({
        username: usernameMessage || "",
        email: emailMessage || "",
        password: passwordMessage || "",
        agree: !values.agree,
        repeat: repeatOk ? "" : Validator.validate(values.repeat, repeatRules) || "",
      });

      return !usernameMessage && !emailMessage && !passwordMessage && repeatOk && values.agree;
    }
  }
}
