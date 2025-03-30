import { Navigation } from "../Navigation/Navigation";
import { Hero } from "../Hero/Hero";
import { Projects } from "../Projects/Projects";

import { HeroProps } from "./constant";

import classes from "./Landing.module.scss";

export const Landing = () => {
  return (
    <div className={classes.container}>
      <Navigation />
      <main className={classes.main}>
        <Hero {...HeroProps} />
        <Projects />
      </main>
    </div>
  );
};
