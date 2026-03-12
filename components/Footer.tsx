import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Award, ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 sm:pt-32 lg:pt-48 pb-10 sm:pb-16 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-brand-500/10 blur-[200px] -z-10 rounded-full"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14 lg:gap-20 mb-16 sm:mb-24 lg:mb-36">
          <div className="lg:col-span-1 space-y-10">
            <div className="flex items-center gap-4 group cursor-pointer">
              {/* <div className="w-14 h-14 bg-white text-black rounded-[1.5rem] flex items-center justify-center shadow-2xl group-hover:bg-brand-500 group-hover:text-white transition-all transform group-hover:rotate-12 duration-500">
                <Brain size={32} />
              </div> */}
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black font-display leading-[0.8] tracking-tighter uppercase">
                  MindShift
                </span>
                <span className="text-[9px] font-black tracking-[0.4em] uppercase text-brand-500 mt-1">
                  Enterprise AI
                </span>
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-medium leading-relaxed max-w-sm">
              Practical AI products for internal training, knowledge access and outbound workflows.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all border-white/5"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all border-white/5"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all border-white/5"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600 mb-10">
              Products
            </h4>
            <ul className="space-y-4 sm:space-y-6 text-xl sm:text-2xl font-black tracking-tighter uppercase">
              <li>
                <a
                  href="https://learn.mindshift.io.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-500 transition-all flex items-center gap-2 group"
                >
                  MindCoach{" "}
                  <ArrowUpRight
                    size={18}
                    className="text-slate-800 group-hover:text-brand-500 transition-all"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://scout.mindshift.io.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-500 transition-all flex items-center gap-2 group"
                >
                  MindScout{" "}
                  <ArrowUpRight
                    size={18}
                    className="text-slate-800 group-hover:text-brand-500 transition-all"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-brand-500 transition-all"
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="#methodology"
                  className="hover:text-brand-500 transition-all"
                >
                  Delivery Process
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600 mb-10">
              Company
            </h4>
            <ul className="space-y-4 sm:space-y-6 text-xl sm:text-2xl font-black tracking-tighter uppercase">
              <li>
                <a href="#services" className="hover:text-brand-500 transition-all">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-brand-500 transition-all">
                  Products
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-brand-500 transition-all">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-brand-500 transition-all">
                  Customers
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-12">
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600 mb-10">
              Contact
            </h4>
            <div className="space-y-8">
              <div className="flex items-start sm:items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 glass rounded-[1.2rem] sm:rounded-[1.8rem] flex items-center justify-center text-brand-500 shadow-[0_12px_24px_-18px_rgba(15,23,42,0.22)] border-white/5 group-hover:bg-brand-500 group-hover:text-white transition-all transform group-hover:scale-110 shrink-0">
                  <Mail size={24} />
                </div>
                <div className="flex flex-col">
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:infor@mindshift.io.vn"
                    className="text-base sm:text-lg font-black hover:text-brand-500 transition-colors tracking-tight break-all"
                  >
                    infor@mindshift.io.vn
                  </a>
                </div>
              </div>
              <div className="flex items-start sm:items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 glass rounded-[1.2rem] sm:rounded-[1.8rem] flex items-center justify-center text-accent-cyan shadow-[0_12px_24px_-18px_rgba(15,23,42,0.22)] border-white/5 group-hover:bg-accent-cyan group-hover:text-white transition-all transform group-hover:scale-110 shrink-0">
                  <Phone size={24} />
                </div>
                <div className="flex flex-col">
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">
                    Expert Line
                  </p>
                  <span className="text-base sm:text-lg font-black tracking-tight">
                    0384990991
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <div className="glass px-4 sm:px-6 py-3 rounded-2xl border border-white/5 flex items-center gap-3 w-full sm:w-max shadow-3xl">
                <Award size={20} className="text-brand-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.25em] sm:tracking-[0.3em]">
                  Top 11 AI startups in Vietnam
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 sm:pt-16 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-8">
          <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em] text-center lg:text-left">
            &copy; {new Date().getFullYear()} MindShift Vietnam.{" "}
            <span className="text-slate-400">Built for real-world adoption.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
            <a
              href="#"
              className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] hover:text-white transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
