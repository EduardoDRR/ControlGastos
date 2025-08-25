import "./App.css";
import { MyRoutes } from "./index";
import { createContext, useState } from "react"
import { Dark, Light } from "./index";
import { ThemeProvider } from "styled-components"; "styled-components";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;


  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themeStyle}>
          <MyRoutes />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default App;

