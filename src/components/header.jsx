import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "./Icons";

export function Header() {
  const location = useLocation();

  return (
    <header>
      {location.pathname === "/" && (
        <div className="header-actions">
          <div className="header-description">
            <div className="subtitle-container">
              <span className="subtitle-line"></span>
              <p className="header-subtitle">HISTORIAS COTIDIANAS</p>
            </div>
            <h1>El muro de historias</h1>
            <p className="header-text">
              Momentos pequeños, recuerdos enormes. Lee, comparte y deja una
              historia en la pared.
            </p>
          </div>

          <div className="header-placeholder">
            <div className="search-box">
              <Icon name="search" size={16} className="search-icon" />
              <input type="text" placeholder="Buscar historias" />
            </div>
            <button className="add-btn">
              <span className="plus-icon-bg">
                <Icon name="plus" size={16} />
              </span>
              <span className="btn-text-content">
                Añadir
                <br />
                historia
              </span>
            </button>
          </div>
        </div>
      )}

      {location.pathname === "/myHistories" && (
        <div className="header-actions">
          <div className="header-description">
            <div className="subtitle-container">
              <span className="subtitle-line"></span>
              <p className="header-subtitle">Tu rincón</p>
            </div>
            <h1>Tus historias</h1>
            <p className="header-text">Encuentra tus historia y recuerdos</p>
          </div>

          <div className="header-placeholder">
            <div className="search-box">
              <Icon name="search" size={16} className="search-icon" />
              <input type="text" placeholder="Buscar historias" />
            </div>
            <button className="add-btn">
              <span className="plus-icon-bg">
                <Icon name="plus" size={16} />
              </span>
              <span className="btn-text-content">
                Añadir
                <br />
                historia
              </span>
            </button>
          </div>
        </div>
      )}

      {location.pathname === "/saves" && (
        <div className="header-actions">
          <div className="header-description">
            <div className="subtitle-container">
              <span className="subtitle-line"></span>
              <p className="header-subtitle">Para volver después</p>
            </div>
            <h1>Historias guardadas</h1>
            <p className="header-text">
              Los relatos que quisiste conservar para leerlos de nuevo con
              calma.
            </p>
          </div>

          <div className="header-placeholder">
            <div className="search-box">
              <Icon name="search" size={16} className="search-icon" />
              <input type="text" placeholder="Buscar historias" />
            </div>
          </div>
        </div>
      )}

      {location.pathname === "/favorites" && (
        <div className="header-actions">
          <div className="header-description">
            <div className="subtitle-container">
              <span className="subtitle-line"></span>
              <p className="header-subtitle">Las que te tocaron</p>
            </div>
            <h1>Historias favoritas</h1>
            <p className="header-text">
              Una colección de momentos a los que regalaste un corazón.
            </p>
          </div>

          <div className="header-placeholder">
            <div className="search-box">
              <Icon name="search" size={16} className="search-icon" />
              <input type="text" placeholder="Buscar historias" />
            </div>
          </div>
        </div>
      )}

      {location.pathname === "/games" && (
        <div className="header-actions">
          <div className="header-description">
            <div className="subtitle-container">
              <span className="subtitle-line"></span>
              <p className="header-subtitle">Activa la memoria</p>
            </div>
            <h1>Juegos para recordar</h1>
            <p className="header-text">
              Pequeñas invitaciones para rescatar historias que quizá creías
              olvidadas.
            </p>
          </div>
        </div>
      )}

      {location.pathname === "/help" && (
        <div className="header-actions">
          <div className="header-description">
            <div className="subtitle-container">
              <span className="subtitle-line"></span>
              <p className="header-subtitle">Información y apoyo</p>
            </div>
            <h1>¿Necesitas ayuda?</h1>
            <p className="header-text">
              Recursos básicos para personas desplazadas por la violencia o que
              necesitan encontrar un lugar seguro.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
