import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"; // correct: initializes to true if dark
  });

  useEffect(() => {
    document.body.className = mode ? "dark" : "light";
    localStorage.setItem("theme", mode ? "dark" : "light"); // corrected: store the actual mode
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for consuming the context
export const useTheme = () => useContext(ThemeContext);
