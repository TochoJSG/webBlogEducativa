import '../estilos/sitio.css';
function DropDown(props){
    /*function DropDown(){
        document.querySelector('.toggleMenu').onclick=function(){
            this.classList.toggle('activeMenu');
            dropdownMenu.classList.toggle('activeMenu');
            insertaMenu();
            }*/
    return(
        <div className="dropdownMenu">
            <div className="toggleMenu">
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