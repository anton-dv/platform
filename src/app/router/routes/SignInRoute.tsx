import { type RouteObject } from "react-router";
import { Routes } from "../Routes";
import { SignInPage } from "../../../layout/pages/SignInPage/SignInPage";

export const SignInRoute: RouteObject = {
  path: Routes.SignInPath,
  element: <SignInPage />,
};
