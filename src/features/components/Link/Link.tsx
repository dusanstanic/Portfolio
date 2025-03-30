import { LinkHTMLAttributes, ReactElement } from "react";

import { motion } from "framer-motion";

import { vairant } from "./type";
import { getClassName } from "./helper";

interface ILinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  children: ReactElement | string;
  variant?: vairant;
  rounded?: boolean;
}

export const Link = ({
  children,
  variant = "default",
  rounded = true,
  className,
  ...props
}: ILinkProps) => {
  return (
    <motion.div whileTap={{ scale: 0.85 }} whileHover={{ scale: 1.05 }}>
      <a className={getClassName({ variant, className, rounded })} {...props}>
        {children}
      </a>
    </motion.div>
  );
};
