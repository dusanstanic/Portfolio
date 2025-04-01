import { TextAnimated } from "@/components/animation/TextAnimated/TextAnimated";

import image from "@/assets/DusanStanic.jpg";

import { ISayHiProps, SayHi } from "./SayHi/SayHi";

import classes from "./Hero.module.scss";

interface IHeroProps extends ISayHiProps {
  title: Array<string>;
}

export const Hero = ({ title, ...props }: IHeroProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.heading}>
          <TextAnimated words={title}></TextAnimated>
        </h1>
      </div>
      <div className={classes.imageWrapper}>
        <img alt="User Image" src={image} />
      </div>
      <SayHi {...props} />
    </div>
  );
};
