import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOrderClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOrderClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "py-3 sm:py-4" : "py-4 sm:py-6 lg:py-8"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`flex items-center justify-between gap-3 glass px-4 py-3 sm:px-6 sm:py-4 lg:px-10 lg:py-5 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border transition-all duration-500 ${
            isScrolled
              ? "border-white/20 bg-black/60 shadow-2xl scale-[0.98]"
              : "border-white/5 bg-transparent"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-4 group cursor-pointer">
            {/* <div className="w-12 h-12 bg-brand-500 rounded-[1.2rem] flex items-center justify-center text-white shadow-[0_0_20px_rgba(81,47,235,0.4)] group-hover:rotate-12 transition-transform">
              <Brain size={28} />
            </div> */}
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black font-display leading-[0.8] tracking-tighter text-white">
                MindShift
              </span>
              <span className="text-[9px] sm:text-[10px] font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase text-brand-400 mt-1">
                Enterprise AI
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            {["Services", "Products", "Methodology", "Trust"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-8">
            <button
              onClick={onOrderClick}
              className="hidden sm:inline-flex group relative overflow-hidden bg-white text-black px-6 py-3 lg:px-10 lg:py-4 rounded-[1.2rem] lg:rounded-[1.8rem] font-black text-[10px] uppercase tracking-[0.25em] lg:tracking-[0.3em] transition-all hover:bg-brand-500 hover:text-white shadow-xl"
            >
              <span className="relative z-10">Order Now</span>
              <div className="absolute inset-0 bg-brand-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
            <button
              onClick={onOrderClick}
              className="sm:hidden group relative overflow-hidden bg-white text-black px-4 py-2.5 rounded-full font-black text-[9px] uppercase tracking-[0.2em] transition-all hover:bg-brand-500 hover:text-white shadow-xl"
            >
              <span className="relative z-10">Order</span>
              <div className="absolute inset-0 bg-brand-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
            <button
              className="lg:hidden text-white w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center glass rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-4 bottom-4 sm:inset-x-6 sm:top-6 sm:bottom-6 glass border-white/10 z-[60] flex flex-col p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[4rem] bg-black/95 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,1)]"
          >
            <div className="flex justify-between items-center gap-4 mb-10 sm:mb-16">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-brand-500 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Brain size={22} className="sm:w-7 sm:h-7" />
                </div>
                <span className="text-2xl sm:text-3xl font-black font-display text-white tracking-tighter truncate">
                  MindShift
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white w-11 h-11 sm:w-14 sm:h-14 glass rounded-full flex items-center justify-center border-white/20 shrink-0"
              >
                <X size={22} className="sm:w-8 sm:h-8" />
              </button>
            </div>

            <nav className="flex flex-col gap-5 sm:gap-8">
              {["Services", "Products", "Methodology", "Trust"].map(
                (item, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl sm:text-5xl lg:text-6xl font-black text-white hover:text-brand-500 transition-colors tracking-tighter"
                  >
                    {item}
                  </motion.a>
                ),
              )}
            </nav>

            <div className="mt-auto space-y-4 sm:space-y-6">
              <div className="h-px bg-white/10"></div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOrderClick();
                }}
                className="w-full bg-brand-500 text-white py-5 sm:py-7 rounded-[1.8rem] sm:rounded-[2.5rem] font-black text-base sm:text-2xl flex items-center justify-center gap-3 sm:gap-6 shadow-2xl hover:scale-[1.02] transition-transform"
              >
                Order Now <ArrowRight size={20} className="sm:w-8 sm:h-8" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
