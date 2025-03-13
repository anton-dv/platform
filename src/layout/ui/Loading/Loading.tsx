import { FC } from "react";
import { Spin } from "antd";
import classes from "./loading.module.scss";

export type LoadingProps = {
  color?: string;
  blind?: boolean;
  size?: number;
  index?: number;
};

export const Loading: FC<LoadingProps> = ({ color, blind, index }) => {
  return (
    <div className={classes.loading} style={{zIndex: index || 10, backgroundColor: color || "white", opacity: blind ? 1 : 0.5, }}>
      <Spin />
    </div>
  );
};
