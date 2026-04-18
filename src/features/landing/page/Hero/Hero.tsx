import { TextAnimated } from '@/components/animation/TextAnimated/TextAnimated';

import image from '@/assets/DusanStanic.jpg';

import { SayHello } from './SayHello/SayHello';

import classes from './Hero.module.scss';

interface Props {
  title: Array<string>;
  text: string;
  email: string;
  socialLinks: { linkedInUrl: string };
}

export const Hero = ({ title, ...props }: Props) => {
  return (
    <section className={classes.container} role="region">
      <div className={classes.title}>
        <h1 className={classes.heading}>
          <TextAnimated words={title}></TextAnimated>
        </h1>
      </div>
      <figure className={classes.imageWrapper}>
        <img alt="Image of user" src={image} />
        <figcaption>User profile photo</figcaption>
      </figure>
      <SayHello
        email={props.email}
        socialLinks={props.socialLinks}
        text={props.text}
      />
    </section>
  );
};
