import '../estilos/sitio.css';
import productos from '../contenido/amz.json'; 

function Carrusel(){
    return(
        <div id="carrusel" className="main">
            <div className="texto_car">
                <h2>Sugerencias Selectas, solo lo mejor de <span>Amazon</span></h2>
            </div>
            <div className="cabecera">
                <p>
                    <span className="car_mov"><button className="boton_personalizado"> Retroceder
                        </button></span>
                    <span className="car_mov"><button className="boton_personalizado"> Avanzar
                        </button></span>
                </p>
            </div>
            <section className="seccionCarr" id="carrusel-gral">
                {
                    productos.map((item, index) => (
                        <div className="prod_car" id="template-carr" key={index}>
                          <picture>
                            <img src={item.imProd} alt="loading..." />
                          </picture>
                          <div className="details_car">
                            <p>
                              <b>{item.title}</b><br />
                              <b>$ {item.precio}</b>
                            </p>
                          </div>
                          <div className="button_car_c">
                            <a target="_blank" rel="noopener noreferrer" href={item.url}>
                              <button className="btn_car">En Amazon</button>
                            </a>
                          </div>
                        </div>
                      ))
                }
            </section>
        </div>
    );
}

export default Carrusel;
/**
 * onClick="right_mover()"
                    <span className="car_mov"><button className="boton_personalizado" onClick="left_mover()"> &#139
                    <span className="car_mov"><button className="boton_personalizado"  onClick="right_mover()">
 * 
 */