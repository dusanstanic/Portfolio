import { IProject } from "@/features/project/api/type";

import { Cards } from "@/features/project/components/Cards/Cards";

import classes from "./Main.module.scss";

interface IProjectProps {
  projects: Array<IProject>;
}

export const Main = (props: IProjectProps) => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className={classes.cards}>
        <Cards {...props} />
      </div>
    </div>
  );
};
