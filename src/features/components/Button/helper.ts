import { vairant } from "./type";

import classes from "./Button.module.css";

interface IGetClassNameProps {
  variant: vairant;
  rounded?: boolean;
  className?: string;
}

export const getClassName = ({ variant, rounded }: IGetClassNameProps) => {
  return [
    classes.button,
    classes[variant],
    rounded ? classes.rounded : undefined,
  ]
    .filter((value) => value !== undefined)
    .join(" ");
};
