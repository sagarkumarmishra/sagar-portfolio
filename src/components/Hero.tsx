import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Download, Linkedin, Mail, Zap, TrendingUp, Cpu } from 'lucide-react';
import { resumeData } from '../data';

const Hero: React.FC = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const headlines = [
    "Building Scalable Data Pipelines",
    "Optimizing Cloud Infrastructure",
    "Architecting ETL Workflows",
    "Integrating GenAI Solutions"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold tracking-widest uppercase mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            System Online: Available for Hire
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-none">
            {resumeData.basics.name}
          </h1>
          
          <div className="h-12 md:h-16 mb-8">
            <AnimatePresence mode="wait">
              <motion.h2
                key={headlineIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-3xl font-medium text-emerald-500/80"
              >
                {headlines[headlineIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>
          
          <p className="text-lg text-white/60 mb-10 max-w-xl leading-relaxed">
            {resumeData.basics.summary}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-full hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              View Experience
              <ArrowDown size={18} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-md"
            >
              <Download size={18} />
              Download CV
            </motion.button>
          </div>

          <div className="flex items-center gap-6">
            <a href={`https://${resumeData.basics.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-emerald-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${resumeData.basics.email}`} className="text-white/40 hover:text-emerald-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="text-[240px] font-bold text-white/[0.02] select-none group-hover:text-white/[0.04] transition-colors duration-700">SM</div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-32 h-32 rounded-full border border-emerald-500/20 flex items-center justify-center mb-8 relative"
              >
                <div className="absolute inset-0 rounded-full border-t-2 border-emerald-500/40 animate-spin" />
                <Cpu size={40} className="text-emerald-500" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Data Engineering Specialist</h3>
              <p className="text-white/40 text-sm font-mono uppercase tracking-widest">Optimizing ETL & Cloud Architecture</p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />
        </motion.div>
      </div>

      {/* Top 3 Impact Strip */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="w-full max-w-7xl mx-auto px-6 mt-20 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resumeData.impactSignals.map((signal, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-sm flex items-center gap-6 group hover:bg-white/[0.05] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 group-hover:scale-110 transition-transform">
                {signal.type === 'optimization' ? <TrendingUp size={20} /> : signal.type === 'scale' ? <Zap size={20} /> : <Cpu size={20} />}
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{signal.value}</div>
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{signal.label}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-16 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
