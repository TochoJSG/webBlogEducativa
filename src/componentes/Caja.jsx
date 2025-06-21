import caja from '../../src/estilos/Caja.module.css';

function Caja(){
    return(
        <div className={caja.cont_caja}>
            <div id={caja.box}>
                <div className={caja.top}></div>
                <div>
                    <span></span>
                    <span>
                        <i className={caja.tape}></i>
                    </span>
                    <span></span>
                    <span>
                        <i className={caja.tape}></i>
                    </span>
                </div>
            </div>
		</div>
    );
}

export default Caja;