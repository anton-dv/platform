import { FC } from "react";

import classes from "./form-button.module.scss";
import { Button } from "antd";

export type FormButtonProps = {
  title: string;
  width?: number;
  onSubmit: () => void;
};

export const FormButton: FC<FormButtonProps> = ({ width, title, onSubmit }) => {
  return (
    <Button
      className={classes["form-button"]}
      variant="solid"
      type="primary"
      onClick={onSubmit}
      style={{ width: width ? width + "px" : undefined }}
    >
      {title}
    </Button>
  );
};
