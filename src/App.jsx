import getLLM from "./get-llm.service";
import "./App.css";
import { useState } from "react";
import ChatInputBar from "./components/chat-input-bar/ChatInputBar";
import ChatHeader from "./components/chat-header/ChatHeader";

function App() {
  // images and message are created to hold user input
  const [images, setImages] = useState([]); // array of urls
  const [message, setMessage] = useState(""); // simple string

  const [error, setError] = useState(); // Holds any error on inputs, value is string or undefined
  const [chat, setChat] = useState([]); // array of messages. Each array structer containes { messate: string, image: url string, client: boolean}

  // fucntion to turn user files to image urls
  const uploadImages = (files) => {
    const fileArray = Array.from(files);

    const imagesURLs = fileArray?.map((file) => {
      if (file) {
        return URL.createObjectURL(file);
      }
    });

    setImages((prev) => [...prev, ...imagesURLs]);
  };

  // handle user inputs and get llm response
  const handleClick = () => {
    setError(undefined);

    if (!images.length || !message)
      return setError("Please upload 4 images max along with your question"); // error

    const response = getLLM();

    // Add user input to conversation
    setChat((prevChat) => {
      const newChat = [...prevChat];

      for (const image of images) newChat.push({ image, client: true });

      newChat.push({ message, client: true });

      return newChat;
    });

    // Add LLM response to conversation
    setChat((prevChat) => {
      const newChat = [...prevChat];

      images.forEach((image, ind) => {
        newChat.push({ image, message: response[ind], client: false });
      });

      return newChat;
    });

    setImages([]);
    setMessage("");

    return;
  };

  // Remove image thumbnail
  const handleRemoveImage = (index) => {
    setImages((prevThumbnails) => {
      const newThumbnails = [...prevThumbnails];

      return newThumbnails.filter((_, i) => i !== index);
    });
  };

  return (
    <div className="app-container">
      <ChatHeader />
      <div className="chat">
        {chat.map((response, chatIndex) => (
          <div
            className={response.client ? "client-message" : "llm-message"}
            key={`chat-message-${chatIndex}`}
          >
            {response.image && (
              <img className="chat-image" src={response.image}></img>
            )}
            {response.message && (
              <span
                className={
                  response.client ? "client-response-text" : "llm-response-text"
                }
              >
                {response.message}
              </span>
            )}
          </div>
        ))}
      </div>

      <ChatInputBar
        uploadImages={uploadImages}
        handleClick={handleClick}
        handleRemoveImage={handleRemoveImage}
        setMessage={setMessage}
        message={message}
        images={images}
        error={error}
      />
    </div>
  );
}

export default App;
