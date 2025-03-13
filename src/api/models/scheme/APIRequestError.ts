export type APIRequestError = {
  errors: {
    [key in string]: string;
  };
}
