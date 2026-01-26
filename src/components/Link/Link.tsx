import { ReactElement } from "react";

import { vairant } from "./type";
import { getClassName } from "./helper";
import { NavLink, NavLinkProps } from "react-router";

interface ILinkProps extends NavLinkProps {
  children: ReactElement | string;
  variant?: vairant;
  rounded?: boolean;
  className?: string;
}

export const Link = ({
  children,
  variant = "default",
  rounded = true,
  className,
  to,
  ...props
}: ILinkProps) => {
  const isExternal = typeof to === "string" && /^(https?:)?\/\//.test(to);
  const classes = getClassName({ variant, className, rounded });

  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={props["aria-label"]}
      >
        {children}
      </a>
    );
  }

  return (
    <NavLink
      className={classes}
      to={to}
      {...props}
      aria-label={props["aria-label"]}
    >
      {children}
    </NavLink>
  );
};
