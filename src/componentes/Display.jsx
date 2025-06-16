import '../estilos/Display.css';
const ui = require('../imagenes/ui.png');
function Display(){
    return(
        <div className="containerDisplay">
            <img src={ui} alt="error al cargar imagen"/>
            <img src={ui} alt="error al cargar imagen"/>
            <img src={ui} alt="error al cargar imagen"/>
            <img src={ui} alt="error al cargar imagen"/>
        </div>
    );
}
export default Display;