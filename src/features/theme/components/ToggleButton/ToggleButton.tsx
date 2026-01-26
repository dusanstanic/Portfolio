import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/Button/Button";

import { useThemeContext } from "@/features/theme/context";

import classes from "./ToggleButton.module.scss";

export const ToggleButton = () => {
  const { toggleTheme, darkMode } = useThemeContext();

  return (
    <div className={classes.container}>
      <Button
        aria-pressed={darkMode}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        onClick={toggleTheme}
      >
        {darkMode ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </Button>
    </div>
  );
};
