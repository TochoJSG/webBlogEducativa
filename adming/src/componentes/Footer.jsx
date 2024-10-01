import '../estilos/sitio.css';
const logoAdming = require('../imagenes/icono.png');
const logoTocha = require('../imagenes/coorp.jpg');
function Footer(props){
    return(
        <footer>
            <a href="index.html">Electronica Inteligente</a>
            <ul className="footerMenu">
                <li><a href="index.html">Principal
                    </a></li>
                <li><a href="index.html #about">Nosotros
                    </a></li>
                <li><a href="index.html #post">poster
                    </a></li>
                <li><a href="index.html #contact">Contacto
                    </a></li>
            </ul>
            <ul className="footerMenu">
                <li><a href="privacidad.html">Politica de PRIVACIDAD
                    </a></li>
                <li><a href="Política_de_Cookies.html">Politica de COOKIES
                    </a></li>
                <li><a href="aviso_legal.html">Aviso legal y Términos de uso
                    </a></li>
            </ul>
            <div className="corp">
            <img src={logoAdming} alt="Grupo Tocha..."/>
            <a href="https://admingtutoriales.com"><p className="copyrightText">ADMING DESARROLLOS
                </p></a>
            <img src={logoTocha} alt="Grupo Tocha..."/>
                </div>
        </footer>
    );
}
export default Footer;