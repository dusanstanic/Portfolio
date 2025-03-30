import { ButtonHTMLAttributes, ReactElement } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement | string;
}

export const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <div>
      <button {...props}>{children}</button>
    </div>
  );
};
