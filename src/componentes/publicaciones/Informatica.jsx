import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import HeaderGral from '../HeaderGral.jsx';
//import Space from '../Space.jsx';
import data from '../../contenido/contenido.json';
import GoogleAnalytics from '../GoogleAnalytics.jsx';

function Informatica(props){
    return(
        <>
            <GoogleAnalytics/>
            <HeaderGral/>
            <Articulo
                title="Informatica"
                parraph1={data.Informatica.parrafo1}
                parraph2={data.Informatica.parrafo2}
                parraph3={data.Informatica.parrafo3}
                image1={data.Informatica.imagen1}
                image2={data.Informatica.imagen2}
                aplicaciones={data.Informatica.tituloBloqueA}
                ap1={data.Informatica.bloque1.contenido1} ap2={data.Informatica.bloque1.contenido2} ap3={data.Informatica.bloque1.contenido3} ap4={data.Informatica.bloque1.contenido4} ap5={data.Informatica.bloque1.contenido5}
                caracteristicas={data.Informatica.tituloBloqueB}
                carac1={data.Informatica.bloque2.contenido1} carac2={data.Informatica.bloque2.contenido2} carac3={data.Informatica.bloque2.contenido3} carac4={data.Informatica.bloque2.contenido4} carac5={data.Informatica.bloque2.contenido5}
            
                conceptosT1={data.Informatica.conceptos.titulo1}
                conceptosC1={data.Informatica.conceptos.concepto1}

                conceptosT2={data.Informatica.conceptos.titulo2}
                conceptosC2={data.Informatica.conceptos.concepto2}

                conceptosT3={data.Informatica.conceptos.titulo3}
                conceptosC3={data.Informatica.conceptos.concepto3}

                conceptosT4={data.Informatica.conceptos.titulo4}
                conceptosC4={data.Informatica.conceptos.concepto4}

                conceptosT5={data.Informatica.conceptos.titulo5}
                conceptosC5={data.Informatica.conceptos.concepto5}
            />
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default Informatica;