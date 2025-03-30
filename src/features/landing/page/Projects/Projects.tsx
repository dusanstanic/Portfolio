import { IProject } from "@/features/landing/page/Landing/type";

import { Cards } from "./Cards/Cards";

import classes from "./Projects.module.scss";

interface IProjectProps {
  projects: Array<IProject>;
}

export const Projects = (props: IProjectProps) => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className={classes.cards}>
        <Cards {...props} />
      </div>
    </div>
  );
};
