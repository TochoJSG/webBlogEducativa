import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import HeaderGral from '../HeaderGral.jsx';
import Pc from '../Pc.jsx';
import data from '../../contenido/contenido.json';

function ProgramacionWeb(props){
    return(
        <>
            <HeaderGral/>
            <Articulo
                title="programacion Web"
                parraph1={data.ProgramacionWeb.parrafo1}
                parraph2={data.ProgramacionWeb.parrafo2}
                parraph3={data.ProgramacionWeb.parrafo3}
                image1={data.ProgramacionWeb.imagen1}
                image2={data.ProgramacionWeb.imagen2}
                aplicaciones={data.ProgramacionWeb.tituloBloqueA}
                ap1={data.ProgramacionWeb.bloque1.contenido1} ap2={data.ProgramacionWeb.bloque1.contenido2} ap3={data.ProgramacionWeb.bloque1.contenido3} ap4={data.ProgramacionWeb.bloque1.contenido4} ap5={data.ProgramacionWeb.bloque1.contenido5}
                caracteristicas={data.ProgramacionWeb.tituloBloqueB}
                carac1={data.ProgramacionWeb.bloque2.contenido1} carac2={data.ProgramacionWeb.bloque2.contenido2} carac3={data.ProgramacionWeb.bloque2.contenido3} carac4={data.ProgramacionWeb.bloque2.contenido4} carac5={data.ProgramacionWeb.bloque2.contenido5}
            
                conceptosT1={data.ProgramacionWeb.conceptos.titulo1}
                conceptosC1={data.ProgramacionWeb.conceptos.concepto1}

                conceptosT2={data.ProgramacionWeb.conceptos.titulo2}
                conceptosC2={data.ProgramacionWeb.conceptos.concepto2}

                conceptosT3={data.ProgramacionWeb.conceptos.titulo3}
                conceptosC3={data.ProgramacionWeb.conceptos.concepto3}

                conceptosT4={data.ProgramacionWeb.conceptos.titulo4}
                conceptosC4={data.ProgramacionWeb.conceptos.concepto4}

                conceptosT5={data.ProgramacionWeb.conceptos.titulo5}
                conceptosC5={data.ProgramacionWeb.conceptos.concepto5}
            />
            <DropDown />
            <Pc/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default ProgramacionWeb;