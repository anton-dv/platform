import { FC } from "react";
import { ArticleObject } from "../../../../api/models/types/ArticleObject";
import Markdown from "react-markdown";

import classes from "./article-content.module.scss";

export type ArticleContentProps = {
  value: ArticleObject;
};

export const ArticleContent: FC<ArticleContentProps> = ({ value }) => {
  return (
    <div className={classes["article-content"]}>
      <Markdown>{value.body}</Markdown>
    </div>
  );
};
