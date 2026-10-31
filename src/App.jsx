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


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="app-layout">
        <Navbar />

        <div className="main-content">
          <Header />
        </div>

        {/* El main contendrá las rutas y ocupará el resto de la pantalla */}
        <main className="routes-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/games" element={<Games />} />
            <Route path="/help" element={<Help />} />
            <Route path="/myHistories" element={<MyHistories />} />
            <Route path="/saves" element={<Saves />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App
