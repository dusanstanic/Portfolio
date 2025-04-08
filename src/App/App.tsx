import { Analytics } from "@vercel/analytics/react";

import { Route, Routes } from "react-router";

import { ROUTES } from "@/routes/routes";

import { ThemeProvider } from "@/features/theme/context";

import { Navigation } from "@/features/landing/page/Navigation/Navigation";

import { Landing } from "@/features/landing/page/Landing/Landing";
import { Project } from "@/features/project/pages/Project/Project";

import { ToggleButton } from "@/features/theme/components/ToggleButton/ToggleButton";

import classes from "./App.module.scss";

export const App = () => {
  return (
    <>
      <Analytics />
      <ThemeProvider>
        <div className={classes.container}>
          <Navigation />
          <main className={classes.main}>
            <Routes>
              <Route index element={<Landing />} />
              <Route path={ROUTES.projectId} element={<Project />} />
            </Routes>
          </main>
          <ToggleButton />
        </div>
      </ThemeProvider>
    </>
  );
};
