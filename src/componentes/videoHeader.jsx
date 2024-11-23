import '../estilos/videoHeader.css';
const videoPromo = require('../imagenes/admingProyectCorto.mp4');
function Vh(){
    return(
        <div className="cuerpoVH">
            <section className="videoHeader">
                <video src={videoPromo} autoplay="" muted="false" loop="">
                    </video>
            </section>
            <section>
                <div className="content">
                    <h2>Somos Adming</h2>
                    <p>Somos los futuros amos de Youtube bla bla bla bla bla bla
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        </p>
                </div>
            </section>
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