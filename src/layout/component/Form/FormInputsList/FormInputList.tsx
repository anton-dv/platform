import { FC } from "react";

import classes from "./form-input-list.module.scss";

export type FormInputListProps = {
  children: React.ReactNode;
};

export const FormInputList: FC<FormInputListProps> = ({ children }) => {
  return (
    <div className={classes["form-input-list"]}>{children}</div>
  );
};
