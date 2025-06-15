import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import HeaderGral from '../HeaderGral.jsx';
import data from '../../contenido/contenido.json';
import ParticlesBackground from '../ParticlesBackground.jsx';
import GoogleAnalytics from '../GoogleAnalytics.jsx';

function Redes(props){
    return(
        <>
            <GoogleAnalytics/>
            <HeaderGral />
            <Articulo
                title="Redes y Conectividad"
                parraph1={data.Redes.parrafo1}
                parraph2={data.Redes.parrafo2}
                parraph3={data.Redes.parrafo3}

                image1={data.Redes.imagen1}
                image2={data.Redes.imagen2}
                
                aplicaciones={data.Redes.tituloBloqueA}
                ap1={data.Redes.bloque1.contenido1} ap2={data.Redes.bloque1.contenido2} ap3={data.Redes.bloque1.contenido3} ap4={data.Redes.bloque1.contenido4} ap5={data.Redes.bloque1.contenido5}
                caracteristicas={data.Redes.tituloBloqueB}
                carac1={data.Redes.bloque2.contenido1} carac2={data.Redes.bloque2.contenido2} carac3={data.Redes.bloque2.contenido3} carac4={data.Redes.bloque2.contenido4} carac5={data.Redes.bloque2.contenido5}
            
                conceptosT1={data.Redes.conceptos.titulo1}
                conceptosC1={data.Redes.conceptos.concepto1}

                conceptosT2={data.Redes.conceptos.titulo2}
                conceptosC2={data.Redes.conceptos.concepto2}

                conceptosT3={data.Redes.conceptos.titulo3}
                conceptosC3={data.Redes.conceptos.concepto3}

                conceptosT4={data.Redes.conceptos.titulo4}
                conceptosC4={data.Redes.conceptos.concepto4}

                conceptosT5={data.Redes.conceptos.titulo5}
                conceptosC5={data.Redes.conceptos.concepto5}
            />
            <ParticlesBackground />
            <DropDown />
            <Carrusel />
            <Posts />
            <Footer />
        </>
    );
}
export default Redes;