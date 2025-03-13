import { FC } from "react";
import { Person } from "../../../ui/Person/Person";
import { Like } from "../../../ui/Like/Like";
import { ArticleObject } from "../../../../api/models/types/ArticleObject";
import { TagList } from "../../../ui/Tag/TagList";
import { useAppNavigate } from "../../../../hooks/useAppNavigate";

import classes from "./article-header.module.scss";

export type ArticleHeaderProps = {
  value: ArticleObject;
  preview?: boolean;
};

export const ArticleHeader: FC<ArticleHeaderProps> = ({ preview, value }) => {
  const navigate = useAppNavigate();

  const onTitleClick = () => navigate.toArticle(value.id);
  const onTag = (tag: string) => navigate.toArticlesByTag(tag);
  const onAuthor = (author: string) => navigate.toArticlesByAuthor(author);

  return (
    <div className={classes["article-header"]}>
      <div className={classes["article-header__start"]}>
        <div className={classes["article-header__title"]}>
          {preview && (
            <button onClick={onTitleClick}>
              <h2>{value.title}</h2>
            </button>
          )}
          {!preview && <h2>{value.title}</h2>}
          <Like
            total={value.liked ? value.likes - 1 : value.likes}
            liked={value.liked}
            articleId={value.id}
          />
        </div>
        <div className={classes["article-header__tags"]}>
          {value.tags && <TagList names={value.tags} onTag={onTag} />}
        </div>
      </div>
      <Person
        name={value.author.username}
        avatar={value.author.image}
        date={value.date}
        onClick={onAuthor}
      />
    </div>
  );
};
