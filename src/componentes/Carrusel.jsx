import React, { useRef, useState, useEffect } from 'react';
import '../estilos/sitio.css';
import productos from '../contenido/amz.json'; 

function Carrusel(){
  const carruselRef = useRef(null);
  const [movePer, setMovePer] = useState(25.34);
  const [maxMove, setMaxMove] = useState(203);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const mobileView = window.matchMedia('(max-width:768px)');
    if(mobileView.matches){
      setMovePer(50.36);
      setMaxMove(504);
    }
  }, []);

  const avanzar = () => {
    let newPos = position + movePer;
    if (newPos > maxMove) newPos = position;
    setPosition(newPos);
    carruselRef.current.style.transform = `translateX(-${newPos}%)`;
  };
  
  const retroceder = () => {
    let newPos = position - movePer;
    if (newPos < 0) newPos = 0;
    setPosition(newPos);
    carruselRef.current.style.transform = `translateX(-${newPos}%)`;
  };
    return( 
        <div id="carrusel" className="main">
            <div className="texto_car">
                <h2>Sugerencias Selectas, solo lo mejor de <span>Amazon</span></h2>
            </div>
            <div className="cabecera">
                <p>
                    <span className="car_mov"><button className="boton_personalizado" onClick={retroceder}>Retroceder
                        </button></span>
                    <span className="car_mov"><button className="boton_personalizado" onClick={avanzar}> Avanzar
                        </button></span>
                </p>
            </div>
            <div id="carrusel-gral"> {/* ventana con overflow hidden */}
              <div className="seccionCarr" ref={carruselRef}> {/* carril deslizante */}
                {
                  productos.map((item, index) => (
                    <div className="prod_car" id="template-carr" key={index}>
                      <picture>
                        <img src={item.imProd} alt="loading..." />
                      </picture>
                      <div className="details_car">
                        <p>{item.title}<b>${item.precio}</b></p>
                      </div>
                      <div className="button_car_c">
                        <a target="_blank" rel="noopener noreferrer" href={item.url}>
                          <button className="btn_car">En Amazon</button>
                        </a>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
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