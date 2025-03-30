import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/features/components/Button/Button";
import { useThemeContext } from "@/features/theme/context";

import classes from "./ToggleButton.module.css";

export const ToggleButton = () => {
  const { toggleTheme, darkMode } = useThemeContext();

  return (
    <div className={classes.container}>
      <Button onClick={toggleTheme}>
        {darkMode ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </Button>
    </div>
  );
};
