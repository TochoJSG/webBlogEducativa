import { useRef } from 'react';
import {Link} from 'react-router-dom';
import useScrollOpacity from "./useScrollOpacity";
import estiloVH from '../estilos/videoHeader.module.css';
//import videoPromo from '../imagenes/admingProyectCorto.mp4';
import CircleStyle from './CircleStyle';
//const videoPromo = require('../static_src/admingProyectCorto.mp4');
//import videos from '../../public/videos'

function Vh(){
    const videoRef = useRef(null);

    // Usa el hook personalizado para aplicar la opacidad basada en el scroll
    useScrollOpacity(videoRef);
    return(
        <div id="videoHeader" className={estiloVH.cuerpoVH}>

            <section className={estiloVH.videoHeader}>
            <video ref={videoRef} src="/admingProyectCorto.mp4" autoPlay muted loop>
                {/* */}
                </video>
                    <Link to="/"><h1><span>ADM</span>ING</h1></Link>
            </section>

            <header className={estiloVH.headerVH}>
               
                <ul>
                    <li><Link className={estiloVH.active} to="/">Home</Link></li>
                    <li><Link to="/#about">About</Link></li>
                    <li><Link to="/jorge-salgado-fullstack">Developer</Link></li>
                    <li><Link to="/#contact">Contact</Link></li>
                </ul>
            </header>

            <CircleStyle />
        </div>
    );
}
export default Vh;
/*
<script>
                let  video = document.querySelector('video');
                window.addEventListener('scroll',function(){
                    let val = 1 + window.scrollY/-600;
                    video.style.opacity = val;
                });
            </script>
*/