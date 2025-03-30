import { vairant } from "./type";

import classes from "./Link.module.css";

interface IGetClassNameProps {
  variant: vairant;
  rounded?: boolean;
  className?: string;
}

export const getClassName = ({ variant, rounded }: IGetClassNameProps) => {
  return [classes.link, classes[variant], rounded ? classes.rounded : undefined]
    .filter((value) => value !== undefined)
    .join(" ");
};
