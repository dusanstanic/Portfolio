import { Hero } from "../Hero/Hero";
import { Main as Projects } from "@/features/project/pages/Main/Main.tsx";
import { Main as Tools } from "@/features/tool/pages/Main/Main.tsx";
import { AboutMe } from "../AboutMe/AboutMe.tsx";
import { Idea } from "../Idea/Idea.tsx";

import classes from "./Landing.module.scss";

import {
  HeroProps,
  ProjectProps,
  AboutMeProps,
  StacksProps,
  IdeaProps,
} from "./constant.tsx";

export const Landing = () => {
  return (
    <div className={classes.container}>
      <Hero {...HeroProps} />
      <Projects {...ProjectProps} />
      <AboutMe {...AboutMeProps} />
      <Tools {...StacksProps} />
      <Idea {...IdeaProps} />
    </div>
  );
};
