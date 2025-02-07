import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import Smartphone from '../Smartphone.jsx';
import HeaderGral from '../HeaderGral.jsx';
import data from '../../contenido/contenido.json';

function Finanzas(props){
    return(
        <>
            <HeaderGral/>
            <Articulo
                title="Finanzas"
                parraph1={data.Finanzas.parrafo1}
                parraph2={data.Finanzas.parrafo2}
                parraph3={data.Finanzas.parrafo3}
                image1={data.Finanzas.imagen1}
                image2={data.Finanzas.imagen2}
                aplicaciones={data.Finanzas.tituloBloqueA}
                ap1={data.Finanzas.bloque1.contenido1} ap2={data.Finanzas.bloque1.contenido2} ap3={data.Finanzas.bloque1.contenido3} ap4={data.Finanzas.bloque1.contenido4} ap5={data.Finanzas.bloque1.contenido5}
                caracteristicas={data.Finanzas.tituloBloqueB}
                carac1={data.Finanzas.bloque2.contenido1} carac2={data.Finanzas.bloque2.contenido2} carac3={data.Finanzas.bloque2.contenido3} carac4={data.Finanzas.bloque2.contenido4} carac5={data.Finanzas.bloque2.contenido5}
            
                conceptosT1={data.Finanzas.conceptos.titulo1}
                conceptosC1={data.Finanzas.conceptos.concepto1}

                conceptosT2={data.Finanzas.conceptos.titulo2}
                conceptosC2={data.Finanzas.conceptos.concepto2}

                conceptosT3={data.Finanzas.conceptos.titulo3}
                conceptosC3={data.Finanzas.conceptos.concepto3}

                conceptosT4={data.Finanzas.conceptos.titulo4}
                conceptosC4={data.Finanzas.conceptos.concepto4}

                conceptosT5={data.Finanzas.conceptos.titulo5}
                conceptosC5={data.Finanzas.conceptos.concepto5}
            />
            <Smartphone title=""/>
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default Finanzas;