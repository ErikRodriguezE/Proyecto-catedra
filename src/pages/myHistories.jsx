import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icons";

export function MyHistories({
  stories,
  setStories,
  isCreateOpen,
  closeCreate,
}) {
  const [selectedStoryId, setSelectedStoryId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");
  const [newColor, setNewColor] = useState("color-yellow");

  // FILTRO MÁGICO: Solo toma las historias donde el autor eres "Tú"
  const myStories = stories.filter((story) => story.author === "Tú");

  const handleCreateStory = () => {
    if (!newTitle.trim() || !newText.trim()) return;

    const newStory = {
      id: Date.now(),
      title: newTitle,
      text: newText,
      author: "Tú",
      time: "Justo ahora",
      likes: 0,
      color: newColor,
      isLiked: false,
      isSaved: false,
    };

    setStories([newStory, ...stories]); // Se guarda en el estado global
    setNewTitle("");
    setNewText("");
    setNewColor("color-yellow");
    closeCreate();
  };

  const toggleLike = (e, id) => {
    if (e) e.stopPropagation();
    setStories(
      stories.map((story) => {
        if (story.id === id) {
          const isNowLiked = !story.isLiked;
          return {
            ...story,
            isLiked: isNowLiked,
            likes: isNowLiked ? story.likes + 1 : story.likes - 1,
          };
        }
        return story;
      }),
    );
  };

  const toggleSave = (e, id) => {
    if (e) e.stopPropagation();
    setStories(
      stories.map((story) =>
        story.id === id ? { ...story, isSaved: !story.isSaved } : story,
      ),
    );
  };

  const currentStory = stories.find((s) => s.id === selectedStoryId);

  return (
    <div className="home-container">
      {myStories.length === 0 ? (
        <div
          className="empty-state"
          style={{
            textAlign: "center",
            padding: "100px 20px",
            color: "#666",
            fontFamily: "var(--font-sans)",
          }}
        >
          <Icon name="spark" size={48} color="#ccc" />
          <h2 style={{ marginTop: "20px", color: "#121212" }}>
            Aún no has compartido historias
          </h2>
          <p>Tus recuerdos, momentos y relatos aparecerán en esta pared.</p>
        </div>
      ) : (
        <div className="stories-grid">
          {/* Mapeamos SOLO mis historias */}
          {myStories.map((story) => (
            <div key={story.id} className={`story-card ${story.color}`}>
              <div className="tape"></div>
              <h2 className="story-title">{story.title}</h2>

              <button
                className="read-btn"
                onClick={() => setSelectedStoryId(story.id)}
              >
                LEER HISTORIA →
              </button>

              <div className="story-footer">
                <div className="story-author">
                  <span className="author-name">{story.author}</span>
                  <span className="author-time">{story.time}</span>
                </div>
                <div className="story-actions">
                  <button
                    className="action-btn"
                    onClick={(e) => toggleSave(e, story.id)}
                  >
                    <Icon
                      name="bookmark"
                      size={16}
                      color={story.isSaved ? "#eab308" : "currentColor"}
                      fill={story.isSaved ? "#eab308" : "none"}
                    />
                  </button>
                  <button
                    className="action-btn heart-btn"
                    onClick={(e) => toggleLike(e, story.id)}
                  >
                    <Icon
                      name="heart"
                      size={16}
                      color={story.isLiked ? "#ef4444" : "currentColor"}
                      fill={story.isLiked ? "#ef4444" : "none"}
                    />{" "}
                    {story.likes}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* --- MODAL PARA LEER HISTORIA --- */}
      {currentStory && (
        <div className="modal-overlay" onClick={() => setSelectedStoryId(null)}>
          <div
            className={`modal-card story-card ${currentStory.color}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="tape"></div>
            <button
              className="close-modal-btn"
              onClick={() => setSelectedStoryId(null)}
            >
              <Icon name="close" size={20} />
            </button>
            <h2 className="modal-title">{currentStory.title}</h2>
            <p className="modal-text">“{currentStory.text}”</p>
            <div className="story-footer modal-footer">
              <div className="story-author">
                <span className="author-name">{currentStory.author}</span>
                <span className="author-time">{currentStory.time}</span>
              </div>
              <div className="story-actions">
                <button
                  className="action-btn action-text"
                  onClick={() => toggleSave(null, currentStory.id)}
                >
                  <Icon
                    name="bookmark"
                    size={16}
                    color={currentStory.isSaved ? "#eab308" : "currentColor"}
                    fill={currentStory.isSaved ? "#eab308" : "none"}
                  />{" "}
                  Guardar
                </button>
                <button
                  className="action-btn heart-btn"
                  onClick={() => toggleLike(null, currentStory.id)}
                >
                  <Icon
                    name="heart"
                    size={16}
                    color={currentStory.isLiked ? "#ef4444" : "currentColor"}
                    fill={currentStory.isLiked ? "#ef4444" : "none"}
                  />{" "}
                  {currentStory.likes}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL PARA CREAR HISTORIA --- */}
      {isCreateOpen && (
        <div className="modal-overlay" onClick={closeCreate}>
          <div
            className={`modal-card create-card ${newColor}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="tape"></div>
            <button className="close-modal-btn" onClick={closeCreate}>
              <Icon name="close" size={20} />
            </button>
            <h2 className="modal-title">Deja tu historia</h2>
            <p className="create-subtitle">
              Puede ser un recuerdo, un momento o unas pocas palabras.
            </p>
            <input
              type="text"
              className="create-input title-input"
              placeholder="Título de la historia"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <textarea
              className="create-input text-input"
              placeholder="Escribe aquí tu historia..."
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            ></textarea>
            <p className="create-label">DATOS DE CONTACTO (OPCIONAL)</p>
            <input
              type="text"
              className="create-input contact-input"
              placeholder="Teléfono o correo electrónico"
            />
            <div className="create-footer">
              <div className="color-picker">
                {[
                  "color-yellow",
                  "color-pink",
                  "color-green",
                  "color-blue",
                  "color-purple",
                ].map((color) => (
                  <button
                    key={color}
                    className={`color-circle ${color} ${newColor === color ? "selected" : ""}`}
                    onClick={() => setNewColor(color)}
                  ></button>
                ))}
              </div>
              <button className="submit-story-btn" onClick={handleCreateStory}>
                <Icon name="plus" size={16} /> Pegar en el muro
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}