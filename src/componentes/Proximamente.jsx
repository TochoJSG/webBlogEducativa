import HeaderGral from "./HeaderGral";
import Loader from "./Loader";
import Footer from "./Footer";

const Proximamente = () =>{
    return(
        <>
            <HeaderGral />
            <Loader 
                title="Sitio en Desarrollo"
                contenido="Comunicate al 55-91-08-82-27 Whatsapp o llamada para recibir asesoria en cualquier tramite vehicular dificultoso."
            />
            <Footer />
        </>
    );
};

export default Proximamente;