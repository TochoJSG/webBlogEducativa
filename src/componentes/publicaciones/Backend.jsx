import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import HeaderGral from '../HeaderGral.jsx';
import Space from '../Space.jsx';
import data from '../../contenido/contenido.json';

function Backend(props){
    return(
        <>
            <HeaderGral/>
            <Articulo
                title="El Backend"
                parraph1={data.Backend.parrafo1}
                parraph2={data.Backend.parrafo2}
                parraph3={data.Backend.parrafo3}
                image1={data.Backend.imagen1}
                image2={data.Backend.imagen2}
                aplicaciones={data.Backend.tituloBloqueA}
                ap1={data.Backend.bloque1.contenido1} ap2={data.Backend.bloque1.contenido2} ap3={data.Backend.bloque1.contenido3} ap4={data.Backend.bloque1.contenido4} ap5={data.Backend.bloque1.contenido5}
                caracteristicas={data.Backend.tituloBloqueB}
                carac1={data.Backend.bloque2.contenido1} carac2={data.Backend.bloque2.contenido2} carac3={data.Backend.bloque2.contenido3} carac4={data.Backend.bloque2.contenido4} carac5={data.Backend.bloque2.contenido5}

                conceptosT1={data.Backend.conceptos.titulo1}
                conceptosC1={data.Backend.conceptos.concepto1}

                conceptosT2={data.Backend.conceptos.titulo2}
                conceptosC2={data.Backend.conceptos.concepto2}

                conceptosT3={data.Backend.conceptos.titulo3}
                conceptosC3={data.Backend.conceptos.concepto3}

                conceptosT4={data.Backend.conceptos.titulo4}
                conceptosC4={data.Backend.conceptos.concepto4}

                conceptosT5={data.Backend.conceptos.titulo5}
                conceptosC5={data.Backend.conceptos.concepto5}
            />
            <Space/>
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default Backend;