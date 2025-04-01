import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { SayHello, ISayHelloProps } from "./SayHello/SayHello";

import classes from "./Idea.module.scss";

interface IIdeaProps extends ISayHelloProps {
  title?: string;
  subTitle?: string;
}

export const Idea = ({
  title = "Got an idea?",
  subTitle = "Share with me",
  ...props
}: IIdeaProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.headingContainer}>
        <h2>
          <div className={classes.iconContainer}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          {title}
        </h2>
        <h2>{subTitle}</h2>
      </div>
      <SayHello {...props} />
    </div>
  );
};
