import { FC } from "react";
import { Header } from "../../component/Header/Header";

export type BasePageProps = {
  children: React.ReactNode;
  className?: string;
};

export const BasePage: FC<BasePageProps> = ({ children, className }) => {
  return (
    <div className={className}>
      <Header />
      {children}
    </div>
  );
};
