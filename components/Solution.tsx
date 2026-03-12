import React from 'react';
import { motion } from 'framer-motion';
import { Check, Rocket, Cpu, ShieldCheck, Zap } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section id="solutions-detail" className="py-48 relative bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 space-y-64">
        
        {/* Feature 1: The Integration Layer */}
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 glass rounded-[1.5rem] flex items-center justify-center text-brand-500 shadow-2xl border-white/10"
            >
              <Cpu size={32} />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl lg:text-7xl font-black font-display leading-[0.9] tracking-tighter"
            >
              Bespoke <br />
              <span className="font-serif-italic text-brand-500 italic tracking-normal">AI Engines.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed font-medium italic"
            >
              We craft specialized integration layers that bridge the gap between abstract LLM potential and <span className="text-white">concrete enterprise reality.</span>
            </motion.p>
            <motion.ul 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {[
                "Custom RAG Architecture",
                "Private Cloud Orchestration",
                "Automated Contextual Indexing",
                "Artistic UI/UX For AI Workflows"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-5 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-[0_0_15px_rgba(81,47,235,0.4)] transform group-hover:scale-110 transition-transform">
                    <Check size={14} />
                  </div>
                  <span className="text-xl font-black text-white/90 tracking-tight">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
          
          <div className="lg:w-1/2 relative group">
            <motion.div 
               initial={{ opacity: 0, rotate: 5, scale: 0.95 }}
               whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
               transition={{ duration: 1 }}
               className="glass p-6 rounded-[4rem] relative z-10 border-white/10 overflow-hidden shadow-[0_60px_120px_-20px_rgba(81,47,235,0.1)] hover:border-brand-500/30 transition-all duration-700"
            >
               <div className="bg-slate-900/40 rounded-[3.5rem] p-12 flex flex-col items-center gap-12 overflow-hidden">
                  <div className="flex items-center justify-center gap-10 w-full">
                     <div className="w-20 h-28 glass rounded-2xl border-white/5 flex flex-col items-center justify-center gap-2">
                        <div className="w-10 h-1 bg-white/10 rounded"></div>
                        <div className="w-10 h-1 bg-white/5 rounded"></div>
                        <span className="text-[10px] font-black text-slate-500 mt-3 uppercase tracking-widest">Data Lab</span>
                     </div>
                     <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent relative">
                        <motion.div 
                          animate={{ x: [-15, 15, -15] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute top-1/2 left-1/2 -track-x-1/2 -translate-y-1/2 p-3 bg-brand-500 text-white rounded-full shadow-[0_0_30px_#512FEB]"
                        >
                           <Zap size={20} />
                        </motion.div>
                     </div>
                     <div className="w-20 h-28 bg-white rounded-2xl flex flex-col items-center justify-center gap-2 shadow-2xl">
                        <Cpu size={32} className="text-brand-500 animate-pulse" />
                        <span className="text-[9px] font-black text-slate-900 px-2 py-1 bg-brand-50 rounded-full">CORE</span>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>

        {/* Feature 2: Strategic Security */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
          <div className="lg:w-1/2 space-y-12">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="w-16 h-16 glass rounded-[1.5rem] flex items-center justify-center text-accent-cyan shadow-2xl border-white/10"
            >
              <ShieldCheck size={32} />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl lg:text-7xl font-black font-display leading-[0.9] tracking-tighter"
            >
              Ethereal <br />
              <span className="font-serif-italic text-accent-cyan italic tracking-normal">Security.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed font-medium italic"
            >
              Protection that is invisible yet absolute. We implement local inference and private VPC tunnels to ensure your vision remains <span className="text-white">exclusively yours.</span>
            </motion.p>
            <div className="grid grid-cols-2 gap-6">
               <motion.div 
                 whileHover={{ y: -8 }}
                 className="glass p-10 rounded-[3rem] border-white/5 hover:border-brand-500/30 transition-all duration-500"
               >
                  <h4 className="text-brand-500 font-black text-[10px] mb-4 uppercase tracking-[0.4em]">Infrastructure</h4>
                  <p className="text-white font-black text-2xl leading-tight tracking-tight uppercase">Private <br />Core</p>
               </motion.div>
               <motion.div 
                 whileHover={{ y: -8 }}
                 className="glass p-10 rounded-[3rem] border-white/5 hover:border-accent-purple/30 transition-all duration-500"
               >
                  <h4 className="text-accent-purple font-black text-[10px] mb-4 uppercase tracking-[0.4em]">Governance</h4>
                  <p className="text-white font-black text-2xl leading-tight tracking-tight uppercase">ISO-Deep <br />Ready</p>
               </motion.div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="relative p-6 glass rounded-[4rem] shadow-3xl border-white/10 overflow-hidden group"
             >
                <div className="relative z-10 bg-white/[0.02] rounded-[3.5rem] p-20 border border-white/5 text-center">
                   <div className="flex flex-col gap-10 items-center">
                      <div className="inline-flex px-5 py-2 bg-brand-500/10 text-brand-400 text-[10px] font-black rounded-full border border-brand-500/20 items-center gap-2 tracking-[0.3em]">
                         <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
                         SYSTEM INTEGRITY ACTIVE
                      </div>
                      <div className="space-y-10 w-full max-w-sm">
                        {[1, 2, 3].map((i) => (
                           <div key={i} className="h-0.5 bg-white/5 rounded-full relative overflow-hidden">
                              <motion.div 
                                animate={{ left: ["-100%", "100%"] }}
                                transition={{ duration: 4, repeat: Infinity, delay: i * 0.7 }}
                                className="absolute top-0 bottom-0 w-1/3 bg-brand-500 opacity-40 shadow-[0_0_15px_#512FEB]"
                              ></motion.div>
                           </div>
                        ))}
                      </div>
                      <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.6em]">VULNERABILITY: <span className="text-white">0.00%</span></p>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solution;