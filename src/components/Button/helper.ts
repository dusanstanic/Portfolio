import { size, vairant } from "./type";

import classes from "./Button.module.scss";
import cssClasses from "./Button.module.css";

interface IGetClassNameProps {
  variant: vairant;
  rounded?: boolean;
  className?: string;
  isAnimated?: boolean;
  size: size;
}

export const getClassName = ({
  variant,
  rounded,
  size,
  isAnimated,
}: IGetClassNameProps) => {
  return [
    isAnimated ? cssClasses.button : undefined,
    classes.button,
    classes[variant],
    classes[size],
    rounded ? classes.rounded : undefined,
  ]
    .filter((value) => value !== undefined)
    .join(" ");
};
