export const usernameRules = [
  {
    rule: (value: string) => !!value.trim(),
    message: "The username cannot be empty."
  },
  {
    rule: (value: string) => value.length < 30,
    message: "The username cannot be longer than 30 characters."
  },
]
