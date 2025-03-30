import { Navigation } from "../Navigation/Navigation";
import { Hero } from "../Hero/Hero";

import classes from "./Landing.module.css";

export const Landing = () => {
  return (
    <div className={classes.container}>
      <Navigation />
      <main className={classes.main}>
        <Hero />
      </main>
    </div>
  );
};
