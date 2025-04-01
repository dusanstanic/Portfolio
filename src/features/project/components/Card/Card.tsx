import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router";

import { ROUTES } from "@/routes/routes";

import { Button } from "@/components/Button/Button";

import { IProject } from "@/features/project/api/type";

import { Pills } from "@/features/tool/components/Pills/Pills";

import classes from "./Card.module.scss";

export const Card = ({ id, title, description, tools }: IProject) => {
  const navigate = useNavigate();

  return (
    <div className={classes.card}>
      <h4>{title}</h4>
      <p className={classes.description}>{description}</p>
      <Pills pills={tools} displayCount={4} />
      <Button
        isAnimated={false}
        onClick={() => navigate(ROUTES.projectId.replace(":id", id.toString()))}
      >
        <div className={classes.buttonContent}>
          <span>Details</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </Button>
    </div>
  );
};
