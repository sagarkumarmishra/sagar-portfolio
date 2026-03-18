import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Briefcase, TrendingUp, Zap, Cpu, ShieldCheck } from 'lucide-react';
import { resumeData } from '../data';

const ImpactBadge: React.FC<{ type: string; label: string }> = ({ type, label }) => {
  const icons: Record<string, any> = {
    optimization: TrendingUp,
    innovation: Zap,
    reliability: ShieldCheck,
    accuracy: Cpu
  };
  const Icon = icons[type] || Zap;
  
  return (
    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold tracking-widest uppercase border border-emerald-500/20">
      <Icon size={10} />
      {label}
    </span>
  );
};

const ExperienceCard: React.FC<{ exp: any, index: number }> = ({ exp, index }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative mb-12"
    >
      <div className={`relative z-10 rounded-[32px] border transition-all duration-500 overflow-hidden backdrop-blur-md ${
        isExpanded ? 'bg-white/[0.08] border-emerald-500/30 shadow-[0_20px_50px_rgba(16,185,129,0.1)]' : 'bg-white/[0.03] border-white/5 hover:border-white/20'
      }`}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-8 md:p-10 text-left flex items-start justify-between gap-6"
        >
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-white/5 text-white/40 text-[10px] font-mono tracking-widest uppercase border border-white/10">
                {exp.dates}
              </span>
              {exp.impactMarkers?.map((marker: any, i: number) => (
                <ImpactBadge key={i} {...marker} />
              ))}
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
            
            <div className="flex flex-wrap items-center gap-6 text-white/40 text-sm">
              <span className="flex items-center gap-2 font-medium text-emerald-500/80">
                <Briefcase size={16} />
                {exp.company}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                {exp.location}
              </span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] uppercase tracking-tighter border border-white/10">
                {exp.type}
              </span>
            </div>
          </div>
          
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className={`mt-4 w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
              isExpanded ? 'bg-emerald-500 border-emerald-500 text-black' : 'bg-white/5 border-white/10 text-white/20'
            }`}
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="px-8 md:px-10 pb-10 pt-2 border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="text-[10px] font-mono text-emerald-500/40 uppercase tracking-[0.3em] mb-4">Core Contributions</div>
                    <ul className="space-y-4">
                      {exp.bullets.map((bullet: string, i: number) => {
                        const isHighlighted = exp.impactMarkers?.some((m: any) => m.index === i);
                        return (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className={`flex gap-4 text-sm leading-relaxed transition-colors ${
                              isHighlighted ? 'text-white font-medium' : 'text-white/60'
                            }`}
                          >
                            <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
                              isHighlighted ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'bg-white/20'
                            }`} />
                            {bullet}
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                      <div className="text-[10px] font-mono text-emerald-500/40 uppercase tracking-[0.3em] mb-6">AI Insight</div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-xs text-white/80">
                          <div className="w-1 h-8 bg-emerald-500 rounded-full" />
                          <p>High impact detected in <span className="text-emerald-400">cloud cost optimization</span> and <span className="text-emerald-400">GenAI integration</span>.</p>
                        </div>
                        <div className="pt-4 border-t border-white/5">
                          <div className="flex justify-between text-[10px] text-white/40 mb-2 uppercase">Ownership Level</div>
                          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="w-[90%] h-full bg-emerald-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Timeline line with career progression feel */}
      <div className="absolute top-0 bottom-0 -left-8 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent hidden md:block">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          className="w-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" 
        />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-emerald-500 z-20" />
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-500/60 text-[10px] font-mono tracking-[0.3em] uppercase mb-6"
          >
            Career Trajectory
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8"
          >
            Professional <span className="text-emerald-500">Narrative</span>
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
            A data-driven chronicle of my journey building high-performance data systems and driving architectural innovation.
          </p>
        </div>

        <div className="relative md:pl-16">
          {resumeData.experience.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
