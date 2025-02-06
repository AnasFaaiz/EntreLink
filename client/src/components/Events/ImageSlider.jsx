import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div style={styles.slider}>
      <style>
        {`
          @keyframes borderAnimation {
            0% { border-color: #444444; }
            50% { border-color: #DAA520; }
            100% { border-color: #444444; }
          }
        `}
      </style>
      <img src={images[currentIndex]} alt="slider" style={styles.image} />
    </div>
  );
};

const styles = {
  slider: {
    width: '97%',
    overflow: 'hidden',
    position: 'absolute',
    top: '9vh',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '20px',
    border: '4px solid #E0E0E0',
    animation: 'borderAnimation 3s infinite',
    marginBottom: '20px',
  },
  image: {
    width: '95.7vw',
    height: '77vh',
    objectFit: 'cover',
  },
};

export default ImageSlider;