import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "./Icons";

export function Navbar() {
  // Estado para controlar la expansión (inicia cerrado)
  const [expandido, setExpandido] = useState(false);

  return (
    // Agrega la clase 'expandido' solo si el estado es true
    <nav className={`navbar ${expandido ? "expandido" : ""}`}>
      <div className="menu-header">
        <div className="menu-title-row">
          {/* El título solo se renderiza si está expandido */}
          {expandido && <h1>El muro de las historias</h1>}

          {/* El mismo botón cambia su clase y su texto según el estado */}
          <button
            className={`toggle-btn ${expandido ? "close-btn" : "hamburger-btn"}`}
            onClick={() => setExpandido(!expandido)}
          >
            <Icon name={expandido ? "close" : "menu"} size={20} />
          </button>
        </div>

        {/* La descripción solo se renderiza si está expandido */}
        {expandido && (
          <p className="menu-description">
            Un lugar para las historias que merecen quedarse.
          </p>
        )}
      </div>

      {/* Enlaces de navegación */}
      <div className="nav-links">
        <NavLink to="/" className="nav-item">
          <Icon name="home" size={25} />{" "}
          {expandido && <span className="btn-text">Inicio</span>}
        </NavLink>
        <NavLink to="/myHistories" className="nav-item">
          <Icon name="spark" size={25}></Icon>
          {expandido && <span className="btn-text">Mis historias</span>}
        </NavLink>
        <NavLink to="/guardados" className="nav-item">
          <Icon name="bookmark"></Icon>{" "}
          {expandido && <span className="btn-text">Guardados</span>}
        </NavLink>
        <NavLink to="/favorites" className="nav-item">
          <Icon name="heart" size={25}></Icon>
          {expandido && <span className="btn-text">Favoritos</span>}
        </NavLink>
        <NavLink to="/games" className="nav-item">
          <Icon name="game" size={25}></Icon>
          {expandido && <span className="btn-text">Juegos para recordar</span>}
        </NavLink>
        <NavLink to="/help" className="nav-item">
          <Icon name="search" size={25}></Icon>
          {expandido && <span className="btn-text">¿Necesitas ayuda?</span>}
        </NavLink>
      </div>
    </nav>
  );
}