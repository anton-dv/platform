export const options = (token: string | undefined, params?: object) => {
  return { headers: token ? { "Authorization": `Bearer ${token}` } : undefined, ...params };
}
