import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import Smartphone from '../Smartphone.jsx';
import HeaderGral from '../HeaderGral.jsx';
import data from '../../contenido/contenido.json';

function SimulacionRedes(props){
    return(
        <>
            <HeaderGral/>
            <Articulo
                title="Redes & Simulaciones"
                parraph1={data.SimulacionRedes.parrafo1}
                parraph2={data.SimulacionRedes.parrafo2}
                parraph3={data.SimulacionRedes.parrafo3}
                image1={data.SimulacionRedes.imagen1}
                image2={data.SimulacionRedes.imagen2}
                aplicaciones={data.SimulacionRedes.tituloBloqueA}
                ap1={data.SimulacionRedes.bloque1.contenido1} ap2={data.SimulacionRedes.bloque1.contenido2} ap3={data.SimulacionRedes.bloque1.contenido3} ap4={data.SimulacionRedes.bloque1.contenido4} ap5={data.SimulacionRedes.bloque1.contenido5}
                caracteristicas={data.SimulacionRedes.tituloBloqueB}
                carac1={data.SimulacionRedes.bloque2.contenido1} carac2={data.SimulacionRedes.bloque2.contenido2} carac3={data.SimulacionRedes.bloque2.contenido3} carac4={data.SimulacionRedes.bloque2.contenido4} carac5={data.SimulacionRedes.bloque2.contenido5}
            
                conceptosT1={data.SimulacionRedes.conceptos.titulo1}
                conceptosC1={data.SimulacionRedes.conceptos.concepto1}

                conceptosT2={data.SimulacionRedes.conceptos.titulo2}
                conceptosC2={data.SimulacionRedes.conceptos.concepto2}

                conceptosT3={data.SimulacionRedes.conceptos.titulo3}
                conceptosC3={data.SimulacionRedes.conceptos.concepto3}

                conceptosT4={data.SimulacionRedes.conceptos.titulo4}
                conceptosC4={data.SimulacionRedes.conceptos.concepto4}

                conceptosT5={data.SimulacionRedes.conceptos.titulo5}
                conceptosC5={data.SimulacionRedes.conceptos.concepto5}
            />
            <Smartphone title=""/>
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default SimulacionRedes;