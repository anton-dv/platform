import React, { FC } from "react";

export type FormBodyProps = {
  children: React.ReactNode;
};

export const FormBody: FC<FormBodyProps> = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "21px", position: "relative" }}>
      {children}
    </div>
  );
};
