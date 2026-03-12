import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Orbit, Layers } from 'lucide-react';

const ProductHighlights: React.FC = () => {
  const products = [
    {
      name: 'MindCoach',
      tagline: 'Internal Expansion Protocol',
      description: 'The specialized AI agent that transforms your company manuals into an interactive, artfully curated knowledge consciousness for every employee.',
      features: ['Real-time Scenario Training', '24/7 Expert Tutoring', 'Performance Analytics'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80',
      id: 'mindcoach',
      color: 'brand',
      link: 'https://learn.mindshift.io.vn/'
    },
    {
      name: 'MindScout',
      tagline: 'Strategic Outreach Core',
      description: 'An ethereal lead generation engine that forges deep human-like connections at scale, ensuring your message lands with artistic precision.',
      features: ['Automated Lead Discovery', 'Emotional Personalization', 'Multi-channel Sync'],
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80',
      id: 'mindscout',
      color: 'purple',
      link: 'https://scout.mindshift.io.vn/'
    }
  ];

  return (
    <section id="products" className="py-48 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-36">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black text-brand-500 uppercase tracking-[0.6em] mb-12"
          >
            Machine Intelligence
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl lg:text-7xl font-black font-display leading-[0.9] tracking-tighter"
          >
            Specialized <span className="font-serif-italic text-white/90 italic tracking-normal">Instruments.</span>
          </motion.h2>
        </div>

        <div className="space-y-[300px]">
          {products.map((product, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-24 lg:gap-36`}>
              {/* Product Info */}
              <div className="lg:w-1/2 space-y-12">
                 <div className="flex items-center gap-5">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 12 }}
                      className={`w-14 h-14 rounded-[1.2rem] flex items-center justify-center text-white shadow-[0_15px_30px_rgba(0,0,0,0.5)] ${product.color === 'brand' ? 'bg-brand-500 shadow-brand-500/20' : 'bg-accent-purple shadow-accent-purple/20'}`}
                    >
                       {product.color === 'brand' ? <Zap size={24} /> : <Orbit size={24} />}
                    </motion.div>
                    <div>
                       <h3 className="text-5xl lg:text-6xl font-black font-display tracking-tighter leading-none">{product.name}</h3>
                       <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mt-2">{product.tagline}</p>
                    </div>
                 </div>
                 <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-xl italic">
                   "{product.description}"
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {product.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all shadow-2xl border-white/5">
                           <Layers size={18} />
                        </div>
                        <span className="font-black text-slate-300 text-sm tracking-tight">{feature}</span>
                      </div>
                    ))}
                 </div>
                 <div className="pt-10">
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex glass px-10 py-5 rounded-[2.5rem] items-center gap-5 hover:bg-white hover:text-black transition-all duration-700 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] border-white/10 overflow-hidden"
                    >
                       <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>
                       <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em]">Launch Laboratory</span>
                       <div className="relative z-10 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-xl">
                          <ArrowUpRight size={16} />
                       </div>
                    </a>
                 </div>
              </div>

              {/* Product Visual */}
              <div className="lg:w-1/2 relative group">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.95, y: 50 }}
                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
                   transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                   className="relative z-10 p-6 glass rounded-[4.5rem] border-white/5 shadow-[0_80px_150px_-50px_rgba(0,0,0,1)] overflow-hidden"
                 >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full aspect-[4/3] object-cover rounded-[3.8rem] grayscale Contrast-125 brightness-[0.6] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-2000 ease-out scale-[1.05] group-hover:scale-100"
                    />
                 </motion.div>
                 <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-[180px] rounded-full -z-10 opacity-[0.08] transition-all duration-1000 group-hover:opacity-[0.12] ${product.color === 'brand' ? 'bg-brand-500' : 'bg-accent-purple'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
