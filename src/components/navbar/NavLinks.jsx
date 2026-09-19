
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiX, FiChevronDown, FiArrowUpRight } from "react-icons/fi";

import "./NavLinks.css";

function NavLinks({ menuOpen, setMenuOpen }) {
  const [activeMenu, setActiveMenu] = useState(null);

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

                <Link
                  to="/catalogo/g5"
                  onClick={cerrarMenu}
                >
                  <span>
                    <strong>G5</strong>
                    <small>Máxima calidad</small>
                  </span>
                  <FiArrowUpRight />
                </Link>

                <Link
                  to="/catalogo/importada"
                  onClick={cerrarMenu}
                >
                  <span>
                    <strong>Importada</strong>
                    <small>Calidad seleccionada</small>
                  </span>
                  <FiArrowUpRight />
                </Link>

                <Link
                  to="/catalogo/premium"
                  onClick={cerrarMenu}
                >
                  <span>
                    <strong>Premium</strong>
                    <small>Calidad esencial</small>
                  </span>
                  <FiArrowUpRight />
                </Link>
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