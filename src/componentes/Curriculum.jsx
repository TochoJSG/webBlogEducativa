//import {  } from '../estilos/estiloCurriculum.css';
//import Contacto from './Contacto';
import Watsapp from './Watsapp';
import Grafica from './Grafica';
import HeaderCv from './HeaderCv';
import Skills from './Skills';
import Skills2 from './Skills2';
/**
 * /jorge-salgado-fullstack
 */

const Curriculum = () =>{
    return(
        <div className="containerFS">
            
            <HeaderCv />
            
            <Skills />

            <Skills2 texto="Empece a programar antes de que la IA lo facilitara, en C/C++ y ensamblador, lo que me ayudo a desarrollar más habilidades de análisis y abstracción. Me interesan las Bases de Datos, por lo que mi especialidad universitaria se enfoco en esa area y me he desempeñado como DBA, además de trabajar en soporte y como desarollador. Mi especialidad como programador es el Stack MERN, este sitio esta desarrollado con una BDNoSQL, Express para funciones Servidor, React para el front y Node como Marco, todo corriendo en un VPS que trabajo desde terminal con comandos Ubuntu que es base Linux "/>

            <Grafica />

            <Watsapp />
            
        </div>
    );
};

export default Curriculum;