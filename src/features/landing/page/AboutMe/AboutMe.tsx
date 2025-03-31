import image from "@/assets/DusanStanic.jpg";

import classes from "./AboutMe.module.scss";

interface IAboutMeProps {
  title: string;
  text: string;
}

export const AboutMe = ({ title, text }: IAboutMeProps) => {
  return (
    <div className={classes.aboutMe} id="aboutMe">
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <div className={classes.imageWrapper}>
          <img alt="User Image" src={image} />
        </div>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  );
};
