import "./ChatHeader.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function ChatHeader() {
  return (
    <header className="header">
      <h1 className="title">My Chatbot</h1>
      <button className="icon-button">
        <MoreHorizIcon />
      </button>
    </header>
  );
}
export default ChatHeader;
