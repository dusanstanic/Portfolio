import { LinkHTMLAttributes, ReactElement } from "react";

import { vairant } from "./type";
import { getClassName } from "./helper";

interface ILinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  children: ReactElement | string;
  variant?: vairant;
  rounded?: boolean;
}

export const Link = ({
  children,
  variant = "default",
  rounded = true,
  className,
  ...props
}: ILinkProps) => {
  return (
    <div>
      <a className={getClassName({ variant, className, rounded })} {...props}>
        {children}
      </a>
    </div>
  );
};
