import React from 'react';
import { motion } from 'framer-motion';
const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div className="loading-screen" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 2, delay: 1 }} onAnimationComplete={onComplete}>
      <motion.div className="logo" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>YAAR</motion.div>
      <p>Loading your galaxy...</p>
    </motion.div>
  );
};
export default LoadingScreen;