import { useThemeContext } from "@/features/theme/context";

import classes from "./Navigation.module.css";

export const Navigation = () => {
  const { toggleTheme, darkMode } = useThemeContext();

  return (
    <div className={classes.container}>
      <nav className={classes.navigation}>
        <button onClick={toggleTheme}>{`Toggle Theme ${darkMode}`}</button>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </nav>
    </div>
  );
};
