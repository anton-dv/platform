import { type RouteObject } from "react-router";
import { Routes } from "../Routes";
import { SignUpPage } from "../../../layout/pages/SignUpPage/SignUpPage";

export const SignUpRoute: RouteObject = {
  path: Routes.SignUpPath,
  element: <SignUpPage />,
};
