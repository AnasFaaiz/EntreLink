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
      <img src={images[currentIndex]} alt="slider" style={styles.image} />
    </div>
  );
};

const styles = {
  slider: {
    width: '80vw',
    height: "50vh",
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default ImageSlider;