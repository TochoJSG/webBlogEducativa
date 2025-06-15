import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import Pc from '../Pc.jsx';
import HeaderGral from '../HeaderGral.jsx';
import data from '../../contenido/contenido.json';
import GoogleAnalytics from '../GoogleAnalytics.jsx';

function POO(props){
    return(
        <>
            <GoogleAnalytics/>
            <HeaderGral/>
            <Articulo
                title="POO Orientada a Objetos"
                parraph1={data.POO.parrafo1}
                parraph2={data.POO.parrafo2}
                parraph3={data.POO.parrafo3}
                image1={data.POO.imagen1}
                image2={data.POO.imagen2}
                aplicaciones={data.POO.tituloBloqueA}
                ap1={data.POO.bloque1.contenido1} ap2={data.POO.bloque1.contenido2} ap3={data.POO.bloque1.contenido3} ap4={data.POO.bloque1.contenido4} ap5={data.POO.bloque1.contenido5}
                caracteristicas={data.POO.tituloBloqueB}
                carac1={data.POO.bloque2.contenido1} carac2={data.POO.bloque2.contenido2} carac3={data.POO.bloque2.contenido3} carac4={data.POO.bloque2.contenido4} carac5={data.POO.bloque2.contenido5}
            
                conceptosT1={data.POO.conceptos.titulo1}
                conceptosC1={data.POO.conceptos.concepto1}

                conceptosT2={data.POO.conceptos.titulo2}
                conceptosC2={data.POO.conceptos.concepto2}

                conceptosT3={data.POO.conceptos.titulo3}
                conceptosC3={data.POO.conceptos.concepto3}

                conceptosT4={data.POO.conceptos.titulo4}
                conceptosC4={data.POO.conceptos.concepto4}

                conceptosT5={data.POO.conceptos.titulo5}
                conceptosC5={data.POO.conceptos.concepto5}
            />
            <Pc/>
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default POO;