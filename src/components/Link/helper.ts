import { Variant } from './type';

import classes from './Link.module.scss';

interface Params {
  variant: Variant;
  rounded?: boolean;
  className?: string;
}

export const getClassName = ({ variant, rounded, className }: Params) => {
  return [
    className,
    classes.link,
    classes[variant],
    rounded ? classes.rounded : undefined,
  ]
    .filter((value) => value !== undefined)
    .join(' ');
};
