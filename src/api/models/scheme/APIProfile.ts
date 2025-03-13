export type APIProfile = {
  profile: {
    username: string;
    image: string;
    following: boolean;
    bio?: string;
  }
}
