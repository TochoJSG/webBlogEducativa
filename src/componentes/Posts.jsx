import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import '../estilos/sitio.css';
const db = require('../imagenes/icono.png');
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
            <p><span>Revisa nuestro contenido sobre diversos temas aplicables al desarrollo de soluciones informaticas para el aproovechamiento de los datos</span> Un post por cada uno.
                </p>
        </div>
        <div id="primeraParte" className="contentBx">
            <div className="postColumn">
                <div className="postBox">
                    <div className="imgBx">
                        <img title="BDRelacional" src={db} className="cover"/>
                    </div>
                    <div className="txtBx">
                        <h3>Bases de Datos</h3>
                        <Link to="/base-de-datos-relacional" className="btn">Ver Contenido</Link>
                    </div>
                </div>
                <div className="postBox extraHeight">
                    <div className="imgBx">
                        <img title="BDNoSQL" src="post_laptop.png"/>
                    </div>
                    <div className="txtBx">
                        <h3>NoSQL</h3>
                        <Link to="/base-de-datos-nosql" className="btn">Ver Contenido</Link>
                    </div>
                </div>
                <div className="postBox">
                    <div className="imgBx">
                        <img title="programacion" src="post_pc.png"/>
                    </div>
                    <div className="txtBx">
                        <h3>Programacion</h3>
                        <Link to="/programacion" className="btn">Ver Contenido</Link>
                    </div>
                </div>
            </div>
            <div className="postColumn">
                <div className="postBox extraHeight">
                    <div className="imgBx">
                        <img title="aplicaciones" src="post_kit.png"/>
                    </div>
                    <div className="txtBx">
                        <h3>Aplicaciones Moviles</h3>
                        <Link to="/aplicaciones" className="btn">Ver Contenido</Link>
                    </div>
                </div> 
                <div className="postBox">
                    <div className="imgBx">
                        <img title="web" src="post_casco.png" className="cover"/>
                    </div>
                    <div className="txtBx">
                        <h3>Programacion Web</h3>
                        <Link to="/programacion-web" className="btn">Ver Contenido</Link>
                    </div>
                </div>
                <div className="postBox">
                    <div className="imgBx">
                        <img title="contabilidad" src="post_auriculares.png"/>
                    </div>
                    <div className="txtBx">
                        <h3>Contabilidad</h3>
                        <Link to="/contabilidad" className="btn">Ver Contenido</Link>
                    </div>
                </div>
            </div>
            <div className="postColumn">
                <div className="postBox">
                    <div className="imgBx">
                        <img title="finanzas" src="post_smartwatches.png"/>
                    </div>
                    <div className="txtBx">
                        <h3>Finanzas</h3>
                        <Link to="/finanzas" className="btn">Ver Contenido</Link>
                    </div>
                </div>
                <div className="postBox">
                    <div className="imgBx">
                        <img title="investiigacionOperaciones" src="post_celulares.png"/>
                    </div>
                    <div className="txtBx">
                        <h3>Investigacion Operaciones</h3>
                        <Link to="/investigacion-de-operaciones" className="btn">Ver Contenido</Link>
                    </div>
                </div>
                <div className="postBox extraHeight">
                    <div className="imgBx">
                        <img title="redes" src="post_usb.png"/>
                    </div>
                    <div className="txtBx">
                        <h3>Redes</h3>
                        <Link to="/redes" className="btn">Ver Contenido</Link>
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
                            <img title="simulacioRedes" src="post_audifono.png" className="cover"/>
                        </div>
                        <div className="txtBx">
                            <h3>Redes y Simulacion</h3>
                            <Link to="/simulacion-redes" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="calculo" src="post_bocina.png"/>
                        </div>
                        <div className="txtBx">
                            <h3>Calculo</h3>
                            <Link to="bocinas-bluetooth.html" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                </div>
                <div className="postColumn">
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="probabilidad" src="post_raton.png"/>
                        </div>
                        <div className="txtBx">
                            <h3>Probabidad</h3>
                            <Link to="/probabilidad" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="teclados" src="post_teclado.png"/>
                        </div>
                        <div className="txtBx">
                            <h3>Metodologias y Protocolos</h3>
                            <Link to="/metodologias" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                </div>
                <div className="postColumn">
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="seo" src="post_raton.png"/>
                        </div>
                        <div className="txtBx">
                            <h3>Probabidad</h3>
                            <Link to="/posicionamiento-SEO" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="mktdigital" src="post_teclado.png"/>
                        </div>
                        <div className="txtBx">
                            <h3>Metodologias y Protocolos</h3>
                            <Link to="/marketing-digital" className="btn">Ver Contenido</Link>
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