import '../estilos/collapsibles.css';
function Collapsibles(props){
    return(
        <>
        <button class="collapsible">{props.titleCola}</button>
            <div class="contentCola"><p>{props.contentCola}
                </p>
            </div>
        </>
    );
}
export default Collapsibles;