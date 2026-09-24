import { Link } from "react-router-dom";
import "./StyleCategories.css";

import nike from "../assets/categorias/nike.jpg";
import asics from "../assets/categorias/asisc.png";
import adidas from "../assets/categorias/adidas.jpg";
import jordan from "../assets/categorias/jordan.jpg";
import news from "../assets/categorias/new.jpg";

import spanpanda from "../assets/spanpanda.png";

const brands = [
  {
    id: 1,
    name: "Air Jordan",
    slug: "jordan",
    image: jordan,
  },
  {
    id: 2,
    name: "Nike",
    slug: "nike",
    image: nike,
  },
  {
    id: 3,
    name: "New Balance",
    slug: "new-balance",
    image: news,
  },
  {
    id: 4,
    name: "Asics",
    slug: "asics",
    image: asics,
  },
  {
    id: 5,
    name: "Adidas",
    slug: "adidas",
    image: adidas,
  },
];

function StyleCategories() {
  return (
    <section className="style-categories">

      {/* ENCABEZADO */}
      <div className="style-header">
        <span>EXPLORA</span>

        <h2>Encuentra tu estilo.</h2>

        <p>
          Descubre las marcas que definen tu esencia.
        </p>
      </div>

      {/* TARJETAS DE MARCAS */}
      <div className="style-slider">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            to={`/marca/${brand.slug}`}
            className="style-card"
          >
            <div className="style-image">
              <img
                src={brand.image}
                alt={brand.name}
                loading="lazy"
              />
            </div>

            <div className="style-info">
              <h3>{brand.name}</h3>

              <img
                src={spanpanda}
                alt=""
                className="style-panda"
                aria-hidden="true"
              />
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}

export default StyleCategories;