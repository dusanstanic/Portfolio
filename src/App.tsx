import { ThemeProvider } from "./features/theme/context";

import { Landing } from "./features/landing/page/Landing/Landing";

import { ToggleButton } from "./features/theme/components/ToggleButton/ToggleButton";

export const App = () => {
  return (
    <ThemeProvider>
      <>
        <Landing />
        <ToggleButton />
      </>
    </ThemeProvider>
  );
};
