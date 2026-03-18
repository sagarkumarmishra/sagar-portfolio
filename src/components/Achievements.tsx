import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Zap, Target, Award, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../data';

const Achievements: React.FC = () => {
  const icons = [Trophy, Zap, Target, Award];

  return (
    <section id="achievements" className="py-32 bg-white/[0.01] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-500/60 text-[10px] font-mono tracking-[0.3em] uppercase mb-6"
            >
              Performance Metrics
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8"
            >
              High-Impact <span className="text-emerald-500">Milestones</span>
            </motion.h2>
            <p className="text-white/40 text-lg leading-relaxed">
              Quantifiable results and technical breakthroughs that defined my contribution to organizational growth and efficiency.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <div className="px-8 py-6 rounded-[32px] bg-emerald-500/5 border border-emerald-500/10 backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl font-bold text-emerald-500 mb-1">8-10%</div>
              <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">Cost Optimization</div>
            </div>
            <div className="px-8 py-6 rounded-[32px] bg-blue-500/5 border border-blue-500/10 backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl font-bold text-blue-400">100%</div>
              <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">Data Integrity</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            const intensity = achievement.intensity || 0.8;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -12 }}
                className="group relative p-10 rounded-[40px] bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-all duration-700 overflow-hidden"
              >
                {/* Heatmap-style background glow */}
                <div 
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] transition-all duration-700 opacity-20 group-hover:opacity-40"
                  style={{ backgroundColor: intensity > 0.9 ? '#10b981' : '#3b82f6' }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500">
                      <Icon size={28} />
                    </div>
                    <ArrowUpRight className="text-white/10 group-hover:text-emerald-500 transition-colors" size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-tight">{achievement.title}</h3>
                  <div className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-emerald-500" />
                    {achievement.context} {achievement.metric && `• ${achievement.metric}`}
                  </div>
                  
                  <p className="text-white/50 text-sm leading-relaxed mb-10">
                    {achievement.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Impact Intensity</span>
                      <span className="text-xs font-bold text-emerald-500">{(intensity * 100).toFixed(0)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${intensity * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/[0.02] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500/[0.02] to-transparent pointer-events-none" />
    </section>
  );
};

export default Achievements;
