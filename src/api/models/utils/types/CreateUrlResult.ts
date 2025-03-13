import { UrlParams } from "./UrlParams";

export type CreateUrlResult = {
  url: string;
  params: (parameters?: UrlParams) => string;
}
