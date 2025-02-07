import { useState } from 'react';
import '../estilos/sitio.css';

function Contacto(props){
    const [ formData, setFormData ] = useState({
        name:"",
        lname:"",
        email:"",
        tel:"",
        message:"",
    });

    const [ status, setStatus ] = useState(null);

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value });
    }; 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Enviando...");
    
        try {
          const response = await fetch("https://adming-consulting.com/sendEmail.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
    
          const result = await response.json();
          setStatus(result.message);
        } catch (error) {
          setStatus("Error al enviar el formulario.");
        }
      };

    return(
        <section class="contact">
            <div class="title" id="contact">
                <h2>Contactanos</h2>
                <p>Cotizaciones, Preguntas, Comentarios, Sugerencias de contenido...
                    </p>
            </div>
            <form id="contactForm" class="contactForm" onSubmit={handleSubmit}>
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
                {status && <p>{status}</p>}
            </form>
            <script src="https://smtpjs.com/v3/smtp.js"></script>
            <script src="mail.js"></script>
        </section>
    );
}
export default Contacto;