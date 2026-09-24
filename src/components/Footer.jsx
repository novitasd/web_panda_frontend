import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import pandaLogo from "../assets/pandanegra.png";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ===========================
            LOGO Y REDES
        =========================== */}

          <div className="footer-brand">

  <img
    src={pandaLogo}
    alt="Panda"
    className="footer-logo"
  />
          
          <p>
            Descubre las mejores zapatillas para cada estilo.
            Inspirados en la cultura sneaker y el streetwear.
          </p>

          <div className="footer-social">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/tiopanda.pe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@panda.peruu?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>

            {/* Facebook */}
            <a
              href="https://www.instagram.com/tiopanda.pe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/51904130470"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>


        {/* ===========================
            EXPLORAR
        =========================== */}

        <div className="footer-links">

          <h3>Explorar</h3>

          <Link to="/">
            Inicio
          </Link>

          <Link to="/catalogo">
            Catálogo
          </Link>

          <Link to="/contacto">
            Contacto
          </Link>


        </div>


        {/* ===========================
            AYUDA
        =========================== */}

        <div className="footer-links">

          <h3>Ayuda</h3>

          <a href="#">
            Preguntas frecuentes
          </a>

          <a href="#">
            Envíos
          </a>

          <a href="#">
            Cambios
          </a>

          <a href="#">
            Términos
          </a>

        </div>


        {/* ===========================
            CONTACTO
        =========================== */}

        <div className="footer-links">

          <h3>Contacto</h3>

          <span>
            Lima, Perú
          </span>

          <a
            href="https://wa.me/51904130470"
            target="_blank"
            rel="noopener noreferrer"
          >
            +51 904 130 470
          </a>

          <span>
            Lun - Dom
          </span>

          <span>
            9:00 AM - 10:00 PM
          </span>

        </div>

      </div>


      {/* ===========================
          COPYRIGHT
      =========================== */}

      <div className="footer-bottom">

        <p>
          © 2026 <strong>Tiopanda</strong> · Todos los derechos reservados.
        </p>

      </div>

    </footer>
  );
}

export default Footer;