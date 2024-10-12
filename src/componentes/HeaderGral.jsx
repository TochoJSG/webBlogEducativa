import React from 'react';
import '../estilos/headerGral.css';
function HeaderGral(props){
    return(
        <>
            <header className="headerGral">
                <a href="index.html" class="logo">Electronica Inteligente</a>
                <div class="menuToggle"></div>
            </header>
            <ul class="navigation">
                <li><a data-text="Portada" href="index.html" onclick="toggleMenu();">Principal
                    </a></li>
                <li><a data-text="Quien escribe esto" href="index.html#about" onclick="toggleMenu();">Nosotros
                    </a></li>
                <li><a data-text="Publicaciones" href="#post" onclick="toggleMenu();">poster
                    </a></li>
                <li><a data-text="Contacto" href="index.html#contact" onclick="toggleMenu();">Contact
                    </a></li>
            </ul>
        </>
    );
}
export default HeaderGral;

/*
import React from 'react';
import {Link} from 'react-router-dom';
import '../estilos/headerGral.css';
function HeaderGral(){
    const menuToggle=document.querySelector('.menuToggle');
    const navigation=document.querySelector('.navigation');
    menuToggle.onclick=function(){menuToggle.classList.toggle('active');navigation.classList.toggle('active');}
    function toggleMenu(){menuToggle.classList.remove('active');navigation.classList.remove('active');}
    return(
        <>
            <header className="headerGral">
                <Link to="/" className="logo">Electronica Inteligente</Link>
                <div className="menuToggle"></div>
            </header>
            <ul className="navigation">
                <li><Link to="/" data-text="Portada" onClick={toggleMenu()}>Principal
                    </Link></li>
                <li><Link to="/ #about" data-text="Quien escribe esto" onClick={toggleMenu()}>Nosotros
                    </Link></li>
                <li><Link to="/ #post" data-text="Publicaciones" onClick={toggleMenu()}>poster
                    </Link></li>
                <li><Link to="/ #contact" data-text="Contacto" onClick={toggleMenu()}>Contact
                    </Link></li>
            </ul>
        </>
    );
}
export default HeaderGral;
*/