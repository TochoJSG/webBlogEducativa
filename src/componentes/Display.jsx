import '../estilos/Display.css';
const ui = require('../imagenes/ui.png');
function Display(){
    return(
        <div className="container">
            <img src={ui}/>
            <img src={ui}/>
            <img src={ui}/>
            <img src={ui}/>
        </div>
    );
}
export default Display;