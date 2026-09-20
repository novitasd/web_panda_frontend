

import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import {
  FiX,
  FiChevronDown,
  FiArrowUpRight,
} from "react-icons/fi";

import { getProducts } from "../../services/product.service";

import "./NavLinks.css";


function NavLinks({ menuOpen, setMenuOpen }) {
  const [activeMenu, setActiveMenu] = useState(null);

  const [marcas, setMarcas] = useState([]);
  const [loadingMarcas, setLoadingMarcas] = useState(true);

  useEffect(() => {
    async function cargarMarcas() {
      try {
        setLoadingMarcas(true);

        const response = await getProducts();

        const productosActivos = (response?.data ?? [])
          .filter((producto) => producto.active === true);

        const marcasUnicas = [
          ...new Map(
            productosActivos
              .filter((producto) => producto.brand)
              .map((producto) => [
                producto.brand.id,
                {
                  id: producto.brand.id,
                  name: producto.brand.name,
                  slug: producto.brand.slug,
                },
              ])
          ).values(),
        ];

        marcasUnicas.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        setMarcas(marcasUnicas);

      } catch (error) {
        console.error("Error cargando marcas:", error);
        setMarcas([]);
      } finally {
        setLoadingMarcas(false);
      }
    }

    cargarMarcas();
  }, []);

  // El resto de tu lógica actual continúa aquí...

  const cerrarMenu = () => {
    setActiveMenu(null);
    setMenuOpen(false);
  };

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav
      className={`nav-links ${
        menuOpen ? "show" : ""
      }`}
    >
      {/* CERRAR MENÚ MÓVIL */}
      <button
        type="button"
        className="close-menu"
        onClick={cerrarMenu}
        aria-label="Cerrar menú"
      >
        <FiX />
      </button>

      {/* INICIO */}
      <NavLink
        to="/"
        onClick={cerrarMenu}
      >
        Inicio
      </NavLink>

      {/* CATÁLOGO */}
      <div
        className={`nav-dropdown ${
          activeMenu === "catalogo" ? "open" : ""
        }`}
      >
        <button
          type="button"
          className="nav-dropdown-trigger"
          onClick={() => toggleMenu("catalogo")}
          aria-expanded={activeMenu === "catalogo"}
        >
          Catálogo
          <FiChevronDown />
        </button>

        {activeMenu === "catalogo" && (
          <div className="mega-menu">
            <div className="mega-menu-inner">
              <div className="mega-menu-heading">
                <span>EXPLORA PANDA</span>
                <h2>Encuentra tu estilo.</h2>
              </div>

             
<div className="mega-menu-links">

  {/* TODOS LOS PRODUCTOS */}

  <Link
    to="/catalogo"
    onClick={cerrarMenu}
  >
    <span>
      <strong>Todos los productos</strong>
      <small>Descubre nuestra colección</small>
    </span>

    <FiArrowUpRight />
  </Link>

  {/* MARCAS DINÁMICAS */}

  {loadingMarcas ? (
    <span className="menu-loading">
      Cargando marcas...
    </span>
  ) : (
    marcas.map((marca) => (
      <Link
        key={marca.id}
        to={`/marca/${marca.slug}`}
        onClick={cerrarMenu}
      >
        <span>
          <strong>{marca.name}</strong>
          <small>Explora la colección</small>
        </span>

        <FiArrowUpRight />
      </Link>
    ))
  )}

</div>
            </div>
          </div>
        )}
      </div>

      {/* CONTACTO */}
      <NavLink
        to="/contacto"
        onClick={cerrarMenu}
      >
        Contacto
      </NavLink>
    </nav>
  );
}

export default NavLinks;