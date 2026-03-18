import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data';
import { Cpu, Code2, Database, Terminal, Layout, ShieldCheck } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'top expertise': return <Cpu size={20} />;
      case 'languages': return <Code2 size={20} />;
      case 'frameworks & concepts': return <Layout size={20} />;
      case 'tools & technologies': return <Terminal size={20} />;
      case 'databases': return <Database size={20} />;
      default: return <ShieldCheck size={20} />;
    }
  };

  const skillCategories = [
    { name: 'Top Expertise', skills: resumeData.skills.top, color: 'emerald' },
    { name: 'Languages', skills: resumeData.skills.languages, color: 'blue' },
    { name: 'Tools & Technologies', skills: resumeData.skills.tools, color: 'purple' },
    { name: 'Frameworks & Concepts', skills: resumeData.skills.frameworks, color: 'amber' },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400 text-[10px] font-mono tracking-[0.3em] uppercase mb-6"
          >
            Technical Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8"
          >
            Cognitive <span className="text-blue-500">Toolkit</span>
          </motion.h2>
          <p className="text-white/40 text-lg leading-relaxed">
            A comprehensive overview of my technical capabilities, ranging from core data engineering to advanced AI integration and cloud architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
              className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-black transition-all duration-500">
                  {getIcon(category.name)}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (groupIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                    className="px-5 py-2.5 rounded-full bg-white/5 border border-white/5 text-white/60 text-sm font-medium transition-all cursor-default hover:text-blue-400 hover:border-blue-500/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Grid background effect */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  );
};

export default Skills;
