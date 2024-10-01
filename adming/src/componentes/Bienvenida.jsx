import React from 'react';
import '../estilos/Bienvenida.css';
import '../estilos/botones.css';
const logo = require('../imagenes/icono.png');
const fb = require('../imagenes/fb.png');
const yt = require('../imagenes/yt.png');
function Bienvenida(props){
    return(
    <div>
        <div className="banner parallax" id="sec">
            <header>
                <a href="https://www.youtube.com/channel/UCBOZY7qmDMyctdp1EkMOG9A"><img className="logo" src={logo}/></a>
                <div id="toggle" onClick="toggle()"></div>
            </header>
            <div className="content">
            <h2>Bienvenidos,<br/>Al sitio de <span>Adming</span>
                </h2>
                    <p>Somos Adming, profesionales de TI con una oferta en soluciones Tecnologicas y comerciales
                    completas, de desarrollo y asesoria para impulsar negocios.
                    </p>
                <div className="contBtnLuz">
                    <a id="buttonUs" target="_blank" href="https://www.youtube.com/channel/UCBOZY7qmDMyctdp1EkMOG9A"><span>Ver Cursos</span></a>
                </div>
            </div>
            <ul className="sci">
                <li><a href="https://www.facebook.com/AdmIng-166964874949103"><img src={fb}/></a></li>
                <li><a href="https://www.youtube.com/channel/UCBOZY7qmDMyctdp1EkMOG9A"><img src={yt}/></a></li>
            </ul>
        </div>
        <div id="navigation">
            <ul>
                <li><a href="desarrollo.html">Desarrollo
                    </a></li>
                <li><a target="_blank" href="https://www.youtube.com/channel/UCBOZY7qmDMyctdp1EkMOG9A">Cursos en YouTube
                    </a></li>
                <li><a id="buttonUs">Nosotros
                    </a></li>
                <li><a id="buttonContact">Contacto
                    </a></li>
            </ul>
        </div>
    </div>
    );
}
export default Bienvenida;