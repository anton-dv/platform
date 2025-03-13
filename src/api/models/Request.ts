import axios, { AxiosError } from "axios";
import { UrlPath } from "./utils/types/UrlPath";
import { UrlParams } from "./utils/types/UrlParams";
import { createUrl } from "./utils/createUrl";
import { options } from "./utils/options";

export class Request {
  // static timeout = { timeout: 5000 };

  static async get<T>(path: UrlPath, params?: UrlParams, token?: string): Promise<T | AxiosError> {
    return await axios.get(createUrl(path).params(params), options(token))
      .then(res => res.data as T)
      .catch(e => e as AxiosError);
  }

  static async post<T>(path: UrlPath, body: object | null, token?: string): Promise<T | AxiosError> {

    return await axios.post(createUrl(path).url, body, options(token))
      .then(res => res.data as T)
      .catch(e => e as AxiosError);
  }

  static async put<T>(path: UrlPath, body: object | null, token?: string): Promise<T | AxiosError> {
    return await axios.put(createUrl(path).url, body, options(token))
      .then(res => res.data as T)
      .catch(e => e as AxiosError);
  }

  static async delete<T>(path: UrlPath, token?: string): Promise<T | AxiosError> {
    return await axios.delete(createUrl(path).url, options(token))
      .then(res => res.data as T)
      .catch(e => e as AxiosError);
  }
}
