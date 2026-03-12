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
      title: "Use-case discovery",
      description:
        "We map the places where AI is actually useful first, instead of forcing generic copilots into every workflow.",
      icon: <Lightbulb size={28} />,
      color: "bg-brand-500",
      tag: "Plan",
    },
    {
      title: "Custom copilots",
      description:
        "We build assistants and guided flows around your documents, product knowledge and internal terminology.",
      icon: <Code2 size={28} />,
      color: "bg-accent-purple",
      tag: "Build",
    },
    {
      title: "Workflow integration",
      description:
        "From portals to mobile access, we fit the product into the tools your team already uses day to day.",
      icon: <Layers size={28} />,
      color: "bg-accent-cyan",
      tag: "Connect",
    },
    {
      title: "Security and governance",
      description:
        "Access control, private data handling and rollout rules are designed in from the start, not added later.",
      icon: <ShieldCheck size={28} />,
      color: "bg-slate-900",
      tag: "Control",
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
              className="text-[9px] sm:text-[10px] font-black text-brand-400 uppercase tracking-[0.35em] sm:tracking-[0.5em] mb-6 sm:mb-10"
            >
              What we help teams ship
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black font-display leading-[0.9] tracking-tighter"
            >
              From strategy to rollout, <br />
              <span className="font-serif-italic text-white/90 italic tracking-normal">
                without the AI theater.
              </span>{" "}
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-auto lg:pt-20"
          >
            <div className="glass p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[3.5rem] border border-white/5 flex items-center justify-between gap-6 sm:gap-10 group hover:border-brand-500/18 transition-all duration-500 shadow-3xl">
              <div className="text-slate-300 font-semibold max-w-[240px] text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors">
                Used in training, onboarding and sales enablement across Vietnam-based teams.
              </div>
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-brand-500 transition-all transform group-hover:scale-105 cursor-pointer shadow-[0_18px_28px_-18px_rgba(15,23,42,0.45)] shrink-0">
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
              whileHover={{ y: -10, scale: 1.01 }}
              className="group relative min-h-[360px] sm:min-h-[420px] lg:h-[500px] p-8 sm:p-10 lg:p-12 rounded-[2.5rem] sm:rounded-[4rem] bg-white/[0.02] border border-white/5 hover:border-brand-500/16 hover:bg-white/[0.035] hover:shadow-[0_30px_80px_-24px_rgba(81,47,235,0.16)] transition-all duration-700 overflow-hidden"
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
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
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
