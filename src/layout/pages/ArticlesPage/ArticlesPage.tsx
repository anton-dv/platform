import { FC, useEffect, useState } from "react";
import { BasePage } from "../BasePage/BasePage";
import { useArticles } from "../../../api/controllers/useArticles";
import { Pagination } from "../../ui/Pagination/Pagination";
import { Article } from "../../component/Article/Article";
import { ArticlesList } from "../../../api/models/types/ArticlesList";
import { useAppNavigate } from "../../../hooks/useAppNavigate";
import { useArticlesParams } from "../../../hooks/useArticlesParams";

export const ArticlesPage: FC = () => {
  const [current, setCurrent] = useState<ArticlesList | null>();
  const [loading, setLoading] = useState(true);

  const articles = useArticles();
  const navigate = useAppNavigate();
  const params = useArticlesParams();

  useEffect(() => {
    setLoading(true);
    articles.getAll(params.page, params.filter).then(content => {
      setCurrent(content);
      setLoading(false);
    });
  }, [params]);

  const onSwitch = (page: number) => {
    if (loading) return;
    navigate.switchPage(page);
  };

  if (current === null) navigate.toOops();

  const loadingFirst = (
    <div>
      {new Array(5).fill(0).map((_, index) => (
        <Article preview key={index} loading />
      ))}
      <Pagination total={6} onSwitch={() => {}}/>
    </div>
  );

  return (
    <BasePage>
      {current === undefined && loadingFirst}
      {current && (
        <>
          <div style={{ position: "relative" }}>
            {current.articles.map((article, index) => (
              <Article preview key={index} value={article} loading={loading} />
            ))}
          </div>
          <Pagination total={current.total} onSwitch={onSwitch} />
        </>
      )}
    </BasePage>
  );
};
