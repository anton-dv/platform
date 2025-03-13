import { type RouteObject } from "react-router";
import { Routes } from "../Routes";
import { OopsPage } from "../../../layout/pages/MessagePage/OopsPage";

export const OopsRoute: RouteObject = {
  path: Routes.OopsPath,
  element: <OopsPage />,
};
