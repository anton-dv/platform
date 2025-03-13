import { Profile } from "./Profile";

export type ArticleObject = {
  id: string;
  title: string;
  author: Profile;
  date: Date;
  likes: number;
  liked: boolean;
  description: string;
  tags: string[];
  body: string;
}
