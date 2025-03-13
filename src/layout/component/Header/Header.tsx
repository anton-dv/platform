import { FC } from "react";
import { Button } from "../../ui/Button/Button";
import { Person } from "../../ui/Person/Person";
import { useAppNavigate } from "../../../hooks/useAppNavigate";
import { useUser } from "../../../api/controllers/useUser";

import classes from "./header.module.scss";

export const Header: FC = () => {
  const navigate = useAppNavigate();
  const user = useUser();

  const onLogoClick = () => navigate.toArticles();
  const onLogInClick = () => navigate.toSignIn();
  const onLogUpClick = () => navigate.toSignUp();
  const onProfileClick = () => navigate.toProfileEdit();
  const onCreateClick = () => navigate.toArticleCreate();

  const onLogOutClick = () => {
    user.logout();
    navigate.toArticles();
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.header__title}>
        <button onClick={onLogoClick}>RealWorld Blog</button>
      </h1>
      {!user.current && (
        <div className={classes.header__info}>
          <Button variant="empty" onClick={onLogInClick}>
            Sign In
          </Button>
          <Button variant="green" onClick={onLogUpClick}>
            Sign Up
          </Button>
        </div>
      )}
      {user.current && (
        <div>
          <div className={classes.header__info}>
            <Button variant="green" size="small" onClick={onCreateClick}>
              Create article
            </Button>
            <Person name={user.current.username} onClick={onProfileClick} avatar={user.current.image} />
            <Button onClick={onLogOutClick}>Log Out</Button>
          </div>
        </div>
      )}
    </header>
  );
};
