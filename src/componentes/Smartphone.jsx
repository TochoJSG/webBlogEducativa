import '../estilos/Smartphone.css';
const ui = require('..imagenes/ui.png');
function Smartphone(props){
    return(
		<>
		<h3>Descarga gratis nuestra App para {props.title} de la Playstore</h3>
        <div className="sp">
			<div className="screen">
				<img src={ui}/>
			</div>
		</div>
		</>
    );
}
export default Smartphone;