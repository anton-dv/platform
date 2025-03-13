import { Navigate, type RouteObject } from "react-router";
import { Routes } from "../Routes";

export const AnyRoute: RouteObject = {
  path: Routes.AnyPath,
  element: (
      <Navigate to={Routes.NotFoundPath} replace />
  ),
};
