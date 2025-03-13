import { Navigate, type RouteObject } from "react-router";
import { Routes } from "../Routes";

export const HomeRoute: RouteObject = {
  path: Routes.HomePath,
  element: (
      <Navigate to={Routes.ArticlesPath} replace />
  ),
};
