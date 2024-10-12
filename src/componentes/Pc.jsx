import '../estilos/Pc.css';
const Logo = requiere('../imagenes/icono.png')
function Pc(){
    return(
        <div className="center">
            <div className="monitor">
                <img src={Logo} alt="@"/>
                <div className="overlay"></div>
            </div>
        </div>
    );
}
export default Pc;