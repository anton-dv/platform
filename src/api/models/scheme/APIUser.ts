export type APIUser = {
  user: {
    username: string;
    email: string;
    token: string;
    bio?: string;
    image?: string | null;
  }
}
