import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { resumeData } from '../data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-500/60 text-[10px] font-mono tracking-[0.3em] uppercase mb-6"
            >
              Get in Touch
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8"
            >
              Let's Build the <span className="text-emerald-500">Future</span>
            </motion.h2>
            <p className="text-white/40 text-lg leading-relaxed mb-12 max-w-lg">
              Currently open to high-impact opportunities in Data Engineering, AI Infrastructure, and Cloud Architecture. Let's discuss how we can drive innovation together.
            </p>

            <div className="space-y-8">
              <motion.a
                href={`mailto:${resumeData.basics.email}`}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-1">Email</div>
                  <div className="text-xl font-bold text-white group-hover:text-emerald-500 transition-colors">{resumeData.basics.email}</div>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${resumeData.basics.phone}`}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-blue-500 group-hover:text-black transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-1">Phone</div>
                  <div className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{resumeData.basics.phone}</div>
                </div>
              </motion.a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-purple-500 group-hover:text-black transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-1">Location</div>
                  <div className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{resumeData.basics.location}</div>
                </div>
              </div>

              <div className="flex gap-4 pt-8">
                <motion.a
                  href={`https://${resumeData.basics.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-[48px] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-white/20 uppercase tracking-widest ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/10 focus:outline-none focus:border-emerald-500/50 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-white/20 uppercase tracking-widest ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/10 focus:outline-none focus:border-emerald-500/50 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-mono text-white/20 uppercase tracking-widest ml-4">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/10 focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl bg-emerald-500 text-black font-bold flex items-center justify-center gap-3 group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10">Send Transmission</span>
                <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        <footer className="mt-48 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">
            © 2026 Sagar Mishra • Engineered for Impact
          </div>
          <div className="flex gap-12">
            <a href="#" className="text-[10px] font-mono text-white/20 hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-[10px] font-mono text-white/20 hover:text-white transition-colors uppercase tracking-widest">Terms of Service</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
