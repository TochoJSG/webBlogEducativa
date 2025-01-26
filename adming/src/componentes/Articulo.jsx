import '../estilos/sitio.css';
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
                <img className="mamalon" src="portatil.png" alt="cargando..."/>
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
                    <img className="mamalon" src="laptop.png" alt="cargando..."/>		
                </div>
                <div className="collapsibles"></div>
                </div>
            </div>
            </section>
    );
}
export default Articulo;