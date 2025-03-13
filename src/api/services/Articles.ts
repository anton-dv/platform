
import { Request } from "../models/Request";
import { APIArticle } from "../models/scheme/APIArticle";
import { APIArticles } from "../models/scheme/APIArticles";
import { ArticleEditObject } from "../models/types/ArticleEditObject";
import { ArticleObject } from "../models/types/ArticleObject";
import { ArticlesList } from "../models/types/ArticlesList";
import { ArticlesFilter } from "./types/ArticlesFilter";
import { parseArticle } from "./utils/parseArticle";
import { parseArticlesList } from "./utils/parseArticlesList";

export class Articles {
  static limit = 5;

  static async getAll(page: number = 1, filter: ArticlesFilter, token?: string): Promise<ArticlesList | null> {
    const params = {
      ...filter,
      limit: this.limit,
      offset: (page - 1) * this.limit,
    };

    const articles = await Request.get<APIArticles>("articles", params, token);

    return parseArticlesList(articles, page, this.limit);
  }

  static async getOne(id: string, token?: string): Promise<ArticleObject | null> {
    const article = await Request.get<APIArticle>(["articles", id], undefined, token);
    return parseArticle(article);
  }

  static async like(id: string, token: string): Promise<void> {
    await Request.post<APIArticle>(["articles", id, "favorite"], null, token);
  }

  static async unlike(id: string, token: string): Promise<void> {
    await Request.delete<APIArticle>(["articles", id, "favorite"], token)
  }

  static async create(data: ArticleEditObject, token: string): Promise<boolean> {
    const response = await Request.post<APIArticle>("articles", { article: data }, token);
    return parseArticle(response) !== null;
  }

  static async edit(id: string, data: ArticleEditObject, token: string): Promise<boolean> {
    const response = await Request.put<APIArticle>(["articles", id], { article: data }, token);
    return parseArticle(response) !== null;
  }

  static async delete (id: string, token: string): Promise<boolean>  {
    const response = await Request.delete<string>(["articles", id], token);
    return response === "";
  }
}
