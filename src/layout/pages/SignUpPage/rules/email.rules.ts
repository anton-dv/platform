const RFC_5322 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const emailRules = [
  {
    rule: (value: string) => !!value.trim(),
    message: "The email cannot be empty."
  },
  {
    rule: (value: string) => value.match(RFC_5322) !== null,
    message: "This is wrong email format."
  },
];
