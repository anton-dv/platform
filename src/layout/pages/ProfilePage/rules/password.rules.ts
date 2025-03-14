const maxLength = 40;
const minLength = 6;

export const passwordRules = [
  {
    rule: (value: string) => !value || value.length >= minLength,
    message: `Your password needs to be at least ${minLength} characters.`,
  },
  {
    rule: (value: string) => !value || value.length <= maxLength,
    message: `Your password can be a maximum of ${maxLength} characters.`,
  },
];
