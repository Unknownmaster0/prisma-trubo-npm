"use client";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  // const themeContext = useContext(ThemeContext);

  // if (!themeContext) {
  //   throw new Error("ThemeToggleButton must be used within a ThemeProvider");
  // }

  return (
    <div>
      <Buttoncomp />
    </div>
  );
}

function Buttoncomp() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeToggleButton must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;
  return (
    <>
      <button
        onClick={toggleTheme}
        style={{ padding: "10px", margin: "20px", color: "pink" }}
      >
        Switch to {theme ? "Light" : "Dark"} Mode
      </button>
    </>
  );
}
