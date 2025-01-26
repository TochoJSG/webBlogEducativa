import '../estilos/sitio.css';
function Contacto(props){
    return(
        <section class="contact" id="contact">
            <div class="title">
                <h2>Contactanos</h2>
                <p>Cotizaciones, Preguntas, Comentarios, Sugerencias de contenido...
                    </p>
            </div>
            <form class="contactForm">
                <div class="row">
                    <input class="name" type="text" name="" placeholder="Nombre" required/>
                    <input class="lname" type="text" name="" placeholder="Apellido (opcional)"/>
                </div>
                <div class="row">
                    <input class="mail" type="text" name="" placeholder="email" required/>
                    <input class="tel" type="text" name="" placeholder="Telefono (opcional)"/>
                </div>
                <div class="row2">
                    <textarea class="msg" placeholder="¿Cómo te podemos ayudar?, puedes inicar hablandonos de tu negocio, tus metas, tus problemas o todo a la vez" required></textarea>
                </div>
                <div class="row2">
                    <input type="submit" value="ENVIAR" class="btn"/>
                </div>
            </form>
            <script src="https://smtpjs.com/v3/smtp.js"></script>
            <script src="mail.js"></script>
        </section>
    );
}
export default Contacto;