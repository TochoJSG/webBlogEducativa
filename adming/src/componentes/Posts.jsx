import React from 'react';
import '../estilos/sitio.css';
function Posts(props){
    return(
    <section className="post" id="post">
        <div className="title">
            <h2>Categorias</h2>
            <p><span>Computadora, laptop, audifonos bluetooth, reloj inteligente, smartwatch, mouse, relojes, bocinas... y mas.</span> Un post por cada uno.
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