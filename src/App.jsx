import { useState } from 'react'
import './App.css'

import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Favorites } from "./pages/favorites";
import { Games } from "./pages/games";
import { Help } from "./pages/help";
import { Home } from "./pages/home";
import { MyHistories } from "./pages/myHistories";
import { Saves } from "./pages/saves";


const initialStories = [
  {
    id: 2,
    title: "La primera flor",
    text: "Encontré la primera flor de la primavera en mi jardín hoy.",
    author: "Vera",
    time: "Hace 2 h",
    likes: 32,
    color: "color-green",
    isLiked: false,
    isSaved: false,
  },
  {
    id: 3,
    title: "La librería de siempre",
    text: "Volví a la librería de mi barrio después de 10 años.",
    author: "Lola",
    time: "Ayer",
    likes: 38,
    color: "color-purple",
    isLiked: false,
    isSaved: false,
  },
  {
    id: 5,
    title: "Café con el abuelo",
    text: "Las historias de mi abuelo siempre suenan mejor con café.",
    author: "Martín",
    time: "Hace 1 h",
    likes: 41,
    color: "color-pink",
    tag: "Historia destacada",
    isLiked: false,
    isSaved: false,
  },
  // Historia creada por "Tú" para probar la nueva página
  {
    id: 99,
    title: "Mi primer recuerdo",
    text: "Este es un recuerdo de prueba que creé yo mismo en el muro.",
    author: "Tú",
    time: "Ayer",
    likes: 5,
    color: "color-blue",
    isLiked: false,
    isSaved: false,
  },
];


function App() {
  const [count, setCount] = useState(0)
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const [stories, setStories] = useState(initialStories);

  return (
    <div>
      <div className="app-layout">
        <Navbar />

        <div className="main-content">
          {/* Pasamos la función para ABRIR el modal al Header */}
          <Header onOpenCreate={() => setIsCreateOpen(true)} />

          {/* El main contendrá las rutas y ocupará el resto de la pantalla */}
          <main className="routes-container">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    stories={stories}
                    setStories={setStories}
                    isCreateOpen={isCreateOpen}
                    closeCreate={() => setIsCreateOpen(false)}
                  />
                }
              />

              <Route
                path="/favorites"
                element={
                  <Favorites
                    stories={stories}
                    setStories={setStories}
                    isCreateOpen={isCreateOpen}
                    closeCreate={() => setIsCreateOpen(false)}
                  />
                }
              />

              <Route path="/games" element={<Games />} />
              <Route path="/help" element={<Help />} />

              <Route
                path="/myHistories"
                element={
                  <MyHistories
                    stories={stories}
                    setStories={setStories}
                    isCreateOpen={isCreateOpen}
                    closeCreate={() => setIsCreateOpen(false)}
                  />
                }
              />

              <Route
                path="/saves"
                element={
                  <Saves
                    stories={stories}
                    setStories={setStories}
                    isCreateOpen={isCreateOpen}
                    closeCreate={() => setIsCreateOpen(false)}
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App
