import '../estilos/Display.css';
const ui = require('../imagenes/ui.png');
function Display(){
    return(
        <div className="containerDisplay">
            <img src={ui}/>
            <img src={ui}/>
            <img src={ui}/>
            <img src={ui}/>
        </div>
    );
}
export default Display;