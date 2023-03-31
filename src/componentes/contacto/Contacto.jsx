import "./contacto.css";
import Tel from "../../img/telefono.png";
import Em from "../../img/email.png";
import Adre from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ThemeCambio } from "../../cambio";
const Contacto = () =>{
    const formRef = useRef()
    const [done, setDone]=useState(false);
    const theme = useContext(ThemeCambio);
    const darkMode = theme.state.darkMode;
    
    const handleSubmit= (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_e1zoc6t', 'template_2yr1uz9', formRef.current, 'user_9R29atWJXxHZnL1X59M65')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }
    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contactame</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Tel} 
                            alt=""
                            className="c-icon" />
                            +52 222 813 23 45
                        </div>
                        <div className="c-info-item">
                            <img src={Em} 
                            alt=""
                            className="c-icon" />
                            galgueraalfonso@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Adre} 
                            alt=""
                            className="c-icon" />
                            San Pedro Pochutla, Oaxaca, México.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "black"}} type="text" placeholder="Name" name="user_name" />
                    <input style={{backgroundColor: darkMode && "black"}}  type="text" placeholder="Subject" name="user_subject" />
                    <input style={{backgroundColor: darkMode && "black"}}  type="text" placeholder="Email" name="user_email" />
                    <textarea style={{backgroundColor: darkMode && "black"}}  rows="5" placeholder="Message" name="message"></textarea>
                    <button>Enviar</button>
                    </form>
                    {done && "Gracias!"}
                </div>
            </div>
        </div>
    )
}

const reveal = () =>  {
    var reveals = document.querySelectorAll(".c");
  
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
export default Contacto