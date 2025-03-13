export const usernameRules = [
  {
    rule: (value: string) => !value || value.length < 30,
    message: "The username cannot be longer than 30 characters."
  },
]
