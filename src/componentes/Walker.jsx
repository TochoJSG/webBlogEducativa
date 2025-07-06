import estiloWalker from '../estilos/Walker.module.css';
function Walker(){
    return(
        <div className={estiloWalker.contWalker}>
            <div className={estiloWalker.walker}>
                <div className={estiloWalker.foot}>
                    <span className={estiloWalker.foot}>
                        <div className={estiloWalker.legs}></div>
                    </span>
                    
                    <span className={estiloWalker.foot}>
                        <div className={estiloWalker.legs}></div>
                    </span>
                    <div className={estiloWalker.body}></div>
                    <div className={estiloWalker.head}></div>
                
                </div>
            </div>
            <div className={estiloWalker.way}>
                <h3>Avanza a paso firme hacia tus metas</h3>
            </div>
        </div>
    );
}
export default Walker;