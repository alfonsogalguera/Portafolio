import "./intro/intro.css";
import Me from"../img/me.png";

const Intro = () =>{
    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro"> Hola, mi nombre es</h2>
                    <h1 className="i-name">Alfonso Galguera</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                        <div className="i-title-item"></div>
                            <div className="i-title-item">HTML5.</div>
                            <div className="i-title-item">CSS.</div>
                            <div className="i-title-item">JAVASCRIPT.</div>
                            <div className="i-title-item">REACT.</div>
                            <div className="i-title-item">REACT NATIVE.</div>
                            
                        </div>
                    </div>
                    <p className="i-desc">Desarrollo paginas web, me gusta opinar en el diseño,
                    crear sitios modernos y con estilo.
                    </p>
                </div>
                
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
                </div>
                
        </div>
    )
}


export default Intro