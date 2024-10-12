import Articulo from './Articulo.jsx';
import Posts from './Posts.jsx';
import Carrusel from './Carrusel.jsx';
import DropDown from './DropDown.jsx';
import Footer from './Footer.jsx';
import Smartphone from './Smartphone.jsx';
function Finanzas(props){
    return(
        <>
            <Articulo
                    title=""
                    parraph1=""
                    parraph2=""
                    parraph3=""
                    aplicaciones=""
                    ap1="" ap2="" ap3="" ap4="" ap5=""
                    caracteristicas=""
                    carac1="" carac2="" carac3="" carac4="" carac5=""/>
            <Smartphone title=""/>
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default Finanzas;