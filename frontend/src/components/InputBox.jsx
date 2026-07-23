import { useState } from "react";
import "../styles/InputBox.css";

function InputBox({
  sendMessage,
  uploading,
  thinking,
}) {
  const [question, setQuestion] = useState("");

  const handleSend = () => {
    if (!question.trim()) return;

    sendMessage(question);
    setQuestion("");
  };

  return (
    <div className="input-box">
      <input
        type="text"
        placeholder={
          uploading
            ? "Upload a PDF first..."
            : "Ask anything about the PDF"
        }
        value={question}
        disabled={uploading || thinking}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (
            e.key === "Enter" &&
            !uploading &&
            !thinking
          ) {
            handleSend();
          }
        }}
      />

      <button
        onClick={handleSend}
        disabled={uploading || thinking}
      >
        {thinking ? "Thinking..." : "Send"}
      </button>
    </div>
  );
}

export default InputBox;