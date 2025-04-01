import { Route, Routes } from "react-router";

import { ROUTES } from "./routes/routes";

import { ThemeProvider } from "./features/theme/context";

import { Landing } from "./features/landing/page/Landing/Landing";

import { ToggleButton } from "@/features/theme/components/ToggleButton/ToggleButton";
import { Project } from "@/features/project/pages/Project/Project";

export const App = () => {
  return (
    <ThemeProvider>
      <>
        <Routes>
          <Route index element={<Landing />} />
          <Route path={ROUTES.projectId} element={<Project />} />
        </Routes>
        <ToggleButton />
      </>
    </ThemeProvider>
  );
};
