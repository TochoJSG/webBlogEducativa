import { useState } from 'react';
import '../estilos/sitio.css';

function Contacto() {
    const [formData, setFormData] = useState({
        name: "",
        lname: "",
        email: "",
        tel: "",
        message: "",
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Enviando...");
        try {
            const response = await fetch("https://adming-consulting.com/sendEmail.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            setStatus(result.message);
        } catch (error) {
            setStatus("Error al enviar el formulario.");
        }
    };

    return (
        <section className="contact">
            <div className="title" id="contact">
                <h2>Contáctanos</h2>
                <p>Cotizaciones, Preguntas, Comentarios, Sugerencias de contenido...</p>
            </div>
            <form id="contactForm" className="contactForm" onSubmit={handleSubmit}>
                <div className="row">
                    <input className="name" type="text" name="name" placeholder="Nombre" required onChange={handleChange} />
                    <input className="lname" type="text" name="lname" placeholder="Apellido (opcional)" onChange={handleChange} />
                </div>
                <div className="row">
                    <input className="mail" type="email" name="email" placeholder="Email" required onChange={handleChange} />
                    <input className="tel" type="tel" name="tel" placeholder="Teléfono (opcional)" onChange={handleChange} />
                </div>
                <div className="row2">
                    <textarea className="msg" name="message" placeholder="¿Cómo te podemos ayudar?" required onChange={handleChange}></textarea>
                </div>
                <div className="row2">
                    <input type="submit" value="ENVIAR" className="btn" />
                </div>
                {status && <p>{status}</p>}
            </form>
        </section>
    );
}

export default Contacto;
