import estiloAvion from '../estilos/Avion.module.css';
function Avion(){
    return(
        <section className={estiloAvion.sectionAvion}>
            <div className={estiloAvion.clouds}>
                {
                    Array.from({ length: 3 }, (_, index) => (
                        <img src="../imagenes/nube.png" style={{ '--i': index + 1 }}  alt="cargando nube..."/>
                    ))
                }
            </div>
            <div className={estiloAvion.clouds - estiloAvion.clouds2}>
                {
                    Array.from({ length: 3 }, (_, index) => (
                        <img src="../imagenes/nube.png" style={{ '--i': index + 1 }} alt="cargando nube..."/>
                    ))
                }
            </div>
            <div className={estiloAvion.runway}></div>
                <img src="../imagenes/avion.png" className={estiloAvion.plane} alt="cargando avion..."/>
        </section>
    );
}
export default Avion;