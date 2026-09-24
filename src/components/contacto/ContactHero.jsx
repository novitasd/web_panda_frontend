import { Link } from "react-router-dom";
import "./ContactHero.css";

import imgs from "../../assets/categorias/contacto.png";

// 📱 PON AQUÍ TU NÚMERO DE WHATSAPP
const WHATSAPP_NUMBER = "51904130470";

function ContactHero() {
  const whatsappMessage = encodeURIComponent(
    "Hola Panda, quisiera consultar sobre sus productos."
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section className="contact-hero">

      <div className="contact-content">

        <span className="contact-tag">
          CONTACTO
        </span>

        <h1>
          ESTAMOS AQUÍ
          <br />
          PARA AYUDARTE.
        </h1>

        <p>
          ¿Tienes dudas sobre un pedido, una talla o alguno de
          nuestros modelos? Nuestro equipo estará encantado de ayudarte.
        </p>

        <div className="contact-buttons">

          {/* WHATSAPP */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Escríbenos por WhatsApp
          </a>

          {/* CATÁLOGO */}
          <Link
            to="/catalogo"
            className="btn-secondary"
          >
            Ver catálogo
          </Link>

        </div>

      </div>

      <div className="contact-image">

        <img
          src={imgs}
          alt="Jordan"
        />

      </div>

    </section>
  );
}

export default ContactHero;