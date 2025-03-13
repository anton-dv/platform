import { FC } from "react";
import classes from "./tag.module.scss";

export type TagProps = {
  name: string;
  onClick?: (name: string) => void;
};

export const Tag: FC<TagProps> = ({ name, onClick }) => {
  return (
    <button className={classes.tag} type="button" onClick={() => onClick && onClick(name)}>
      {name}
    </button>
  );
};
