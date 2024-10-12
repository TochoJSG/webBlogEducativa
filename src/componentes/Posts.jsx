import React from 'react';
import '../estilos/sitio.css';
function Posts(props){
    return(
    <section className="post" id="post">
        <div className="title">
            <h2>Contenidos</h2>
            <p><span>Revisa nuestro contenido sobre diversos temas aplicables al desarrollo de soluciones informaticas para el aproovechamiento de los datos</span> Un post por cada uno.
                </p>
        </div>
        <div id="primeraParte" className="contentBx">
            </div>
        <div className="title">
            <button id="dM" className="btn mgt60" onClick="ver();">Cargar Mas</button>
        </div>	
        <div id="desplegarMas">
            </div>
    </section>
    );
}
export default Posts;