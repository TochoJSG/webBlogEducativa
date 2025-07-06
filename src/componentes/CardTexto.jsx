import estiloTxt from '../estilos/CardTexto.module.css';

function CardTexto(props){
    return(
        <section className="sectionFS">
            <div className={estiloTxt.boxCardTxt}>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        </section>
    );
}
export default CardTexto;