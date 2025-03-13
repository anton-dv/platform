import { type RouteObject } from "react-router";
import { Routes } from "../Routes";
import { ArticlesPage } from "../../../layout/pages/ArticlesPage/ArticlesPage";

export const ArticlesByTagRoute: RouteObject = {
  path: Routes.ArticlesPath + "/tag/:tag",
  element: <ArticlesPage />,
};
