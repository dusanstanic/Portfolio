import { Variant } from './type';

import classes from './Link.module.scss';

interface Params {
  Variant: Variant;
  rounded?: boolean;
  className?: string;
}

export const getClassName = ({ Variant, rounded, className }: Params) => {
  return [
    className,
    classes.link,
    classes[Variant],
    rounded ? classes.rounded : undefined,
  ]
    .filter((value) => value !== undefined)
    .join(' ');
};
