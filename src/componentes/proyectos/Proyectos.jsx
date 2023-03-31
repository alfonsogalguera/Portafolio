import Productos from "../productos/Productos";
import "./proyectos.css";
import { products } from "../../data";
const Proyectos = () => {
    return(
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title">Proyectos</h1>
                <p className="pl-desc">
                    Estos son algunos proyetos en los que he trabajado y contribuido desde la fase de diseño hasta la fase de desarrollo.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item)=>(
                <Productos key={item.id} img={item.img}
                link={item.link}/>
                ))}
            </div>
        </div>
    )
}
const reveal = () =>  {
    var reveals = document.querySelectorAll(".pl");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
export default Proyectos;