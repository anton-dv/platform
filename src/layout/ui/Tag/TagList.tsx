import { FC } from "react";
import { Tag } from "./Tag";

import classes from "./tag-list.module.scss";

export type TagListProps = {
  names: string[];
  onTag?: (name: string) => void;
};

export const TagList: FC<TagListProps> = ({ names, onTag }) => {
  return (
    <div className={classes["tag-list"]}>
      {names.map((name, index) => {
        if (name) return <Tag name={name} key={index} onClick={onTag} />;
      })}
    </div>
  );
};
