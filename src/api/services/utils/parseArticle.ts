import { AxiosError } from "axios"
import { ArticleObject } from "../../models/types/ArticleObject"
import { APIArticle } from "../../models/scheme/APIArticle"
import { APIArticleObject } from "../../models/scheme/APIArticleObject";

export const parseArticle = (apiArticle: APIArticle | APIArticleObject | AxiosError): ArticleObject | null => {
  if ((apiArticle as AxiosError).isAxiosError) return null;

  apiArticle = (apiArticle as APIArticle).article ?
    (apiArticle as APIArticle).article :
    (apiArticle as APIArticleObject);

  return {
    id: apiArticle.slug,
    title: apiArticle.title,
    description: apiArticle.description,
    body: apiArticle.body,
    tags: apiArticle.tagList,
    likes: apiArticle.favoritesCount,
    liked: apiArticle.favorited,

    date: new Date(apiArticle.updatedAt || apiArticle.createdAt),

    author: {
      username: apiArticle.author.username,
      image: apiArticle.author.image,
    }
  }
}
