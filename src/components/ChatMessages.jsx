import { useRef } from 'react'
import { useAutoScroll } from '../hooks/useAutoScroll'
import  ChatMessage  from './ChatMessage';
import './ChatMessages.css'
function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);
  useAutoScroll(chatMessages, chatMessagesRef);
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map(({ message, sender, id }) => {
        return <ChatMessage sender={sender} message={message} key={id} />;
      })}
    </div>
  );
}
export default ChatMessages;