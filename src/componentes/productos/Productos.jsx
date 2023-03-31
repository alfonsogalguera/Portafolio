import "./productos.css";
{/*import { products } from "../../data";*/}
const Productos = ({img, link}) => {
    return(
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
           {/* {products.map((item)=>(
                <Productos key={item.id} img={item.img}
                link={item.link}/>
                ))}*/}
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img"/>
            </a>
        </div>
    
        
    )
}

const reveal = () =>  {
    var reveals = document.querySelectorAll(".p");
  
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
export default Productos;