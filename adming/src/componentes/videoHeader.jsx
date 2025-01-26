import { useRef } from 'react';
import {Link} from 'react-router-dom';
import useScrollOpacity from "./useScrollOpacity";
import '../estilos/videoHeader.css';
import CircleStyle from './CircleStyle';
const videoPromo = require('../imagenes/admingProyectCorto.mp4');
function Vh(){
    const videoRef = useRef(null);

    // Usa el hook personalizado para aplicar la opacidad basada en el scroll
    useScrollOpacity(videoRef);
    return(
        <div className="cuerpoVH">
            <section className="videoHeader">
                <video ref={videoRef} src={videoPromo} autoplay="" muted="false" loop="">
                    </video>
                    <Link to="/"><h1><span>ADM</span>ING</h1></Link>
            </section>
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