
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavbarActions from "./NavbarActions";
import DesktopSearch from "./DesktopSearch";
import MobileSearch from "./MobileSearch";
import { useProductSearch } from "./useProductSearch";

import { useCart } from "../../context/CartContext";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* ===============================
     EFECTO LIQUID GLASS AL SCROLL
  =============================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const {
    search,
    setSearch,
    results,
    loading,
    searchOpen,
    setSearchOpen,
    searchRef,
    buscarEnCatalogo,
    handleKeyDown,
    cerrarBusqueda,
  } = useProductSearch();

  const { cart } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cerrarTodo = () => {
    cerrarBusqueda();
    setMobileSearch(false);
  };

  return (
    <header
      className={`navbar ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      {/* CONTENEDOR PRINCIPAL */}

      <div className="navbar-main">

        {/* MENÚ MÓVIL */}

        <button
          type="button"
          className="menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <FiMenu />
        </button>

        {/* LOGO */}

        <div className="navbar-logo">
          <Logo />
        </div>

        {/* NAVEGACIÓN */}

        <div className="navbar-navigation">
          <NavLinks
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        </div>

        {/* ACCIONES */}

        <div className="nav-icons">

          <DesktopSearch
            searchRef={searchRef}
            searchOpen={searchOpen}
            setSearchOpen={setSearchOpen}
            search={search}
            setSearch={setSearch}
            loading={loading}
            results={results}
            buscarEnCatalogo={buscarEnCatalogo}
            cerrarBusqueda={cerrarBusqueda}
            handleKeyDown={handleKeyDown}
          />

          <NavbarActions
            totalItems={totalItems}
            setMobileSearch={setMobileSearch}
            setSearchOpen={setSearchOpen}
          />

        </div>

      </div>

      {/* BUSCADOR MÓVIL */}

      <MobileSearch
        mobileSearch={mobileSearch}
        setMobileSearch={setMobileSearch}
        search={search}
        setSearch={setSearch}
        loading={loading}
        results={results}
        handleKeyDown={handleKeyDown}
        buscarEnCatalogo={buscarEnCatalogo}
        cerrarBusqueda={cerrarTodo}
      />

    </header>
  );
}

export default Navbar;