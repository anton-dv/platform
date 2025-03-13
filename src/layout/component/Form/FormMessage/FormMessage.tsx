import { FC } from "react";
import { Loading } from "../../../ui/Loading/Loading";

import classes from "./form-message.module.scss";

export type FormMessageProps = {
  message?: string;
  loading?: boolean;
};

export const FormMessage: FC<FormMessageProps> = ({ loading, message }) => {
  return (
    <>
      <div style={!message ? { display: "none" } : undefined} className={classes["form-message"]}>
        {message}
      </div>
      {loading && <Loading /> }
    </>
  );
};
