import { createContext, ReactNode, useState, useContext } from "react";
import { changeTheme } from "../utils/themes";

type ThemeContextData = {
  darkTheme: boolean;
  toogleTheme: () => void;
};
type ThemeContextProviderProps = {
  children: ReactNode;
};
export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toogleTheme() {
    changeTheme(!darkTheme);
    setDarkTheme(!darkTheme);
  }
  return (
    <ThemeContext.Provider value={{ darkTheme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
