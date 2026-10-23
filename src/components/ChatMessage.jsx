import RobotProfileImage from "../assets/robot.png"
import UserProfileImage from "../assets/user.png"
import LoadingSpinner from "../assets/loading-spinner.gif"
import './ChatMessage.css'
import Time from "./Time"


function ChatMessage({ message, sender }) {
  return (
    
    <div
      className={
        sender === "robot"
          ? "chat-message-robot chat-message"
          : "chat-message-user chat-message"
      }
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      {message !== "loading" && (
        <div className="chat-message-text">
          <p>{message}</p>
          <Time sender={sender}/>
        </div>
      )}
      {message === "loading" && (
        <img src={LoadingSpinner} className="loading-spinner" />
      )}
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}
export default ChatMessage;