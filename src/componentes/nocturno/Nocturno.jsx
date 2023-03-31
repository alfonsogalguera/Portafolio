import "./nocturno.css"
import Sun from "../../img/sun.png"
import Moon from "../../img/moon.png"
import { useContext } from "react"
import { ThemeCambio } from "../../cambio"
const Nocturno = () =>{
    
    const theme = useContext(ThemeCambio)
       const handleClick = () =>{
           theme.dispatch({type:"NOCHE"})
       } 

    return(
        <div className="n">
            <img src={Sun} alt="" className="n-icon" />
            <img src={Moon} alt="" className="n-icon" />
            <div className="n-button" onClick={handleClick} 
            style={{ left: theme.state.darkMode ? 0 : 25}}></div>
        </div>
    )
}
export default Nocturno