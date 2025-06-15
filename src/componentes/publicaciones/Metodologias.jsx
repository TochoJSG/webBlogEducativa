import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import HeaderGral from '../HeaderGral.jsx';
import Display from '../Display.jsx';
import data from '../../contenido/contenido.json';
import GoogleAnalytics from '../GoogleAnalytics.jsx';

function Metodologias(props){
    return(
        <>
            <GoogleAnalytics/>
            <HeaderGral/>
            <Articulo
                title="Metodologias de Desarrollo"
                parraph1={data.Metodologias.parrafo1}
                parraph2={data.Metodologias.parrafo2}
                parraph3={data.Metodologias.parrafo3}
                image1={data.Metodologias.imagen1}
                image2={data.Metodologias.imagen2}
                aplicaciones={data.Metodologias.tituloBloqueA}
                ap1={data.Metodologias.bloque1.contenido1} ap2={data.Metodologias.bloque1.contenido2} ap3={data.Metodologias.bloque1.contenido3} ap4={data.Metodologias.bloque1.contenido4} ap5={data.Metodologias.bloque1.contenido5}
                caracteristicas={data.Metodologias.tituloBloqueB}
                carac1={data.Metodologias.bloque2.contenido1} carac2={data.Metodologias.bloque2.contenido2} carac3={data.Metodologias.bloque2.contenido3} carac4={data.Metodologias.bloque2.contenido4} carac5={data.Metodologias.bloque2.contenido5}
           
                conceptosT1={data.Metodologias.conceptos.titulo1}
                conceptosC1={data.Metodologias.conceptos.concepto1}

                conceptosT2={data.Metodologias.conceptos.titulo2}
                conceptosC2={data.Metodologias.conceptos.concepto2}

                conceptosT3={data.Metodologias.conceptos.titulo3}
                conceptosC3={data.Metodologias.conceptos.concepto3}

                conceptosT4={data.Metodologias.conceptos.titulo4}
                conceptosC4={data.Metodologias.conceptos.concepto4}

                conceptosT5={data.Metodologias.conceptos.titulo5}
                conceptosC5={data.Metodologias.conceptos.concepto5}
            />
            <Display/>
            <DropDown />
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default Metodologias;