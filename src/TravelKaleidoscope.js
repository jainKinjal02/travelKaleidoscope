import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TravelKaleidoscope = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setRotation(rotation + 45);
  };

  const handleWheel = (event) => {
    setScale(Math.max(0.5, Math.min(1.5, scale - event.deltaY * 0.001)));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div 
      className="travel-kaleidoscope"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onClick={nextImage}
      onWheel={handleWheel}
      style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }}
    >
      {[0, 1, 2, 3, 4, 5, 6].map((index) => (
        <motion.div
          key={index}
          className={`kaleidoscope-segment segment-${index}`}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          style={{
            backgroundImage: `url(${images[(currentIndex + index) % images.length]})`,
            transform: `rotate(${index * 51.42857}deg)`,
          }}
        />
      ))}
    </motion.div>
  );
};

export default TravelKaleidoscope;