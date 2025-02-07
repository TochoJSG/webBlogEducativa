import '../estilos/sitio.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const logoAdming = require('../imagenes/icono.png');
const logoTocha = require('../imagenes/coorp.jpg');

function Footer(){
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return(
        <footer id="footer">
            <Link to="/">A d m I n g   C o n s u l t i ng</Link>
            <ul className="footerMenu">
                <li><Link to="/">Principal</Link></li>
                <li><Link to="/home#about">Nosotros
                    </Link></li>
                <li><Link to="/home#post">poster
                    </Link></li>
                <li><Link to="/home#contact">Contacto
                    </Link></li>
            </ul>
            <ul className="footerMenu">
                <li><Link to="/privacidad">Politica de PRIVACIDAD</Link></li>
                <li><Link to="/cookies">Politica de COOKIES</Link></li>
                <li><Link to="/avisoLegal">Aviso legal y Términos de uso</Link></li>
            </ul>
            <div className="corp">
                <img src={logoAdming} alt="Grupo Tocha..."/>
                <Link to="/"><p className="copyrightText">ADMING DESARROLLOS
                    </p></Link>
                <img src={logoTocha} alt="Grupo Tocha..."/>
            </div>
        </footer>
    );
}
export default Footer;