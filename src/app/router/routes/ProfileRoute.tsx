import { type RouteObject } from "react-router";
import { Routes } from "../Routes";
import { ProfilePage } from "../../../layout/pages/ProfilePage/ProfilePage";

export const ProfileRoute: RouteObject = {
  path: Routes.ProfilePath,
  element: <ProfilePage />,
};
