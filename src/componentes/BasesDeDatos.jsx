import Articulo from './Articulo.jsx';
import Posts from './Posts.jsx';
import Carrusel from './Carrusel.jsx';
import DropDown from './DropDown.jsx';
import Footer from './Footer.jsx';
import Footer from './Footer.jsx';
function BasesDeDatos(props){
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
export default BasesDeDatos;