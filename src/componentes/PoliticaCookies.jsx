import '../estilos/sitio.css';
import HeaderGral from '../componentes/HeaderGral.jsx';
import Footer from '../componentes/Footer.jsx';
function PoliticaCookies(props){
    return(
        <>
        <HeaderGral />
        <section className="post">
          <div className="title">
            <h2>Política de Cookies</h2>
          </div>
          <div className="requisitos">
            <p>
              En este sitio web utilizamos cookies de terceros y propias para garantizar que tengas una mejor experiencia de navegación, compartir contenido en redes sociales y obtener estadísticas de usuarios.
            </p>
            
            <h3>¿Qué son las cookies?</h3>
            <p>
              Las cookies son pequeños archivos de texto que un servidor almacena en tu navegador cuando visitas casi cualquier página web. Su utilidad es que la web sea capaz de recordar tu visita cuando vuelvas a navegar por esa página.
            </p>
            
            <h3>¿Qué tipos de cookies existen?</h3>
            <p>
              <strong>Cookies técnicas:</strong> Son las más elementales y permiten, entre otras cosas, saber cuándo está navegando un humano o una aplicación automatizada, y cuando navega un usuario anónimo y uno registrado. Son tareas básicas para el funcionamiento de cualquier web dinámica.
            </p>
            <p>
              <strong>Cookies de análisis:</strong> Recogen información sobre el tipo de navegación que estás realizando, las secciones que más utilizas, productos consultados, franja horaria de uso, idioma, etc.
            </p>
            <p>
              <strong>Cookies publicitarias:</strong> Muestran publicidad en función de tu navegación, tu país de procedencia, idioma, etc.
            </p>
            
            <h3>¿Qué cookies utilizamos en este sitio?</h3>
            <p>
              Este sitio web utiliza cookies propias y de terceros. Las cookies de terceros que utilizamos son proporcionadas por Google Analytics, las cuales recopilan datos sobre el tráfico y comportamiento de los usuarios en nuestro sitio. Estos datos son completamente anónimos y no incluyen información personal.
            </p>
            <p>
              Si deseas desactivar las cookies de Google Analytics, puedes hacerlo mediante la configuración de tu navegador o visitando la página de exclusión de Google Analytics 
              <a href="http://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">aquí</a>.
            </p>
            
            <h3>¿Cómo gestionar y desactivar las cookies?</h3>
            <p>
              Tienes la opción de aceptar o rechazar el uso de cookies no esenciales cuando visitas nuestro sitio web por primera vez. Además, puedes modificar tus preferencias en cualquier momento haciendo clic en el siguiente enlace:
              <a href="/cookies-settings"> Configuración de cookies</a>.
            </p>
            
            <h3>¿Qué ocurre si desactivas las cookies?</h3>
            <p>
              Al desactivar las cookies puede que algunos de nuestros servicios no funcionen correctamente o que la calidad de la página web se vea afectada.
            </p>
            
            <h3>Actualización de la política de cookies</h3>
            <p>
              Esta política de cookies puede ser modificada en función de las exigencias legislativas o por ajustes en los servicios ofrecidos en el sitio web, por lo que te recomendamos revisarla periódicamente.
            </p>
          </div>
        </section>
        <Footer />
        </>
      );
}
export default PoliticaCookies;