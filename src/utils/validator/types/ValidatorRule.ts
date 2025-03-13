export type ValidatorRule = {
  rule: (value: string) => boolean;
  message: string;
}
