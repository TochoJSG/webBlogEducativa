import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import Caja from '../Caja.jsx';
import HeaderGral from '../HeaderGral.jsx';
import data from '../../contenido/contenido.json';
import GoogleAnalytics from '../GoogleAnalytics.jsx';

function InvOperaciones(props){
    return(
        <>
            <GoogleAnalytics/>
            <HeaderGral/>
            <Articulo
                title="Investigacion para las Operaciones"
                parraph1={data.InvestigacionDeOperaciones.parrafo1}
                parraph2={data.InvestigacionDeOperaciones.parrafo2}
                parraph3={data.InvestigacionDeOperaciones.parrafo3}
                image1={data.InvestigacionDeOperaciones.imagen1}
                image2={data.InvestigacionDeOperaciones.imagen2}
                aplicaciones={data.InvestigacionDeOperaciones.tituloBloqueA}
                ap1={data.InvestigacionDeOperaciones.bloque1.contenido1} ap2={data.InvestigacionDeOperaciones.bloque1.contenido2} ap3={data.InvestigacionDeOperaciones.bloque1.contenido3} ap4={data.InvestigacionDeOperaciones.bloque1.contenido4} ap5={data.InvestigacionDeOperaciones.bloque1.contenido5}
                caracteristicas={data.InvestigacionDeOperaciones.tituloBloqueB}
                carac1={data.InvestigacionDeOperaciones.bloque2.contenido1} carac2={data.InvestigacionDeOperaciones.bloque2.contenido2} carac3={data.InvestigacionDeOperaciones.bloque2.contenido3} carac4={data.InvestigacionDeOperaciones.bloque2.contenido4} carac5={data.InvestigacionDeOperaciones.bloque2.contenido5}
           
                conceptosT1={data.InvestigacionDeOperaciones.conceptos.titulo1}
                conceptosC1={data.InvestigacionDeOperaciones.conceptos.concepto1}

                conceptosT2={data.InvestigacionDeOperaciones.conceptos.titulo2}
                conceptosC2={data.InvestigacionDeOperaciones.conceptos.concepto2}

                conceptosT3={data.InvestigacionDeOperaciones.conceptos.titulo3}
                conceptosC3={data.InvestigacionDeOperaciones.conceptos.concepto3}

                conceptosT4={data.InvestigacionDeOperaciones.conceptos.titulo4}
                conceptosC4={data.InvestigacionDeOperaciones.conceptos.concepto4}

                conceptosT5={data.InvestigacionDeOperaciones.conceptos.titulo5}
                conceptosC5={data.InvestigacionDeOperaciones.conceptos.concepto5}
            />
            <Caja texto="Este conjunto de Tecnicas es ampliamente usada en logistica y procesos Industriales"/>
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default InvOperaciones;