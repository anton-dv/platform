import { FC, useEffect, useState } from "react";
import classes from "./input.module.scss";

export type InputProps = {
  name: string;
  placeholder?: string;
  hideLabel?: boolean;
  value?: string;
  type?: string;
  error?: string;
  height?: number;
  width?: number;
  onChange?: (value: string) => void;
};

type InputChangeType = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;

export const Input: FC<InputProps> = ({
  name,
  placeholder,
  hideLabel,
  value,
  type,
  height,
  error,
  width,
  onChange,
}) => {
  const [currentValue, setCurrentValue] = useState(value || "");
  useEffect(() => setCurrentValue(value || ""), [value]);

  const onValueChange = (e: InputChangeType) => {
    const value = e.currentTarget.value;
    setCurrentValue(value);
    if (onChange) onChange(value);
  };

  return (
    <div className={`${classes.input} ${!!error ? classes["input--error"] : ""}`}>
      {!hideLabel && (
        <label className={classes.input__label} htmlFor={name}>
          {name}
        </label>
      )}
      {height && (
        <textarea
          className={classes.input__value}
          id={name}
          placeholder={placeholder || name}
          value={currentValue}
          onChange={onValueChange}
          style={{
            height: height ? height + "px" : undefined,
            width: width ? width + "px" : undefined,
          }}
        />
      )}
      {!height && (
        <input
          className={classes.input__value}
          type={type || "text"}
          id={name}
          placeholder={placeholder || name}
          value={currentValue}
          onChange={onValueChange}
          style={{
            width: width ? width + "px" : undefined,
          }}
        />
      )}

      {!!error && <span className={classes.input__error}>{error}</span>}
    </div>
  );
};
