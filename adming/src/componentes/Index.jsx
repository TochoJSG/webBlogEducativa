import React from 'react';
import Bienvenida from './Bienvenida.jsx';
import Posts from './Posts.jsx';
import Carrusel from './Carrusel.jsx';
import Nosotros from './Nosotros.jsx';
import Contacto from './Contacto.jsx';
import Footer from './Footer.jsx';
import Watsapp from './Watsapp.jsx';
import Pc from './Pc.jsx';

const Index = (props)=>{
    return(
        <>
            <Bienvenida />
            <Nosotros/> 
            <Pc />
            <Posts/>
            <Carrusel/>
            <Contacto />
            <Watsapp/>
            <Footer/>
        </>
    );
};
export default Index;