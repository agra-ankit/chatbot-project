import { useEffect, useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import { Welcome } from "./components/Welcome";
import { Chatbot } from "supersimpledev";
import "./App.css";

function App() {
  useEffect(() => {
    Chatbot.addResponses({
      "my fav food": "mango",
      "who r u ": "chatbot",
      "what u like to do": "I love chatting and helping you out!",
      "hi": "hello",
    });
  }, []);

  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div className="app-container">
      {chatMessages.length === 0 && <Welcome />}
      <ChatMessages chatMessages={chatMessages} />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
