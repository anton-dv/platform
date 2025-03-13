import { createBrowserRouter } from "react-router-dom";

import { AnyRoute } from "./routes/AnyRoute";
import { ArticleCreateRoute } from "./routes/ArticleCreateRoute";
import { ArticleEditRoute } from "./routes/ArticleEditRoute";
import { ArticleRoute } from "./routes/ArticleRoute";
import { ArticlesRoute } from "./routes/ArticlesRoute";
import { ProfileRoute } from "./routes/ProfileRoute";
import { SignInRoute } from "./routes/SignInRoute";
import { SignUpRoute } from "./routes/SignUpRoute";
import { HomeRoute } from "./routes/HomeRoute";
import { ArticlesByTagRoute } from "./routes/ArticlesByTagRoute";
import { ArticlesByAuthorRoute } from "./routes/ArticlesByAuthorRoute";
import { OopsRoute } from "./routes/OopsRoute";
import { NotFoundRoute } from "./routes/NotFoundRoute";

const routes = [
  AnyRoute,
  HomeRoute,
  ArticleCreateRoute,
  ArticleEditRoute,
  ArticleRoute,
  ArticlesRoute,
  ArticlesByTagRoute,
  ArticlesByAuthorRoute,
  ProfileRoute,
  SignInRoute,
  NotFoundRoute,
  SignUpRoute,
  OopsRoute,
];

export const AppRouter = createBrowserRouter(routes);
