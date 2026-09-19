
import { FiSearch, FiX } from "react-icons/fi";
import SearchResults from "./SearchResults";

import "./DesktopSearch.css";

function DesktopSearch({
  searchRef,
  searchOpen,
  setSearchOpen,
  search,
  setSearch,
  loading,
  results,
  buscarEnCatalogo,
  cerrarBusqueda,
  handleKeyDown,
}) {
  const abrirBusqueda = () => {
    setSearchOpen(true);
  };

  return (
    <div
      ref={searchRef}
      className={`search-box ${
        searchOpen ? "active" : ""
      }`}
    >
      {/* ICONO DEL NAVBAR */}
      <button
        type="button"
        className="search-icon-btn"
        onClick={abrirBusqueda}
        aria-label="Abrir búsqueda"
      >
        <FiSearch className="search-icon" />
      </button>

      {/* PANEL DESPLEGABLE */}
      {searchOpen && (
        <div className="search-panel">
          <div className="search-panel-inner">

            {/* CABECERA */}
            <div className="search-panel-header">
              <div className="search-panel-title">
                <span>BUSCAR EN PANDA</span>
                <h2>¿Qué estás buscando?</h2>
              </div>

              <button
                type="button"
                className="search-panel-close"
                onClick={cerrarBusqueda}
                aria-label="Cerrar búsqueda"
              >
                <FiX />
              </button>
            </div>

            {/* CAMPO DE BÚSQUEDA */}
            <div className="search-field">
              <FiSearch className="search-field-icon" />

              <input
                type="text"
                className="search-input"
                placeholder="Buscar productos, marcas y estilos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />

              {search && (
                <button
                  type="button"
                  className="search-clear"
                  onClick={() => setSearch("")}
                  aria-label="Limpiar búsqueda"
                >
                  <FiX />
                </button>
              )}
            </div>

            {/* RESULTADOS */}
            {search.trim() && (
              <div className="search-results-container">
                <SearchResults
                  loading={loading}
                  results={results}
                  buscarEnCatalogo={buscarEnCatalogo}
                  cerrarBusqueda={cerrarBusqueda}
                />
              </div>
            )}

            {/* MENSAJE INICIAL */}
            {!search.trim() && (
              <div className="search-suggestion">
                <span>EXPLORA PANDA</span>
                <p>Busca tus productos favoritos.</p>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

export default DesktopSearch;