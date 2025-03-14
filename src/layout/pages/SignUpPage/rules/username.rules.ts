const maxLength = 20;
const minLength = 3;

export const usernameRules = [
  {
    rule: (value: string) => !!value.trim(),
    message: "The username cannot be empty."
  },
  {
    rule: (value: string) => value.length <= maxLength,
    message: `The username cannot be longer than ${maxLength} characters.`
  },
  {
    rule: (value: string) => value.length >= minLength,
    message: `The username cannot be less than ${minLength} characters.`
  },
];
