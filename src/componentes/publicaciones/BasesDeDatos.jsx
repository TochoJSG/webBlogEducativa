import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import HeaderGral from '../HeaderGral.jsx';
import Pc from '../Pc.jsx';
import data from '../../contenido/contenido.json';
import GoogleAnalytics from '../GoogleAnalytics.jsx';

function BasesDeDatos(props){
    return(
        <>
            <GoogleAnalytics/>
            <HeaderGral/>
            <Articulo
                title="Bases de Datos Relacionales"
                parraph1={data.BasesDeDatos.parrafo1}
                parraph2={data.BasesDeDatos.parrafo2}
                parraph3={data.BasesDeDatos.parrafo3}
                image1={data.BasesDeDatos.imagen1}
                image2={data.BasesDeDatos.imagen2}
                aplicaciones={data.BasesDeDatos.tituloBloqueA}
                ap1={data.BasesDeDatos.bloque1.contenido1} ap2={data.BasesDeDatos.bloque1.contenido2} ap3={data.BasesDeDatos.bloque1.contenido3} ap4={data.BasesDeDatos.bloque1.contenido4} ap5={data.BasesDeDatos.bloque1.contenido5}
                caracteristicas={data.BasesDeDatos.tituloBloqueB}
                carac1={data.BasesDeDatos.bloque2.contenido1} carac2={data.BasesDeDatos.bloque2.contenido2} carac3={data.BasesDeDatos.bloque2.contenido3} carac4={data.BasesDeDatos.bloque2.contenido4} carac5={data.BasesDeDatos.bloque2.contenido5}

                conceptosT1={data.BasesDeDatos.conceptos.titulo1}
                conceptosC1={data.BasesDeDatos.conceptos.concepto1}

                conceptosT2={data.BasesDeDatos.conceptos.titulo2}
                conceptosC2={data.BasesDeDatos.conceptos.concepto2}

                conceptosT3={data.BasesDeDatos.conceptos.titulo3}
                conceptosC3={data.BasesDeDatos.conceptos.concepto3}

                conceptosT4={data.BasesDeDatos.conceptos.titulo4}
                conceptosC4={data.BasesDeDatos.conceptos.concepto4}

                conceptosT5={data.BasesDeDatos.conceptos.titulo5}
                conceptosC5={data.BasesDeDatos.conceptos.concepto5}
            />
            <DropDown/>
            <Pc/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default BasesDeDatos;