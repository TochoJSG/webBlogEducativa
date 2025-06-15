import '../../src/estilos/Caja.css';

function Caja(props){
    return(
        <>
        <div>
            <p>{props.texto}</p>
        </div>
        <div className="cont_caja">
            <div id="box">
                <div className="top"></div>
                <div>
                    <span></span>
                    <span>
                        <i className="tape"></i>
                    </span>
                    <span></span>
                    <span>
                        <i className="tape"></i>
                    </span>
                </div>
            </div>
            <br/>
		</div>
        </>
    );
}

export default Caja;