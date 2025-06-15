import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import Pc from '../Pc.jsx';
import HeaderGral from '../HeaderGral.jsx';
import data from '../../contenido/contenido.json';
import GoogleAnalytics from '../GoogleAnalytics.jsx';

function DisenioFrontend(props){
    return(
        <>
            <GoogleAnalytics/>
            <HeaderGral/>
            <Articulo
                title="Diseño Frontend"
                parraph1={data.DisenioFrontend.parrafo1}
                parraph2={data.DisenioFrontend.parrafo2}
                parraph3={data.DisenioFrontend.parrafo3}
                image1={data.DisenioFrontend.imagen1}
                image2={data.DisenioFrontend.imagen2}
                aplicaciones={data.DisenioFrontend.tituloBloqueA}
                ap1={data.DisenioFrontend.bloque1.contenido1} ap2={data.DisenioFrontend.bloque1.contenido2} ap3={data.DisenioFrontend.bloque1.contenido3} ap4={data.DisenioFrontend.bloque1.contenido4} ap5={data.DisenioFrontend.bloque1.contenido5}
                caracteristicas={data.DisenioFrontend.tituloBloqueB}
                carac1={data.DisenioFrontend.bloque2.contenido1} carac2={data.DisenioFrontend.bloque2.contenido2} carac3={data.DisenioFrontend.bloque2.contenido3} carac4={data.DisenioFrontend.bloque2.contenido4} carac5={data.DisenioFrontend.bloque2.contenido5}
           
                conceptosT1={data.DisenioFrontend.conceptos.titulo1}
                conceptosC1={data.DisenioFrontend.conceptos.concepto1}

                conceptosT2={data.DisenioFrontend.conceptos.titulo2}
                conceptosC2={data.DisenioFrontend.conceptos.concepto2}

                conceptosT3={data.DisenioFrontend.conceptos.titulo3}
                conceptosC3={data.DisenioFrontend.conceptos.concepto3}

                conceptosT4={data.DisenioFrontend.conceptos.titulo4}
                conceptosC4={data.DisenioFrontend.conceptos.concepto4}

                conceptosT5={data.DisenioFrontend.conceptos.titulo5}
                conceptosC5={data.DisenioFrontend.conceptos.concepto5}
            />
            <Pc/>
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default DisenioFrontend;