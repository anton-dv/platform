import { FC } from "react";
import { BasePage } from "../BasePage/BasePage";

import classes from "./message-page.module.scss";

export const OopsPage: FC = () => {
  const message = "ERROR.\n Something went wrong.😯";
  return (
    <BasePage>
      <div className={classes["message-page"]}>{message}</div>
    </BasePage>
  );
};
