import { useNavigate } from "react-router"
import { Routes } from "../app/router/Routes";
import { ArticlesFilter } from "../api/services/types/ArticlesFilter";
import { useArticlesParams } from "./useArticlesParams";

export type Params = { page: number, filter: ArticlesFilter };

export const useAppNavigate = () => {
  const navigate = useNavigate();
  const params = useArticlesParams();

  const getFilterQuery = () => {
    let items = Object.entries(params.filter);
    if (!items.length) return "";
    return "&" + items.map(e => `${e[0]}=${e[1]}`).join("&");
  }

  return {
    toArticle: (id: string) => navigate(`${Routes.ArticlePath}/${id}`),
    toArticleEdit: (id: string) => navigate(`${Routes.ArticleEditPath}/${id}/edit`),
    toArticleCreate: () => navigate(Routes.ArticleCreatePath),
    toNotFound: () => navigate(Routes.NotFoundPath),
    toSignUp: () => navigate(Routes.SignUpPath),
    toSignIn: () => navigate(Routes.SignInPath),
    toProfileEdit: () => navigate(Routes.ProfilePath),
    toOops: () => navigate(Routes.OopsPath),
    toArticlesByTag: (tag: string) => navigate(`${Routes.ArticlesPath}?tag=${tag}`),
    toArticlesByAuthor: (author: string) => navigate(`${Routes.ArticlesPath}?author=${author}`),
    toArticles: () => navigate(Routes.ArticlesPath),
    toPath: (path: string) => navigate(path),
    switchPage: (page: number) => {
      const filterQuery = getFilterQuery();
      navigate(`${Routes.ArticlesPath}?page=${page}${filterQuery}`);
    }
  }
}
