import '../estilos/sitio.css';
function Footer(props){
    return(
        <footer>
            <a href="index.html">Electronica Inteligente</a>
            <ul class="footerMenu">
                <li><a href="index.html">Principal
                    </a></li>
                <li><a href="index.html #about">Nosotros
                    </a></li>
                <li><a href="index.html #post">poster
                    </a></li>
                <li><a href="index.html #contact">Contacto
                    </a></li>
            </ul>
            <ul class="footerMenu">
                <li><a href="privacidad.html">Politica de PRIVACIDAD
                    </a></li>
                <li><a href="Política_de_Cookies.html">Politica de COOKIES
                    </a></li>
                <li><a href="aviso_legal.html">Aviso legal y Términos de uso
                    </a></li>
            </ul>	
            <a href="https://admingtutoriales.com"><p class="copyrightText">ADMING DESARROLLOS
                </p></a>
        </footer>
    );
}
export default Footer;