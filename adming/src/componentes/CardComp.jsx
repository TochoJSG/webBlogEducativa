import { Link } from 'react-router-dom';
import '../estilos/estiloCurriculum.css';

const CardComp = () =>{
    return(
        <div className="sectionFS">
            <section className="services">
                <div className="container_pc">{/**aletarga */}
                <div className="pc_card">
                    <div className="PcImgBx" data-text="DOM Web">
                        <img src={ '../imagenes/contenidos/desarrollo-sis-1.png' } />
                        <img src={ '../imagenes/contenidos/desarrollo-sis-2.png' } />
                    </div>
                    <div className="PcContent">
                        <div>
                            <h3>Desarrollo a la Medida</h3>
                            <p>Contamos con un producto base que incluye sitio web funcional, que podemos adaptar a lo que requieras en especifico para tu negocio.
                            </p>
                            <Link to="/desarrollo">Leer mas</Link>	
                        </div>
                    </div>
                </div>

                <div className="pc_card">
                    <div className="PcImgBx" data-text="SQL">
                        <img src={ '../imagenes/contenidos/bd-3.png' } />
                        <img src={ '../imagenes/contenidos/bd-2.png' } />
                    </div>
                    <div className="PcContent">
                        <div>
                            <h3>Soluciones de Negocio</h3>
                            <p>Te damos soluciones para mejorar el flujo de tu negocio a traves de canalizacion en las mejores plataformas y redes, para tu negocio, segun tu giro comercial.
                                </p>
                            <Link to="/desarrollo">Leer mas</Link>
                        </div>
                    </div>
                </div>
                
                <div className="pc_card">
                    <div className="PcImgBx" data-text="Desktop">
                        <img src={ '../imagenes/contenidos/seo-3.png' } />
                        <img src={ '../imagenes/contenidos/informatica-2.png' } />
                    </div>
                    <div className="PcContent">
                        <div>
                            <h3>Soporte</h3>
                            <p>Servicio adicional que ofrecemos sobre nuestros productos, con un costo minimo mensual se te dara soprte, actualizaciones y un reporte general de concurrencia y eficiencia en las estrategias de venta.
                            </p>
                            <Link to="/desarrollo">Leer mas</Link>
                        </div>
                    </div>
                </div>
                <div className="pc_card">
                    <div className="PcImgBx" data-text="Develop">
                        <img src={ '../imagenes/contenidos/DesarrolloDeSistemas.png' }/>
                        <img src={ '../imagenes/contenidos/desarrollo-sis-1.png' } />
                    </div>
                    <div className="PcContent">
                        <div>
                            <h3>Software Genrico</h3>
                            <p>Software de gestion general que puede aplicarse a cualquier giro, sin ninguna especificacion.
                                </p>
                            <Link to="/desarrollo">Leer mas</Link>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
    );
};

export default CardComp;