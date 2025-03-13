export const passwordRules = [
  {
    rule: (value: string) => !!value.trim(),
    message: "The password cannot be empty."
  },
  {
    rule: (value: string) => value.length >= 6,
    message: "Your password needs to be at least 6 characters."
  },
  {
    rule: (value: string) => value.length < 100,
    message: "Your password can be a maximum of 100 characters."
  },
];
