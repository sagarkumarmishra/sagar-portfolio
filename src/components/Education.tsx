import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { resumeData } from '../data';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-purple-500/5 border border-purple-500/10 text-purple-400 text-[10px] font-mono tracking-[0.3em] uppercase mb-6"
            >
              Academic Foundation
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-bold tracking-tighter text-white mb-16"
            >
              Education
            </motion.h2>

            <div className="space-y-12">
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 group"
                >
                  <div className="absolute left-0 top-0 w-px h-full bg-white/5 group-hover:bg-purple-500/30 transition-colors" />
                  <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-purple-400">
                      <GraduationCap size={20} />
                      <span className="text-sm font-mono uppercase tracking-widest">{edu.degree}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-purple-400 transition-colors">
                      {edu.institution}
                    </h3>
                    
                    <div className="flex flex-wrap gap-6 text-white/40 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{edu.dates}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-amber-500/5 border border-amber-500/10 text-amber-400 text-[10px] font-mono tracking-[0.3em] uppercase mb-6"
            >
              Professional Growth
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-bold tracking-tighter text-white mb-16"
            >
              Certifications
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {resumeData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                    <Award size={20} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-amber-400 transition-colors">
                    {cert}
                  </h3>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Professional</span>
                    <ExternalLink size={14} className="text-white/10 group-hover:text-amber-500 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
