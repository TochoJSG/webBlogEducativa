import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import Smartphone from '../Smartphone.jsx';
import HeaderGral from '../HeaderGral.jsx';
import data from '../../contenido/contenido.json';

function Aplicaciones(props){
    return(
        <>
            <HeaderGral/>
            <Articulo
                title="Aplicaciones Moviles"
                parraph1={data.Aplicaciones.parrafo1}
                parraph2={data.Aplicaciones.parrafo2}
                parraph3={data.Aplicaciones.parrafo3}
                image1={data.Aplicaciones.imagen1}
                image2={data.Aplicaciones.imagen2}
                aplicaciones={data.Aplicaciones.tituloBloqueA}
                ap1={data.Aplicaciones.bloque1.contenido1} ap2={data.Aplicaciones.bloque1.contenido2} ap3={data.Aplicaciones.bloque1.contenido3} ap4={data.Aplicaciones.bloque1.contenido4} ap5={data.Aplicaciones.bloque1.contenido5}
                caracteristicas={data.Aplicaciones.tituloBloqueB}
                carac1={data.Aplicaciones.bloque2.contenido1} carac2={data.Aplicaciones.bloque2.contenido2} carac3={data.Aplicaciones.bloque2.contenido3} carac4={data.Aplicaciones.bloque2.contenido4} carac5={data.Aplicaciones.bloque2.contenido5}

                conceptosT1={data.Aplicaciones.conceptos.titulo1}
                conceptosC1={data.Aplicaciones.conceptos.concepto1}

                conceptosT2={data.Aplicaciones.conceptos.titulo2}
                conceptosC2={data.Aplicaciones.conceptos.concepto2}

                conceptosT3={data.Aplicaciones.conceptos.titulo3}
                conceptosC3={data.Aplicaciones.conceptos.concepto3}

                conceptosT4={data.Aplicaciones.conceptos.titulo4}
                conceptosC4={data.Aplicaciones.conceptos.concepto4}

                conceptosT5={data.Aplicaciones.conceptos.titulo5}
                conceptosC5={data.Aplicaciones.conceptos.concepto5}
            />
            <Smartphone title=""/>
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default Aplicaciones;