//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import estiloCVS from '../estilos/CurriculumS.module.css';
//const usuario = require('../../imagenes/jorge_1.jpeg');
/*import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faFile, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';*/

//library.add(faCircleUser, faEnvelope, faGithub, faLocationDot, faFile);

function Cv(props){
    return(
        <div className={estiloCVS.contGeneralCv}>
        <div className={estiloCVS.containerCVS}>
            <div className={estiloCVS.leftSide}>
                <div className={estiloCVS.profilText}>
                    <div className={estiloCVS.imgBx}>
                        <img src={props.usuarioImg} alt="cargando imagen..."/>
                        <img src={props.usuarioImg2} alt="cargando imagen..."/>
                    </div>
                    <h2>{props.nombre}<br/><span>{props.cargo}</span></h2>
                </div>
                
                <div className={estiloCVS.contactInfo}>
                    <h2 className={estiloCVS.title}>Contact Info</h2>
                    <ul>
                        <li>
                            <span className={estiloCVS.icon}>
                                {/*<FontAwesomeIcon icon={['fas', 'faCircleUser']} />*/}
                            </span>
                            <span className={estiloCVS.text}>{props.tel}</span>
                        </li>
                        <li>
                            <span className={estiloCVS.icon}>
                                {/*<FontAwesomeIcon icon={['far', 'envelope']} />*/}
                            </span>
                            <span className={estiloCVS.text}>{props.mail}</span>
                        </li>
                        <li>	
                            <span className={estiloCVS.icon}>
                                {/*<FontAwesomeIcon icon={['fas', 'globe']} />*/}
                            </span>
                            <span className="text">{props.web}</span>
                        </li>
                        <li>
                            <span className={estiloCVS.icon}>
                                {/*<FontAwesomeIcon icon={['fab', 'github']} />*/}
                            </span>
                            <span className={estiloCVS.text}>{props.github}</span>
                        </li>
                        <li>
                            <span className={estiloCVS.icon}>
                                {/*<FontAwesomeIcon icon={['far', 'location-dot']} />*/}
                            </span>
                            <span className={estiloCVS.text}>{props.ubicacion}</span>
                        </li>
                    </ul>
                </div>
                
                <div className={estiloCVS.contactInfo}>{/*estiloCVS.contactInfo.education*/}
                    <h2 className={estiloCVS.title}>Education</h2>
                    <ul>
                        <li>
                            <h5>{props.periodoE1}</h5>
                            <h4>{props.tituloEsc1}</h4>
                            <h4>{props.escuela1}</h4>
                        </li>
                        <li>
                            <h5>{props.periodoE1}</h5>
                            <h4>{props.tituloEsc2}</h4>
                            <h4>{props.escuela2}</h4>
                        </li>
                    </ul>
                </div>
                
                <div className={estiloCVS.contactInfo}>{/*estiloCVS.contactInfo.languages*/}
                    <h2 className={estiloCVS.title}>Languages</h2>
                    <ul>
                        <li>
                            <span className={estiloCVS.text}>Spanish</span>
                            <span className={estiloCVS.percent}>
                                <div style={{width:'90%'}}></div>
                            </span>
                        </li>
                        <li>
                            <span className={estiloCVS.text}>English</span>
                            <span className={estiloCVS.percent}>
                                <div style={{width:'70%'}}></div>
                            </span>
                        </li>
                        <li>
                            <span className={estiloCVS.text}>German</span>
                            <span className={estiloCVS.percent}>
                                <div style={{width:'40%'}}></div>
                            </span>
                        </li>
                    </ul>
                </div>
                
            </div>
            
            <div className={estiloCVS.rightSide}>
                <div className={estiloCVS.about}>
                
                    <h2 className={estiloCVS.title2}>Profile</h2>
                    <p>
                        {props.perfil}
                    </p>
                </div>
                
                <div className={estiloCVS.about}>
                
                    <h2 className={estiloCVS.title2}>Experience</h2>
                    <div className={estiloCVS.box}>
                        <div className={estiloCVS.year_company}>
                            <h5>{props.periodoT1}</h5>
                            <h4>{props.trabajo1}</h4>
                        </div>
                        <div className={estiloCVS.text}>
                            <h4>{props.cargo1}</h4>
                            <p>
                            {props.desc1}
                            </p>
                        </div>
                    </div>
                    
                    <div className={estiloCVS.box}>
                    <div className={estiloCVS.year_company}>
                            <h5>{props.periodoT2}</h5>
                            <h4>{props.trabajo2}</h4>
                        </div>
                        <div className={estiloCVS.text}>
                            <h4>{props.cargo2}</h4>
                            <p>
                            {props.desc2}
                            </p>
                        </div>
                    </div>
                    
                    <div className={estiloCVS.box}>
                        <div className={estiloCVS.year_company}>
                            <h5>{props.periodoT3}</h5>
                            <h4>{props.trabajo3}</h4>
                        </div>
                        <div className={estiloCVS.text}>
                            <h4>{props.cargo3}</h4>
                            <p>
                            {props.desc3}
                            </p>
                        </div>
                    </div>
                </div>
            
                <div className={estiloCVS.skills}>

                    <h2 className={estiloCVS.title2}>Profesional Skills</h2>
                    <div className={estiloCVS.box}>
                        <h4>HTML</h4>
                        <div className={estiloCVS.percent}>
                            <div style={{width:'90%'}}></div>
                        </div>
                    </div>
                    <div className={estiloCVS.box}>
                        <h4>CSS</h4>
                        <div className={estiloCVS.percent}>
                            <div style={{width:'80%'}}></div>
                        </div>
                    </div>
                    <div className={estiloCVS.box}>
                        <h4>Javascript</h4>
                        <div className={estiloCVS.percent}>
                            <div style={{width:'85%'}}></div>
                        </div>
                    </div>
                    <div className={estiloCVS.box}>
                        <h4>Python</h4>
                        <div className={estiloCVS.percent}>
                            <div style={{width:'75%'}}></div>
                        </div>
                    </div>
                    <div className={estiloCVS.box}>
                        <h4>SQL</h4>
                        <div className={estiloCVS.percent}>
                            <div style={{width:'80%'}}></div>
                        </div>
                    </div>
                    <div className={estiloCVS.box}>
                        <h4>NoSQL</h4>
                        <div className={estiloCVS.percent}>
                            <div style={{width:'40%'}}></div>
                        </div>
                    </div>
                    <div className={estiloCVS.box}>
                        <h4>Java</h4>
                        <div className={estiloCVS.percent}>
                            <div style={{width:'70%'}}></div>
                        </div>
                    </div>
                    <div className={estiloCVS.box}>
                        <h4>Redes e Infraestructura</h4>
                        <div className={estiloCVS.percent}>
                            <div style={{width:'70%'}}></div>
                        </div>
                    </div>
                
                </div>
                    <br/>
                <div className={estiloCVS.about.interest}>
                    <h2 className={estiloCVS.title2}>Interest</h2>
                    <ul>
                        <li>{props.interes1}</li>
                        <li>{props.interes2}</li>
                        <li>{props.interes3}</li>
                    </ul>
                </div>
            
            </div>
        </div>
        </div>
    );
}
export default Cv;