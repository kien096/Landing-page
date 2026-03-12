import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Orbit, Layers } from 'lucide-react';

const ProductHighlights: React.FC = () => {
  const products = [
    {
      name: 'MindCoach',
      tagline: 'For internal knowledge and training',
      description: 'Turn SOPs, manuals and internal FAQs into an assistant employees can use for onboarding, refresher training and day-to-day questions.',
      features: ['Ask from company docs', 'Guided scenario practice', 'Training progress visibility'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80',
      id: 'mindcoach',
      color: 'brand',
      link: 'https://learn.mindshift.io.vn/'
    },
    {
      name: 'MindScout',
      tagline: 'For outbound research and outreach',
      description: 'Give sales teams a faster way to find leads, organize context and prepare better first-touch messaging without starting from scratch each time.',
      features: ['Lead research workflow', 'Message prep support', 'Pipeline-ready context'],
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80',
      id: 'mindscout',
      color: 'purple',
      link: 'https://scout.mindshift.io.vn/'
    }
  ];

  return (
    <section id="products" className="py-24 sm:py-32 lg:py-48 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-24 lg:mb-36">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[9px] sm:text-[10px] font-black text-brand-400 uppercase tracking-[0.3em] sm:tracking-[0.45em] mb-6 sm:mb-12"
          >
            Products
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black font-display leading-[0.9] tracking-tighter"
          >
            Built for two clear <span className="font-serif-italic text-white/90 italic tracking-normal">jobs.</span>
          </motion.h2>
        </div>

        <div className="space-y-24 sm:space-y-32 lg:space-y-[300px]">
          {products.map((product, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 sm:gap-16 lg:gap-36`}>
              {/* Product Info */}
              <div className="lg:w-1/2 space-y-8 sm:space-y-10 lg:space-y-12">
                 <div className="flex items-center gap-4 sm:gap-5">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 12 }}
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-[1rem] sm:rounded-[1.2rem] flex items-center justify-center text-white shadow-[0_15px_30px_rgba(0,0,0,0.5)] ${product.color === 'brand' ? 'bg-brand-500 shadow-brand-500/20' : 'bg-accent-purple shadow-accent-purple/20'}`}
                    >
                       {product.color === 'brand' ? <Zap size={20} className="sm:w-6 sm:h-6" /> : <Orbit size={20} className="sm:w-6 sm:h-6" />}
                    </motion.div>
                    <div>
                       <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tighter leading-none">{product.name}</h3>
                       <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.32em] text-slate-500 mt-2">{product.tagline}</p>
                    </div>
                 </div>
                 <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-medium leading-relaxed max-w-xl">
                   {product.description}
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {product.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all shadow-2xl border-white/5">
                           <Layers size={18} />
                        </div>
                        <span className="font-black text-slate-200 text-sm sm:text-base tracking-tight">{feature}</span>
                      </div>
                    ))}
                 </div>
                 <div className="pt-4 sm:pt-6 lg:pt-10">
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex w-full sm:w-auto justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-[1.2rem] items-center gap-4 sm:gap-5 bg-slate-950 text-white hover:bg-brand-500 transition-all duration-300 shadow-[0_18px_30px_-20px_rgba(15,23,42,0.55)] overflow-hidden"
                    >
                       <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em]">View product</span>
                       <div className="relative z-10 w-8 h-8 rounded-full bg-white/15 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                          <ArrowUpRight size={16} />
                       </div>
                    </a>
                 </div>
              </div>

              {/* Product Visual */}
              <div className="lg:w-1/2 relative group w-full">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.95, y: 50 }}
                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
                   transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                   className="relative z-10 p-3 sm:p-4 lg:p-6 glass rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[4.5rem] border-white/5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] overflow-hidden"
                 >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full aspect-[4/3] object-cover rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3.8rem] saturate-[0.9] Contrast-110 brightness-[0.82] group-hover:brightness-100 transition-all duration-1200 ease-out scale-[1.03] group-hover:scale-100"
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
