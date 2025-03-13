import { params } from "./params";
import { CreateUrlResult } from "./types/CreateUrlResult";
import { UrlParams } from "./types/UrlParams";
import { UrlPath } from "./types/UrlPath";

export const createUrl = (path: UrlPath): CreateUrlResult => {
  const urlArray = typeof path === "object" ? path : [path];

  let url = import.meta.env.API_BASE_URL;

  url = urlArray.reduce((prev: string, current) => {
    prev = prev.endsWith("/") ? prev.slice(0, -1) : prev;

    current = current.toString();
    current = current.startsWith("/") ? current.slice(1) : current;

    return prev + "/" + current;
  }, url);

  return {
    url,
    params: (values?: UrlParams) => params(url, values),
  }
}
