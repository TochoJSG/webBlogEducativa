import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import Smartphone from '../Smartphone.jsx';
import HeaderGral from '../HeaderGral.jsx';
import data from '../../contenido/contenido.json';
import GoogleAnalytics from '../GoogleAnalytics.jsx';

function Contabilidad(props){
    return(
        <>  
            <GoogleAnalytics/>
            <HeaderGral/>
            <Articulo
                title="Contabilidad"
                parraph1={data.Contabilidad.parrafo1}
                parraph2={data.Contabilidad.parrafo2}
                parraph3={data.Contabilidad.parrafo3}
                image1={data.Contabilidad.imagen1}
                image2={data.Contabilidad.imagen2}
                aplicaciones={data.Contabilidad.tituloBloqueA}
                ap1={data.Contabilidad.bloque1.contenido1} ap2={data.Contabilidad.bloque1.contenido2} ap3={data.Contabilidad.bloque1.contenido3} ap4={data.Contabilidad.bloque1.contenido4} ap5={data.Contabilidad.bloque1.contenido5}
                caracteristicas={data.Contabilidad.tituloBloqueB}
                carac1={data.Contabilidad.bloque2.contenido1} carac2={data.Contabilidad.bloque2.contenido2} carac3={data.Contabilidad.bloque2.contenido3} carac4={data.Contabilidad.bloque2.contenido4} carac5={data.Contabilidad.bloque2.contenido5}
           
                conceptosT1={data.Contabilidad.conceptos.titulo1}
                conceptosC1={data.Contabilidad.conceptos.concepto1}

                conceptosT2={data.Contabilidad.conceptos.titulo2}
                conceptosC2={data.Contabilidad.conceptos.concepto2}

                conceptosT3={data.Contabilidad.conceptos.titulo3}
                conceptosC3={data.Contabilidad.conceptos.concepto3}

                conceptosT4={data.Contabilidad.conceptos.titulo4}
                conceptosC4={data.Contabilidad.conceptos.concepto4}

                conceptosT5={data.Contabilidad.conceptos.titulo5}
                conceptosC5={data.Contabilidad.conceptos.concepto5}
            />
            <Smartphone title=""/>
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default Contabilidad;