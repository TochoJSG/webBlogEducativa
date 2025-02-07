import React from 'react';
import { useRef } from 'react';
import {Link} from 'react-router-dom';
import '../estilos/Bienvenida.css';
import '../estilos/botones.css';
const logo = require('../imagenes/icono.png');
const fb = require('../imagenes/fb.png');
const yt = require('../imagenes/yt.png');

function Bienvenida(props){
    const secRef = useRef(null);
    const navRef = useRef(null);
    const toggleMenu=()=>{
        if(secRef.current && navRef.current){
            secRef.current.classList.toggle('active');
            navRef.current.classList.toggle('active');
        }
    };
    /*const[activo,setActivo] = useState(false);
    const toggleMenu =() => setActivo(!activo)*/
    return (
        <div>
            <div className="banner parallax" id="sec" ref={secRef}>
                <header>
                    <Link to="/desarrollo">
                        <img className="logo" src={logo} alt="Logo" />
                    </Link>
                    <div id="toggle" onClick={ toggleMenu }></div>
                </header>
                <div className="content">
                    <h2>Bienvenidos,<br />A la Consultoria <span>Adming</span></h2>
                    <p>
                        Profesionales de TI con una oferta en soluciones Tecnologicas y comerciales en General
                        completas. Desarrollo y Asesoria para impulsar negocios
                    </p>
                    <div className="contBtnLuz">
                        <Link to="/desarrollo">
                            <span>Desarrollos</span>
                        </Link>
                    </div>
                </div>
                <ul className="sci">
                    <li><a href="https://www.facebook.com/AdmIng-166964874949103" target="_blank" rel="noopener noreferrer"><img src={fb} alt="Facebook" /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCBOZY7qmDMyctdp1EkMOG9A" target="_blank" rel="noopener noreferrer"><img src={yt} alt="YouTube" /></a></li>
                </ul>
            </div>
            <div id="navigation" ref={navRef}>
                <ul>
                    {/* Enlaces internos utilizan Link */}
                    <li><Link to="/desarrollo">Desarrollo</Link></li>
                    <li><a target="_blank" href="https://www.youtube.com/channel/UCBOZY7qmDMyctdp1EkMOG9A" rel="noopener noreferrer">Cursos en YouTube</a></li>
                    <li><Link to="#contact">Contacto</Link></li>
                    <li><Link to="/privacidad">Aviso de Privacidad</Link></li>
                    <li><Link to="/cookies">Aviso de cookies</Link></li>
                </ul>
            </div>
        </div>
    );
}
export default Bienvenida;