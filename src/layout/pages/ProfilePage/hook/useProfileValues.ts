import { useState } from "react";
import { Authorization } from "../../../../api/models/types/Authorization";
import { Profile } from "../../../../api/models/types/Profile";
import { Validator } from "../../../../utils/validator/Validator";
import { avatarRules } from "../rules/avatar.rules";
import { emailRules } from "../rules/email.rules";
import { passwordRules } from "../rules/password.rules";
import { usernameRules } from "../rules/username.rules";

export const useProfileValues = () => {
  const defaultValue = { username: "", password: "", email: "", image: "" };

  const [values, setValues] = useState<Profile & Authorization>(defaultValue);
  const [errors, setErrors] = useState<Profile & Authorization>(defaultValue);

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
      password: (password: string) => {
        setValues(prev => ({ ...prev, password }));
        setErrors(prev => ({ ...prev, password: "" }));
      },
      email: (email: string) => {
        setValues(prev => ({ ...prev, email }));
        setErrors(prev => ({ ...prev, email: "" }));
      },
      image: (image: string) => {
        setValues(prev => ({ ...prev, image }));
        setErrors(prev => ({ ...prev, image: "" }));
      },
    },
    validate: () => {
      const usernameMessage = Validator.validate(values.username, usernameRules);
      const emailMessage = Validator.validate(values.email, emailRules);
      const passwordMessage = Validator.validate(values.password, passwordRules);
      const avatarMessage = Validator.validate(values.image as string, avatarRules);

      setErrors({
        username: usernameMessage || "",
        password: passwordMessage || "",
        email: emailMessage || "",
        image: avatarMessage || "",
      });

      return !usernameMessage && !emailMessage && !passwordMessage && !avatarMessage;
    }
  }
}
