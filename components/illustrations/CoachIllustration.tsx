import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, BookOpen, BarChart3, Bot } from 'lucide-react';

const CoachIllustration = () => {
  return (
    <div className="w-full aspect-[4/3] bg-slate-950 rounded-[2.5rem] overflow-hidden relative flex flex-col p-8 border border-white/5">
      {/* Dashboard Top Bars */}
      <div className="flex gap-4 mb-8">
        <div className="w-1/2 h-24 glass rounded-3xl p-5 border-white/5 relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-500">
              <BarChart3 size={16} />
            </div>
            <div className="h-3 w-16 bg-white/10 rounded-full" />
          </div>
          <div className="text-2xl font-black text-white">84%</div>
          <div className="absolute bottom-0 left-0 h-1 bg-brand-500 w-[84%]" />
        </div>
        <div className="w-1/2 h-24 glass rounded-3xl p-5 border-white/5 relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-500">
              <BookOpen size={16} />
            </div>
            <div className="h-3 w-16 bg-white/10 rounded-full" />
          </div>
          <div className="text-2xl font-black text-white">12/15</div>
          <div className="absolute bottom-4 right-5 opacity-20"><Bot size={32} /></div>
        </div>
      </div>

      {/* AI Suggestion Box */}
      <div className="flex-1 space-y-4">
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="p-5 glass rounded-2xl border-brand-500/20 bg-brand-500/5 relative"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center text-white scale-75">
              <Bot size={12} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-500">AI Suggestion</span>
          </div>
          <p className="text-sm font-medium text-slate-300 leading-snug">
            Update found for "Sales SOP v2.4". Auto-reflect in training?
          </p>
          <div className="flex gap-4 mt-4">
            <div className="px-4 py-2 rounded-lg bg-brand-500 text-white text-[9px] font-black uppercase tracking-widest">Update</div>
            <div className="px-4 py-2 rounded-lg bg-white/5 text-slate-500 text-[9px] font-black uppercase tracking-widest">Dismiss</div>
          </div>
        </motion.div>

        {/* Floating Chat Preview */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="ml-auto w-2/3 p-4 glass rounded-[2rem] rounded-tr-none border-white/10 shadow-3xl bg-white/[0.03] backdrop-blur-2xl"
        >
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex-shrink-0" />
            <div className="space-y-2 flex-1">
              <div className="h-2 w-full bg-white/10 rounded-full" />
              <div className="h-2 w-2/3 bg-white/10 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="absolute -bottom-1/4 -left-1/4 w-[300px] h-[300px] bg-brand-500/10 blur-[80px] rounded-full" />
    </div>
  );
};

export default CoachIllustration;
