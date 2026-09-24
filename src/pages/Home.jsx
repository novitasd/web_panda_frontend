
import {
    FaInstagram,
    FaTiktok,
    FaWhatsapp
} from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import SliderCategorias from "../components/SliderCategorias.jsx";
import StyleCategories from "../components/StyleCategories.jsx";
import GallerySection from "../components/GallerySection.jsx";

import videoFondo from "../assets/video/pruebapanda.mp4";
import heroPoster from "../assets/video/heroposter.png";

import "./Home.css";

function Home() {
  const [videoReady, setVideoReady] = useState(false);

  const homeTitle =
    "TNIS.PE | Jordan, Nike, ASICS y Sneakers en Perú";

  const homeDescription =
    "Los tenis más buscados en Perú: Jordan, Nike, ASICS y más. Descubre nuestra colección de modelos exclusivos, tallas disponibles y compra online en TNIS.PE.";

  const homeUrl =
    "https://www.tnisperu.com/";

  return (
    <>
      <Helmet>
        <title>{homeTitle}</title>

        <meta
          name="description"
          content={homeDescription}
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href={homeUrl}
        />

        <meta
          property="og:title"
          content={homeTitle}
        />

        <meta
          property="og:description"
          content={homeDescription}
        />

        <meta
          property="og:url"
          content={homeUrl}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="TNIS.PE"
        />

        <meta
          property="og:locale"
          content="es_PE"
        />

        <meta
          property="og:image"
          content={heroPoster}
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={homeTitle}
        />

        <meta
          name="twitter:description"
          content={homeDescription}
        />

        <meta
          name="twitter:image"
          content={heroPoster}
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "TNIS.PE",
            url: homeUrl,
            description: homeDescription,
          })}
        </script>
      </Helmet>

      <main>
        {/* =========================
            HERO PRINCIPAL
        ========================= */}

        <section className="hero">

          {/* CONTENIDO */}

        <div className="hero-content">

    <span className="hero-badge">
  PANDA / EVERYDAY SNEAKERS
</span>

<h1>
  TU ESTILO.
  <br />
  TU RITMO.
</h1>

<p>
  Sneakers que hablan de ti.
  <br />
  Descubre tu próximo par y lleva
  tu estilo a otro nivel.
</p>
    <div className="hero-buttons">

        <a
            className="btn-primary"
            href="https://wa.me/51904130470"
            target="_blank"
            rel="noreferrer"
        >
            Comprar ahora
        </a>

        <Link
            to="/catalogo"
            className="btn-secondary"
        >
            Ver colección
        </Link>

    </div>

    {/* REDES SOCIALES */}

    <div className="hero-socials">

        <span> SÍGUENOS </span>

        <div className="social-links">

            <a
                href="https://www.instagram.com/tiopanda.pe/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
            >
                <FaInstagram />
            </a>

            <a
                href="https://www.tiktok.com/@panda.peruu?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
            >
                <FaTiktok />
            </a>

            <a
                href="https://wa.me/51904130470"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
            >
                <FaWhatsapp />
            </a>

        </div>

    </div>

</div>
          {/* VIDEO */}

          <div className="hero-media">

            <img
              src={heroPoster}
              alt="TNIS.PE - Sneakers Jordan, Nike y ASICS"
              className={`hero-poster ${
                videoReady ? "hide" : ""
              }`}
            />

            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="video-fondo"
              poster={heroPoster}
              onPlaying={() => setVideoReady(true)}
            >
              <source
                src={videoFondo}
                type="video/mp4"
              />
            </video>

            <div className="video-overlay" />

          </div>

        </section>

        {/* =========================
            RESTO DEL HOME
        ========================= */}

        <StyleCategories />

        <SliderCategorias />

        <GallerySection />

      </main>
    </>
  );
}

export default Home;