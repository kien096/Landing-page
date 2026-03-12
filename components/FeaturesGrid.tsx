import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart3, Globe, Shield, Cpu } from 'lucide-react';

const FeaturesGrid: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="py-24 sm:py-32 lg:py-48 relative bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 sm:mb-24 lg:mb-36 gap-8 sm:gap-12">
          <div className="max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] sm:tracking-[0.8em] mb-6 sm:mb-12"
            >
              Enterprise Capabilities
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black font-display leading-[0.9] tracking-tighter"
            >
              Scale with Artful <br />
              <span className="font-serif-italic text-brand-500 italic tracking-normal">Precision.</span>
            </motion.h2>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 sm:gap-8"
        >
          <motion.div 
            variants={itemVariants}
            className="md:col-span-6 lg:col-span-8 glass p-8 sm:p-12 lg:p-16 rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[4.5rem] border-white/5 relative overflow-hidden group hover:bg-white/[0.04] hover:border-brand-500/20 transition-all duration-1000 shadow-3xl"
          >
            <div className="relative z-10 space-y-8 sm:space-y-10 lg:space-y-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white text-black rounded-[1.2rem] sm:rounded-[1.8rem] flex items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.5)] group-hover:bg-brand-500 group-hover:text-white transition-all transform group-hover:rotate-12 duration-700">
                <Zap size={32} />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-none tracking-tighter uppercase">Strategic AI Architecture</h3>
                <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl font-medium leading-relaxed italic">
                  We engineer custom retrieval pipelines and specialized AI agents that understand your company's <span className="text-white">unique dialect</span> and historical context.
                </p>
              </div>
            </div>
            <div className="absolute top-1/2 right-[-30px] translate-y-[-50%] opacity-[0.01] group-hover:opacity-[0.03] transition-all duration-1000 hidden md:block select-none pointer-events-none">
              <Cpu size={500} />
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="md:col-span-6 lg:col-span-4 glass p-8 sm:p-10 lg:p-12 text-center flex flex-col items-center justify-between rounded-[2.5rem] sm:rounded-[4rem] border-white/5 relative overflow-hidden group hover:bg-white/[0.04] hover:border-accent-purple/20 transition-all duration-1000 shadow-3xl"
          >
             <div className="pt-2 sm:pt-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-10 bg-gradient-to-br from-brand-500 to-accent-purple rounded-[1.2rem] sm:rounded-[1.8rem] flex items-center justify-center mx-auto text-white shadow-[0_0_40px_rgba(81,47,235,0.3)] transition-all duration-700 group-hover:scale-110">
                  <Globe size={32} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 tracking-tighter uppercase leading-tight">Omnipresent AI</h3>
                <p className="text-base sm:text-lg text-slate-400 font-medium leading-relaxed mb-8 sm:mb-12 italic px-2">
                  Deploy across web, mobile, and internal portals with <span className="text-white">technical reliability.</span>
                </p>
             </div>
             <div className="relative w-full max-w-[200px] opacity-30 group-hover:opacity-100 transition-all duration-1000">
                <div className="aspect-[9/17] bg-black/80 rounded-[3.5rem] border-2 border-white/10 p-3 shadow-2xl">
                   <div className="h-full w-full bg-gradient-to-b from-brand-500/10 to-transparent rounded-[2.8rem] flex flex-col items-center pt-8 gap-4">
                       <div className="w-10 h-1 bg-white/10 rounded-full"></div>
                       <div className="w-12 h-12 rounded-full bg-brand-500 animate-pulse shadow-[0_0_30px_#512FEB] flex items-center justify-center">
                          <Zap size={24} />
                       </div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Additional cards refined similarly... */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-3 lg:col-span-4 glass p-8 sm:p-10 lg:p-12 rounded-[2.5rem] sm:rounded-[4rem] border-white/5 group hover:bg-white/[0.04] hover:border-accent-cyan/20 transition-all duration-1000 shadow-3xl flex flex-col justify-between"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 glass rounded-[1.2rem] sm:rounded-[1.8rem] flex items-center justify-center text-accent-cyan mb-6 sm:mb-10 border-white/5 shadow-2xl">
              <BarChart3 size={32} />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tighter uppercase">Artful Metrics</h3>
              <p className="text-base sm:text-lg text-slate-400 font-medium leading-relaxed italic">
                Visualizing the shift from raw data to <span className="text-white">intelligence.</span>
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="md:col-span-3 lg:col-span-8 glass p-8 sm:p-12 lg:p-16 rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[4.5rem] border-white/5 group hover:bg-white/[0.04] hover:border-white/10 transition-all duration-1000 relative overflow-hidden shadow-3xl"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 sm:gap-12 relative z-10">
              <div className="space-y-10 flex-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 text-white rounded-[1.2rem] sm:rounded-[1.8rem] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all border border-white/10 shadow-3xl">
                  <Shield size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl sm:text-4xl font-black text-white leading-none tracking-tighter uppercase">Ironclad Vision</h3>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-xl font-medium leading-relaxed italic">
                    Ensuring your expansion remains private, secure, and exclusively <span className="text-white">yours.</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
