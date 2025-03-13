import { FC } from "react";
import classes from "./article-edit-tag-section.module.scss";
import { ArticleEditTagList } from "../ArticleEditTagList/ArticleEditTagList";
import { Button } from "../../../ui/Button/Button";

export type ArticleEditTagSectionProps = {
  tags: string[];
  onChange?: (tags: string[]) => void;
};

export const ArticleEditTagSection: FC<ArticleEditTagSectionProps> = ({ tags, onChange }) => {
  const onAdd = () => {
    if (onChange) onChange([...tags, ""]);
  };

  return (
    <div>
      <span className={classes["article-edit-tag-section__title"]}>Tags</span>
      <span className={classes["article-edit-tag-section__body"]}>
        <ArticleEditTagList tags={tags} onChange={onChange} />
        <Button variant="blue" size="medium" onClick={onAdd}>
          Add Tag
        </Button>
      </span>
    </div>
  );
};
