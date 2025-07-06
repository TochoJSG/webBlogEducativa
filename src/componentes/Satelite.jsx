import estiloSatelite from '../estilos/Satelite.module.css';
const satelit = require("../imagenes/satelite.png");
function Satelite(){
    return(
        <div className={estiloSatelite.contSatelite}> 
            <div className={estiloSatelite.earth}>
                <img src={satelit} alt="satelite"/>
            </div>
        </div>
    );
}
export default Satelite;