import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, User, Building2, MessageSquare, Zap, ChevronDown } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState({
    name: '',
    enterprise: '',
    needs: 'MindCoach Implementation',
    message: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    "MindCoach Implementation",
    "MindScout Outreach Core",
    "Custom Agent Development",
    "Strategic AI Roadmap"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert('Expansion Protocol Initiated. Our strategists will contact you shortly.');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100] cursor-pointer"
          />

          {/* Modal Wrapper (for scrolling) */}
          <div className="fixed inset-0 z-[110] overflow-y-auto pointer-events-none flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="w-full max-w-2xl pointer-events-auto relative my-auto"
            >
              <div className="glass rounded-[2.25rem] sm:rounded-[3rem] md:rounded-[4rem] border border-white/10 bg-black/95 p-5 sm:p-8 md:p-12 relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)]">
                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500/20 blur-[100px] rounded-full pointer-events-none"></div>
                
                <div className="flex justify-between items-start gap-4 mb-8 md:mb-12">
                  <div>
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 glass rounded-full text-[9px] font-black tracking-[0.3em] text-brand-500 border border-white/5 uppercase mb-4">
                      <Sparkles size={14} />
                      Initiate protocol
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tighter text-white">Order <span className="font-serif-italic italic text-white/90">AI.</span></h2>
                  </div>
                  <button 
                    onClick={onClose}
                    className="w-12 h-12 md:w-14 md:h-14 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all border border-white/5"
                  >
                    <X size={28} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {/* Name Input */}
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 flex items-center gap-3">
                        <User size={14} className="text-brand-500" /> Commander Name
                      </label>
                      <input 
                        required
                        type="text"
                        placeholder="e.g. Alex Nguyen"
                        className="w-full glass px-6 md:px-8 py-4 md:py-5 rounded-3xl border border-white/5 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500/50 transition-all font-black text-sm tracking-tight"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>

                    {/* Enterprise Input */}
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 flex items-center gap-3">
                        <Building2 size={14} className="text-accent-purple" /> Enterprise
                      </label>
                      <input 
                        required
                        type="text"
                        placeholder="e.g. Polyfill JSC"
                        className="w-full glass px-6 md:px-8 py-4 md:py-5 rounded-3xl border border-white/5 text-white placeholder:text-slate-600 focus:outline-none focus:border-accent-purple/50 transition-all font-black text-sm tracking-tight"
                        value={formState.enterprise}
                        onChange={(e) => setFormState({...formState, enterprise: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* AI Needs Custom Dropdown */}
                  <div className="space-y-3 relative">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 flex items-center gap-3">
                      <Zap size={14} className="text-brand-500" /> Area of Expansion
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full glass px-6 md:px-8 py-4 md:py-5 rounded-3xl border border-white/5 text-white flex items-center justify-between text-sm font-black tracking-tight"
                      >
                        {formState.needs}
                        <ChevronDown size={18} className={`text-slate-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 right-0 mt-3 glass rounded-[2rem] border border-white/10 bg-[#0A0A0A] overflow-hidden z-[120] shadow-3xl"
                          >
                            {options.map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => {
                                  setFormState({...formState, needs: opt});
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full text-left px-6 sm:px-8 py-4 text-sm font-black tracking-tight transition-all hover:bg-brand-500 hover:text-white ${formState.needs === opt ? 'text-brand-500' : 'text-slate-300'}`}
                              >
                                {opt}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 flex items-center gap-3">
                      <MessageSquare size={14} className="text-slate-400" /> Strategic Requirements
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="Describe your expansion goals..."
                      className="w-full glass px-6 md:px-8 py-4 md:py-5 rounded-[2rem] border border-white/5 text-white placeholder:text-slate-600 focus:outline-none focus:border-white/20 transition-all font-black text-sm tracking-tight resize-none"
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="group relative w-full bg-brand-500 text-white p-5 md:p-6 rounded-[2.5rem] font-black text-xs uppercase tracking-[0.5em] overflow-hidden transition-all hover:scale-[1.02] shadow-[0_20px_40px_-10px_rgba(81,47,235,0.4)]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      <Send size={18} /> Initiate Expansion Protocol
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
