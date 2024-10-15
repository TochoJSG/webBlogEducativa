import Articulo from './Articulo.jsx';
import Posts from './Posts.jsx';
import Carrusel from './Carrusel.jsx';
import DropDown from './DropDown.jsx';
import Footer from './Footer.jsx';
import HeaderGral from './HeaderGral.jsx';
import Display from './Display.jsx';
function Metodologias(props){
    return(
        <>
            <HeaderGral/>
            <Articulo
                    title="Metodologias de Desarrollo"
                    parraph1=""
                    parraph2=""
                    parraph3=""
                    aplicaciones=""
                    ap1="" ap2="" ap3="" ap4="" ap5=""
                    caracteristicas=""
                    carac1="" carac2="" carac3="" carac4="" carac5=""/>
            <Display/>
            <DropDown />
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default Metodologias;