import { FC } from "react";
import classes from "./backdrop.module.scss";
import { BackdropType } from "./BackdropType";

export type Backdrop = {
  type: BackdropType;
  children: React.ReactNode;
};

export const Backdrop: FC<Backdrop> = ({ type, children }) => {
  return <div className={`${classes.backdrop} ${classes[`backdrop--${type}`]}`}>{children}</div>;
};
