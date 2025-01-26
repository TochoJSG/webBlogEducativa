import React from 'react';
import '../estilos/sitio.css';
function Nosotros(props){
    return(
        <section class="about" id="about">
            <div class="title">
                <h2>Quienes Desarrollamos esto</h2>
            </div>
            <div class="contentBx">
                <div class="content">
                    <p>
                        Somos un grupo de profesionales de diversas instituciones afiliadas del Instituto Politecnico Nacional (UPIICSA, ESIME, ESE y ESCA) asociados con el objetivo de integrar una consultoria de soluciones empresariales a la medida, principalmente mediante la oferta de soluciones Tecnologicas Integrales, pudiendo desarrollar un sistema completamente personalizado.
                        </p>
                    <p>
                        El nombre <b>AdmIng</b> proviene de los fragmentos iniciales de ADMinistracion e INGenieria y creamos este sitio principalmente para promocion y secundariamente para poder ser contactados. Nuestro Objetivo es crear soluciones efectivas para los objetivos y giros de los negocios a la medida de los diversos requerimientos y presupuestos, todo desarrollado bajo los estandares modernos de desarrollo.
                        </p>
                </div>
                <div class="content">
                    <div class="imgBx">
                        <img src="blogUs.jpg" class="cover"/>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Nosotros;