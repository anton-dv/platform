import { AxiosError } from "axios";

import { parseArticle } from "./parseArticle";
import { APIArticles } from "../../models/scheme/APIArticles";
import { ArticlesList } from "../../models/types/ArticlesList";
import { ArticleObject } from "../../models/types/ArticleObject";

export const parseArticlesList = (articles: APIArticles | AxiosError, page: number, limit: number): ArticlesList | null => {
  if ((articles as AxiosError).isAxiosError) return null;
  articles = articles as APIArticles;

  const total = Math.ceil(articles.articlesCount / limit);
  if (total < page) return null;

  return {
    articles: articles.articles.map(article => parseArticle(article) as ArticleObject),
    total: total,
    current: page,
  }
}
