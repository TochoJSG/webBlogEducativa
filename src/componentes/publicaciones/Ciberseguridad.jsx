import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import HeaderGral from '../HeaderGral.jsx';
import PrintScan from '../PrintScan.jsx';
import data from '../../contenido/contenido.json';
import GoogleAnalytics from '../GoogleAnalytics.jsx';

function Ciberseguridad(props){
    return(
        <>
            <GoogleAnalytics/>
            <HeaderGral/>
            <Articulo
                title="Ciberseguridad"
                parraph1={data.Seguridad.parrafo1}
                parraph2={data.Seguridad.parrafo2}
                parraph3={data.Seguridad.parrafo3}
                image1={data.Seguridad.imagen1}
                image2={data.Seguridad.imagen2}
                aplicaciones={data.Seguridad.tituloBloqueA}
                ap1={data.Seguridad.bloque1.contenido1} ap2={data.Seguridad.bloque1.contenido2} ap3={data.Seguridad.bloque1.contenido3} ap4={data.Seguridad.bloque1.contenido4} ap5={data.Seguridad.bloque1.contenido5}
                caracteristicas={data.Seguridad.tituloBloqueB}
                carac1={data.Seguridad.bloque2.contenido1} carac2={data.Seguridad.bloque2.contenido2} carac3={data.Seguridad.bloque2.contenido3} carac4={data.Seguridad.bloque2.contenido4} carac5={data.Seguridad.bloque2.contenido5}
           
                conceptosT1={data.Seguridad.conceptos.titulo1}
                conceptosC1={data.Seguridad.conceptos.concepto1}

                conceptosT2={data.Seguridad.conceptos.titulo2}
                conceptosC2={data.Seguridad.conceptos.concepto2}

                conceptosT3={data.Seguridad.conceptos.titulo3}
                conceptosC3={data.Seguridad.conceptos.concepto3}

                conceptosT4={data.Seguridad.conceptos.titulo4}
                conceptosC4={data.Seguridad.conceptos.concepto4}

                conceptosT5={data.Seguridad.conceptos.titulo5}
                conceptosC5={data.Seguridad.conceptos.concepto5}
            />
            <PrintScan />
            <DropDown />
            <Carrusel />
            <Posts />
            <Footer />
        </>
    );
}
export default Ciberseguridad;