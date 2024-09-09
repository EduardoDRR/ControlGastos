import { MyRoutes } from "./index"
import { createContext, useState } from "react"
import { Light, Dark } from "./index"
import { ThemeProvider } from "styled-components"

//Contraseña de DB:
// EvodNxwtBtsPoQm6

export const ThemeContext = createContext(null);

function App() {
  //Este es un comentario jajajaj xD
  
  const [theme, setTheme] = useState("ligth");
  const themeStyle = theme === "ligth" ? Light : Dark;

  return (
    <>
      <ThemeContext.Provider value={{setTheme, theme}}>
        <ThemeProvider theme={themeStyle}>
          <MyRoutes />
        </ThemeProvider>
      </ThemeContext.Provider>

    </>
  )
}

export default App

