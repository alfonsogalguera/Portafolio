import About from "./componentes/about/About";
import Intro from "./componentes/Intro";
import Contacto from "./componentes/contacto/Contacto";
import Proyectos from "./componentes/proyectos/Proyectos";
import Nocturno from "./componentes/nocturno/Nocturno";
import { useContext } from "react";
import { ThemeCambio } from "./cambio";

const App = () =>{
const theme = useContext(ThemeCambio);
const darkMode = theme.state.darkMode;
    return( <div
    style={{
        backgroundColor: darkMode ? "black" : "white", color: darkMode && "white",
    }}>
        <Nocturno/>
        <Intro />
        <About />
        <Proyectos />
        <Contacto/>
    </div>
    );
};
  
  export default App;