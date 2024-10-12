import Articulo from './Articulo.jsx';
import Posts from './Posts.jsx';
import Carrusel from './Carrusel.jsx';
import DropDown from './DropDown.jsx';
import Footer from './Footer.jsx';
function Contabilidad(props){
    return(
        <>
            <Articulo />
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default Contabilidad;