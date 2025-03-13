import { type RouteObject } from "react-router";
import { Routes } from "../Routes";
import { ArticleEditPage } from "../../../layout/pages/ArticleEditPage/ArticleEditPage";

export const ArticleEditRoute: RouteObject = {
  path: Routes.ArticleEditPath + "/:id/edit",
  element: <ArticleEditPage />,
};
