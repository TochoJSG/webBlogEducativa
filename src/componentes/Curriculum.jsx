//import {  } from '../estilos/estiloCurriculum.css';
//import Contacto from './Contacto';
import Watsapp from './Watsapp';
import Grafica from './Grafica';
import HeaderCv from './HeaderCv';
import Skills from './Skills';
/**
 * /jorge-salgado-fullstack
 */

const Curriculum = () =>{
    return(
        <div className="containerFS">
            
            <HeaderCv />
            
            <Skills />

            <Grafica />

            <Watsapp />
            
        </div>
    );
};

export default Curriculum;