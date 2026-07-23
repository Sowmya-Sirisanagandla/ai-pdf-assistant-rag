import Message from "./Message";
import "../styles/ChatBox.css";

function ChatBox({ messages }) {
  return (
    <div className="chat-box">
      {messages.map((msg, index) => (
        <Message
          key={index}
          type={msg.type}
          text={msg.text}
        />
      ))}
    </div>
  );
}

export default ChatBox;