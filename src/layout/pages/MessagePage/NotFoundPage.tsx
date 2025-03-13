import { FC } from "react";
import { BasePage } from "../BasePage/BasePage";

import classes from "./message-page.module.scss";

export const NotFoundPage: FC = () => {
  const message = "404.\n Not found page.";
  return (
    <BasePage>
      <div className={classes["message-page"]}>{message}</div>
    </BasePage>
  )
};

