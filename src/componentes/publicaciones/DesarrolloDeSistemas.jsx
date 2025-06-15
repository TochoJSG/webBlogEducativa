import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import Coffe from '../Coffe.jsx';
import HeaderGral from '../HeaderGral.jsx';
import data from '../../contenido/contenido.json';
import GoogleAnalytics from '../GoogleAnalytics.jsx';

function DesarrolloDeSistemas(props){
    return(
        <>
            <GoogleAnalytics/>
            <HeaderGral/>
            <Articulo
                title="Desarrollo de Sistemas"
                parraph1={data.DesarrolloDeSistemas.parrafo1}
                parraph2={data.DesarrolloDeSistemas.parrafo2}
                parraph3={data.DesarrolloDeSistemas.parrafo3}
                image1={data.DesarrolloDeSistemas.imagen1}
                image2={data.DesarrolloDeSistemas.imagen2}
                aplicaciones={data.DesarrolloDeSistemas.tituloBloqueA}
                ap1={data.DesarrolloDeSistemas.bloque1.contenido1} ap2={data.DesarrolloDeSistemas.bloque1.contenido2} ap3={data.DesarrolloDeSistemas.bloque1.contenido3} ap4={data.DesarrolloDeSistemas.bloque1.contenido4} ap5={data.DesarrolloDeSistemas.bloque1.contenido5}
                caracteristicas={data.DesarrolloDeSistemas.tituloBloqueB}
                carac1={data.DesarrolloDeSistemas.bloque2.contenido1} carac2={data.DesarrolloDeSistemas.bloque2.contenido2} carac3={data.DesarrolloDeSistemas.bloque2.contenido3} carac4={data.DesarrolloDeSistemas.bloque2.contenido4} carac5={data.DesarrolloDeSistemas.bloque2.contenido5}
            
                conceptosT1={data.DesarrolloDeSistemas.conceptos.titulo1}
                conceptosC1={data.DesarrolloDeSistemas.conceptos.concepto1}

                conceptosT2={data.DesarrolloDeSistemas.conceptos.titulo2}
                conceptosC2={data.DesarrolloDeSistemas.conceptos.concepto2}

                conceptosT3={data.DesarrolloDeSistemas.conceptos.titulo3}
                conceptosC3={data.DesarrolloDeSistemas.conceptos.concepto3}

                conceptosT4={data.DesarrolloDeSistemas.conceptos.titulo4}
                conceptosC4={data.DesarrolloDeSistemas.conceptos.concepto4}

                conceptosT5={data.DesarrolloDeSistemas.conceptos.titulo5}
                conceptosC5={data.DesarrolloDeSistemas.conceptos.concepto5}
            />
            <Coffe/>
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default DesarrolloDeSistemas;