import { Button } from "@/features/components/Button/Button";
import { useThemeContext } from "@/features/theme/context";

import classes from "./ToggleButton.module.css";

export const ToggleButton = () => {
  const { toggleTheme, darkMode } = useThemeContext();

  return (
    <div className={classes.container}>
      <Button onClick={toggleTheme}>{darkMode ? "Dark" : "Light"}</Button>
    </div>
  );
};
