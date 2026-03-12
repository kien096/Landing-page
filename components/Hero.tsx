import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const proofPoints = [
    { label: 'Partners supported', value: '100+' },
    { label: 'Typical rollout time', value: '2-6 wks' },
    { label: 'Core use cases', value: 'L&D + sales' },
  ];

  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-16 sm:pt-28 lg:pt-20 overflow-hidden bg-mesh">
      <div className="absolute top-[-10%] left-[-30%] sm:left-[-10%] w-[420px] h-[420px] sm:w-[760px] sm:h-[760px] bg-brand-500/8 blur-[100px] sm:blur-[140px] rounded-full -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-[-20%] sm:right-[10%] w-[280px] h-[280px] sm:w-[460px] sm:h-[460px] bg-accent-cyan/8 blur-[90px] sm:blur-[130px] rounded-full -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-16">
          <div className="space-y-8 sm:space-y-10 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex max-w-full items-center gap-3 px-4 sm:px-5 py-2 glass rounded-full text-[9px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.28em] text-brand-200 border border-white/5 uppercase shadow-xl"
            >
              <Sparkles size={14} className="text-brand-400" />
              <span>AI products for training and outreach teams</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black leading-[0.95] tracking-[-0.04em]"
            >
              AI tools your team can
              <span className="text-gradient"> use in real work</span>,
              <br />
              not just in demos.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg lg:text-[1.2rem] text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              MindShift helps companies turn manuals, SOPs and sales knowledge into
              internal AI assistants and structured training flows your staff can
              actually use on web and mobile.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex w-full sm:w-auto flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button className="group relative w-full sm:w-auto px-8 py-4 bg-brand-500 text-white rounded-[1.4rem] font-black text-base overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_18px_35px_-12px_rgba(81,47,235,0.45)]">
                 <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                 <span className="relative flex items-center justify-center gap-3">
                   Book a demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </span>
              </button>
              <button className="glass w-full sm:w-auto px-8 py-4 rounded-[1.4rem] font-black text-base text-white hover:bg-white/8 transition-all flex items-center justify-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Play size={16} fill="currentColor" />
                </div>
                See the products
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3"
            >
              {proofPoints.map((item) => (
                <div key={item.label} className="glass rounded-[1.5rem] px-5 py-4 text-left border-white/5">
                  <div className="text-xl sm:text-2xl font-black text-white tracking-tight">{item.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-2">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-6 lg:p-7 border-white/5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
          >
            <div className="rounded-[1.75rem] sm:rounded-[2rem] border border-white/5 bg-white/[0.02] p-5 sm:p-6 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-brand-400">Sample rollout</p>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight mt-3">MindCoach for internal training</h2>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300">
                  Live
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[1.25rem] bg-white/[0.03] p-4">
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">Use case</div>
                  <div className="mt-2 text-base font-bold text-white">Staff onboarding</div>
                </div>
                <div className="rounded-[1.25rem] bg-white/[0.03] p-4">
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">Access</div>
                  <div className="mt-2 text-base font-bold text-white">Web + mobile</div>
                </div>
                <div className="rounded-[1.25rem] bg-white/[0.03] p-4">
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">Knowledge source</div>
                  <div className="mt-2 text-base font-bold text-white">SOPs, FAQs, manuals</div>
                </div>
                <div className="rounded-[1.25rem] bg-white/[0.03] p-4">
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">Reporting</div>
                  <div className="mt-2 text-base font-bold text-white">Usage + progress</div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/5 bg-black/40 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-500">What teams usually ask for</p>
                    <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                      "Can our staff ask questions in plain language and still get answers based on our real process?"
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Company-specific answers', 'Role-based training', 'Progress tracking'].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/5 bg-white/[0.03] px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
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
