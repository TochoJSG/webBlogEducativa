import '../estilos/collapsibles.css';
function Collapsibles(props){
    return(
        <>
        <button className="collapsible">{props.titleCola}</button>
            <div className="contentCola"><p>{props.contentCola}
                </p>
            </div>
        </>
    );
}
export default Collapsibles;