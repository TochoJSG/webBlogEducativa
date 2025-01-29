import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import Pc from '../Pc.jsx';
import HeaderGral from '../HeaderGral.jsx';
import data from '../../contenido/pruebas.json';

const Programacion = ()=>{
    /*const url = '../../contenido/pruebas.json';
    const data = fetch(url).then(res=>res.json() ).then( data=>console.log(data) ).catch(error=>console.error(error) );
    data.BasesDeDatos === 'BasesDeDatos' ? data = JSON.stringify(data) : console.log('no esiste el registro')*/

    //data.BasesDeDatos ? data = JSON.stringify(data) : console.log('no esiste el registro')

    return(
        <>
            <HeaderGral/>
            <Articulo
                title="Programacion"
                parraph1={data.Programacion.parrafo1}
                parraph2={data.Programacion.parrafo2}
                parraph3={data.Programacion.parrafo3}
                image1={data.Programacion.imagen1}
                image2={data.Programacion.imagen2}
                aplicaciones={data.Programacion.tituloBloqueA}
                ap1={data.Programacion.bloque1.contenido1} ap2={data.Programacion.bloque1.contenido2} ap3={data.Programacion.bloque1.contenido3} ap4={data.Programacion.bloque1.contenido4} ap5={data.Programacion.bloque1.contenido5}
                caracteristicas={data.Programacion.tituloBloqueB}
                carac1={data.Programacion.bloque2.contenido1} carac2={data.Programacion.bloque2.contenido2} carac3={data.Programacion.bloque2.contenido3} carac4={data.Programacion.bloque2.contenido4} carac5={data.Programacion.bloque2.contenido5}

                conceptosT1={data.Programacion.conceptos.titulo1}
                conceptosC1={data.Programacion.conceptos.concepto1}

                conceptosT2={data.Programacion.conceptos.titulo2}
                conceptosC2={data.Programacion.conceptos.concepto2}

                conceptosT3={data.Programacion.conceptos.titulo3}
                conceptosC3={data.Programacion.conceptos.concepto3}

                conceptosT4={data.Programacion.conceptos.titulo4}
                conceptosC4={data.Programacion.conceptos.concepto4}

                conceptosT5={data.Programacion.conceptos.titulo5}
                conceptosC5={data.Programacion.conceptos.concepto5}
            />
            <Pc/>
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
};
export default Programacion;