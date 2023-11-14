import { ReactNode, useState } from "react";
import ThemeContext from "./ThemeContext";


type ThemeProviderProps = {
    children: ReactNode;
}

function ThemeProvider({children}: ThemeProviderProps) { 
    const [pageTheme, setPageTheme] = useState<'light'| 'dark'>('light');

    function toggleTheme() {
        setPageTheme(pageTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme: pageTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;