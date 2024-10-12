import React from 'react';
import Footer from './Footer.jsx';
import HeaderGral from '../componentes/HeaderGral.jsx';
const PrivacyPolicy = () => {
  return (
    <>
    <HeaderGral />
    <section className="post">
      <div className="title">
        <h2>PRIVACIDAD</h2><br />
      </div>
      <div className="articulo">
        <h2><b>Responsable</b> – ¿quién es el responsable del tratamiento de los datos?</h2><br />
        <p>
          <b>Identidad:</b> Comercializadora Tocha,<br />
          <b>Domicilio social:</b> CDMX, Iztapalapa, 09960, Mercado Cananea,<br />
          <b>Teléfono:</b> 56 10 93 61 70,<br />
          <b>Correo Electrónico:</b> <a href="mailto:matprimas.tocha.loc33@gmail.com">matprimas.tocha.loc33@gmail.com</a>,<br />
          <b>Contacto:</b> información en contacto,<br />
          <b>Nombre del dominio:</b> <a href="https://electronica-inteligente.com">electronica-inteligente.com</a>,<br />
        </p>
      </div>
      <div className="requisitos">
        <h2><b>Finalidades</b> – ¿con qué finalidades tratamos tus datos?</h2><br />
        <p>
          En cumplimiento de lo dispuesto en el Reglamento General de Protección de Datos aplicable a México y Latinoamérica, te informamos de que trataremos los datos que nos facilitas para:<br />
          <ul>
            <li>Gestionar la contratación de servicios que realices a través de la Plataforma, así como la facturación y entrega correspondiente.</li>
            <li>Remitir periódicamente comunicaciones sobre servicios, eventos y noticias relacionadas con las actividades desarrolladas por <a href="https://tochamateriasprimas.com/contacto_tocha.html">Comercializadora Tocha</a>, salvo que indiques lo contrario o revoques tu consentimiento.</li>
            <li>Remitir información comercial y/o promocional relacionada con el sector de servicios contratados, salvo que indiques lo contrario o revoques tu consentimiento.</li>
            <li>Dar cumplimiento a las obligaciones legalmente establecidas, así como verificar el cumplimiento de obligaciones contractuales.</li>
            <li>Cesión de datos a organismos y autoridades, conforme a las disposiciones legales.</li>
          </ul>
        </p>
        <h2><b>Categorías de datos</b> – ¿Qué datos tratamos?</h2>
        <p>
          En <a href="https://tochamateriasprimas.com/contacto_tocha.html">Comercializadora Tocha</a> tratamos las siguientes categorías de datos:<br />
          <ul>
            <li>Datos identificativos,</li>
            <li>Metadatos de comunicaciones electrónicas,</li>
            <li>Datos de información comercial.</li>
          </ul>
        </p>
        <h2><b>Legitimación</b> – ¿cuál es la legitimación para el tratamiento de tus datos?</h2><br />
        <p>
          El tratamiento de datos para el envío de boletines periódicos (newslettering) se basa en el consentimiento expreso del interesado, de acuerdo con la normativa vigente.
          Además, la legitimación para el tratamiento de datos relacionados con ofertas o colaboraciones se basa en el consentimiento del usuario, que puede retirar en cualquier momento.
        </p>
        <h2><b>Plazo de Conservación de los Datos</b> – ¿Por cuánto tiempo conservaremos tus datos?</h2><br />
        <p>
          <a href="https://tochamateriasprimas.com/contacto_tocha.html">Comercializadora Tocha</a> conservará los datos personales únicamente durante el tiempo necesario para las finalidades recogidas, y los mantendrá bloqueados conforme a los plazos legales.
        </p>
        <h2><b>Seguridad de la Información</b> – ¿Qué medidas de seguridad implantamos?</h2><br />
        <p>
          Implementamos medidas de seguridad técnicas para evitar la pérdida, manipulación o difusión de los datos, como la encriptación de las comunicaciones entre el usuario y los servidores.
        </p>
        <h2><b>Derechos</b> – ¿Cuáles son tus derechos y cómo puedes ejercerlos?</h2><br />
        <p>
          Tienes derecho a acceder, rectificar o suprimir tus datos, así como a limitar u oponerte a su tratamiento, y a retirar tu consentimiento en cualquier momento.
        </p>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;
