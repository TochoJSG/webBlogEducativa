import '../estilos/loader.css';

const Loader = (props) => {
    return (
        <section className="loadSec">
            <div className="loader">
                {Array.from({ length: 20 }, (_, i) => (
                    <span key={i} style={{ "--i": i + 1 }}></span>
                ))}
            </div>
            <div className="proximamente">
                <h4>{props.title}</h4>
                <p>{props.contenido}</p>
            </div>
        </section>
    );
};

export default Loader;