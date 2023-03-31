import Me from "../../img/about.jpg";
import "./about.css";
const About = () =>{
    return(
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Me} alt="" 
                    className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">Sobre mi</h1>
                <p className="a-sub">
                    Soy Alfonso Galguera Caballero, egresado de la Benemerita Universidad Autonoma de Puebla, 
                    Tengo 23 años y soy un apasionado por el desarrollo web.
                </p>
                <p className="a-desc">
                Me gusta el desarrollo web, enfocado en frontend, utilizar las mejores practicas y 
                tecnologías para desarrollar y terminar el proyecto de buena forma, me gusta trabajar en equipo, 
                ser sociable, tener paciencia, 
                estar motivado y solucionar problemas, me agrada utilizar HTML5, CSS, Javascript, react y react native.
                </p>
            </div>
        </div>
    )
}

const reveal = () =>  {
    var reveals = document.querySelectorAll(".a");
  
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
export default About;