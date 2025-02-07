import '../estilos/grafica.css';

const Grafica = () =>{
    return(
        <section className='sectionFS'>
            {/*<section className="grafica">*/}
                <div className="boxGraf">

                    <div className="skill">
                        <div className="graph" style={{height:'90%'}}>
                            <div className="percent">90%</div>
                        </div>
                        <div className="name">Habilidades de programacion</div>
                    </div>

                    <div className="skill">
                        <div className="graph" style={{height:'75%'}}>
                            <div className="percent">75%</div>
                        </div>
                        <div className="name">Perseverancia y dedicacion</div>
                    </div>

                    <div className="skill">
                        <div className="graph" style={{height:'80%'}}>
                            <div className="percent">80%</div>
                        </div>
                        <div className="name">Iniciativa y compromiso</div>
                    </div>
                
                    <div className="skill">
                        <div className="graph" style={{height:'55%'}}>
                            <div className="percent">55%</div>
                        </div>
                        <div className="name">habildades sociales</div>
                    </div>

                    <div className="skill">
                        <div className="graph" style={{height:'95%'}}>
                            <div className="percent">95%</div>
                        </div>
                        <div className="name">Percepcion e intuicion</div>
                    </div>

                </div>
            {/*</section>*/}
        </section>
    )
};

export default Grafica;