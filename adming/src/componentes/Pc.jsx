import { handleMouseEnter, handleMouseLeave } from "react";
import '../estilos/pc.css';
const Logo = require('../imagenes/icono.png');
const video = require('../imagenes/short.mp4');
function Pc(){
    const handleMouseEnter = (e) => {
        e.target.play(); // Reproduce el video
    };
    const handleMouseLeave = (e) => {
        e.target.pause(); // Pausa el video
        e.target.currentTime = 0; // Reinicia el video   
    };
    return(
        <div className="centerPc">
            <div className="monitor">
            <video
                    src={video}
                    muted
                    loop
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                ></video>
                <img src={Logo} alt="@"/>
                <div className="overlay"></div>
            </div>
        </div>
    );
}
export default Pc;