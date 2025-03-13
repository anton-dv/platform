import { type RouteObject } from "react-router";
import { Routes } from "../Routes";
import { ArticleEditPage } from "../../../layout/pages/ArticleEditPage/ArticleEditPage";

export const ArticleCreateRoute: RouteObject = {
  path: Routes.ArticleCreatePath,
  element: <ArticleEditPage />,
};
