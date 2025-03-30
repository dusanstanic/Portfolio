import { Navigation } from "../Navigation/Navigation";
import { Hero } from "../Hero/Hero";

import classes from "./Landing.module.css";

export const Landing = () => {
  return (
    <div className={classes.landing}>
      <Navigation />
      <main>
        <Hero />
      </main>
    </div>
  );
};
