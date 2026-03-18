import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing Core');

  const statusMessages = [
    'Initializing Core',
    'Loading Experience Graph',
    'Optimizing Neural Mesh',
    'Synchronizing Data Pipelines',
    'Finalizing Interface'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        
        // Update status message based on progress
        const index = Math.floor((prev / 100) * statusMessages.length);
        if (statusMessages[index] !== status) {
          setStatus(statusMessages[index]);
        }
        
        return prev + Math.random() * 4;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete, status]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* Background scanning lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:100%_4px] animate-scan" />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-12"
      >
        <div className="text-7xl font-bold tracking-tighter text-white flex items-center">
          <motion.span
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >S</motion.span>
          <motion.span
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >M</motion.span>
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-emerald-500 ml-1"
          >_</motion.span>
        </div>
        
        <motion.div
          className="absolute -inset-8 rounded-full border border-emerald-500/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -inset-12 rounded-full border border-emerald-500/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="w-64">
        <div className="flex justify-between items-end mb-2">
          <motion.p
            key={status}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-mono tracking-[0.2em] text-emerald-500/60 uppercase"
          >
            {status}
          </motion.p>
          <span className="text-[10px] font-mono text-white/40">{Math.floor(progress)}%</span>
        </div>
        <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center opacity-20">
        <div className="text-[8px] font-mono text-white tracking-widest uppercase">System: v4.0.2-stable</div>
        <div className="text-[8px] font-mono text-white tracking-widest uppercase">Encrypted Connection: Active</div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
