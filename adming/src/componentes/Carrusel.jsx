import '../estilos/sitio.css';
function Carrusel(props){
    return(
        <div className="main">
            <div className="texto_car">
                <h2>Sugerencias Selectas, solo lo mejor de <span>Amazon</span></h2>
            </div>
            <div className="cabecera">
                <p>
                    <span className="car_mov"><button className="boton_personalizado" onClick="left_mover()"> &#139
                        </button></span>
                    <span className="car_mov"><button className="boton_personalizado"  onClick="right_mover()"> &#155 
                        </button></span>
                </p>
            </div>
            <section className="seccionCarr" id="carrusel-gral"></section>
        </div>
    );
}
export default Carrusel;