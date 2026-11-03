import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icons"; // Asegúrate de que la ruta coincida con la ubicación de tu diccionario de íconos

export function Help() {
  // El estado guarda qué pregunta está abierta. Inicializamos con la 0 (la primera).
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "¿Qué hago si estoy en peligro inmediato?",
      answer:
        "Aléjate del lugar de riesgo si puedes hacerlo de forma segura. Llama al número de emergencias de tu país —por ejemplo, 112 o 911— o acude a la comisaría, centro de salud o refugio más cercano.",
    },
    {
      question: "¿Quién puede ayudarme si tuve que abandonar mi hogar?",
      answer:
        "Contacta con la oficina local de ACNUR, Cruz Roja, Protección Civil o los servicios sociales de tu municipio. Pueden orientarte sobre alojamiento temporal, alimentos, atención médica y documentación",
    },
    {
      question: "¿Cómo puedo buscar a un familiar del que me separé?",
      answer:
        "La Red de Vínculos Familiares del Comité Internacional de la Cruz Roja ayuda a restablecer el contacto entre familiares separados por conflictos, violencia o desplazamientos.",
    },
    {
      question: "¿Dónde puedo recibir orientación legal y emocional?",
      answer:
        "Pregunta en los servicios sociales, centros de salud, organizaciones de derechos humanos o asociaciones de apoyo a personas desplazadas. Solicita atención gratuita y un intérprete si lo necesitas.",
    },
  ];

  const toggleFaq = (index) => {
    // Si la pregunta ya está abierta y le hacen clic, se cierra. Si no, se abre la nueva.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="help-page-container">
      {/* COLUMNA IZQUIERDA: Acordeón de preguntas */}
      <div className="faq-section">
        <p className="faq-section-title">PRIMEROS PASOS Y RECURSOS</p>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="faq-item">
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{faq.question}</h3>
                  <span className="faq-icon-wrapper">
                    {/* Renderiza dinámicamente "close" (X) o "plus" (+) usando tu diccionario */}
                    {isOpen ? (
                      <Icon name="close" size={14} />
                    ) : (
                      <Icon name="plus" size={14} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* COLUMNA DERECHA: Tarjeta Amarilla de Alerta */}
      <div className="alert-card">
        <div className="alert-icon">
          {/* Renderiza tu ícono CircleHelp de Lucide */}
          <Icon name="help" size={32} color="#121212" />
        </div>
        <h2 className="alert-title">Si estás en peligro, actúa ahora</h2>
        <p className="alert-text">
          Llama a emergencias —112 o 911, según el país— o pide ayuda a una
          persona de confianza. Si no puedes llamar, dirígete a un centro de
          salud, comisaría o refugio.
        </p>

        <Link to="#" className="alert-btn">
          Buscar ayuda de ACNUR
        </Link>

        <p className="alert-footer">
          Este sitio no sustituye a los servicios de emergencia ni ofrece
          atención inmediata.
        </p>
      </div>
    </div>
  );
}
