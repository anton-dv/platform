import { ArticleObject } from "./ArticleObject"

export type ArticlesList = {
  articles: ArticleObject[];
  total: number;
  current: number;
}
