import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<any>(undefined);

export const ThemeProvider = ({ children: children }: { children: any }) => {
  const [theme, setTheme] = useState("sdkhsfo");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
