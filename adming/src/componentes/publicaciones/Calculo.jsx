import Articulo from '../Articulo.jsx';
import Posts from '../Posts.jsx';
import Carrusel from '../Carrusel.jsx';
import DropDown from '../DropDown.jsx';
import Footer from '../Footer.jsx';
import HeaderGral from '../HeaderGral.jsx';
import Space from '../Space.jsx';
function Calculo(props){
    return(
        <>
            <HeaderGral/>
            <Articulo
                    title="Calculo"
                    parraph1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit, lorem vel molestie tempus, nulla tortor efficitur ipsum, quis mollis metus est quis mi. Vestibulum ultricies aliquam imperdiet. Praesent pulvinar posuere leo, quis sollicitudin elit congue vel. Cras porttitor velit ipsum, eget sodales felis interdum a. Cras quis efficitur felis. Nam dictum porta lectus, vitae luctus ante volutpat vitae. Cras aliquam elit in erat aliquam venenatis. Nulla nec nibh at dolor interdum viverra a eget arcu. Vestibulum at mi venenatis, faucibus quam ut, lacinia dolor. Aenean urna tellus, interdum sed elementum sed, convallis id nunc. Sed euismod nunc enim, vel posuere quam interdum ornare. Cras interdum eros vitae laoreet consequat. Cras vehicula erat odio, id laoreet eros vestibulum sit amet. Proin ex turpis, ultricies id tincidunt sit amet, fringilla vel massa. Nullam at sollicitudin odio, in finibus justo.

                    "
                    parraph2="Sed auctor lacus nec lacus sagittis, eget egestas nunc blandit. Sed ac justo ex. Nam nec dignissim turpis. Cras porttitor metus quis mollis semper. Pellentesque efficitur congue tortor at ornare. Nulla tristique, enim at aliquam suscipit, diam turpis blandit elit, ac finibus odio dui volutpat augue. Nulla luctus odio nibh, vel molestie urna porttitor nec. Mauris laoreet erat ac ultricies mattis. Cras ullamcorper massa quis dui gravida, ac egestas nunc dignissim. Suspendisse dictum quis lacus sit amet laoreet. Duis ligula orci, hendrerit eu ornare sed, maximus et lacus. Morbi euismod neque a est interdum, quis blandit augue commodo. Donec at fringilla nulla. Aliquam porta dignissim velit convallis bibendum. Suspendisse convallis finibus orci, a maximus eros hendrerit vitae. Aenean tincidunt purus sed diam tincidunt, et egestas neque laoreet.

                    "
                    parraph3="Ut volutpat nisl nibh, a cursus massa fermentum id. Phasellus at tempor elit. Nam orci orci, tincidunt id tempor at, ornare vel est. Duis mollis cursus volutpat. Suspendisse gravida mi eu turpis tincidunt finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Vestibulum eget nulla quis diam suscipit sollicitudin non in est. Vivamus eget congue lacus. Proin nec leo eget tortor suscipit scelerisque. Etiam blandit justo felis, ut laoreet lacus tempor vel.

                    "
                    aplicaciones="Aplicaciones"
                    ap1="Economia" ap2="Fisica" ap3="Ingenieria" ap4="Finanzas" ap5="Medicina"
                    caracteristicas="Caracteristicas"
                    carac1="consistente" carac2="Completo" carac3="Decidible" carac4="Aldin" carac5="Aldote"/>
            <Space/>
            <DropDown/>
            <Carrusel/>
            <Posts/>
            <Footer/>
        </>
    );
}
export default Calculo;