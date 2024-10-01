import React from 'react';
import '../estilos/sitio.css'; // Archivo de estilos separado
import Footer from './Footer.jsx';
import HeaderGral from '../componentes/HeaderGral.jsx';
function AvisoLegal() {
  return (
    <>
    <HeaderGral />
    <section className="post">
      <div className="title">
        <h2>Aviso legal y términos de uso</h2>
      </div>
      <div className="requisitos">
        <p>
          En este espacio, el USUARIO podrá encontrar toda la información relativa a los términos y condiciones legales
          que definen las relaciones entre los usuarios y nosotros como responsables de esta web. Como usuario, es importante que conozcas estos términos antes de continuar tu navegación.
          <a href="https://tochamateriasprimas.com/contacto_tocha.html"> Comercializadora Tocha</a>, como responsable de esta web, asume el compromiso de procesar la información de nuestros usuarios con plenas garantías y cumplir con los requisitos nacionales y regionales que regulan la recopilación y uso de los datos personales de nuestros usuarios.
        </p>

        <h2>Condiciones generales de uso</h2>
        <p>
          Las presentes Condiciones Generales regulan el uso (incluyendo el mero acceso) de las páginas de la web, integrantes del sitio web de <a href="https://tochamateriasprimas.com">tochamateriasprimas.com</a>, incluidos los contenidos y servicios puestos a disposición en ellas. Toda persona que acceda a la web (<a href="https://tochamateriasprimas.com">tochamateriasprimas.com</a>), “Usuario”, acepta someterse a las Condiciones Generales vigentes en cada momento del portal.
        </p>

        <h2>Datos personales que recabamos y cómo lo hacemos</h2>
        <p>
          Por favor, consulte nuestra <a href="https://tochamateriasprimas.com/politica_privacidad.html">Política de Privacidad</a> para obtener información detallada sobre la recopilación y tratamiento de datos personales.
        </p>

        <h2>Compromisos y obligaciones de los usuarios</h2>
        <p>
          El Usuario queda informado y acepta que el acceso a esta web no supone, en modo alguno, el inicio de una relación comercial con <a href="https://tochamateriasprimas.com">tochamateriasprimas.com</a>. El usuario se compromete a utilizar el sitio Web, sus servicios y contenidos sin contravenir la legislación vigente, la buena fe y el orden público.
        </p>

        <h2>Medidas de seguridad</h2>
        <p>
          Los datos personales comunicados por el usuario a <a href="https://tochamateriasprimas.com">tochamateriasprimas.com</a> pueden ser almacenados en bases de datos automatizadas o no, cuya titularidad corresponde en exclusiva a <a href="https://tochamateriasprimas.com">tochamateriasprimas.com</a>, asumiendo esta todas las medidas técnicas, organizativas y de seguridad que garantizan la confidencialidad de la información.
        </p>

        <h2>Reclamaciones</h2>
        <p>
          El Usuario podrá realizar reclamaciones remitiendo un correo electrónico a: <a href="mailto:matprimas.tocha.loc33@gmail.com">matprimas.tocha.loc33@gmail.com</a> indicando sus datos, el motivo de la reclamación y pruebas relacionadas.
        </p>

        <h2>Derechos de propiedad intelectual e industrial</h2>
        <p>
          Quedan expresamente prohibidas la reproducción, distribución y comunicación pública, incluida su modalidad de puesta a disposición, de los contenidos de esta página web sin la autorización expresa de <a href="https://tochamateriasprimas.com">tochamateriasprimas.com</a>.
        </p>

        <h2>Enlaces externos</h2>
        <p>
          Esta web podría proporcionar enlaces a otros sitios web de interés. Sin embargo, <a href="https://tochamateriasprimas.com">tochamateriasprimas.com</a> no asume ninguna responsabilidad por el contenido, políticas o prácticas de dichos sitios.
        </p>

        <h2>Política de comentarios</h2>
        <p>
          No se admitirán comentarios que incluyan difamaciones, insultos o ataques personales. Tampoco se permiten aquellos que contengan información engañosa, personal o con fines promocionales.
        </p>

        <h2>Exclusión de garantías y responsabilidad</h2>
        <p>
          El Prestador no garantiza la disponibilidad continua del sitio web y no se hace responsable por cualquier daño causado por la falta de disponibilidad, virus, u otros elementos que puedan afectar el sistema del Usuario.
        </p>

        <h2>Ley aplicable y jurisdicción</h2>
        <p>
          Las relaciones entre <a href="https://tochamateriasprimas.com">tochamateriasprimas.com</a> y los Usuarios se rigen por la legislación aplicable en México. Cualquier controversia se someterá a los juzgados y tribunales del domicilio del titular del sitio web.
        </p>

        <h2>Contacto</h2>
        <p>
          Si tienes preguntas acerca de estas Condiciones legales, puedes dirigirte a nosotros mediante el siguiente enlace: <a href="https://tochamateriasprimas.com/contacto_tocha.html">Comercializadora Tocha</a>.
        </p>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default AvisoLegal;
