import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import HeaderGral from '../HeaderGral.jsx';
import Pc from '../Pc.jsx';
function BasesDeDatos(props){
    return(
        <>
            <HeaderGral/>
            <Articulo
                    title="Bases de Datos"
                    parraph1="parrafo 1"
                    parraph2="parrafor 2"
                    parraph3="parrafo 3"
                    aplicaciones="aplicaciones"
                    ap1="aplicacion 1" ap2="aplicacion 2" ap3="aplicacion 3" ap4="aplicacion 4" ap5="aplicacion 5"
                    caracteristicas="Caracteristicas"
                    carac1="" carac2="" carac3="" carac4="" carac5=""/>
            <DropDown/>
            <Pc/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default BasesDeDatos;