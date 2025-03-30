import classes from "./TextAnimated.module.css";

interface ITextAnimatedProps {
  words: Array<string>;
}

export const TextAnimated = ({ words }: ITextAnimatedProps) => {
  return (
    <>
      {words.map((word) => {
        const letters = [];
        for (let i = 0; i < word.length; i++) {
          letters.push(<span className={classes.key}>{word.charAt(i)}</span>);
        }

        return (
          <>
            <span>{letters}</span>{" "}
          </>
        );
      })}
    </>
  );
};
