import estiloSec from '../estilos/PrintScan.module.css';
function PrintScan(){
    return(
    <div className={estiloSec.scan}>
		<div className={estiloSec.fingerPrint}></div>
		<h3>Scanning...</h3>
	</div>
    );
}
export default PrintScan;