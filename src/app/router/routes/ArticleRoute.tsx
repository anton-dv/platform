import { type RouteObject } from "react-router";
import { Routes } from "../Routes";
import { ArticlePage } from "../../../layout/pages/ArticlePage/ArticlePage";

export const ArticleRoute: RouteObject = {
  path: Routes.ArticlePath + "/:id",
  element: <ArticlePage />,
};
