import { Button } from "@/components/Button/Button";

import { IProject } from "@/features/project/api/type";

import { Pills } from "@/features/tool/components/Pills/Pills";

import classes from "./Card.module.scss";

export const Card = ({ title, description, tools }: IProject) => {
  return (
    <div className={classes.card}>
      <h4>{title}</h4>
      <p className={classes.description}>{description}</p>
      <Pills pills={tools} />
      <Button size="large" isAnimated={false}>
        Details
      </Button>
    </div>
  );
};
