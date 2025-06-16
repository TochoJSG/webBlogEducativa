import '../estilos/DropDown.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
function DropDown(props){
    const [isActive, setIsActive] = useState(false);// Estado para manejar el menú activo
    const toggleMenu = () => {// Función para alternar la clase de menú activo
        setIsActive(!isActive);
    };
    
    return(
        <div className={`dropdownCont ${isActive ? 'active' : ''}`}>
            <div className={`toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span></div>
            <ul id="mn"> 
                <li><Link to="/base-de-datos-relacional" className="alink">BD SQL</Link></li>
                <li><Link to="/backend" className="alink">Backend</Link></li>
                <li><Link to="/frontend" className="alink">Frontend</Link></li>
                <li><Link to="/programacion" className="alink">Programacion</Link></li>
                <li><Link to="/programacion-web" className="alink">Programacion Web</Link></li>
                <li><Link to="/poo" className="alink">POO</Link></li>
                <li><Link to="/marketing-digital" className="alink">Marketing</Link></li>
                <li><Link to="/finanzas" className="alink">Finanzas</Link></li>
                <li><Link to="/contabilidad" className="alink">Contabilidad</Link></li>
                <li><Link to="/posicionamiento-SEO" className="alink">Posicionamiento SEO</Link></li>
                <li><Link to="/redes" className="alink">Redes</Link></li>
                <li><Link to="/infraestructuras" className="alink">Infraestructuras</Link></li>
                <li><Link to="/investigacion-de-operaciones" className="alink">Inv de Operaciones</Link></li>
                <li><Link to="/informatica" className="alink">Informatica</Link></li>
                <li><Link to="/requerimientos" className="alink">Requerimientos</Link></li>
                <li><Link to="/aplicaciones" className="alink">Aplicaciones Moviles</Link></li>
                <li><Link to="/probabilidad" className="alink">Probabilidad</Link></li>
                <li><Link to="/base-de-datos-nosql" className="alink">BD NoSQL</Link></li>
                <li><Link to="/metodologias-de-desarrollo" className="alink">Desarrollo</Link></li>
                <li><Link to="/ciberseguridad" className="alink">Ciberseguridad</Link></li>
                <li><Link to="/calculo" className="alink">Calculo</Link></li>
            </ul>
        </div>
    );
}
export default DropDown;