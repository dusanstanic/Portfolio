import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import classes from "./Idea.module.scss";

export const Idea = () => {
  return (
    <div className={classes.container}>
      <div>
        <h2>
          <FontAwesomeIcon icon={faEnvelope} /> Got an idea? Share with me
        </h2>
      </div>
      <div>d</div>
    </div>
  );
};
