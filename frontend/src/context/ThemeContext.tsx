import { createContext } from "react";

type ThemeContextType = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};

const ThemeContext = createContext({} as ThemeContextType);

export default ThemeContext;