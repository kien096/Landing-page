import React from "react";
import { motion } from "framer-motion";
import { Zap, BarChart3, Globe, Shield, Cpu } from "lucide-react";
import { Locale } from "../types/locale";

interface FeaturesGridProps {
  locale: Locale;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ locale }) => {
  const isVietnamese = locale === "vi";
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-24 sm:py-32 lg:py-48 relative bg-black text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mb-20 sm:mb-32">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[10px] font-black text-brand-500 uppercase tracking-[0.6em] mb-6"
          >
            {isVietnamese
              ? "Lý do doanh nghiệp chọn MindShift"
              : "The Enterprise Choice"}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`font-black font-display leading-[0.85] tracking-tighter ${
              isVietnamese
                ? "text-3xl sm:text-5xl lg:text-7xl"
                : "text-4xl sm:text-6xl lg:text-8xl"
            }`}
          >
            {isVietnamese ? (
              <>
                Kiến trúc AI tối ưu cho <br />
                <span className="font-serif-italic text-brand-500 italic tracking-normal">
                  Quản trị, Thực thi & ROI.
                </span>
              </>
            ) : (
              <>
                Designed for <br />
                <span className="font-serif-italic text-brand-500 italic tracking-normal">
                  Real Impact.
                </span>
              </>
            )}
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10"
        >
          {/* Card 1 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="md:col-span-8 glass p-8 sm:p-12 lg:p-16 rounded-[3rem] border-white/10 relative overflow-hidden group backdrop-blur-3xl shadow-2xl"
          >
            <div className="relative z-10 space-y-10 group-hover:scale-[1.01] transition-transform duration-700">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-500 shadow-xl">
                <Zap size={32} />
              </div>
              <div className="space-y-6">
                <h3
                  className={`font-black text-white leading-tight tracking-[-0.04em] ${
                    isVietnamese
                      ? "text-2xl sm:text-4xl"
                      : "text-3xl sm:text-5xl"
                  }`}
                >
                  {isVietnamese ? "AI hiểu sâu nghiệp vụ" : "Context-Aware AI"}
                </h3>
                <p className="text-base sm:text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
                  {isVietnamese
                    ? "Hệ thống AI được tối ưu riêng theo cách vận hành và đặc thù dữ liệu thực tế của doanh nghiệp bạn."
                    : "AI tailored perfectly to your business language, internal content structure, and operational workflows."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="md:col-span-4 glass p-8 sm:p-10 rounded-[3rem] border-white/10 flex flex-col items-center justify-between text-center group backdrop-blur-2xl shadow-2xl"
          >
            <div className="w-16 h-16 mb-8 bg-gradient-to-br from-brand-500 to-accent-purple rounded-2xl flex items-center justify-center text-white shadow-brand-500/20 shadow-2xl group-hover:rotate-6 transition-all duration-700">
              <Globe size={32} />
            </div>
            <div className="space-y-4 px-4">
              <h3 className="text-2xl font-black text-white tracking-tight uppercase leading-none">
                {isVietnamese
                  ? "Hợp nhất Đa nền tảng"
                  : "Omnichannel Integration"}
              </h3>
              <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
                {isVietnamese
                  ? "Vận hành linh hoạt trên Web & Mobile, tích hợp hoàn hảo vào các công cụ làm việc sẵn có của đội ngũ."
                  : "Seamless access across web and mobile platforms, fitting naturally into your existing stack."}
              </p>
            </div>
            <div className="w-full h-32 mt-10 relative opacity-40 group-hover:opacity-80 transition-opacity">
              <div className="absolute inset-0 bg-brand-500/10 blur-2xl rounded-full" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-x-4 inset-y-0 border-2 border-white/10 rounded-2xl bg-black/40 p-4"
              >
                <div className="flex gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full mb-3" />
                <div className="w-2/3 h-1 bg-white/5 rounded-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="md:col-span-12 lg:col-span-5 glass p-8 sm:p-12 rounded-[3rem] border-white/10 group backdrop-blur-2xl shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-accent-cyan border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl mb-10">
              <BarChart3 size={32} />
            </div>
            <div className="space-y-6">
              <h3
                className={`font-black text-white tracking-tight leading-none ${
                  isVietnamese ? "text-2xl" : "text-3xl"
                }`}
              >
                {isVietnamese
                  ? "Phân tích Hiệu quả thực tế"
                  : "Real-Time Insights"}
              </h3>
              <p className="text-base sm:text-lg text-slate-400 font-medium leading-relaxed">
                {isVietnamese
                  ? "Báo cáo trực quan về hiệu quả ứng dụng AI, giúp bạn đo lường chính xác mức độ tăng trưởng năng suất."
                  : "Monitor adoption and performance with built-in analytics, eliminating the need for outside tools."}
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="md:col-span-12 lg:col-span-7 glass p-8 sm:p-12 rounded-[3.5rem] border-white/10 group backdrop-blur-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-10">
              <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-brand-400 border border-white/10 group-hover:bg-brand-500 group-hover:text-white transition-all duration-700 shadow-2xl">
                <Shield size={36} />
              </div>
              <div className="flex-1 space-y-4">
                <h3
                  className={`font-black text-white tracking-tight uppercase leading-none ${
                    isVietnamese ? "text-2xl" : "text-3xl"
                  }`}
                >
                  {isVietnamese
                    ? "Bảo mật & Quản trị dữ liệu"
                    : "Enterprise Security"}
                </h3>
                <p className="text-base sm:text-lg text-slate-400 font-medium leading-relaxed">
                  {isVietnamese
                    ? "Các quy chuẩn an toàn dữ liệu và phân quyền phức tạp được thiết lập sâu trong kiến trúc giải pháp."
                    : "Permissions, governance, and secure deployment are inherently built into our architecture."}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
