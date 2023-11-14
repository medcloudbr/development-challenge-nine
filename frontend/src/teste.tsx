import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function Teste() {
  const themeContext = useContext(ThemeContext);

  return (
    <div>
      <h1>O tema atual é { themeContext.theme}</h1>
      <button onClick={themeContext.toggleTheme}>Mudar tema</button>
    </div>
  )
}

export default Teste;