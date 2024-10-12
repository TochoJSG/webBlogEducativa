import React from 'react';
import '../estilos/sitio.css';
import HeaderGral from './HeaderGral.jsx';
import Footer from './Footer.jsx';
import Articulo from './Articulo.jsx';
import Carrusel from './Carrusel.jsx';
import Posts from './Posts.jsx';
import DropDown from './DropDown.jsx';
function PaginaContenido(props){
    return(
        <>
          <HeaderGral />
          <DropDown />
          <Articulo />
          <Carrusel />
          <Posts />
          <Footer />
        </>
      );
}
export default PaginaContenido;