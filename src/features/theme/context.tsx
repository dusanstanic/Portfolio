import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";

interface IThemeContext {
  toggleTheme: () => void;
  darkMode: boolean;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

interface IThemeProviderProps {
  children: ReactElement;
}

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((mode) => !mode);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
