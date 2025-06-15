import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import HeaderGral from '../HeaderGral.jsx';
import data from '../../contenido/contenido.json';
import GoogleAnalytics from '../GoogleAnalytics.jsx';
import Pokar from '../Pokar.jsx';

function Probabilidad(props){
    return(
        <>
            <GoogleAnalytics/>
            <HeaderGral/>
            <Articulo
                title="Probabilidad"
                parraph1={data.Probabilidad.parrafo1}
                parraph2={data.Probabilidad.parrafo2}
                parraph3={data.Probabilidad.parrafo3}
                image1={data.Probabilidad.imagen1}
                image2={data.Probabilidad.imagen2}
                aplicaciones={data.Probabilidad.tituloBloqueA}
                ap1={data.Probabilidad.bloque1.contenido1} ap2={data.Probabilidad.bloque1.contenido2} ap3={data.Probabilidad.bloque1.contenido3} ap4={data.Probabilidad.bloque1.contenido4} ap5={data.Probabilidad.bloque1.contenido5}
                caracteristicas={data.Probabilidad.tituloBloqueB}
                carac1={data.Probabilidad.bloque2.contenido1} carac2={data.Probabilidad.bloque2.contenido2} carac3={data.Probabilidad.bloque2.contenido3} carac4={data.Probabilidad.bloque2.contenido4} carac5={data.Probabilidad.bloque2.contenido5}
           
                conceptosT1={data.Probabilidad.conceptos.titulo1}
                conceptosC1={data.Probabilidad.conceptos.concepto1}

                conceptosT2={data.Probabilidad.conceptos.titulo2}
                conceptosC2={data.Probabilidad.conceptos.concepto2}

                conceptosT3={data.Probabilidad.conceptos.titulo3}
                conceptosC3={data.Probabilidad.conceptos.concepto3}

                conceptosT4={data.Probabilidad.conceptos.titulo4}
                conceptosC4={data.Probabilidad.conceptos.concepto4}

                conceptosT5={data.Probabilidad.conceptos.titulo5}
                conceptosC5={data.Probabilidad.conceptos.concepto5}
            />
            <Pokar/>
            <DropDown />
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default Probabilidad;