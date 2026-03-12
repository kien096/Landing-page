import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, HardHat, Building2, Stethoscope, ArrowRight } from 'lucide-react';

const UseCases: React.FC = () => {
  const colorClasses = {
    "brand-500": "bg-brand-500",
    "accent-purple": "bg-accent-purple",
    "accent-cyan": "bg-accent-cyan",
    "accent-rose": "bg-accent-rose",
  } as const;

  const cases = [
    {
      title: "Luxury Retail",
      description: "Implementing artistic retail brains that ensure luxury standards across thousands of global touchpoints.",
      icon: <ShoppingBag size={28} />,
      color: "brand-500"
    },
    {
      title: "Manufacturing 4.0",
      description: "Converting industrial legacy into an ethereal knowledge base for the next generation of workforce.",
      icon: <HardHat size={28} />,
      color: "accent-purple"
    },
    {
      title: "Enterprise Tech",
      description: "Forging specialized AI cadres that accelerate tech adoption and innovative upskilling cycles.",
      icon: <Building2 size={28} />,
      color: "accent-cyan"
    },
    {
      title: "Clinical Systems",
      description: "Delivering surgical precision in training updates with verified auditability and zero margin for error.",
      icon: <Stethoscope size={28} />,
      color: "accent-rose"
    }
  ];

  return (
    <section id="use-cases" className="py-24 sm:py-32 lg:py-48 relative bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 mb-16 sm:mb-24 lg:mb-32 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 sm:gap-12">
          <div className="max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.35em] sm:tracking-[0.5em] mb-6 sm:mb-12"
            >
              Common use cases
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black font-display leading-[0.9] tracking-tighter"
            >
              Teams with complex <br />
              <span className="font-serif-italic text-white/90 italic tracking-normal">training and knowledge.</span>
            </motion.h3>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/3 p-6 sm:p-8 lg:p-10 glass rounded-[2rem] sm:rounded-[3.5rem] border-white/5 text-center"
          >
            <p className="text-base sm:text-lg font-semibold text-slate-300 leading-relaxed">
              We work best where teams need accurate answers, repeatable training and better consistency across locations.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {cases.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative min-h-[360px] sm:min-h-[420px] lg:h-[500px] glass rounded-[2.5rem] sm:rounded-[4rem] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-700 p-8 sm:p-10 lg:p-12 flex flex-col items-center text-center overflow-hidden"
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 ${colorClasses[item.color as keyof typeof colorClasses]} rounded-[1.2rem] sm:rounded-[1.8rem] flex items-center justify-center text-white mb-8 sm:mb-12 shadow-2xl transition-transform group-hover:scale-110`}>
                {item.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight uppercase">{item.title}</h3>
              <p className="text-base sm:text-lg text-slate-400 font-medium leading-relaxed mb-8 sm:mb-10 italic">
                {item.description}
              </p>
              
              <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 w-11 h-11 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center text-slate-500 group-hover:text-brand-500 group-hover:bg-white transition-all duration-500 border-white/5">
                <ArrowRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
