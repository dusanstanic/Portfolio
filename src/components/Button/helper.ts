import { size, vairant } from './type';

import classes from './Button.module.scss';
import cssClasses from './Button.module.css';

interface Params {
  Variant: vairant;
  rounded?: boolean;
  className?: string;
  isAnimated?: boolean;
  size: size;
}

export const getClassName = ({
  Variant,
  rounded,
  size,
  isAnimated,
}: Params) => {
  return [
    isAnimated ? cssClasses.button : undefined,
    classes.button,
    classes[Variant],
    classes[size],
    rounded ? classes.rounded : undefined,
  ]
    .filter((value) => value !== undefined)
    .join(' ');
};
