import { ThemeProvider } from "./features/theme/context";

import { Landing } from "./features/landing/page/Landing/Landing";

export const App = () => {
  return (
    <ThemeProvider>
      <Landing />
    </ThemeProvider>
  );
};
