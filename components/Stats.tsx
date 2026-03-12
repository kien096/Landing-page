import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Cpu } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      label: "Enterprise Partners",
      value: "100+",
      icon: <Users size={28} />,
      color: "text-brand-500"
    },
    {
      label: "AI Efficiency Lift",
      value: "40%",
      icon: <TrendingUp size={28} />,
      color: "text-accent-purple"
    },
    {
      label: "Lead Expansion",
      value: "3.5x",
      icon: <Target size={28} />,
      color: "text-accent-cyan"
    },
    {
      label: "Active AI Agents",
      value: "5k+",
      icon: <Cpu size={28} />,
      color: "text-white"
    }
  ];

  return (
    <section className="py-24 sm:py-32 lg:py-48 relative overflow-hidden bg-black text-white">
      {/* Background Glows */}
      <div className="absolute inset-0 opacity-10">
         <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-brand-500 blur-[200px] animate-pulse-slow"></div>
         <div className="absolute bottom-1/2 right-1/4 w-[600px] h-[600px] bg-accent-purple blur-[200px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {stats.map((stat, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: idx * 0.1 }}
               whileHover={{ y: -10 }}
               className="glass p-8 sm:p-10 lg:p-12 rounded-[2.5rem] sm:rounded-[4rem] border-white/5 text-center group hover:bg-white/[0.08] hover:border-white/10 transition-all duration-700"
             >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 glass rounded-[1.2rem] sm:rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 sm:mb-8 border-white/5 ${stat.color} shadow-2xl group-hover:bg-brand-500 group-hover:text-white transition-all transform group-hover:rotate-12`}>
                   {stat.icon}
                </div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-black font-display text-white mb-3 sm:mb-4 tracking-tighter leading-none">
                   {stat.value}
                </div>
                <div className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.35em] sm:tracking-[0.6em] mb-2 leading-none italic">
                   {stat.label}
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
