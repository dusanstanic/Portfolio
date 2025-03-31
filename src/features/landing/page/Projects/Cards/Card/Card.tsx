import { IProject } from "@/features/project/api/type";

import { Tools } from "./Tools/Tools";

import classes from "./Card.module.scss";
import { Button } from "@/features/components/Button/Button";

export const Card = ({ title, description, tools }: IProject) => {
  return (
    <div className={classes.card}>
      <h4>{title}</h4>
      <p className={classes.description}>{description}</p>
      <Tools tools={tools} />
      <Button>Details</Button>
    </div>
  );
};
