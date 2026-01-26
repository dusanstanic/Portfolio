import { TextAnimated } from "@/components/animation/TextAnimated/TextAnimated";

import image from "@/assets/DusanStanic.jpg";

import { SayHello, ISayHelloProps } from "./SayHello/SayHello";

import classes from "./Hero.module.scss";

interface IHeroProps extends ISayHelloProps {
  title: Array<string>;
}

export const Hero = ({ title, ...props }: IHeroProps) => {
  return (
    <section className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.heading}>
          <TextAnimated words={title}></TextAnimated>
        </h1>
      </div>
      <figure className={classes.imageWrapper}>
        <img alt="Image of user" src={image} />
        <figcaption>User profile photo</figcaption>
      </figure>
      <SayHello {...props} />
    </section>
  );
};
