import { useState } from "react";
import "../styles/styles.css";

const images = [
  "/Gallery/8.JPG",
  "/Gallery/2.png",
  "/Gallery/4.jpg",
  "/Gallery/6.jpg",
  "/Gallery/7.jpg",
  "/Gallery/ab2.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className="gallery-item"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {/* Enlarged Image Preview */}
      {selectedImage && (
        <div className="overlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Preview" className="preview-image" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
