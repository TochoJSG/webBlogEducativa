import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import HeaderGral from '../HeaderGral.jsx';
import Display from '../Display.jsx';
import data from '../../contenido/contenido.json';
import GoogleAnalytics from '../GoogleAnalytics.jsx';

function TecnicasSeo(props){
    //const url = '../contenido/contenido.json';
    //const data = fetch( url  ).then( res=> res.json() ).then( data=> console.log(data) );//.catch(console.error(error))
    /*const cont = async(req,res)=>{
        try{
            const response = await fetch(url);
            const data = await response.json();
            res.status(200).json(data);
        }catch(error){
            res.status(500).json('error en lapeticion');
            console.error(error);
        }
    };*/
    return(
        <>
            <GoogleAnalytics/>
            <HeaderGral/>
            <Articulo
                title="Tecnicas de Posicionamiento Seo"
                parraph1={data.TecnicasSeo.parrafo1}
                parraph2={data.TecnicasSeo.parrafo2}
                parraph3={data.TecnicasSeo.parrafo3}
                image1={data.TecnicasSeo.imagen1}
                image2={data.TecnicasSeo.imagen2}
                aplicaciones={data.TecnicasSeo.tituloBloqueA}
                ap1={data.TecnicasSeo.bloque1.contenido1} ap2={data.TecnicasSeo.bloque1.contenido2} ap3={data.TecnicasSeo.bloque1.contenido3} ap4={data.TecnicasSeo.bloque1.contenido4} ap5={data.TecnicasSeo.bloque1.contenido5}
                caracteristicas={data.TecnicasSeo.tituloBloqueB}
                carac1={data.TecnicasSeo.bloque2.contenido1} carac2={data.TecnicasSeo.bloque2.contenido2} carac3={data.TecnicasSeo.bloque2.contenido3} carac4={data.TecnicasSeo.bloque2.contenido4} carac5={data.TecnicasSeo.bloque2.contenido5}
            
                conceptosT1={data.TecnicasSeo.conceptos.titulo1}
                conceptosC1={data.TecnicasSeo.conceptos.concepto1}

                conceptosT2={data.TecnicasSeo.conceptos.titulo2}
                conceptosC2={data.TecnicasSeo.conceptos.concepto2}

                conceptosT3={data.TecnicasSeo.conceptos.titulo3}
                conceptosC3={data.TecnicasSeo.conceptos.concepto3}

                conceptosT4={data.TecnicasSeo.conceptos.titulo4}
                conceptosC4={data.TecnicasSeo.conceptos.concepto4}

                conceptosT5={data.TecnicasSeo.conceptos.titulo5}
                conceptosC5={data.TecnicasSeo.conceptos.concepto5}
            />
            <Display/>
            <DropDown />
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default TecnicasSeo;