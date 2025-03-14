const maxLength = 20;
const minLength = 2;

export const usernameRules = [
  {
    rule: (value: string) => !value || value.length <= maxLength,
    message: `The username cannot be longer than ${maxLength} characters.`
  },
  {
    rule: (value: string) => !value || value.length >= minLength,
    message: `The username cannot be less than ${minLength} characters.`
  },
]
