import { motion } from 'framer-motion';

import classes from './TextAnimated.module.scss';

interface Props {
  words: Array<string>;
}

export const TextAnimated = ({ words }: Props) => {
  return (
    <>
      {words.map((word) => {
        const letters = [];
        for (let i = 0; i < word.length; i++) {
          letters.push(
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              className={classes.key}
              key={i}
            >
              {word.charAt(i)}
            </motion.span>
          );
        }

        return (
          <>
            <>{letters}</>{' '}
          </>
        );
      })}
    </>
  );
};
