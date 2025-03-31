import { IProject } from "@/features/project/api/type";

import { Card } from "./Card/Card";

import classes from "./Cards.module.scss";

interface ICardsProps {
  projects: Array<IProject>;
}

export const Cards = ({ projects }: ICardsProps) => {
  return (
    <div className={classes.cards}>
      {projects.map((project) => (
        <Card {...project} />
      ))}
    </div>
  );
};
