import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Locale } from "../types/locale";
import OrchestratorIllustration from "./illustrations/OrchestratorIllustration";

interface HeroProps {
  locale: Locale;
}

const Hero: React.FC<HeroProps> = ({ locale }) => {
  const isVietnamese = locale === "vi";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const proofPoints = isVietnamese
    ? [
        { label: "Dự án thành công", value: "100+" },
        { label: "Triển khai nhanh", value: "2-6 Tuần" },
        { label: "Đồng bộ hệ thống", value: "Scout + Coach" },
      ]
    : [
        { label: "Enterprise Ready", value: "100+" },
        { label: "Fast Onboarding", value: "2-6 Weeks" },
        { label: "AI Platform", value: "Scout + Coach" },
      ];

  const workflowLabels = isVietnamese
    ? {
        leftTag: "Dữ liệu",
        leftTitle: "Hợp nhất nguồn tín hiệu",
        leftMeta: "CRM, Tài liệu, Lead list",
        centerTag: "Điều phối AI",
        centerTitle: "Tự động hóa quy trình",
        centerMeta: "Quản trị & Định tuyến",
        rightTag: "Thực thi",
        rightTitle: "Tác động vận hành",
        rightMeta: "Chiến dịch & Báo cáo",
      }
    : {
        leftTag: "Input",
        leftTitle: "Data Sources",
        leftMeta: "CRM, Docs, Leads",
        centerTag: "AI Orchestrator",
        centerTitle: "Workflow Automation",
        centerMeta: "Governance & Routing",
        rightTag: "Execution",
        rightTitle: "Operational Impact",
        rightMeta: "Campaigns & Reports",
      };

  return (
    <section className="relative min-h-[100svh] flex items-center pt-32 pb-16 sm:pt-40 lg:pt-48 overflow-hidden bg-mesh">
      {/* Dynamic Background Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.15, 0.1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-[-25%] w-[600px] h-[600px] sm:w-[1000px] sm:h-[1000px] bg-brand-500 rounded-full blur-[140px] -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.08, 0.14, 0.08],
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-[-15%] w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] bg-accent-cyan rounded-full blur-[120px] -z-10"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-16"
        >
          <div className="space-y-8 sm:space-y-10 text-center lg:text-left">
            <motion.h1
              variants={itemVariants}
              className={`font-black leading-[0.9] tracking-[-0.05em] ${
                isVietnamese
                  ? "text-3xl sm:text-5xl lg:text-6xl xl:text-7xl"
                  : "text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
              }`}
            >
              {isVietnamese ? (
                <>
                  Trợ lý AI chuyên biệt
                  <br />
                  <span className="text-gradient">
                    Kiến tạo vận hành số.
                  </span>
                </>
              ) : (
                <>
                  Enterprise AI.
                  <br />
                  <span className="text-gradient">Automated ROI.</span>
                </>
              )}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-base sm:text-lg lg:text-[1.25rem] text-slate-300 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-90 text-balance`}
            >
              {isVietnamese
                ? "Tối ưu hóa phễu khách hàng và số hóa tri thức doanh nghiệp với hệ sinh thái AI thực chiến, giúp đội ngũ bứt phá năng suất ngay từ tuần đầu tiên."
                : "Orchestrate your business with production-ready AI solutions. Automate complex workflows, scale B2B intelligence with MindScout, and accelerate growth with MindCoach."}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex w-full sm:w-auto flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#products"
                className="group relative w-full sm:w-auto px-8 py-4 bg-brand-500 text-white rounded-[1.4rem] font-black text-base overflow-hidden transition-all shadow-lg hover:shadow-brand-500/25"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative flex items-center justify-center gap-3">
                  {isVietnamese ? "Khám phá giải pháp" : "Get Started"}{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
                whileTap={{ scale: 0.98 }}
                href="https://scout.mindshift.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass w-full sm:w-auto px-8 py-4 rounded-[1.4rem] font-black text-base text-white transition-all flex items-center justify-center gap-4 group border-white/10 shadow-xl"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all">
                  <Play size={16} fill="currentColor" />
                </div>
                {isVietnamese ? "Trải nghiệm MindScout" : "Try MindScout"}
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
            >
              {proofPoints.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.2)" }}
                  className="glass rounded-[1.25rem] px-5 py-4 text-left border-white/5 transition-colors relative group"
                >
                  <div className="absolute -inset-px bg-gradient-to-br from-brand-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[1.25rem] -z-10" />
                  <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-1.5 line-clamp-1">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="group relative">
            <OrchestratorIllustration />

            {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full text-center px-8">
              <p className="text-sm text-slate-400 leading-relaxed font-medium opacity-60">
                {isVietnamese
                  ? 'Dữ liệu được chuẩn hóa, AI xử lý theo quy tắc và bối cảnh doanh nghiệp.'
                  : 'Governed AI processing and unified data inputs for enterprise-grade operations.'}
              </p>
            </div> */}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden lg:block"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
