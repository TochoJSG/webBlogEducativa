import Watsapp from './Watsapp';
import FlotanteSocial from './FlotanteSocial';
import Grafica from './Grafica';
import HeaderCv from './HeaderCv';
import Skills from './Skills';
import Skills2 from './Skills2';
import CardTexto from './CardTexto';
/**
 * /jorge-salgado-fullstack
 */
const Curriculum = () =>{
    return(
        <div className="containerFS">
            
            <HeaderCv />
            
            <Skills />

            <Skills2 
            texto="Me he desempeñado en Soporte Técnico nivel Software, configurando y actualizando equipos, solucionando remotamente situaciones de usuarios, monitoreando los hosting; como desarollador he trabajado en modulos en C# y Java, módulos y componentes con HTML, CSS, JavaScript y Typescript, me especilaizo en el Stack MERN, consumo de Servcios API, integraciones de procesoso con pasarelas de pago, UI/UX optimizado. He trabajado con servicios hosting como infraestructura y NEtSuite de Oracle, estoy conciente en temas de Seguridad Informatica y redes en general ademas que he trabajado con linea de comandos, conexions SSH y comando en Ubuntu de Base Linux; Como DBA he trabajado con SQL Server aunque más con MySQL, realizando cargas de catalogos, consultas optimizadas bajo peticion, trabajo con transacciones y generando Backups"
            />

            <Grafica />

            <CardTexto 
                title="Sobre este Sitio"
                content="Este sitio es un demo del potencial de desarrollo en cuanto a Frontend con componentes diversos e interactivos. El sitio aplica tecnicas de optimizacion UI/UX, tecnicas SEO para el posicionamiento, tags de metrica para monitorear el trafico con analytics, consumo API, una BD NoSQL para la carga del contenido que se renderiza a modo de plantillas, todo desarrollado con el Stack Mern. Las liberaciones se realizan en una IaaS gestionada via terminal con puro comando Ubuntu que es de base Linux (usado para configurar redes e infraestructuras en general), el despliegue es dinamico gracias a Webhooks con GitHub por lo que tambien usa Repos remotos"
            />

            <FlotanteSocial/>

            <Watsapp />
            
        </div>
    );
};

export default Curriculum;