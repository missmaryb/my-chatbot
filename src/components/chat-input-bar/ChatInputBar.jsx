import { IconButton } from "@mui/material";
import { Add, Upload } from "@mui/icons-material";
import "./ChatInputBar.css";
import ImagePreview from "../image-preview/ImagePreview";

function ChatInputBar(props) {
  const {
    uploadImages,
    handleClick,
    handleRemoveImage,
    setMessage,
    message,
    images,
    error,
  } = props;

  return (
    <div className="chat-input-container">
      <div className="chat-input-bar">
        <ImagePreview images={images} handleRemoveImage={handleRemoveImage} />
        <div className="input-container">
          <input
            type="file"
            accept="image/*"
            multiple
            id="image-upload"
            style={{ display: "none" }}
            onChange={(e) => uploadImages(e.target.files)}
          />
          <label htmlFor="image-upload">
            <IconButton variant="contained" color="#1976d2" component="span">
              <Add color="primary" />
            </IconButton>
          </label>
          <div className="search-field-container">
            <input
              type="text"
              name="search"
              className="search-field"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="ask me anything"
            />

            <IconButton
              onClick={() => handleClick()}
              sx={{
                "&:focus": { outline: "none", boxShadow: "none" },
                "&:focus-visible": { outline: "none", boxShadow: "none" },
              }}
            >
              <Upload color="primary" />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="error-message">{error && <span>{error}</span>}</div>
    </div>
  );
}

export default ChatInputBar;
