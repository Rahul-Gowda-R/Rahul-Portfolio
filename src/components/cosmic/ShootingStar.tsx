import React from 'react';
import { motion } from 'motion/react';

const ShootingStar: React.FC = () => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
      initial={{ 
        x: '100vw', 
        y: Math.random() * window.innerHeight * 0.5,
        rotate: -45 
      }}
      animate={{ 
        x: '-100px', 
        y: Math.random() * window.innerHeight * 0.5 + 200,
      }}
      transition={{
        duration: 2,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: Math.random() * 10 + 5,
      }}
      style={{
        boxShadow: '0 0 6px #fff, 0 0 12px #fff, 0 0 18px #fff',
        filter: 'blur(0.5px)',
      }}
    />
  );
};

const ShootingStars: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 3 }, (_, i) => (
        <ShootingStar key={i} />
      ))}
    </div>
  );
};

export default ShootingStars;