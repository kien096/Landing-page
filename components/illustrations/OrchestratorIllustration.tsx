import React from 'react';
import { motion } from 'framer-motion';

const OrchestratorIllustration = () => {
  return (
    <div className="w-full aspect-square max-w-[700px] mx-auto relative flex items-center justify-center pointer-events-none">
      {/* Background Ambient Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[80%] h-[80%] bg-brand-500/20 rounded-full blur-[120px]"
      />

      {/* Main Intelligent Core */}
      <div className="relative z-20">
        {/* Outer Halo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-64 h-64 rounded-full border border-white/5 flex items-center justify-center p-4"
        >
          <div className="w-full h-full rounded-full border border-dashed border-brand-500/20" />
        </motion.div>

        {/* Central Prism */}
        <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
                animate={{ 
                    rotate: [45, 225, 45],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 glass rounded-xl border-brand-500/30 flex items-center justify-center shadow-[0_0_60px_rgba(81,47,235,0.4)]"
            >
                <div className="w-8 h-8 bg-brand-500 rounded-sm blur-[2px] animate-pulse" />
                <div className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_20px_white]" />
            </motion.div>
        </div>
      </div>

      {/* Neural Edge Network - Sharp Nodes */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.15 + 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <div className="relative h-[280px] flex flex-col items-center justify-start">
            {/* Connection - Thin Gradient Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: '100px' }}
              transition={{ duration: 2, delay: 1 }}
              className="w-px bg-gradient-to-b from-brand-500/40 via-brand-500/10 to-transparent"
            />
            
            {/* Data Shard */}
            <motion.div
                animate={{ 
                    y: [0, -5, 0],
                    opacity: [0.4, 1, 0.4]
                }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 bg-brand-400 rotate-45 shadow-[0_0_15px_#512FEB]"
            />

            {/* Orbiting Tech Tag (Subtle) */}
            {i % 2 === 0 && (
                <motion.div
                    animate={{ x: [0, 5, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="mt-3"
                >
                    <div className="h-[1px] w-12 bg-white/10" />
                </motion.div>
            )}
          </div>
        </motion.div>
      ))}

      {/* Floating Geometric Dust */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          animate={{
            x: [Math.random() * 500 - 250, Math.random() * 500 - 250],
            y: [Math.random() * 500 - 250, Math.random() * 500 - 250],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
        />
      ))}

      {/* Center Reflection Ring */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[400px] h-[400px] border border-white/[0.02] rounded-full" />
        <div className="absolute w-[550px] h-[550px] border border-white/[0.01] rounded-full" />
      </div>
    </div>
  );
};

export default OrchestratorIllustration;
