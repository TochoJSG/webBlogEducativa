import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import HeaderGral from '../HeaderGral.jsx';
import Coffe from '../Coffe.jsx';
import data from '../../contenido/contenido.json';

function MarketingDigital(props){
    return(
        <>
            <HeaderGral/>
            <Articulo
                title="Marketing Digital"
                parraph1={data.MarketingDigital.parrafo1}
                parraph2={data.MarketingDigital.parrafo2}
                parraph3={data.MarketingDigital.parrafo3}
                image1={data.MarketingDigital.imagen1}
                image2={data.MarketingDigital.imagen2}
                aplicaciones={data.MarketingDigital.tituloBloqueA}
                ap1={data.MarketingDigital.bloque1.contenido1} ap2={data.MarketingDigital.bloque1.contenido2} ap3={data.MarketingDigital.bloque1.contenido3} ap4={data.MarketingDigital.bloque1.contenido4} ap5={data.MarketingDigital.bloque1.contenido5}
                caracteristicas={data.MarketingDigital.tituloBloqueB}
                carac1={data.MarketingDigital.bloque2.contenido1} carac2={data.MarketingDigital.bloque2.contenido2} carac3={data.MarketingDigital.bloque2.contenido3} carac4={data.MarketingDigital.bloque2.contenido4} carac5={data.MarketingDigital.bloque2.contenido5}
            
                conceptosT1={data.MarketingDigital.conceptos.titulo1}
                conceptosC1={data.MarketingDigital.conceptos.concepto1}

                conceptosT2={data.MarketingDigital.conceptos.titulo2}
                conceptosC2={data.MarketingDigital.conceptos.concepto2}

                conceptosT3={data.MarketingDigital.conceptos.titulo3}
                conceptosC3={data.MarketingDigital.conceptos.concepto3}

                conceptosT4={data.MarketingDigital.conceptos.titulo4}
                conceptosC4={data.MarketingDigital.conceptos.concepto4}

                conceptosT5={data.MarketingDigital.conceptos.titulo5}
                conceptosC5={data.MarketingDigital.conceptos.concepto5}
            />
            <Coffe />
            <DropDown />
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default MarketingDigital;