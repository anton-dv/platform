import { useLocation } from "react-router-dom";
import { ArticlesFilter } from "../api/services/types/ArticlesFilter";
import { useEffect, useState } from "react";

export type ArticlesParams = {
  page: number,
  filter: ArticlesFilter,
}

export const useArticlesParams = (): ArticlesParams => {
  const [params, setParams] = useState<ArticlesParams>({page: 1, filter: {}});
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page');

    const filter: ArticlesFilter = {};

    const tag = searchParams.get('tag') || undefined;
    const author = searchParams.get('author') || undefined;

    if (tag) filter['tag'] = tag;
    if (author) filter['author'] = author;

    setParams({ page: Number(page) || 1, filter });
  }, [location])

  return params;
}
