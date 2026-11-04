import { useState } from "react";
import { Link } from "react-router-dom";

export function Games() {
  const [activeGame, setActiveGame] = useState(null);

  // --- ESTADOS PARA TRIVIA ---
  const [triviaIndex, setTriviaIndex] = useState(0);
  const [triviaFinished, setTriviaFinished] = useState(false);
  const [selectedTriviaOption, setSelectedTriviaOption] = useState(null); // Nuevo estado

  // --- ESTADOS PARA SOMBRAS ---
  const [sombraIndex, setSombraIndex] = useState(0);
  const [sombraFinished, setSombraFinished] = useState(false);
  const [selectedSombraOption, setSelectedSombraOption] = useState(null); // Nuevo estado

  // --- ESTADO PARA SEMILLAS ---
  const [selectedSeed, setSelectedSeed] = useState(null);

  // ================= DATOS DE LOS JUEGOS =================
  const triviaQuestions = [
    {
      question:
        "¿En qué departamento se encuentra Caño Cristales, conocido como «el río de los siete colores»?",
      options: ["Meta", "Huila", "Boyacá"],
      correct: 0,
    },
    {
      question:
        "¿Cuál es la capital del departamento del Atlántico conocida como «La Puerta de Oro»?",
      options: ["Cartagena", "Santa Marta", "Barranquilla"],
      correct: 2,
    },
    {
      question: "¿Qué sistema montañoso atraviesa gran parte del Eje Cafetero?",
      options: ["Sierra Nevada", "Los Andes", "La Macarena"],
      correct: 1,
    },
  ];

  const sombraItems = [
    {
      img: "/Palmera.png",
      clue: "Crece muy alta entre las montañas y es el árbol nacional de Colombia.",
      options: ["Palma de cera", "Ceiba", "Frailejón"],
      correct: 0,
    },
    {
      img: "/Transmilenio.png",
      clue: "Sistema de transporte masivo articulado que recorre las principales avenidas de la capital.",
      options: ["MIO", "TransMilenio", "Megabús"],
      correct: 1,
    },
    {
      img: "/Penol.png",
      clue: "Una enorme piedra monolítica con cientos de escalones ubicada en Antioquia.",
      options: ["Cerro Monserrate", "Nevado del Ruiz", "Piedra del Peñol"],
      correct: 2,
    },
    {
      img: "/Ruana.png",
      clue: "Abrigo tradicional de la región andina, tejido en lana para proteger del frío.",
      options: ["Ruana", "Poncho", "Manta"],
      correct: 0,
    },
    {
      img: "/Cafe.png",
      clue: "Bebida caliente que se exporta al mundo y despierta al país entero cada mañana.",
      options: ["Chocolate", "Café", "Aguapanela"],
      correct: 1,
    },
  ];

  const semillasData = {
    sabor: "“Una receta o alimento que te conecte con tu lugar de origen.”",
    sonido:
      "“El canto de un pájaro, la música de tu región o el ruido de la lluvia.”",
    paisaje:
      "“Un río, una calle, una montaña o un rincón que llevas en la memoria.”",
  };

  // ================= FUNCIONES =================

  // Guardamos la respuesta seleccionada sin pasar a la siguiente
  const handleTriviaAnswer = (index) => {
    if (selectedTriviaOption === null) setSelectedTriviaOption(index);
  };

  const handleTriviaContinue = () => {
    if (triviaIndex < triviaQuestions.length - 1) {
      setTriviaIndex(triviaIndex + 1);
    } else {
      setTriviaFinished(true);
    }
    setSelectedTriviaOption(null); // Reseteamos la selección para la siguiente pregunta
  };

  // Guardamos la sombra seleccionada sin pasar a la siguiente
  const handleSombraAnswer = (index) => {
    if (selectedSombraOption === null) setSelectedSombraOption(index);
  };

  const handleSombraContinue = () => {
    if (sombraIndex < sombraItems.length - 1) {
      setSombraIndex(sombraIndex + 1);
    } else {
      setSombraFinished(true);
    }
    setSelectedSombraOption(null); // Reseteamos la selección para la siguiente pregunta
  };

  const startGame = (gameName) => {
    resetGames();
    setActiveGame(gameName);
  };

  const resetGames = () => {
    setActiveGame(null);
    setTriviaIndex(0);
    setTriviaFinished(false);
    setSelectedTriviaOption(null);
    setSombraIndex(0);
    setSombraFinished(false);
    setSelectedSombraOption(null);
    setSelectedSeed(null);
  };

  return (
    <div className="games-dashboard">
      <div className="games-intro-box">
        <p>
          Estos juegos celebran los territorios, saberes y recuerdos de
          Colombia. Puedes participar sin contar experiencias difíciles: aquí tú
          decides qué recordar y compartir.
        </p>
      </div>

      <div className="games-grid">
        {/* ================= TARJETA 1: TRIVIA ================= */}
        <div className="game-card card-yellow">
          <div className="tape"></div>
          <p className="card-category">JUEGO 1 · TERRITORIOS</p>

          {activeGame !== "trivia" ? (
            <>
              <h2 className="card-title">Trivia de Colombia</h2>
              <p className="card-desc">
                Pon a prueba lo que sabes sobre lugares, tradiciones y símbolos
                representativos de los departamentos de Colombia.
              </p>
              <button className="jugar-btn" onClick={() => startGame("trivia")}>
                Jugar
              </button>
            </>
          ) : (
            <div className="in-card-game">
              <button className="close-game-btn" onClick={resetGames}>
                ← Volver
              </button>

              {!triviaFinished ? (
                <>
                  <p className="step-counter">
                    Pregunta {triviaIndex + 1} de {triviaQuestions.length}
                  </p>
                  <h3 className="in-card-question">
                    {triviaQuestions[triviaIndex].question}
                  </h3>
                  <div className="in-card-options">
                    {triviaQuestions[triviaIndex].options.map((opt, i) => {
                      // Lógica para asignar las clases de correcto/incorrecto
                      let btnClass = "in-card-btn";
                      if (selectedTriviaOption !== null) {
                        if (i === triviaQuestions[triviaIndex].correct)
                          btnClass += " correct-answer";
                        else if (i === selectedTriviaOption)
                          btnClass += " wrong-answer";
                      }

                      return (
                        <button
                          key={i}
                          className={btnClass}
                          onClick={() => handleTriviaAnswer(i)}
                          disabled={selectedTriviaOption !== null} // Deshabilita botones al responder
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {/* Botón continuar centrado */}
                  {selectedTriviaOption !== null && (
                    <div className="continue-container">
                      <button
                        className="jugar-btn continue-btn"
                        onClick={handleTriviaContinue}
                      >
                        Continuar
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <h3 className="in-card-question">
                    ¡Has completado la trivia!
                  </h3>
                  <button className="jugar-btn" onClick={resetGames}>
                    Terminar
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* ================= TARJETA 2: SOMBRAS ================= */}
        <div className="game-card card-pink">
          <div className="tape"></div>
          <p className="card-category">JUEGO 2 · SÍMBOLOS</p>

          {activeGame !== "sombra" ? (
            <>
              <h2 className="card-title">Adivina la sombra</h2>
              <p className="card-desc">
                Observa cada silueta, lee la pista y descubre objetos, plantas y
                animales que forman parte de nuestra memoria cultural.
              </p>
              <button className="jugar-btn" onClick={() => startGame("sombra")}>
                Jugar
              </button>
            </>
          ) : (
            <div className="in-card-game">
              <button className="close-game-btn" onClick={resetGames}>
                ← Volver
              </button>

              {!sombraFinished ? (
                <>
                  <div className="in-card-image-container">
                    <img
                      src={sombraItems[sombraIndex].img}
                      alt="Sombra misteriosa"
                      className="in-card-img"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.classList.add("fallback-shadow");
                      }}
                    />
                  </div>
                  <p className="in-card-clue">
                    {sombraItems[sombraIndex].clue}
                  </p>
                  <div className="in-card-options">
                    {sombraItems[sombraIndex].options.map((opt, i) => {
                      // Lógica de colores para sombras
                      let btnClass = "in-card-btn";
                      if (selectedSombraOption !== null) {
                        if (i === sombraItems[sombraIndex].correct)
                          btnClass += " correct-answer";
                        else if (i === selectedSombraOption)
                          btnClass += " wrong-answer";
                      }

                      return (
                        <button
                          key={i}
                          className={btnClass}
                          onClick={() => handleSombraAnswer(i)}
                          disabled={selectedSombraOption !== null}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {/* Botón continuar centrado */}
                  {selectedSombraOption !== null && (
                    <div className="continue-container">
                      <button
                        className="jugar-btn continue-btn"
                        onClick={handleSombraContinue}
                      >
                        Continuar
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <h3 className="in-card-question">
                    ¡Has adivinado todas las sombras!
                  </h3>
                  <button className="jugar-btn" onClick={resetGames}>
                    Terminar
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* ================= TARJETA 3: SEMILLAS ================= */}
        <div className="game-card card-green">
          <div className="tape"></div>
          <p className="card-category">JUEGO 3 · MEMORIA VIVA</p>

          {activeGame !== "semillas" ? (
            <>
              <h2 className="card-title">Semillas de memoria</h2>
              <p className="card-desc">
                Elige entre sabores, sonidos y paisajes para reencontrarte con
                recuerdos amables de tu territorio, a tu propio ritmo.
              </p>
              <button
                className="jugar-btn"
                onClick={() => startGame("semillas")}
              >
                Jugar
              </button>
            </>
          ) : (
            <div className="in-card-game">
              <button className="close-game-btn" onClick={resetGames}>
                ← Volver
              </button>

              <p className="in-card-clue">
                Elige una semilla para conectar con un recuerdo amable de tu
                territorio.
              </p>

              <div className="in-card-options">
                <button
                  className="in-card-btn flex-btn"
                  onClick={() => setSelectedSeed("sabor")}
                >
                  Un sabor <span>→</span>
                </button>
                <button
                  className="in-card-btn flex-btn"
                  onClick={() => setSelectedSeed("sonido")}
                >
                  Un sonido <span>→</span>
                </button>
                <button
                  className="in-card-btn flex-btn"
                  onClick={() => setSelectedSeed("paisaje")}
                >
                  Un paisaje <span>→</span>
                </button>
              </div>

              {selectedSeed && (
                <div className="in-card-result">
                  <h3 className="semilla-quote">
                    {semillasData[selectedSeed]}
                  </h3>
                  <p className="semilla-footer">
                    Puedes guardar el recuerdo para ti o compartirlo cuando te
                    sientas preparado.
                  </p>
                  <Link to="/myHistories" className="escribir-btn">
                    Escribir este recuerdo
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
