import '../estilos/Skills.css';

const Skills = () =>{
    return(
        <section className="sectionFS">
        <div className="center">
            <h1>Habilidades de Software</h1>
            <div className="skillsBox">
                <p>HTML</p>
                <p>90%</p>
                <div className="skill">
                    <div className="skill_level" style={{ width: '90%' }}></div>
                </div>
            </div>
            
            <div className="skillsBox">
                <p>CSS</p>
                <p>66%</p>
                <div className="skill">
                    <div className="skill_level" style={{ width: '66%' }}></div>
                </div>
            </div>

            <div className="skillsBox">
                <p>JavaScript</p>
                <p>80%</p>
                <div className="skill">
                    <div className="skill_level" style={{ width: '80%' }}></div>
                </div>
            </div>

            <div className="skillsBox">
                <p>SQL</p>
                <p>85%</p>
                <div className="skill">
                    <div className="skill_level" style={{ width: '85%' }}></div>
                </div>
            </div>
            
            <div className="skillsBox">
                <p>jQuery</p>
                <p>66%</p>
                <div className="skill">
                    <div className="skill_level" style={{ width: '66%' }}></div>
                </div>
            </div>

            <div className="skillsBox">
                <p>Java</p>
                <p>60%</p>
                <div className="skill">
                    <div className="skill_level" style={{ width: '60%' }}></div>
                </div>
            </div>

        </div>
        </section>
    );
};

export default Skills;