import { type RouteObject } from "react-router";
import { Routes } from "../Routes";
import { ArticlesPage } from "../../../layout/pages/ArticlesPage/ArticlesPage";

export const ArticlesRoute: RouteObject = {
  path: Routes.ArticlesPath,
  element: <ArticlesPage />,
};
