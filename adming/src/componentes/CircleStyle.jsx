import '../estilos/CircleStyle.css';
const short = require('../imagenes/short2.mp4');
const short2 = require('../imagenes/short.mp4');
function CircleStyle(){
    return(
        <div className="circleContent">
            <div className="circle circle1">
            <video src={short2} autoplay="" muted="false" loop="">
                    </video>
            </div>
            
            <div className="circle circle2">
            <video src={short} autoplay="" muted="false" loop="">
                    </video>
            </div>
            
            <div>

            <h2>Desarrollos Empresariales AdmIng</h2>
            <p>
                Somos una consultoria de Soluciones Integrales Informaticas y de negocios en general con profesionales del Instituto Politecnico Nacional con formacion en las ramas Administrativas y de Ingenieria.
            </p>

            <p>
                No necesitas saber de sistemas ni informatica, platicanos de tu negocio, que objetivos tiene, que problematicas enfrenta y nosotros te plantearemos al menos una propuesta de valor para llevar tu negocio al siguiente nivel.
            </p>
            <p>
                La etica es nuestra base de trabajo, con productos garantizados y adecuados a diversos presupuestos, todos apegados a estanderes de desarrollo modernos.
            </p>
            
            </div>
        </div>
    );
}
export default CircleStyle;