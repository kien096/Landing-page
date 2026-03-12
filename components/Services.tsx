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
      className="py-48 relative overflow-hidden bg-black text-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-12">
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black text-brand-500 uppercase tracking-[0.6em] mb-10"
            >
              Consulting Excellence
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl lg:text-7xl font-black font-display leading-[0.9] tracking-tighter"
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
            className="lg:pt-20"
          >
            <div className="glass p-10 rounded-[3.5rem] border border-white/10 flex items-center gap-10 group hover:border-brand-500/30 transition-all duration-500 shadow-3xl">
              <div className="text-slate-400 font-bold max-w-[200px] text-base leading-relaxed italic group-hover:text-white transition-colors">
                Trusted by over 100+ expansion partners in Vietnam.
              </div>
              <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all transform group-hover:scale-110 cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <ArrowRight size={28} />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative h-[500px] p-12 rounded-[4rem] bg-white/[0.02] border border-white/5 hover:border-brand-500/20 hover:bg-white/[0.04] hover:shadow-[0_40px_100px_-20px_rgba(81,47,235,0.15)] transition-all duration-700 overflow-hidden"
            >
              <div
                className={`w-20 h-20 ${service.color} rounded-[1.8rem] flex items-center justify-center text-white mb-12 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
              >
                {service.icon}
              </div>
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-brand-400 mb-6">
                {service.tag}
              </span>
              <h3 className="text-3xl font-black text-white mb-8 leading-tight tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed font-medium italic">
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
