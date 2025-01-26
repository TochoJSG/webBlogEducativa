import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import '../estilos/sitio.css';
import * as imagenes from '../imagenes/contenidos/index';
const useToggle = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(prev => !prev);
    };

    return { isVisible, toggleVisibility };
};
function Posts(props){
    const { isVisible, toggleVisibility } = useToggle();
    return(
    <section className="post" id="post">
        <div className="title">
            <h2>Contenidos</h2>
            <p><span>Revisa nuestro contenido relacionado a diversos temas utiles para Negocios y el desarrollo de soluciones informaticas</span> Un post por cada uno.
                </p>
        </div>
        <div id="primeraParte" className="contentBx">
            <div className="postColumn">
                <div className="postBox">
                    <div className="imgBx">
                        <img title="Bases de Datos" src={imagenes.bd} className="cover"/>
                    </div>
                    <div className="txtBx">
                        <h3>Bases de Datos</h3>
                        <Link to="/base-de-datos-relacional" className="btn">Ver Contenido</Link>
                    </div>
                </div>
                <div className="postBox extraHeight">
                    <div className="imgBx">
                        <img title="backend" src={imagenes.backend}/>
                    </div>
                    <div className="txtBx">
                        <h3>BACKEND_</h3>
                        <Link to="/base-de-datos-nosql" className="btn">Ver Contenido</Link>
                    </div>
                </div>
                <div className="postBox">
                    <div className="imgBx">
                        <img title="diseño frontend" src={imagenes.Frontend} />
                    </div>
                    <div className="txtBx">
                        <h3>Diseño Frontend</h3>
                        <Link to="/diseño-frontend" className="btn">Ver Contenido</Link>
                    </div>
                </div>
            </div>
            <div className="postColumn">
                <div className="postBox extraHeight">
                    <div className="imgBx">
                        <img title="Programacion" src={imagenes.Programacion}/>
                    </div>
                    <div className="txtBx">
                        <h3>Programacion</h3>
                        <Link to="/programacion" className="btn">Ver Contenido</Link>
                    </div>
                </div> 
                <div className="postBox">
                    <div className="imgBx">
                        <img title="programacion web" src={imagenes.ProgramacionWeb} className="cover"/>
                    </div>
                    <div className="txtBx">
                        <h3>Programacion Web</h3>
                        <Link to="/programacion-web" className="btn">Ver Contenido</Link>
                    </div>
                </div>
                <div className="postBox">
                    <div className="imgBx">
                        <img title="programacion orientada a objetos" src={imagenes.POO}/>
                    </div>
                    <div className="txtBx">
                        <h3>Programacion Orientada a Objetos</h3>
                        <Link to="/poo" className="btn">Ver Contenido</Link>
                    </div>
                </div>
            </div>
            <div className="postColumn">
                <div className="postBox">
                    <div className="imgBx">
                        <img title="Marketing digital" src={imagenes.Marketing} />
                    </div>
                    <div className="txtBx">
                        <h3>Marketing Digital</h3>
                        <Link to="/marketing-digital" className="btn">Ver Contenido</Link>
                    </div>
                </div>
                <div className="postBox">
                    <div className="imgBx">
                        <img title="finanzas" src={imagenes.Finanzas}/>
                    </div>
                    <div className="txtBx">
                        <h3>Finanzas</h3>
                        <Link to="/finanzas" className="btn">Ver Contenido</Link>
                    </div>
                </div>
                <div className="postBox extraHeight">
                    <div className="imgBx">
                        <img title="Contabilidad" src={imagenes.Contabilidad}/>
                    </div>
                    <div className="txtBx">
                        <h3>Contabilidad</h3>
                        <Link to="/contabilidad" className="btn">Ver Contenido</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="title">
            <button id="dM" className="btn mgt60" onClick={toggleVisibility}>
                {isVisible ? 'Ocultar Contenido' : 'Cargar Más'}
            </button>
        </div>
        {isVisible && (
        <div id="desplegarMas">
            <div className="contentBx">
                <div className="postColumn">
                    <div className="postBox extraHeight">
                        <div className="imgBx">
                            <img title="tecnicas SEO" src={imagenes.SEO} className="cover"/>
                        </div>
                        <div className="txtBx">
                            <h3>Tecnicas SEO</h3>
                            <Link to="/tecnicas-seo" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="redes" src={imagenes.Redes}/>
                        </div>
                        <div className="txtBx">
                            <h3>Redes</h3>
                            <Link to="/redes" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                </div>
                <div className="postColumn">
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="infraestructuras" src={imagenes.Infraestructuras}/>
                        </div>
                        <div className="txtBx">
                            <h3>Infraestructuras</h3>
                            <Link to="/infraestructuras" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="investigacion de operaciones" src={imagenes.InvestigacionDeOperaciones}/>
                        </div>
                        <div className="txtBx">
                            <h3>Investigacion para las Operaciones</h3>
                            <Link to="/investigacion-operaciones" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                </div>
                <div className="postColumn">
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="informatica" src={imagenes.Informatica}/>
                        </div>
                        <div className="txtBx">
                            <h3>Informatica</h3>
                            <Link to="/informatica" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="big data" src={imagenes.BigData}/>
                        </div>
                        <div className="txtBx">
                            <h3>Big Data</h3>
                            <Link to="/big-data" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                </div>

                <div className="postColumn">
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="ingenieria de requerimientos" src={imagenes.Requerimientos}/>
                        </div>
                        <div className="txtBx">
                            <h3>Requerimientos</h3>
                            <Link to="/requerimientos" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="desarrollo de sistemas" src={imagenes.DesarrolloDeSistemas}/>
                        </div>
                        <div className="txtBx">
                            <h3>Desarrollo de Sistemas</h3>
                            <Link to="/desarrollo-de-sistemas" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                </div>

                <div className="postColumn">
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="aplicaciones moviles" src={imagenes.Aplicaciones}/>
                        </div>
                        <div className="txtBx">
                            <h3>Aplicaciones moviles</h3>
                            <Link to="/aplicaciones" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="bases de datos nosql" src={imagenes.NoSQL}/>
                        </div>
                        <div className="txtBx">
                            <h3>Bases de Datos NoSQL</h3>
                            <Link to="/base-de-datos-nosql" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                </div>
                <div className="postColumn">
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="Calculo" src={imagenes.Calculo}/>
                        </div>
                        <div className="txtBx">
                            <h3>Calculo</h3>
                            <Link to="/calculo" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="Metodologias de desarrollo" src={imagenes.Metodologias}/>
                        </div>
                        <div className="txtBx">
                            <h3>Metodologias de desarrollo</h3>
                            <Link to="/metodologias-de-desarrollo" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                </div>
                <div className="postColumn">
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="probabilidad" src={imagenes.Probabilidad}/>
                        </div>
                        <div className="txtBx">
                            <h3>Probabidad</h3>
                            <Link to="/probabilidad" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="redes y simulaciones" src={imagenes.RSimulacion}/>
                        </div>
                        <div className="txtBx">
                            <h3>Redes y Simulaciones</h3>
                            <Link to="/redes-simulacion" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                </div>
                <div className="postColumn">
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="modelos de pruebas" src={imagenes.Pruebas}/>
                        </div>
                        <div className="txtBx">
                            <h3>Modelos de pruebas</h3>
                            <Link to="/modelos-de-pruebas" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="algebra" src={imagenes.Algebra}/>
                        </div>
                        <div className="txtBx">
                            <h3>Algebra</h3>
                            <Link to="/algebra" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        )}
    </section>
    );
}
export default Posts;