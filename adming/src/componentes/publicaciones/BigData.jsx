import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import Pc from '../Pc.jsx';
import HeaderGral from '../HeaderGral.jsx';
import data from '../../contenido/contenido.json';

function BigData(props){
    return(
        <>
            <HeaderGral/>
            <Articulo
                title="Big Data"
                parraph1={data.BigData.parrafo1}
                parraph2={data.BigData.parrafo2}
                parraph3={data.BigData.parrafo3}
                image1={data.BigData.imagen1}
                image2={data.BigData.imagen2}
                aplicaciones={data.BigData.tituloBloqueA}
                ap1={data.BigData.bloque1.contenido1} ap2={data.BigData.bloque1.contenido2} ap3={data.BigData.bloque1.contenido3} ap4={data.BigData.bloque1.contenido4} ap5={data.BigData.bloque1.contenido5}
                caracteristicas={data.BigData.tituloBloqueB}
                carac1={data.BigData.bloque2.contenido1} carac2={data.BigData.bloque2.contenido2} carac3={data.BigData.bloque2.contenido3} carac4={data.BigData.bloque2.contenido4} carac5={data.BigData.bloque2.contenido5}
            
                conceptosT1={data.BigData.conceptos.titulo1}
                conceptosC1={data.BigData.conceptos.concepto1}

                conceptosT2={data.BigData.conceptos.titulo2}
                conceptosC2={data.BigData.conceptos.concepto2}

                conceptosT3={data.BigData.conceptos.titulo3}
                conceptosC3={data.BigData.conceptos.concepto3}

                conceptosT4={data.BigData.conceptos.titulo4}
                conceptosC4={data.BigData.conceptos.concepto4}

                conceptosT5={data.BigData.conceptos.titulo5}
                conceptosC5={data.BigData.conceptos.concepto5}
            />
            <Pc/>
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default BigData;