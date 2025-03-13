import { FC, useEffect, useState } from "react";
import { formatDate } from "./formatDate";
import avatarDefault from "./person.default.jpg";
import SkeletonAvatar from "antd/es/skeleton/Avatar";
import classes from "./person.module.scss";

export type PersonProps = {
  name: string;
  date?: Date;
  avatar?: string | null;
  onLoad?: () => void;
  onClick?: (name: string) => void;
};

export const Person: FC<PersonProps> = ({ avatar, name, date, onLoad, onClick }) => {
  const [image, setImage] = useState(avatar);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setImage(avatar);
    setLoading(true);
  }, [avatar]);

  const onSuccess = () => {
    setLoading(false);
    if (onLoad) onLoad();
  };

  const onError = () => {
    setImage(undefined);
    setLoading(false);
    if (onLoad) onLoad();
  };

  return (
    <div className={classes.person}>
      <div className={classes.person__info}>
        <span className={classes.person__name}>{name}</span>
        {!!date && <span className={classes.person__date}>{formatDate(date)}</span>}
      </div>
      <div className={classes.person__avatar}>
        {loading && (
          <div className={classes.person__loader}>
            <SkeletonAvatar style={{ width: "46px", height: "46px" }} active />
          </div>
        )}
        <button
          type="button"
          onClick={() => {
            if (onClick) onClick(name);
          }}
        >
          <img
            src={image || avatarDefault}
            alt={name + " avatar"}
            onLoad={onSuccess}
            onError={onError}
          />
        </button>
      </div>
    </div>
  );
};
