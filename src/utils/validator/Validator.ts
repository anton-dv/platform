import { ValidatorRule } from "./types/ValidatorRule";


export class Validator {
  rules: ValidatorRule[];

  constructor(rules: ValidatorRule[]) {
    this.rules = rules;
  }

  validate (value: string) {
    return Validator.validate(value, this.rules)
  }

  static validate(value: string, rules: ValidatorRule[]) {
    const result = rules.find(rule => !rule.rule(value));
    return result ? result.message : result;
  }
}
