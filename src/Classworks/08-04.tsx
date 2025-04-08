import { createContext, useContext, useState } from "react";
import './08-04.css';

const ThemeContext = createContext("");

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Main />
    </ThemeContext.Provider>
  );
}

function Main() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <p>Now: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change
      </button>
    </div>
  );
}
