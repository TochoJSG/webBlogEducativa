import '../estilos/CircleStyle.css';
//const short = require('../static_src/short2.mp4');
//const short2 = require('../static_src/short.mp4');
function CircleStyle(){
    return(
        <div className="circleContent">
            <h2>Desarrollos Empresariales AdmIng</h2>
            <div className="circle circle1">
                <video src="/short.mp4" autoPlay muted loop></video>
            </div>
            
            <div className="circle circle2">
                <video src="/short2.mp4" autoPlay muted loop></video>
            </div>
            
            <div>

            <p>
                Somos una consultoria con la capacidad de desarrollar Soluciones Integrales Informáticas y de negocios en general gracias a la asociación de profesionales del Instituto Politecnico Nacional interdisciplinarios, con formación en las ramas Administrativas y de Ingenieria.
            </p>

            <p>
                No necesitas saber de sistemas ni informática, platicanos de tu negocio, que objetivos tiene, que problematicas enfrenta y nosotros te plantearemos al menos una propuesta de valor para llevar tu negocio al siguiente nivel con opciones para diversos presupuestos.
            </p>
            <p>
                La ética es nuestra base de trabajo, con productos garantizados y adecuados a diversos presupuestos, todos apegados a estanderes de desarrollo modernos y seguros.
            </p>
            
            </div>
        </div>
    );
}
export default CircleStyle;