import { FC, useEffect, useState } from "react";

import classes from "./like.module.scss";
import { LikeIcon } from "./LikeIcon/LikeIcon";
import { LikeCount } from "./LikeCount/LikeCount";
import { useArticles } from "../../../api/controllers/useArticles";
import { useUser } from "../../../api/controllers/useUser";

export type LikeProps = {
  total: number;
  liked?: boolean;
  articleId: string;
};

export const Like: FC<LikeProps> = ({ total, liked, articleId }) => {
  const [isLiked, setIsLiked] = useState(liked);
  const articles = useArticles();
  const user = useUser();

  useEffect(() => setIsLiked(liked), [liked, articleId]);

  const onLikeClick = () => {
    if(!user.current) return;

    setIsLiked(!isLiked);
    articles.rate(articleId, !isLiked)
  };

  return (
    <button type="button" className={classes.like} onClick={onLikeClick} style={!user.current ? { cursor: "auto" } : undefined}>
      <LikeIcon current={isLiked} />
      <LikeCount current={isLiked} total={total} />
    </button>
  );
};
