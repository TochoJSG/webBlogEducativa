import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import HeaderGral from '../HeaderGral.jsx';
import data from '../../contenido/contenido.json';
import GoogleAnalytics from '../GoogleAnalytics.jsx';

function ModelosPruebas(props){
    return(
        <>
            <GoogleAnalytics/>
            <HeaderGral/>
            <Articulo
                title="Modelos de Pruebas de Software"
                parraph1={data.ModelosPruebas.parrafo1}
                parraph2={data.ModelosPruebas.parrafo2}
                parraph3={data.ModelosPruebas.parrafo3}
                image1={data.ModelosPruebas.imagen1}
                image2={data.ModelosPruebas.imagen2}
                aplicaciones={data.ModelosPruebas.tituloBloqueA}
                ap1={data.ModelosPruebas.bloque1.contenido1} ap2={data.ModelosPruebas.bloque1.contenido2} ap3={data.ModelosPruebas.bloque1.contenido3} ap4={data.ModelosPruebas.bloque1.contenido4} ap5={data.ModelosPruebas.bloque1.contenido5}
                caracteristicas={data.ModelosPruebas.tituloBloqueB}
                carac1={data.ModelosPruebas.bloque2.contenido1} carac2={data.ModelosPruebas.bloque2.contenido2} carac3={data.ModelosPruebas.bloque2.contenido3} carac4={data.ModelosPruebas.bloque2.contenido4} carac5={data.ModelosPruebas.bloque2.contenido5}
           
                conceptosT1={data.ModelosPruebas.conceptos.titulo1}
                conceptosC1={data.ModelosPruebas.conceptos.concepto1}

                conceptosT2={data.ModelosPruebas.conceptos.titulo2}
                conceptosC2={data.ModelosPruebas.conceptos.concepto2}

                conceptosT3={data.ModelosPruebas.conceptos.titulo3}
                conceptosC3={data.ModelosPruebas.conceptos.concepto3}

                conceptosT4={data.ModelosPruebas.conceptos.titulo4}
                conceptosC4={data.ModelosPruebas.conceptos.concepto4}

                conceptosT5={data.ModelosPruebas.conceptos.titulo5}
                conceptosC5={data.ModelosPruebas.conceptos.concepto5}
            />
            <DropDown />
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default ModelosPruebas;