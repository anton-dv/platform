import { FC } from "react";

import classes from "./form-subtext.module.scss";
import { useAppNavigate } from "../../../../hooks/useAppNavigate";

export type FormSubtextProps = {
  text: string;
  link: {
    text: string;
    route: string;
  };
};

export const FormSubtext: FC<FormSubtextProps> = ({ text, link }) => {
  const navigate = useAppNavigate();
  const onLinkClick = () => navigate.toPath(link.route);

  return (
    <div className={classes["form-subtext"]}>
      {text}&nbsp;
      <a href="" onClick={onLinkClick}>
        {link.text}
      </a>
    </div>
  );
};
