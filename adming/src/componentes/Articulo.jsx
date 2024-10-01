import '../estilos/sitio.css';
function Articulo(props){
    return(
        <section>
            <div className="articulo">
                <div className="title"><h1>Laptop
                    </h1></div>
                <p>Una laptop es una excelente eleccion, como herramienta de trabajo, medio de entretenimiento o ambos, pues hay modelos que reunen todas las prestaciones y <b>puertos</b> de un <a target="_blank" href="computadora.html">PC de escritorio</a> con la ventaja de ser mas compacta y portatil.
                    </p> 
                <p>De estos computadores podemos decir que, las versiones mas austeras pueden no tener todos los puertos de entrada para cables e incluso no traer lector de CD, una tecnologia algo olvidada, pero no estorba; algo que destacar como posible desventaja contra computadores de escritorio es la refrigeracion, exceptuando equipos Gamer y gama alta, suelen ser mas vulnerables a calentamiento en usos prolongados, lo que los puede alentar y desgastar mas rapido, una condicion que se puede superar con un <a target="_blank" href="ventiladores.html">Ventilador Externo</a>: ¿porque se pueden calentar mas?, por el tamaño del ventilador incluido, y por el espacio del CPU (que suele ser 'una caja'), donde la distriubucion de sus componentes tiene mas espacio y por el tamaño es mas facil la ventilacion; otra cualidad que contrasta contra las <a target="_blank" href="computadora.html">PC de escritorio</a>, es lo comodo que puede ser usar una u otra, por el tamaño del teclado y pantalla, y por la estructura misma, pues hay libertad de movimiento entre sus componentes, en una de escritorio se puede acomodar el <a target="_blank" href="teclado.html">Teclado</a> o el <a target="_blank" href="raton.html">mouse</a>, como gustes, acercar o alejar uno de otro; La desventaja mas notoria de las potatiles vs un PC es que, cuando se desgastan sus <b>componentes perifericos</b> (mouse, teclado, monitor) es mas dificil cambiarlos, pues implica trabajo tecnico, en ocasiones mas costoso que comprar uno nuevo, en una de escritorio se desconecta el periferico, se conecta el nuevo y ya quedo.
                    </p>
                <p><b>¿Que considerar para una buena eleccion?</b> La capacidad de la <b>memoria RAM</b>, esta no determinara la capacidad de cuanto podras descargar y almacenar, sino que sera la responsable de la capcidad de respuesta y la rapidez, viene medida en GB y de hecho suele ser menor que la capacidad del Disco Duro o SSD; <b>SSD</b>, <b>Disco Duro</b> o <b>Memoria en Disco</b>, es donde se almacenaran descargas, archivos y programas, se le puede restar importancia a su capcidad, pues existen alternativas para extender cuanto se puede almacenar en un equipo, como una <a href="almacenamiento-externo.html">SD</a> o, con la <b>Compuatcion Ubicua</b>, donde un PC ya es completamente personal, se pueden tener vinculadas cuentas de mail y servicios en la nube, donde ya no solo se pueden guardar archivos, pues hay servicios para utilizar programas directamente de un servicio NUBE, como la suite de Office 360, gastando menos menoria del equipo; de los mas relevante, se debe prestar especial atencion en la descripcion de producto a que procesador trae la <b>Laptop</b>, ya que este es el cerebro, y trabaja diretamente con la <b>RAM</b>, y de este dependera que sea rapida, y no se pasme en pleno uso de programas.
                    </p>
                <img title="portatil" className="mamalon" src="portatil.png" alt="cargando..."/>
                <div className="contenido">
                <div>
                    <h2>Pc de Escritorio vs Portatil
                        </h2>
                    <ul>Ventajas
                        <li>Se puede mover y por lo mismo no solo limitarse a trabajo o escuela; se puede mover para entretenimiento, para presentaciones o trabajar en diferentes lugares</li>
                        <li>Ocupa menos espacio</li>
                        <li>Mismas capacidades con mas versatilidad</li>
                    </ul>
                    <ul>Desventajas
                        <li>Moverla puede dañarla o reducir su tiempo de vida</li>
                        <li>Para trabajo es mas comoda una Pc de escritorio, por el tamaño del monitor y teclado</li>
                        <li>El uso Rudo puede reducir su tiempo de vida pues no es igual de sencillo remplazar teclado, mouse o display o no se puede sustituir por uno mas grande.</li>
                    </ul>
                    <img title="laptop" className="mamalon" src="laptop.png" alt="cargando..."/>		
                </div>
                <div className="pcs"></div>
                </div>
            </div>
            </section>
    );
}
export default Articulo;