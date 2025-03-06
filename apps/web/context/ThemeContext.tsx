"use client";
import { createContext, ReactNode, useEffect, useState } from "react";

interface themeContextType {
  theme: boolean;
  toggleTheme: () => void;
}

// false -> light
// true -> dark

export const ThemeContext = createContext<themeContextType | null>(null);

const ThemeContextComponent = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<boolean>(true);
  useEffect(() => {
    // Apply the theme to the document body
    document.body.style.backgroundColor = theme ? "#333" : "#fff";
    document.body.style.color = theme ? "#fff" : "#000";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  const ProviderValue = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={ProviderValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextComponent;
