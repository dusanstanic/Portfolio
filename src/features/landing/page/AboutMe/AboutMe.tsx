import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSchool, faLanguage } from "@fortawesome/free-solid-svg-icons";

import classes from "./AboutMe.module.scss";
import { Button } from "@/components/Button/Button";

interface IAboutMeProps {
  educations: Array<{
    title: string;
    name: string;
  }>;
  languages: Array<{
    name: string;
    level: string;
  }>;
}

export const AboutMe = ({ educations, languages }: IAboutMeProps) => {
  return (
    <div className={classes.aboutMe} id="aboutMe">
      <h2>About Me</h2>
      <div className={classes.grid}>
        <div className={classes.educationHeading}>
          <h3>Education</h3>
          <Button>
            <FontAwesomeIcon icon={faSchool} className={classes.icon} />
          </Button>
        </div>
        {educations.map(({ name, title }) => {
          return (
            <div className={classes.education}>
              <span>
                {name} - {title}
              </span>
            </div>
          );
        })}
      </div>
      <div className={classes.grid}>
        <div className={classes.educationHeading}>
          <h3>Languages</h3>
          <Button>
            <FontAwesomeIcon icon={faLanguage} className={classes.icon} />
          </Button>
        </div>
        {languages.map(({ name, level }) => {
          return (
            <div className={classes.language}>
              <span>
                {name} - {level}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
