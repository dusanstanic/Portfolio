import { size, vairant } from "./type";

import classes from "./Button.module.css";

interface IGetClassNameProps {
  variant: vairant;
  rounded?: boolean;
  className?: string;
  size: size;
}

export const getClassName = ({
  variant,
  rounded,
  size,
}: IGetClassNameProps) => {
  return [
    classes.button,
    classes[variant],
    classes[size],
    rounded ? classes.rounded : undefined,
  ]
    .filter((value) => value !== undefined)
    .join(" ");
};
