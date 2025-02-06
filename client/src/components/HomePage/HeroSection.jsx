import React from "react";
import { motion } from "framer-motion";
import './herosection.css';

const mindsetWords = ["Risk", "Commitment", "Vision", "Networking", "Innovation", "Growth", "Resilience", "Passion"];

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Main Text in the Center */}
      <motion.h1 
        className="hero-title"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
      >
        Welcome to EntreLink 🚀 <br /> Connect. Learn. Grow.
      </motion.h1>

      {/* Animated Bubbles */}
      {mindsetWords.map((word, index) => (
        <motion.div
          key={index}
          className="bubble"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: [1, 1.2, 1],
            x: [0, Math.random() * 200 - 100, 0], 
            y: [0, Math.random() * 200 - 100, 0], 
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.5, // Different timing for each bubble
          }}
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSection;
