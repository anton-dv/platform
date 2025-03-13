const URL_IMAGE = /(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png|gif|svg|webp|avif)/i;
const extensions = ["jpg","jpeg","png","gif","svg","webp","avif"];

export const avatarRules = [
  {
    rule: (value: string) => !value || value === "null" || extensions.some(e => value.endsWith("." + e)),
    message: `Supported formats: ${extensions.join(" ")}`,
  },
  {
    rule: (value: string) => !value || value === "null" || value.match(URL_IMAGE) !== null,
    message: "This is wrong url format.",
  },
];
