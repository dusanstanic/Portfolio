import image from "@/assets/DusanStanic.jpg";

import classes from "./AboutMe.module.scss";

interface IAboutMeProps {
  title: string;
  text: string;
}

console.log(classes);

export const AboutMe = ({ title, text }: IAboutMeProps) => {
  return (
    <div className={classes.aboutMe} id="aboutMe">
      <div className={classes.headingContainer}>
        <h3 className={classes.heading}>{title}</h3>
      </div>
      <div>
        <div className={classes.imageWrapper}>
          <img alt="User Image" src={image} className={classes["fade-img"]} />
        </div>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  );
};
