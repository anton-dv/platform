import { type RouteObject } from "react-router";
import { Routes } from "../Routes";
import { ArticlesPage } from "../../../layout/pages/ArticlesPage/ArticlesPage";

export const ArticlesByAuthorRoute: RouteObject = {
  path: Routes.ArticlesPath + "/author/:author",
  element: <ArticlesPage />,
};
