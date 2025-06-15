import { Link, useLocation } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import '../estilos/sitio.css';
import * as imagenes from '../imagenes/contenidos/index';

const useToggle = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const toggleVisibility = (contentRef) => {
        setIsVisible(prev => !prev);
        //contentRef.style.display = 'block';
        //console.log(contentRef);
        extenderPost(contentRef);
    };
    return { isVisible, toggleVisibility };
};

const extenderPost = (miElemento) => {
    //console.log(miElemento);
    if(miElemento.current.style ) {
        miElemento.current.style.display = 'block';
     }
 };

function Posts(){
    const { isVisible, toggleVisibility } = useToggle();
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    const contentRef = useRef(null); //SImilar a getElementById ->let desplieMas = document.getElementById('desplegarMas');


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
                        <img title="Bases de Datos" src={imagenes.bd} className="cover" alt="cargando imagen..."/>
                    </div>
                    <div className="txtBx">
                        <h3>Bases de Datos</h3>
                        <Link to="/base-de-datos-relacional#publicacion" className="btn">Ver Contenido</Link>
                    </div>
                </div>
                <div className="postBox extraHeight">
                    <div className="imgBx">
                        <img title="backend" src={imagenes.backend} alt="cargando imagen..."/>
                    </div>
                    <div className="txtBx">
                        <h3>BACKEND_</h3>
                        <Link to="/backend#publicacion" className="btn">Ver Contenido</Link>
                    </div>
                </div>
                <div className="postBox">
                    <div className="imgBx">
                        <img title="diseño frontend" src={imagenes.Frontend} alt="cargando imagen..." />
                    </div>
                    <div className="txtBx">
                        <h3>Diseño Frontend</h3>
                        <Link to="/frontend#publicacion" className="btn">Ver Contenido</Link>
                    </div>
                </div>
            </div>
            <div className="postColumn">
                <div className="postBox extraHeight">
                    <div className="imgBx">
                        <img title="Programacion" src={imagenes.Programacion} alt="cargando imagen..."/>
                    </div>
                    <div className="txtBx">
                        <h3>Programacion</h3>
                        <Link to="/programacion#publicacion" className="btn">Ver Contenido</Link>
                    </div>
                </div> 
                <div className="postBox">
                    <div className="imgBx">
                        <img title="programacion web" src={imagenes.ProgramacionWeb} className="cover" alt="cargando imagen..."/>
                    </div>
                    <div className="txtBx">
                        <h3>Programacion Web</h3>
                        <Link to="/programacion-web#publicacion" className="btn">Ver Contenido</Link>
                    </div>
                </div>
                <div className="postBox">
                    <div className="imgBx">
                        <img title="programacion orientada a objetos" src={imagenes.POO} alt="cargando imagen..."/>
                    </div>
                    <div className="txtBx">
                        <h3>Programacion Orientada a Objetos</h3>
                        <Link to="/poo#publicacion" className="btn">Ver Contenido</Link>
                    </div>
                </div>
            </div>
            <div className="postColumn">
                <div className="postBox">
                    <div className="imgBx">
                        <img title="Marketing digital" src={imagenes.Marketing}  alt="cargando imagen..."/>
                    </div>
                    <div className="txtBx">
                        <h3>Marketing Digital</h3>
                        <Link to="/marketing-digital#publicacion" className="btn">Ver Contenido</Link>
                    </div>
                </div>
                <div className="postBox">
                    <div className="imgBx">
                        <img title="finanzas" src={imagenes.Finanzas} alt="cargando imagen..."/>
                    </div>
                    <div className="txtBx">
                        <h3>Finanzas</h3>
                        <Link to="/finanzas#publicacion" className="btn">Ver Contenido</Link>
                    </div>
                </div>
                <div className="postBox extraHeight">
                    <div className="imgBx">
                        <img title="Contabilidad" src={imagenes.Contabilidad} alt="cargando imagen..."/>
                    </div>
                    <div className="txtBx">
                        <h3>Contabilidad</h3>
                        <Link to="/contabilidad#publicacion" className="btn">Ver Contenido</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="title">
            <button id="dM" className="btn mgt60" onClick={() => toggleVisibility(contentRef)}
                style={{border:'3px  solid #000'}} >
                {isVisible ? 'Ocultar Contenido' : 'Cargar Más'}
            </button>
        </div>
        {/*
        {isVisible && (
        */}
        <div id="desplegarMas" ref={contentRef} style={{ display: isVisible ? 'block' : 'none' }}>
            <div className="contentBx">
                <div className="postColumn">
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="tecnicas SEO" src={imagenes.SEO} className="cover" alt="cargando imagen..."/>
                        </div>
                        <div className="txtBx">
                            <h3>Tecnicas SEO</h3>
                            <Link to="/tecnicas-seo#publicacion" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                    <div className="postBox extraHeight">
                        <div className="imgBx">
                            <img title="redes" src={imagenes.Redes} alt="cargando imagen..."/>
                        </div>
                        <div className="txtBx">
                            <h3>Redes</h3>
                            <Link to="/redes#publicacion" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                </div>
                <div className="postColumn">
                    <div className="postBox extraHeight">
                        <div className="imgBx">
                            <img title="infraestructuras" src={imagenes.Infraestructuras} alt="cargando imagen..."/>
                        </div>
                        <div className="txtBx">
                            <h3>Infraestructuras</h3>
                            <Link to="/infraestructuras#publicacion" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="investigacion de operaciones" src={imagenes.InvestigacionDeOperaciones} alt="cargando imagen..."/>
                        </div>
                        <div className="txtBx">
                            <h3>Investigacion para las Operaciones</h3>
                            <Link to="/investigacion-operaciones#publicacion" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                </div>
                <div className="postColumn">
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="informatica" src={imagenes.Informatica} alt="cargando imagen..."/>
                        </div>
                        <div className="txtBx">
                            <h3>Informatica</h3>
                            <Link to="/informatica#publicacion" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                    <div className="postBox extraHeight">
                        <div className="imgBx">
                            <img title="ciberseguridad" src={imagenes.Seguridad} className="cover" alt="cargando imagen..."/>
                        </div>
                        <div className="txtBx">
                            <h3>Ciberseguridad</h3>
                            <Link to="/ciberseguridad#publicacion" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                </div>

                <div className="postColumn">
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="ingenieria de requerimientos" src={imagenes.Requerimientos} alt="cargando imagen..."/>
                        </div>
                        <div className="txtBx">
                            <h3>Requerimientos</h3>
                            <Link to="/requerimientos#publicacion" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="desarrollo de sistemas" src={imagenes.DesarrolloDeSistemas} alt="cargando imagen..."/>
                        </div>
                        <div className="txtBx">
                            <h3>Desarrollo de Sistemas</h3>
                            <Link to="/desarrollo-de-sistemas#publicacion" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                </div>

                <div className="postColumn">
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="aplicaciones moviles" src={imagenes.Aplicaciones} className="cover" alt="cargando imagen..."/>
                        </div>
                        <div className="txtBx">
                            <h3>Aplicaciones moviles</h3>
                            <Link to="/aplicaciones#publicacion" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="bases de datos nosql" src={imagenes.NoSQL} alt="cargando imagen..."/>
                        </div>
                        <div className="txtBx">
                            <h3>Bases de Datos NoSQL</h3>
                            <Link to="/base-de-datos-nosql#publicacion" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                </div>
                <div className="postColumn">
                    <div className="postBox">
                        <div className="imgBx">
                            <img title="Calculo" src={imagenes.Calculo} alt="cargando imagen..."/>
                        </div>
                        <div className="txtBx">
                            <h3>Calculo</h3>
                            <Link to="/calculo#publicacion" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                    
                    <div className="postBox extraHeight">
                        <div className="imgBx">
                            <img title="investigacion de operaciones" src={imagenes.RSimulacion} alt="cargando imagen..."/>
                        </div>
                        <div className="txtBx">
                            <h3>Investigacion para las Operaciones</h3>
                            <Link to="/investigacion-de-operaciones#publicacion" className="btn">Ver Contenido</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        {/*
        )}
        */}
    </section>
    );
}
export default Posts;