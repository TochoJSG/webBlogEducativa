import '../estilos/Smartphone.css';
const ui = require('..imagenes/ui.png');
function Smartphone(props){
    return(
        <div class="sp">
		<div class="screen">
			<img src={ui}/>
		</div>
	</div>
    );
}
export default Smartphone;