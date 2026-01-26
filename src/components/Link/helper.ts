import { vairant } from "./type";

import classes from "./Link.module.scss";

interface IGetClassNameProps {
  variant: vairant;
  rounded?: boolean;
  className?: string;
}

export const getClassName = ({
  variant,
  rounded,
  className,
}: IGetClassNameProps) => {
  return [
    className,
    classes.link,
    classes[variant],
    rounded ? classes.rounded : undefined,
  ]
    .filter((value) => value !== undefined)
    .join(" ");
};
