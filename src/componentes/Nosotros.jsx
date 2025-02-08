import React from 'react';
import '../estilos/sitio.css';
import { Link } from 'react-router-dom';

function Nosotros(){
    return(
        <section class="about">
            <div class="title" id="about">
                <h2>Quienes Desarrollamos esto</h2>
            </div>
            <div class="contentBx">
                <div class="content">
                    <p>
                        <b>AdmIng</b> proviene de los fragmentos iniciales de ADMinistracion e INGenieria. Es una empresa miembro de <b>Grupo Tocha</b>, comercializamos y ofrecemos otros servicios.
                        <br/>Somos un grupo de profesionales de diversas instituciones parte del Instituto Politecnico Nacional (UPIICSA, ESIME, ESE y ESCA), asociados con el objetivo desarrollar diversos tipos de soluciones empresariales a la medida, principalmente mediante soluciones Tecnologicas Integrales, pudiendo desarrollar un sistema completamente personalizado.
                        </p>
                    <div className="filiales">
                        <h4>Otras negocios relacionados a nosotros</h4>
                        <div className='negocios'>
                            <div className='negocio'>
                                <p>comercializadora</p>
                                <a href="https://tochamateriasprimas.com/">
                                    <img src={require('../imagenes/tocha.jpg')} alt="cargando..."/>
                                </a>
                            </div>
                            <div className='negocio'>
                                <p>autoservicios</p>
                                <Link to="/proximamente">
                                    <img src={require('../imagenes/coorp.jpg')} alt="cargando..."/>
                                </Link>
                            </div>
                            <div className='negocio'>
                                <p>consultoria</p>
                                <Link to="/jorge-salgado-fullstack">
                                    <img src={require('../imagenes/icono.png')} alt="cargando..."/>
                                </Link>
                            </div>    
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="imgBx">
                        <img src={require('../imagenes/a-1.jpg')} class="cover" alt="cargando..."/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nosotros;