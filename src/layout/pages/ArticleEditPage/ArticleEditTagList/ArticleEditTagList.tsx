import { FC } from "react";
import { ArticleEditTag } from "../ArticleEditTag/ArticleEditTag";
import classes from "./article-edit-tag-list.module.scss";

export type ArticleEditTagListProps = {
  tags: string[];
  onChange?: (tags: string[]) => void;
};

export const ArticleEditTagList: FC<ArticleEditTagListProps> = ({ tags, onChange }) => {
  const onTagDelete = (index: number) => {
    const changed = tags.filter((_, cur) => cur !== index);
    if(onChange) onChange(changed);
  };

  const onTagChange = (index: number, value: string) => {
    const changed = tags.map((prev, cur) => cur === index ? value : prev);
    if(onChange) onChange(changed);
  };

  if (tags.length === 0) return null;
  return (
    <div className={classes["article-edit-tag-list"]}>
      {tags.map((tag, index) => (
        <ArticleEditTag
          key={index}
          index={index}
          value={tag}
          onDelete={onTagDelete}
          onChange={onTagChange}
        />
      ))}
    </div>
  );
};
