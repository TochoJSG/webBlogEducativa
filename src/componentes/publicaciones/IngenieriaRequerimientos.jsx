import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import Coffe from '../Coffe.jsx';
import HeaderGral from '../HeaderGral.jsx';
import data from '../../contenido/contenido.json';
import GoogleAnalytics from '../GoogleAnalytics.jsx';

function IngenieriaRequerimientos(props){
    return(
        <>
            <GoogleAnalytics/>
            <HeaderGral/>
            <Articulo
                title="Ingenieria en Requerimientos"
                parraph1={data.IngenieriaRequerimientos.parrafo1}
                parraph2={data.IngenieriaRequerimientos.parrafo2}
                parraph3={data.IngenieriaRequerimientos.parrafo3}
                image1={data.IngenieriaRequerimientos.imagen1}
                image2={data.IngenieriaRequerimientos.imagen2}
                aplicaciones={data.IngenieriaRequerimientos.tituloBloqueA}
                ap1={data.IngenieriaRequerimientos.bloque1.contenido1} ap2={data.IngenieriaRequerimientos.bloque1.contenido2} ap3={data.IngenieriaRequerimientos.bloque1.contenido3} ap4={data.IngenieriaRequerimientos.bloque1.contenido4} ap5={data.IngenieriaRequerimientos.bloque1.contenido5}
                caracteristicas={data.IngenieriaRequerimientos.tituloBloqueB}
                carac1={data.IngenieriaRequerimientos.bloque2.contenido1} carac2={data.IngenieriaRequerimientos.bloque2.contenido2} carac3={data.IngenieriaRequerimientos.bloque2.contenido3} carac4={data.IngenieriaRequerimientos.bloque2.contenido4} carac5={data.IngenieriaRequerimientos.bloque2.contenido5}
            
                conceptosT1={data.IngenieriaRequerimientos.conceptos.titulo1}
                conceptosC1={data.IngenieriaRequerimientos.conceptos.concepto1}

                conceptosT2={data.IngenieriaRequerimientos.conceptos.titulo2}
                conceptosC2={data.IngenieriaRequerimientos.conceptos.concepto2}

                conceptosT3={data.IngenieriaRequerimientos.conceptos.titulo3}
                conceptosC3={data.IngenieriaRequerimientos.conceptos.concepto3}

                conceptosT4={data.IngenieriaRequerimientos.conceptos.titulo4}
                conceptosC4={data.IngenieriaRequerimientos.conceptos.concepto4}

                conceptosT5={data.IngenieriaRequerimientos.conceptos.titulo5}
                conceptosC5={data.IngenieriaRequerimientos.conceptos.concepto5}
            />
            <Coffe />
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default IngenieriaRequerimientos;