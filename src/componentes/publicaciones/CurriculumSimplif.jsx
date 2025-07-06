//import ReactDOM from 'react-dom';
//import { library } from '@fortawesome/fontawesome-svg-core';
//import { fab } from '@fortawesome/free-brands-svg-icons';
//import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cv from '../Cv.jsx';
const usuario = require('../../imagenes/jorge_1.jpeg');
const usuario2 = require('../../imagenes/jorge_3.jpg');

function CurriculumSimplif(){
    return(
        <Cv
            usuarioImg={usuario}
            usuarioImg2={usuario2}
            nombre="Jorge Salgado"
            cargo="Fullstack Developer"
            tel="52 55 17 97 17 06"
            mail="jjorgess081@gmail.com"
            web="https://adming-consulting.com/jorge-salgado-fullstack"
            github="https://github.com/TochoJSG?tab=repositories"
            ubicacion="CDMX, Mexico"

            perfil="Soy un Licenciado en Ciencias de la Informatica por UPIICSA, IPN. Ademas de Técnico en Administracion de Empresas por mi formación bachillerato en el CECyT 13 o Vacional 13 igualmente parte del IPN, este titulo es relevante porque adquiri conocimientos en procesos, contabilidad, mercadotecnia y finanzas. En mi formación di mis primeros pasos con lenguajes de bajo y medio nivel, Ensamblador y C/C++ por lo que considero tengo buenas bases en mi lógica de programación, todo esto fue antes de la IA por lo que mis bases pueden considerarse aun más solidas. Tengo experiencia y pasión por la programación, puedo dedicar horas a estar sentado desarrollano y resolviendo problemas. Además en lo personal soy un deportista por lo que mi condición física es óptima para aguantar los desvelos y trasnochadas que implica a veces dedicarse a este negocio. Tengo conocimiento Fullstack, es decir se de estilado de componentes, UX/UI y de procesos Backend así como de Bases de Datos, pero mi inclinacion personal es por completo a las Bases de Datos y es mi especialidad Universitaria"
            periodoE1=""
            tituloEsc1="Bachillerato - Técnico en Administración de Empresas"
            escuela1="CECyT 13 Ricardo Flores Magón"

            periodoE2=""
            tituloEsc2="Lic. en Ciencias de la Informática"
            escuela2="UPIICSA, IPN"

            periodoT1="2020-2023"
            trabajo1="Soporte / Desarrollo / DBA jr Alro Consulting"
            cargo1="DBA jr"
            desc1="Colaboré en una consultoria con un contrato por proyecto, donde inicie dando Soporte Técnico a nivel Software a los usuarios con herramientas remotas como AnyDesk, configurando equipos, manteniendo y monitoreando aspectos del hosting y generales del sistema; luego pase a la parte de desarrollo colaborando con el desarrollo de funcionalidades y estilado de algunos modulos con C# y algunos con JAVA; finalmente en la etapa final me confiaron accesos de administracion de Base de Datos y me desempeñe como DBA jr colaborando en consultas bajo requerimiento, cargas de catalogos de datos, y modificaciones a los datos mediante transacciones con SQL Server; el proyecto general era de un sistema Integral de gestión documental web con un cliente local para algunos usuarios"

            periodoT2="2023-2024"
            trabajo2="E-Commerce"
            cargo2="Fullstack Jr"
            desc2="Colaboré en una importante empresa mexicana de Ecommerce socia de mercado libre como desarrollador Web fullstack donde hacia desarrollo de modulos y componentes bajo requerimiento utilizando la solucion integral de Oracle NetSuite, comunicaciones con servicios API y estilizado ademas de modulos que interactuaban con el DBMS MySQL. El lenguaje principal de desarrollo era Typescript, con CSS y MySQL como SMBD, la colaboracion se hacia mediante GitHub por lo que tambien estoy familiarizado con ese modo de trabajo colabroativo y los comandos"

            periodoT3="2024-actual"
            trabajo3="Freelance"
            cargo3="Desarrollador Fullstack"
            desc3="Luego de esa experiencia me dedique a desarrollos por mi cuenta, profundice mi experiencia en el e-commerce, intregración de servicios API, conomineot en tecnicas SEO y de posicionamiento de Sitios, desarrollos de aplicaciones moviles y desk APP con el Stack MERN aprovechando el poder de NODE. Este sitio esta realizado con REACT y las liberaciones y gestiones de la infraestructura Host se realizan mediante comandos Ubuntu de base Linux por lo que tambien estoy familiarizado con ese conocimiento de comandos"

            interes1="Sports and Excersise"
            interes2="Sing and Dance"
            interes3="Explore and drive, the city or any other town in my country"
        />
    );
}
export default CurriculumSimplif;