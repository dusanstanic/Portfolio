import { ReactElement } from 'react';

import { HTMLMotionProps, motion } from 'framer-motion';

import { Variant, size } from './type';
import { getClassName } from './helper';

interface Props extends HTMLMotionProps<'button'> {
  children: ReactElement | string;
  variant?: Variant;
  rounded?: boolean;
  size?: size;
  isAnimated?: boolean;
}

export const Button = ({
  children,
  variant = 'default',
  rounded = true,
  size = 'small',
  className,
  isAnimated = true,
  ...props
}: Props) => {
  return (
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
  );
};
