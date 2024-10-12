import React from 'react';
import Bienvenida from './Bienvenida.jsx';
import Posts from './Posts.jsx';
import Carrusel from './Carrusel.jsx';
import Nosotros from './Nosotros.jsx';
import Contacto from './Contacto.jsx';
import Footer from './Footer.jsx';
const Index = (props)=>{
    return(
        <>
            <Bienvenida />
            <Posts/>
            <Carrusel/>
            <Nosotros/>
            <Contacto />
            <Footer/>
        </>
    );
};
export default Index;