import { FC, useEffect, useState } from "react";
import { BasePage } from "../BasePage/BasePage";
import { ArticleObject } from "../../../api/models/types/ArticleObject";
import { useParams } from "react-router-dom";
import { useArticles } from "../../../api/controllers/useArticles";
import { Article } from "../../component/Article/Article";

export const ArticlePage: FC = () => {
  const [article, setArticle] = useState<ArticleObject | null | undefined>();
  const [loading, setLoading] = useState(true);

  const param = useParams();
  const manager = useArticles();

  useEffect(() => {
    if (param.id)
      manager.getOne(param.id).then(content => {
        setLoading(true);
        setArticle(content);
        setLoading(false);
      });
  }, [param]);

  return (
    <BasePage>
      <Article loading={loading} value={article || undefined} />
    </BasePage>
  );
};
