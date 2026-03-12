import React from 'react';
import { motion } from 'framer-motion';
import { Check, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { Locale } from '../types/locale';

interface SolutionProps {
  locale: Locale;
}

const Solution: React.FC<SolutionProps> = ({ locale }) => {
  const isVietnamese = locale === 'vi';

  const buildPoints = isVietnamese
    ? [
        "Cơ chế RAG & Truy xuất dữ liệu chuyên sâu",
        "Triển khai hạ tầng Private Cloud hoặc On-premise",
        "Tự động hóa theo vai trò & Nghiệp vụ",
        "Giao diện tinh gọn, vận hành tức thì",
      ]
    : [
        'Contextual Data Indexing',
        'Private Infrastructure',
        'Role-Based Workflows',
        'Frictionless UI',
      ];

  return (
    <section id="solutions-detail" className="py-24 sm:py-32 lg:py-48 relative bg-black text-white overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 blur-[160px] rounded-full -z-10" />

      <div className="container mx-auto px-4 sm:px-6 space-y-32 sm:space-y-48 lg:space-y-64">
        {/* Section 1: AI Layers */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-brand-500 shadow-brand-500/10 shadow-2xl border-white/10 backdrop-blur-3xl"
            >
              <Cpu size={32} />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`font-black font-display leading-[0.85] tracking-tighter ${
                isVietnamese ? "text-3xl sm:text-5xl lg:text-7xl" : "text-4xl sm:text-6xl lg:text-8xl"
              }`}
            >
              {isVietnamese ? (
                <>
                  Giải pháp AI <br />
                  <span className="font-serif-italic text-brand-500 italic tracking-normal">
                    cho doanh nghiệp thực chiến.
                  </span>
                </>
              ) : (
                <>
                  Operations <br />
                  <span className="font-serif-italic text-brand-500 italic tracking-normal">
                    Ready AI.
                  </span>
                </>
              )}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg lg:text-2xl text-slate-400 leading-relaxed font-medium max-w-xl text-balance"
            >
              {isVietnamese
                ? "Không chỉ dừng lại ở Chatbot. Chúng tôi tích hợp AI vào lõi vận hành, kết nối trực tiếp với dữ liệu và quy trình nghiệp vụ của bạn."
                : 'More than just a chatbot. We integrate AI directly into your business logic and existing workflows.'}
            </motion.p>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6"
            >
              {buildPoints.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500/20 text-brand-500 flex items-center justify-center border border-brand-500/20 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                    <Check size={14} />
                  </div>
                  <span className="text-base lg:text-lg font-bold text-white/80 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="lg:w-1/2 relative group w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="glass p-6 sm:p-10 rounded-[3.5rem] relative z-10 border-white/10 overflow-hidden shadow-2xl backdrop-blur-3xl group-hover:border-brand-500/30 transition-all duration-700"
            >
              <div className="bg-slate-950/60 rounded-[2.5rem] p-10 sm:p-16 flex flex-col items-center gap-12 overflow-hidden border border-white/5">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-10 w-full relative">
                  <div className="w-24 h-32 glass rounded-3xl border-white/10 flex flex-col items-center justify-center gap-3 shadow-xl">
                    <div className="w-12 h-1.5 bg-white/20 rounded-full" />
                    <div className="w-12 h-1.5 bg-white/10 rounded-full" />
                    <span className="text-[10px] font-black text-slate-500 mt-4 uppercase tracking-[0.2em]">{isVietnamese ? 'Nguồn dữ liệu' : 'Data'}</span>
                  </div>

                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent relative min-w-[100px]">
                    <motion.div
                      animate={{ x: [-20, 20, -20] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-brand-500 text-white rounded-full shadow-[0_0_25px_#512FEB]"
                    >
                      <Zap size={20} fill="currentColor" />
                    </motion.div>
                  </div>

                  <div className="w-24 h-32 bg-white rounded-3xl flex flex-col items-center justify-center gap-3 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <Cpu size={36} className="text-brand-500 animate-pulse" />
                    <span className="text-[10px] font-black text-slate-900 px-3 py-1 bg-brand-50 rounded-full">CORE</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-500/10 blur-[100px] rounded-full -z-10 group-hover:scale-110 transition-transform duration-1000" />
          </div>
        </div>

        {/* Section 2: Security */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-32">
          <div className="lg:w-1/2 space-y-12 text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-brand-500 shadow-brand-500/10 shadow-2xl border-white/10 backdrop-blur-3xl"
            >
              <ShieldCheck size={32} />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`font-black font-display leading-[0.85] tracking-tighter ${
                isVietnamese ? "text-3xl sm:text-5xl lg:text-7xl" : "text-4xl sm:text-6xl lg:text-8xl"
              }`}
            >
              {isVietnamese ? (
                <>
                  Bảo mật & Quản trị <br />
                  <span className="font-serif-italic text-brand-500 italic tracking-normal">
                    hệ thống đa lớp.
                  </span>
                </>
              ) : (
                <>
                  Secure <br />
                  <span className="font-serif-italic text-brand-500 italic tracking-normal">
                    by Design.
                  </span>
                </>
              )}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-base sm:text-lg lg:text-2xl text-slate-400 leading-relaxed font-medium max-w-xl text-balance`}
            >
              {isVietnamese
                ? "Làm chủ hoàn toàn dữ liệu với hạ tầng riêng tư (Private) và cơ chế phân quyền chặt chẽ, đảm bảo ATTT ở mức cao nhất."
                : 'Complete control over your data with enterprise-grade governance and secure infrastructure choices.'}
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-3xl border-white/10 hover:border-brand-500/30 transition-all shadow-xl"
              >
                <h4 className="text-brand-500 font-black text-[10px] mb-4 uppercase tracking-[0.4em]">Infrastructure</h4>
                <p className="text-white font-black text-xl lg:text-2xl tracking-tight uppercase leading-none">
                  {isVietnamese ? 'Private cloud và VPC' : 'Private Cloud & VPC'}
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-3xl border-white/10 hover:border-accent-purple/30 transition-all shadow-xl"
              >
                <h4 className="text-accent-purple font-black text-[10px] mb-4 uppercase tracking-[0.4em]">Governance</h4>
                <p className="text-white font-black text-xl lg:text-2xl tracking-tight uppercase leading-none">
                  {isVietnamese ? 'Role-based access' : 'Role-Based Access'}
                </p>
              </motion.div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative p-6 glass rounded-[3.5rem] shadow-2xl border-white/10 overflow-hidden group backdrop-blur-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-50" />
              <div className="relative z-10 bg-slate-950/40 rounded-[2.5rem] p-12 sm:p-20 lg:p-24 border border-white/5 text-center">
                <div className="flex flex-col gap-10 items-center">
                  <div className="inline-flex px-6 py-2.5 bg-brand-500/10 text-brand-400 text-[10px] font-black rounded-full border border-brand-500/20 items-center gap-3 tracking-[0.3em]">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse" />
                    {isVietnamese ? 'KIỂM SOÁT HỆ THỐNG ĐANG BẬT' : 'INTEGRITY MONITORING ACTIVE'}
                  </div>
                  <div className="space-y-12 w-full max-w-sm">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-0.5 bg-white/10 rounded-full relative overflow-hidden">
                        <motion.div
                          animate={{ left: ['-100%', '100%'] }}
                          transition={{ duration: 5, repeat: Infinity, delay: i * 0.8, ease: 'linear' }}
                          className="absolute top-0 bottom-0 w-1/4 bg-brand-500 shadow-[0_0_20px_#512FEB]"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="pt-6">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.6em]">
                      {isVietnamese ? 'MỨC RỦI RO' : 'RISK PROXIMITY'}:{' '}
                      <span className="text-emerald-400">NOMINAL</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
