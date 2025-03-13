import { UrlParams } from "./types/UrlParams";

export const params = (url: string, values?: UrlParams): string => {
  if (!url || !values) return url || "";

  return url + "?" + Object.entries(values).map(e => e[0] + "=" + e[1]).join("&");
}
