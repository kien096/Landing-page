import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ArrowRight, Play, Sparkles, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-16 sm:pt-28 lg:pt-20 overflow-hidden bg-mesh">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-30%] sm:left-[-10%] w-[420px] h-[420px] sm:w-[800px] sm:h-[800px] bg-brand-500/10 blur-[100px] sm:blur-[150px] rounded-full -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/4 left-1/4 w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] bg-brand-500/20 blur-[90px] sm:blur-[120px] rounded-full -z-10 animate-float"></div>
      <div className="absolute bottom-1/4 right-[-20%] sm:right-1/4 w-[320px] h-[320px] sm:w-[600px] sm:h-[600px] bg-accent-purple/10 blur-[100px] sm:blur-[150px] rounded-full -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex max-w-full items-center gap-3 px-4 sm:px-6 py-2 glass rounded-full text-[9px] sm:text-[10px] font-black tracking-[0.25em] sm:tracking-[0.4em] text-brand-300 border border-white/10 uppercase shadow-2xl"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-ping"></div>
            <span className="bg-gradient-to-r from-brand-300 to-accent-purple bg-clip-text text-transparent">Digital Consciousness 2.0</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter"
          >
            Forge Your <br />
            <span className="text-gradient">Next Era</span> of <br />
            <span className="font-serif-italic text-white/90 italic tracking-normal">Expansion.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-3xl"
          >
            MindShift engineers specialized AI cadres that adapt to your <br className="hidden md:block" />
            enterprise DNA, turning <span className="text-white font-bold">absolute complexity</span> into total clarity.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex w-full sm:w-auto flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-4 sm:pt-6"
          >
            <button className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-brand-500 text-white rounded-[1.5rem] sm:rounded-[2rem] font-black text-base sm:text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(81,47,235,0.5)]">
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
               <span className="relative flex items-center justify-center gap-3">
                 Initiate Protocol <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
               </span>
            </button>
            <button className="glass w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-[1.5rem] sm:rounded-[2rem] font-black text-base sm:text-lg text-white hover:bg-white/10 transition-all flex items-center justify-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <Play size={16} fill="currentColor" />
              </div>
              The Reel
            </button>
          </motion.div>

          {/* Partner Marquee */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-16 sm:pt-20 lg:pt-24 space-y-6 sm:space-y-10 w-full"
          >
            <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.5em] sm:tracking-[0.8em] text-slate-600">The Power of Choice</p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-24 opacity-20 grayscale Contrast-200 transition-all duration-1000 hover:opacity-50 hover:grayscale-0">
               <span className="text-lg sm:text-2xl font-black italic tracking-tighter uppercase whitespace-nowrap">EuroPlast</span>
               <span className="text-lg sm:text-2xl font-black italic tracking-tighter uppercase whitespace-nowrap">Abbey Vietnam</span>
               <span className="text-lg sm:text-2xl font-black italic tracking-tighter uppercase whitespace-nowrap">BanhMyBa</span>
               <span className="text-lg sm:text-2xl font-black italic tracking-tighter uppercase whitespace-nowrap">POLYFILL</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden sm:block">
         <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
