import { Navigation } from "../Navigation/Navigation";
import { Hero } from "../Hero/Hero";
import { Main as Projects } from "@/features/project/pages/Main/Main.tsx";
import { Main as Tools } from "@/features/tool/pages/Main/Main.tsx";
import { AboutMe } from "../AboutMe/AboutMe.tsx";
import { Idea } from "../Idea/Idea.tsx";

import {
  HeroProps,
  ProjectProps,
  AboutMeProps,
  StacksProps,
} from "./constant.tsx";

import classes from "./Landing.module.scss";

export const Landing = () => {
  return (
    <div className={classes.container}>
      <Navigation />
      <main className={classes.main}>
        <Hero {...HeroProps} />
        <Projects {...ProjectProps} />
        <AboutMe {...AboutMeProps} />
        <Tools {...StacksProps} />
        <Idea />
      </main>
    </div>
  );
};
