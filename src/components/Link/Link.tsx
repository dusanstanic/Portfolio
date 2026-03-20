import { ReactElement } from 'react';

import { NavLink, NavLinkProps } from 'react-router';

import { Variant } from './type';
import { getClassName } from './helper';

interface Props extends NavLinkProps {
  children: ReactElement | string;
  Variant?: Variant;
  rounded?: boolean;
  className?: string;
}

export const Link = ({
  children,
  Variant = 'default',
  rounded = true,
  className,
  to,
  ...props
}: Props) => {
  const isExternal = typeof to === 'string' && /^(https?:)?\/\//.test(to);
  const classes = getClassName({ Variant, className, rounded });

  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={props['aria-label']}
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
      aria-label={props['aria-label']}
    >
      {children}
    </NavLink>
  );
};
