import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, FlaskConical, Rocket } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    {
      title: 'Analyze',
      description: 'Audit your current data and workflows to find High-ROI AI targets.',
      icon: <Search size={28} />,
      step: '01'
    },
    {
      title: 'Strategize',
      description: 'Designing a tailored AI roadmap for long-term strategic advantage.',
      icon: <Compass size={28} />,
      step: '02'
    },
    {
      title: 'Pilot',
      description: 'Rapid prototyping and validation in a real-world enterprise environment.',
      icon: <FlaskConical size={28} />,
      step: '03'
    },
    {
      title: 'Scale',
      description: 'Full integration and team training for sustainable AI adoption.',
      icon: <Rocket size={28} />,
      step: '04'
    }
  ];

  return (
    <section id="methodology" className="py-24 sm:py-32 lg:py-48 relative overflow-hidden bg-black text-white">
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 sm:mb-24 lg:mb-32 gap-8 sm:gap-12">
          <div className="max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] sm:tracking-[0.8em] mb-6 sm:mb-12"
            >
              The Expansion Framework
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black font-display leading-[0.9] tracking-tighter"
            >
              Articulately <br />
              <span className="font-serif-italic text-brand-500 italic tracking-normal">Engineered.</span>
            </motion.h3>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:w-1/3 text-base sm:text-lg lg:text-xl font-medium text-slate-400 italic mb-0 lg:mb-8 leading-relaxed"
          >
            "A repeatable matrix that converts enterprise complexity into <span className="text-white">creative momentum.</span>"
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 relative">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              className="relative isolate p-8 sm:p-10 lg:p-12 border border-white/10 lg:border-y-0 lg:border-r-0 lg:border-l group rounded-[2rem] sm:rounded-[3rem] lg:rounded-none transition-all duration-700"
            >
              <div className="absolute top-0 left-0 w-0 h-[2px] lg:w-[2px] lg:h-0 bg-brand-500 group-hover:w-full lg:group-hover:w-[2px] lg:group-hover:h-full transition-all duration-1000"></div>
              
              <div className="pointer-events-none absolute top-4 right-5 text-6xl font-black leading-none text-white/[0.02] transition-all duration-1000 select-none sm:top-5 sm:right-6 sm:text-8xl lg:top-6 lg:right-8 lg:text-[88px] group-hover:text-brand-500/10">
                {step.step}
              </div>

              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 glass rounded-[1.2rem] sm:rounded-[1.8rem] flex items-center justify-center text-white mb-8 sm:mb-12 group-hover:bg-brand-500 group-hover:text-white transition-all duration-700 border-white/5 shadow-3xl group-hover:scale-110 group-hover:rotate-12">
                {step.icon}
              </div>
              
              <h3 className="relative z-10 text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 tracking-tighter uppercase">{step.title}</h3>
              <p className="relative z-10 text-base sm:text-lg text-slate-400 font-medium leading-relaxed italic pr-0 sm:pr-4">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
