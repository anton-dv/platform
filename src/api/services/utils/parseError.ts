import { AxiosError } from "axios";
import { RequestError } from "../../models/types/RequestError";
import { APIRequestError } from "../../models/scheme/APIRequestError";

export const parseError = (error: AxiosError): RequestError => {
  if(!error.isAxiosError || !error.response?.data) return {};
  const data = error.response.data as APIRequestError;

  return {
    email:    data.errors["email"] || data.errors["email or password"] || undefined,
    password: data.errors["password"] || data.errors["email or password"] || undefined,
    username: data.errors["username"] || undefined,
  }
}
