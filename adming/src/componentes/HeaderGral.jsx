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