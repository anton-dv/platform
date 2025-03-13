
import { ArticleEditObject } from "../models/types/ArticleEditObject";
import { ArticleObject } from "../models/types/ArticleObject";
import { ArticlesList } from "../models/types/ArticlesList";
import { Articles } from "../services/Articles"
import { ArticlesFilter } from "../services/types/ArticlesFilter"
import { useUser } from "./useUser";

export const useArticles = () => {
  const user = useUser();

  return {
    getAll: async (page: number, filter: ArticlesFilter): Promise<ArticlesList | null> => {
      return await Articles.getAll(page, filter, user.current?.token);
    },

    getOne: async (id: string): Promise<ArticleObject | null> => {
      return await Articles.getOne(id, user.current?.token);
    },

    rate: async (id: string, value: boolean) => {
      if (!user.current) return;

      if (value) await Articles.like(id, user.current.token);
      else await Articles.unlike(id, user.current.token);
    },

    create: async (data: ArticleEditObject): Promise<boolean> => {
      if (!user.current) return false;
      return Articles.create(data, user.current.token)
    },

    edit: async (id: string, data: ArticleEditObject): Promise<boolean> => {
      if (!user.current) return false;
      return Articles.edit(id, data, user.current.token);
    },

    delete: async (id: string): Promise<boolean> => {
      if (!user.current) return false;
      return Articles.delete(id, user.current.token);
    }
  }
}
