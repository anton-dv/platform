import React, { FC } from "react";

export type FormNavigationProps = {
  children: React.ReactNode;
};

export const FormNavigation: FC<FormNavigationProps> = ({ children }) => {
  return <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>{children}</div>;
};
