import "../image-preview/ImagePreview.css";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const ImagePreview = (props) => {
  const { images, handleRemoveImage } = props;

  return (
    <div className={images.length ? "image-preview-container" : ""}>
      {images.map((url, index) => (
        <div key={index} className="thumbnail">
          <img key={url + "-preview"} src={url} />
          <IconButton
            size="small"
            onClick={() => handleRemoveImage(index)}
            className="remove-button"
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default ImagePreview;
