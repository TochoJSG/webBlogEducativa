import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import Pc from '../Pc.jsx';
import HeaderGral from '../HeaderGral.jsx';
import data from '../../contenido/contenido.json';
import GoogleAnalytics from '../GoogleAnalytics.jsx';

function Infraestructura(props){
    return(
        <>
            <GoogleAnalytics/>
            <HeaderGral/>
            <Articulo
                title="Infraestructura"
                parraph1={data.Infraestructura.parrafo1}
                parraph2={data.Infraestructura.parrafo2}
                parraph3={data.Infraestructura.parrafo3}
                image1={data.Infraestructura.imagen1}
                image2={data.Infraestructura.imagen2}
                aplicaciones={data.Infraestructura.tituloBloqueA}
                ap1={data.Infraestructura.bloque1.contenido1} ap2={data.Infraestructura.bloque1.contenido2} ap3={data.Infraestructura.bloque1.contenido3} ap4={data.Infraestructura.bloque1.contenido4} ap5={data.Infraestructura.bloque1.contenido5}
                caracteristicas={data.Infraestructura.tituloBloqueB}
                carac1={data.Infraestructura.bloque2.contenido1} carac2={data.Infraestructura.bloque2.contenido2} carac3={data.Infraestructura.bloque2.contenido3} carac4={data.Infraestructura.bloque2.contenido4} carac5={data.Infraestructura.bloque2.contenido5}
            
                conceptosT1={data.Infraestructura.conceptos.titulo1}
                conceptosC1={data.Infraestructura.conceptos.concepto1}

                conceptosT2={data.Infraestructura.conceptos.titulo2}
                conceptosC2={data.Infraestructura.conceptos.concepto2}

                conceptosT3={data.Infraestructura.conceptos.titulo3}
                conceptosC3={data.Infraestructura.conceptos.concepto3}

                conceptosT4={data.Infraestructura.conceptos.titulo4}
                conceptosC4={data.Infraestructura.conceptos.concepto4}

                conceptosT5={data.Infraestructura.conceptos.titulo5}
                conceptosC5={data.Infraestructura.conceptos.concepto5}
            />
            <Pc/>
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default Infraestructura;