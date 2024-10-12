import '../estilos/sitio.css';
import {Link} from 'react-router-dom';
const logoAdming = require('../imagenes/icono.png');
const logoTocha = require('../imagenes/coorp.jpg');
function Footer(props){
    return(
        <footer>
            <Link to="/">Electronica Inteligente</Link>
            <ul className="footerMenu">
                <li><Link to="/">Principal</Link></li>
                <li><Link to="/#about">Nosotros
                    </Link></li>
                <li><Link to="/#post">poster
                    </Link></li>
                <li><Link to="/#contact">Contacto
                    </Link></li>
            </ul>
            <ul className="footerMenu">
                <li><Link to="/privacidad">Politica de PRIVACIDAD</Link></li>
                <li><Link to="/cookies">Politica de COOKIES</Link></li>
                <li><Link to="/avisoLegal">Aviso legal y Términos de uso</Link></li>
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