import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Code2,
  Layers,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      title: "AI Strategy & Roadmap",
      description:
        "Visionary consulting to identify high-impact AI targets aligned with your creative and business goals.",
      icon: <Lightbulb size={28} />,
      color: "bg-brand-500",
      tag: "Strategic",
    },
    {
      title: "Custom AI Development",
      description:
        "Artfully engineered LLM solutions and custom AI agents built to handle your unique proprietary data.",
      icon: <Code2 size={28} />,
      color: "bg-accent-purple",
      tag: "Technical",
    },
    {
      title: "Enterprise Integration",
      description:
        "Seamlessly weaving intelligence into legacy architecture with precision and zero interruption.",
      icon: <Layers size={28} />,
      color: "bg-accent-cyan",
      tag: "Systems",
    },
    {
      title: "Strategic Governance",
      description:
        "Ensuring your AI implementation is ethical, compliant, and rock-solid secure at every layer.",
      icon: <ShieldCheck size={28} />,
      color: "bg-slate-900",
      tag: "Security",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 sm:py-32 lg:py-48 relative overflow-hidden bg-black text-white"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 sm:mb-24 lg:mb-32 gap-8 sm:gap-12">
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[9px] sm:text-[10px] font-black text-brand-500 uppercase tracking-[0.4em] sm:tracking-[0.6em] mb-6 sm:mb-10"
            >
              Consulting Excellence
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black font-display leading-[0.9] tracking-tighter"
            >
              Expert Solutions for <br />
              <span className="font-serif-italic text-white/90 italic tracking-normal">
                AI-First
              </span>{" "}
              Enterprises.
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-auto lg:pt-20"
          >
            <div className="glass p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[3.5rem] border border-white/10 flex items-center justify-between gap-6 sm:gap-10 group hover:border-brand-500/30 transition-all duration-500 shadow-3xl">
              <div className="text-slate-400 font-bold max-w-[220px] text-sm sm:text-base leading-relaxed italic group-hover:text-white transition-colors">
                Trusted by over 100+ expansion partners in Vietnam.
              </div>
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all transform group-hover:scale-110 cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.1)] shrink-0">
                <ArrowRight size={22} className="sm:w-7 sm:h-7" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative min-h-[360px] sm:min-h-[420px] lg:h-[500px] p-8 sm:p-10 lg:p-12 rounded-[2.5rem] sm:rounded-[4rem] bg-white/[0.02] border border-white/5 hover:border-brand-500/20 hover:bg-white/[0.04] hover:shadow-[0_40px_100px_-20px_rgba(81,47,235,0.15)] transition-all duration-700 overflow-hidden"
            >
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 ${service.color} rounded-[1.4rem] sm:rounded-[1.8rem] flex items-center justify-center text-white mb-8 sm:mb-12 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
              >
                {service.icon}
              </div>
              <span className="inline-block text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] sm:tracking-[0.4em] text-brand-400 mb-4 sm:mb-6">
                {service.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-5 sm:mb-8 leading-tight tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-medium italic">
                {service.description}
              </p>

              {/* <div className="absolute bottom-12 left-12 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                 <div className="flex items-center gap-3 text-brand-400 font-black text-xs uppercase tracking-[0.2em] group-hover:text-brand-300">
                    Discover Protocol <ArrowRight size={16} />
                 </div>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
