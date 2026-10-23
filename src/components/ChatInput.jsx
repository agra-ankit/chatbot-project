import { useState} from "react"
import { Chatbot } from "supersimpledev"  
import "./ChatInput.css"
function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (inputText.trim() === "") return;
    if (isLoading === true) return;
    setIsLoading(true);
    setInputText("");
    setChatMessages([
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
      {
        message: "loading",
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    const response = await Chatbot.getResponseAsync(inputText);
    const responseMessage = {
      message: response,
      sender: "robot",
      id: crypto.randomUUID(),
    };
    setChatMessages((chatMessages) => [
      ...chatMessages.slice(0, -1),
      responseMessage,
    ]);
    setIsLoading(false);
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      sendMessage();
    } else if (e.key === "Escape") {
      setInputText("");
    }
  }
  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to ChatBot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={handleKeyDown}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
export default ChatInput;