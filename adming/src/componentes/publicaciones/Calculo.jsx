import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import HeaderGral from '../HeaderGral.jsx';
import Space from '../Space.jsx';
import data from '../../contenido/contenido.json';

function Calculo(props){
    return(
        <>
            <HeaderGral/>
            <Articulo
                title="Calculo"
                parraph1={data.Calculo.parrafo1}
                parraph2={data.Calculo.parrafo2}
                parraph3={data.Calculo.parrafo3}
                image1={data.Calculo.imagen1}
                image2={data.Calculo.imagen2}
                aplicaciones={data.Calculo.tituloBloqueA}
                ap1={data.Calculo.bloque1.contenido1} ap2={data.Calculo.bloque1.contenido2} ap3={data.Calculo.bloque1.contenido3} ap4={data.Calculo.bloque1.contenido4} ap5={data.Calculo.bloque1.contenido5}
                caracteristicas={data.Calculo.tituloBloqueB}
                carac1={data.Calculo.bloque2.contenido1} carac2={data.Calculo.bloque2.contenido2} carac3={data.Calculo.bloque2.contenido3} carac4={data.Calculo.bloque2.contenido4} carac5={data.Calculo.bloque2.contenido5}
           
                conceptosT1={data.Calculo.conceptos.titulo1}
                conceptosC1={data.Calculo.conceptos.concepto1}

                conceptosT2={data.Calculo.conceptos.titulo2}
                conceptosC2={data.Calculo.conceptos.concepto2}

                conceptosT3={data.Calculo.conceptos.titulo3}
                conceptosC3={data.Calculo.conceptos.concepto3}

                conceptosT4={data.Calculo.conceptos.titulo4}
                conceptosC4={data.Calculo.conceptos.concepto4}

                conceptosT5={data.Calculo.conceptos.titulo5}
                conceptosC5={data.Calculo.conceptos.concepto5}
            />
            <Space />
            <DropDown />
            <Carrusel />
            <Posts />
            <Footer />
        </>
    );
}
export default Calculo;