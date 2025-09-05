import React from 'react';
import { motion } from 'motion/react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

const StarField: React.FC = () => {
  const stars: Star[] = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default StarField;