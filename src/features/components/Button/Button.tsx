import { ButtonHTMLAttributes, ReactElement } from "react";

import { vairant, size } from "./type";
import { getClassName } from "./helper";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement | string;
  variant?: vairant;
  rounded?: boolean;
  size?: size;
}

export const Button = ({
  children,
  variant = "default",
  rounded = true,
  size = "small",
  className,
  ...props
}: IButtonProps) => {
  return (
    <div>
      <button
        className={getClassName({ variant, className, rounded, size })}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
