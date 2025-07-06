import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import Walker from '../Walker.jsx';
import HeaderGral from '../HeaderGral.jsx';
import data from '../../contenido/contenido.json';
import GoogleAnalytics from '../GoogleAnalytics.jsx';

function Administracion(props){
    //const data = fetch('../contenido/contenido.json').then( res=> res.json() ).then( data=> console.log(data) )
    return(
        <>
            <GoogleAnalytics/>
            <HeaderGral/>
            <Articulo
                title="Administracion"
                parraph1={data.Administracion.parrafo1}
                parraph2={data.Administracion.parrafo2}
                parraph3={data.Administracion.parrafo3}
                image1={data.Administracion.imagen1}
                image2={data.Administracion.imagen2}
                aplicaciones={data.Administracion.tituloBloqueA}
                ap1={data.Administracion.bloque1.contenido1} ap2={data.Administracion.bloque1.contenido2} ap3={data.Administracion.bloque1.contenido3} ap4={data.Administracion.bloque1.contenido4} ap5={data.Administracion.bloque1.contenido5}
                caracteristicas={data.Administracion.tituloBloqueB}
                carac1={data.Administracion.bloque2.contenido1} carac2={data.Administracion.bloque2.contenido2} carac3={data.Administracion.bloque2.contenido3} carac4={data.Administracion.bloque2.contenido4} carac5={data.Administracion.bloque2.contenido5}

                conceptosT1={data.Administracion.conceptos.titulo1}
                conceptosC1={data.Administracion.conceptos.concepto1}

                conceptosT2={data.Administracion.conceptos.titulo2}
                conceptosC2={data.Administracion.conceptos.concepto2}

                conceptosT3={data.Administracion.conceptos.titulo3}
                conceptosC3={data.Administracion.conceptos.concepto3}

                conceptosT4={data.Administracion.conceptos.titulo4}
                conceptosC4={data.Administracion.conceptos.concepto4}

                conceptosT5={data.Administracion.conceptos.titulo5}
                conceptosC5={data.Administracion.conceptos.concepto5}
            />
            <Walker/>
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default Administracion;