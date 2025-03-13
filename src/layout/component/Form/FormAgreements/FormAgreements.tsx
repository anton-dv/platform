import { FC, useEffect, useState } from "react";
import { Checkbox, CheckboxChangeEvent } from "antd";

import classes from "./form-agreements.module.scss";

export type FormAgreementsProps = {
  error?: boolean;
  value?: boolean;
  onChange?: (value: boolean) => void;
};

export const FormAgreements: FC<FormAgreementsProps> = ({ onChange, error,value }) => {
  const [currentValue, setCurrentValue] = useState(value || false);
  useEffect(() => setCurrentValue(value || false), [value]);

  const onCheck = (e: CheckboxChangeEvent) => {
    setCurrentValue(e.target.checked);
    if (onChange) onChange(e.target.checked);
  };

  return (
    <div
      className={`${classes["form-agreements"]} ${error ? classes["form-agreements--error"] : ""}`}
    >
      <Checkbox onChange={onCheck} checked={currentValue}>
        {"I agree to the processing of my personal information"}
      </Checkbox>
    </div>
  );
};
