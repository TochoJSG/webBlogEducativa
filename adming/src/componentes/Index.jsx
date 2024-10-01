import React from 'react';
import {Bienvenida} from './Bienvenida.jsx';
import {Posts} from './Posts.jsx';
import {Carrusel} from './Carrusel.jsx';
const Index= (props)=>{
    return(
        <>
            <Bienvenida/>
            <Posts/>
            <Carrusel/>
        </>
    );
};
export default Index;