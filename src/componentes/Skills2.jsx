import '../estilos/Skills2.css';

function Skills2(props){
    return(
    <section className='sectionFS'>
        <div className="containerSkill2">
            <h1>Software Skills</h1>
            <p>{props.texto}
                </p>
            <div className="skill">
                <div className="skill-label" style={{width:'85%'}}>
                    <h3>Frontend</h3>
                    <span className="percent">85%</span>
                    <div style={{ clear: 'both' }}></div>
                    
                    <div className="bar">
                        <div className="progress" style={{width:'100%'}}></div>
                    </div>
                </div>
            </div>
            
            <div className="skill">
                <div className="skill-label" style={{width:'80%'}}>
                    <h3>Backend</h3>
                    <span className="percent">80%</span>
                    <div style={{ clear: 'both' }}></div>
                    
                    <div className="bar">
                        <div className="progress" style={{width:'100%'}}></div>
                    </div>
                </div>
            </div>
            
            <div className="skill">
                <div className="skill-label" style={{width:'70%'}}>
                    <h3>Bases de Datos SQL</h3>
                    <span className="percent">70%</span>
                    <div style={{ clear: 'both' }}></div>
                    
                    <div className="bar">
                        <div className="progress" style={{width:'100%'}}></div>
                    </div>
                </div>
            </div>

            <div className="skill">
                <div className="skill-label" style={{width:'50%'}}>
                    <h3>Bases de Datos noSQL</h3>
                    <span className="percent">50%</span>
                    <div style={{ clear: 'both' }}></div>
                    
                    <div className="bar">
                        <div className="progress" style={{width:'100%'}}></div>
                    </div>
                </div>
            </div>

            <div className="skill">
                <div className="skill-label" style={{width:'60%'}}>
                    <h3>Redes e Infraestructtura TI</h3>
                    <span className="percent">60%</span>
                    <div style={{ clear: 'both' }}></div>
                    
                    <div className="bar">
                        <div className="progress" style={{width:'100%'}}></div>
                    </div>
                </div>
            </div>

	    </div>
        </section>
    );
}
export default Skills2;