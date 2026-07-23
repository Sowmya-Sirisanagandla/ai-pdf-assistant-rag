import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero">
        <h1>📄 PDF Assistant</h1>

        <h2>Making document understanding effortless.</h2>

        <p>
          Upload any PDF and ask questions using AI-powered semantic search
          and Retrieval-Augmented Generation (RAG).
        </p>

        <div className="buttons">
          <button onClick={() => navigate("/chat")}>
            📤 Upload PDF
          </button>

          <button
            className="secondary"
            onClick={() => navigate("/history")}
          >
            🕒 View History
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;