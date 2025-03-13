import { FC } from "react";

import classes from "./button.module.scss";
import { ButtonVariant } from "./types/ButtonVariant";
import { ButtonSize } from "./types/ButtonSize";

export type ButtonProps = {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ children, variant, size, onClick }) => {
    return (
        <button
            className={`${classes.button} ${classes[`button--${variant || "normal"}`]} ${
                classes[`button--${size || "big"}`]
            }`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
