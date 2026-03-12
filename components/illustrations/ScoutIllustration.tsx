import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Globe, Search } from 'lucide-react';

const ScoutIllustration = () => {
  const [leads, setLeads] = useState([
    { id: 1, name: 'CloudScale Inc.', category: 'Tech', status: 'Verified' },
    { id: 2, name: 'Nexus Trading', category: 'Retail', status: 'Verified' },
    { id: 3, name: 'GreenPoint Logistics', category: 'Logistics', status: 'Verified' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const names = ['SkyNet Assets', 'EcoStream Solutions', 'VitalHealth Co.', 'AeroLogic'];
      const categories = ['Finance', 'Renewables', 'Healthcare', 'Aviation'];
      
      const newLead = {
        id: Date.now(),
        name: names[Math.floor(Math.random() * names.length)],
        category: categories[Math.floor(Math.random() * categories.length)],
        status: 'Verified'
      };

      setLeads(prev => [newLead, ...prev.slice(0, 3)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full aspect-[4/3] bg-zinc-950 rounded-[2.5rem] overflow-hidden relative flex flex-col p-6 border border-white/5">
      {/* Search Header Preview */}
      <div className="flex items-center justify-between mb-8 opacity-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-500">
            <Search size={16} />
          </div>
          <div className="h-4 w-32 bg-white/10 rounded-full" />
        </div>
        <div className="w-20 h-8 rounded-full bg-white/5 border border-white/10" />
      </div>

      {/* Main Feed */}
      <div className="space-y-4 relative flex-1">
        <AnimatePresence mode="popLayout">
          {leads.map((lead, i) => (
            <motion.div
              key={lead.id}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className={`p-5 rounded-2xl glass border border-white/5 flex items-center justify-between group h-[84px] ${
                i === 0 ? 'bg-white/5 border-brand-500/30' : 'bg-transparent'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  i === 0 ? 'bg-brand-500/20 text-brand-500' : 'bg-white/5 text-slate-500'
                }`}>
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base tracking-tight">{lead.name}</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{lead.category}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-tighter px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 border border-brand-500/20 flex items-center gap-1.5">
                  <CheckCircle size={10} />
                  Verified
                </span>
                <div className="w-2 h-2 rounded-full bg-brand-500 group-hover:animate-ping" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Global Background Particles / Shine */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[300px] h-[300px] bg-brand-500/10 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-950 to-transparent z-20" />
      </div>

      {/* Stats Overlay */}
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 right-8 glass p-4 rounded-2xl border-white/10 shadow-2xl z-30"
      >
        <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Live Efficiency</div>
        <div className="text-2xl font-black text-brand-500">98.4%</div>
      </motion.div>
    </div>
  );
};

export default ScoutIllustration;
