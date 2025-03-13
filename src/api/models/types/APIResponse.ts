import { RequestError } from "./RequestError";

export type APIResponse<T> = {
  isError?: boolean;
  data: T | null | undefined;
  error: RequestError;
}
