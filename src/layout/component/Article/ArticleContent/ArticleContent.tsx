import { FC } from "react";
import { ArticleObject } from "../../../../api/models/types/ArticleObject";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import classes from "./article-content.module.scss";

export type ArticleContentProps = {
  value: ArticleObject;
};

export const ArticleContent: FC<ArticleContentProps> = ({ value }) => {
  return (
    <div className={classes["article-content"]}>
      <Markdown remarkPlugins={[remarkGfm]}>{value.body}</Markdown>
    </div>
  );
};
