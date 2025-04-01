import { ReactElement } from "react";

import { HTMLMotionProps, motion } from "framer-motion";

import { vairant, size } from "./type";
import { getClassName } from "./helper";

interface IButtonProps extends HTMLMotionProps<"button"> {
  children: ReactElement | string;
  variant?: vairant;
  rounded?: boolean;
  size?: size;
  isAnimated?: boolean;
}

export const Button = ({
  children,
  variant = "default",
  rounded = true,
  size = "small",
  className,
  isAnimated = true,
  ...props
}: IButtonProps) => {
  return (
    <div>
      <motion.button
        whileTap={{ scale: 0.85 }}
        whileHover={{ scale: 1.05 }}
        className={getClassName({
          variant,
          className,
          rounded,
          size,
          isAnimated,
        })}
        {...props}
      >
        {children}
      </motion.button>
    </div>
  );
};
