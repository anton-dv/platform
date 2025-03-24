import { useLocation } from "react-router-dom";
import { ArticlesFilter } from "../api/services/types/ArticlesFilter";
import { useMemo } from "react";

export type ArticlesParams = {
  page: number,
  filter: ArticlesFilter,
}

export const useArticlesParams = (): ArticlesParams => {
  const location = useLocation();

  return useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page');

    const filter: ArticlesFilter = {};

    const tag = searchParams.get('tag') || undefined;
    const author = searchParams.get('author') || undefined;

    if (tag) filter['tag'] = tag;
    if (author) filter['author'] = author;

    return { page: Number(page) || 1, filter }
  }, [location]);
}
