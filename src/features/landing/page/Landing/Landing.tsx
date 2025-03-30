import { Navigation } from "../Navigation/Navigation";
import { Hero } from "../Hero/Hero";
import { Projects } from "../Projects/Projects";

import { HeroProps, ProjectProps } from "./constant.tsx";

import classes from "./Landing.module.scss";

export const Landing = () => {
  return (
    <div className={classes.container}>
      <Navigation />
      <main className={classes.main}>
        <Hero {...HeroProps} />
        <Projects {...ProjectProps} />
      </main>
    </div>
  );
};
