import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Locale } from '../types/locale';

interface HeaderProps {
  locale: Locale;
  onOrderClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ locale, onOrderClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isVietnamese = locale === 'vi';

  const navItems = [
    { label: isVietnamese ? 'Dịch vụ' : 'Services', href: '#services' },
    { label: isVietnamese ? 'Giải pháp' : 'Solutions', href: '#solutions-detail' },
    { label: isVietnamese ? 'Quy trình' : 'Process', href: '#methodology' },
    { label: isVietnamese ? 'Liên hệ' : 'Contact', href: '#contact' },
  ];

  const languageLinks = [
    { label: 'EN', href: './', active: locale === 'en' },
    { label: 'VI', href: './vi.html', active: locale === 'vi' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6 sm:py-8 lg:py-10'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className={`flex items-center justify-between glass px-6 py-3.5 sm:px-10 sm:py-4.5 rounded-[2.5rem] border transition-all duration-500 ${
            isScrolled
              ? 'border-white/15 bg-black/40 shadow-2xl backdrop-blur-3xl scale-[0.98]'
              : 'border-white/5 bg-transparent'
          }`}
        >
          <div className="flex flex-col cursor-pointer group">
            <span className="text-2xl sm:text-3xl font-black font-display leading-[0.8] tracking-tighter text-white group-hover:text-brand-500 transition-colors">
              MindShift
            </span>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-500 mt-1.5 opacity-80">
              Enterprise AI
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-all relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 lg:gap-8">
            <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-md">
              {languageLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`rounded-full px-4 py-1.5 text-[9px] font-black uppercase tracking-widest transition-all ${
                    item.active
                      ? 'bg-white text-black shadow-lg'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              onClick={onOrderClick}
              className="hidden sm:inline-flex group relative px-8 py-3.5 rounded-2xl bg-white text-black font-black text-[10px] uppercase tracking-widest hover:bg-brand-500 hover:text-white transition-all shadow-xl active:scale-95"
            >
              <span className="relative z-10">{isVietnamese ? 'Tư vấn ngay' : 'Consult Now'}</span>
            </button>

            <button
              className="lg:hidden text-white w-10 h-10 flex items-center justify-center glass rounded-full border-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-4 glass border-white/10 z-[60] flex flex-col p-10 rounded-[3rem] bg-black/95 backdrop-blur-3xl shadow-3xl"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex flex-col">
                <span className="text-3xl font-black font-display text-white tracking-tighter">MindShift</span>
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-500">Enterprise AI</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white w-12 h-12 glass rounded-full flex items-center justify-center border-white/20"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-black text-white hover:text-brand-500 transition-colors uppercase tracking-tight"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto space-y-8">
              <div className="flex gap-4">
                {languageLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`flex-1 text-center py-4 rounded-2xl border text-[10px] font-black uppercase tracking-widest ${
                      item.active ? 'border-brand-500 bg-brand-500 text-white' : 'border-white/10 text-slate-400'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOrderClick();
                }}
                className="w-full bg-white text-black py-6 rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl active:scale-95 transition-transform"
              >
                {isVietnamese ? 'Tư vấn ngay' : 'Consult Now'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
