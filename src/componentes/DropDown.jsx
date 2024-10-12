import '../estilos/DropDown.css';
function DropDown(props){
    const [isActive, setIsActive] = useState(false);// Estado para manejar el menú activo
    const toggleMenu = () => {// Función para alternar la clase de menú activo
        setIsActive(!isActive);
    };
    return(
        <div className={`dropdown ${isActive ? 'active' : ''}`}>
            <div className={`toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span></div>
            <ul id="mn"> 
                <Link to="/base-de-datos-relacional">Aviso de cookies</Link>
                <Link to="/base-de-datos-nosql">Aviso de cookies</Link>
                <Link to="/programacion">Programacion</Link>
                <Link to="/aplicaciones">Aplicaciones Moviles</Link>
                <Link to="/programacion-web">Programacion Web</Link>
                <Link to="/contabilidad">Contabilidad</Link>
                <Link to="/finanzas">Finanzas</Link>
                <Link to="/investigacion-de-operaciones">Investigacion de Operaciones</Link>
                <Link to="/redes">Redes</Link>
                <Link to="/simulacion-de-redes">Simulacion de Redes</Link>
                <Link to="/calculo">Calculo</Link>
                <Link to="/probabilidad">Probabilidad</Link>
            </ul>
        </div>
    );
}
export default DropDown;