import { type RouteObject } from "react-router";
import { Routes } from "../Routes";
import { NotFoundPage } from "../../../layout/pages/MessagePage/NotFoundPage";

export const NotFoundRoute: RouteObject = {
  path: Routes.NotFoundPath,
  element: <NotFoundPage />,
};
