/*import ReactDOM from 'react-dom';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';*/
import estiloFlotante  from '../estilos/FlotanteSocial.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faFacebook, faLinkedin, faGithub, faFile);
function FlotanteSocial(){
    return(
        <div className={estiloFlotante.circle}>
            <div className={estiloFlotante.share}>
                U
                {/*<FontAwesomeIcon icon={['solid', 'faCreativeCommonsShare']} />*/}
            </div>
            <ul>
                <li><a href="https://www.facebook.com/jorge.salgadogarcia.334/" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                </a></li>
                
                <li><a href="https://www.linkedin.com/in/salgado-garcia-jorge-arturo-devfullstack/" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a></li>
                
                <li><a href="https://github.com/TochoJSG?tab=repositories" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </a></li>
                
                <li><a href="/Jorge-Salgado-Garcia.pdf" rel="noopener noreferrer" type="application/pdf" download>
                    <FontAwesomeIcon icon={['fas', 'file']} />
                </a></li>
            </ul>
        </div>
    );
}
export default FlotanteSocial;