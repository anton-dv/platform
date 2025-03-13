import { FC } from "react";

import classes from "./like-count.module.scss";

export type LikeCount = {
  current?: boolean;
  total: number;
};

export const LikeCount: FC<LikeCount> = ({ current, total }) => {
  return (
    <div className={classes["like-count"]}>
      <div className={`${!current ? classes["like-count__number--liked"] : ""}`}>
        <div>{total + 1}</div>
        <div>{total}</div>
      </div>
    </div>
  );
};
