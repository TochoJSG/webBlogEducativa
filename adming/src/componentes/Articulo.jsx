import '../estilos/sitio.css';
import Conceptos from './Conceptos';

function Articulo(props){
    return(
        <section>
            <div className="articulo">
                <div className="title"><h1>{props.title}
                    </h1></div>
                <p>{props.parraph1}
                    </p> 
                <p>{props.parraph2}
                    </p>
                <p>{props.parraph3}
                    </p>
                <img className="mamalon" src={`url(${props.image1})`} name={props.title} alt='cargando imagen...' />

                <div className="contenido">
                <div>
                    <h2>{props.aplicaciones}
                        </h2>
                    <ul>
                        <li>{props.ap1}</li>
                        <li>{props.ap2}</li>
                        <li>{props.ap3}</li>
                        <li>{props.ap4}</li>
                        <li>{props.ap5}</li>
                    </ul>
                    <ul>{props.caracteristicas}
                        <li>{props.carac1}</li>
                        <li>{props.carac2}</li>
                        <li>{props.carac3}</li>
                        <li>{props.carac4}</li>
                        <li>{props.carac5}</li>
                    </ul>
                    <img className="mamalon" src={`url(${props.image2})`} alt="cargando..."/>		
                </div>
                <Conceptos 
                    titulo1={props.conceptosT1}
                    concepto1={props.conceptosC1}

                    titulo2={props.conceptosT2}
                    concepto2={props.conceptosC2}

                    titulo3={props.conceptosT3}
                    concepto3={props.conceptosC3}

                    titulo4={props.conceptosT4}
                    concepto4={props.conceptosC4}

                    titulo5={props.conceptosT5}
                    concepto5={props.conceptosC5}
                />
                </div>

            </div>
        </section>
    );
}

export default Articulo;