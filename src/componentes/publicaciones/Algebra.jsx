import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import Pc from '../Pc.jsx';
import HeaderGral from '../HeaderGral.jsx';
import data from '../../contenido/contenido.json';

function Algebra(props){
    //const data = fetch('../contenido/contenido.json').then( res=> res.json() ).then( data=> console.log(data) )
    return(
        <>
            <HeaderGral/>
            <Articulo
                title="Algebra"
                parraph1={data.Algebra.parrafo1}
                parraph2={data.Algebra.parrafo2}
                parraph3={data.Algebra.parrafo3}
                image1={data.Algebra.imagen1}
                image2={data.Algebra.imagen2}
                aplicaciones={data.Algebra.tituloBloqueA}
                ap1={data.Algebra.bloque1.contenido1} ap2={data.Algebra.bloque1.contenido2} ap3={data.Algebra.bloque1.contenido3} ap4={data.Algebra.bloque1.contenido4} ap5={data.Algebra.bloque1.contenido5}
                caracteristicas={data.Algebra.tituloBloqueB}
                carac1={data.Algebra.bloque2.contenido1} carac2={data.Algebra.bloque2.contenido2} carac3={data.Algebra.bloque2.contenido3} carac4={data.Algebra.bloque2.contenido4} carac5={data.Algebra.bloque2.contenido5}

                conceptosT1={data.Algebra.conceptos.titulo1}
                conceptosC1={data.Algebra.conceptos.concepto1}

                conceptosT2={data.Algebra.conceptos.titulo2}
                conceptosC2={data.Algebra.conceptos.concepto2}

                conceptosT3={data.Algebra.conceptos.titulo3}
                conceptosC3={data.Algebra.conceptos.concepto3}

                conceptosT4={data.Algebra.conceptos.titulo4}
                conceptosC4={data.Algebra.conceptos.concepto4}

                conceptosT5={data.Algebra.conceptos.titulo5}
                conceptosC5={data.Algebra.conceptos.concepto5}
            />
            <Pc/>
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default Algebra;