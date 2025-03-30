import classes from "./Hero.module.css";
import { Button } from "@/features/components/Button/Button";

import image from "@/assets/DusanStanic.jpg";

export const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.heading}>Software Engineer Expert</h1>
      </div>
      <p className={classes.description}>
        High-performing front-end engineer with a passion for enabling growing
        businesses to scale by providing them with high-value technical
        solutions and possibilities, collaborating alongside various parties to
        identify business needs and consult on solutions.
      </p>
      <div className={classes.footer}>
        <Button size="large">Contact Me</Button>
        <div className={classes.imageWrapper}>
          <img alt="User Image" src={image} />
        </div>
      </div>
    </div>
  );
};
