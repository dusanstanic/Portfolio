import { Navigation } from "../Navigation/Navigation";
import { Hero } from "../Hero/Hero";

import classes from "./Landing.module.css";

import { HeroProps } from "./constant";

export const Landing = () => {
  return (
    <div className={classes.container}>
      <Navigation />
      <main className={classes.main}>
        <Hero {...HeroProps} />
      </main>
    </div>
  );
};
