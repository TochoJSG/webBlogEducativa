import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import HeaderGral from '../HeaderGral.jsx';
import Pc from '../Pc.jsx';
import data from '../../contenido/contenido.json';
import GoogleAnalytics from '../GoogleAnalytics.jsx';

function BasesNoSQL(props){
    return(
        <>
            <GoogleAnalytics/>
            <HeaderGral/>
            <Articulo
                title="Bases de Datos NoSQL"
                parraph1={data.BasesNoSQL.parrafo1}
                parraph2={data.BasesNoSQL.parrafo2}
                parraph3={data.BasesNoSQL.parrafo3}
                image1={data.BasesNoSQL.imagen1}
                image2={data.BasesNoSQL.imagen2}
                BasesNoSQL={data.BasesNoSQL.tituloBloqueA}
                ap1={data.BasesNoSQL.bloque1.contenido1} ap2={data.BasesNoSQL.bloque1.contenido2} ap3={data.BasesNoSQL.bloque1.contenido3} ap4={data.BasesNoSQL.bloque1.contenido4} ap5={data.BasesNoSQL.bloque1.contenido5}
                caracteristicas={data.BasesNoSQL.tituloBloqueB}
                carac1={data.BasesNoSQL.bloque2.contenido1} carac2={data.BasesNoSQL.bloque2.contenido2} carac3={data.BasesNoSQL.bloque2.contenido3} carac4={data.BasesNoSQL.bloque2.contenido4} carac5={data.BasesNoSQL.bloque2.contenido5}
            
                conceptosT1={data.BasesNoSQL.conceptos.titulo1}
                conceptosC1={data.BasesNoSQL.conceptos.concepto1}

                conceptosT2={data.BasesNoSQL.conceptos.titulo2}
                conceptosC2={data.BasesNoSQL.conceptos.concepto2}

                conceptosT3={data.BasesNoSQL.conceptos.titulo3}
                conceptosC3={data.BasesNoSQL.conceptos.concepto3}

                conceptosT4={data.BasesNoSQL.conceptos.titulo4}
                conceptosC4={data.BasesNoSQL.conceptos.concepto4}

                conceptosT5={data.BasesNoSQL.conceptos.titulo5}
                conceptosC5={data.BasesNoSQL.conceptos.concepto5}
            />
            <DropDown/>
            <Pc/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default BasesNoSQL;