import { FC } from "react";
import classes from "./form-header.module.scss";

export type FormHeader = {
  title: string;
}

export const FormHeader:FC<FormHeader> = ({title}) => {
  return <h2 className={classes["form-header"]}>{title}</h2>
}
