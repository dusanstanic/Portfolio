import { ButtonHTMLAttributes, ReactElement } from "react";

import { vairant } from "./type";
import { getClassName } from "./helper";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement | string;
  variant?: vairant;
  rounded?: boolean;
}

export const Button = ({
  children,
  variant = "default",
  rounded = true,
  className,
  ...props
}: IButtonProps) => {
  return (
    <div>
      <button
        className={getClassName({ variant, className, rounded })}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
