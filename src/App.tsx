import { ThemeProvider } from "./features/theme/context";

import { Landing } from "./features/landing/page/Landing/Landing";

import { ToggleButton } from "./features/theme/components/ToggleButton/ToggleButton";
import { Route, Routes } from "react-router";

export const App = () => {
  return (
    <ThemeProvider>
      <>
        <Routes>
          <Route index element={<Landing />} />
        </Routes>
        <ToggleButton />
      </>
    </ThemeProvider>
  );
};
