export const repeatRules = [
  {
    rule: (value: string) => !!value.trim(),
    message: "This field cannot be empty."
  },
  {
    rule: () => false,
    message: "Passwords must match."
  },
]
