import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  HardHat,
  Building2,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import { Locale } from "../types/locale";

interface UseCasesProps {
  locale: Locale;
}

const UseCases: React.FC<UseCasesProps> = ({ locale }) => {
  const isVietnamese = locale === "vi";
  const colorClasses = {
    "brand-500": "bg-brand-500",
    "accent-purple": "bg-accent-purple",
    "accent-cyan": "bg-accent-cyan",
    "accent-rose": "bg-accent-rose",
  } as const;

  const cases = isVietnamese
    ? [
        {
          title: "Bán lẻ & Chuỗi cung ứng",
          description:
            "Chuẩn hóa quy trình phục vụ và hướng dẫn vận hành nhất quán trên toàn hệ thống điểm bán.",
          icon: <ShoppingBag size={28} />,
          color: "brand-500",
        },
        {
          title: "Sản xuất & Công nghiệp",
          description:
            "Số hóa SOP, quy trình an toàn và hướng dẫn kỹ thuật giúp rút ngắn 50% thời gian đào tạo nhân sự mới.",
          icon: <HardHat size={28} />,
          color: "accent-purple",
        },
        {
          title: "Doanh nghiệp Công nghệ",
          description:
            "Tối ưu hóa quy trình Onboarding, Sales Enablement và tra cứu tri thức cho các đội ngũ vận hành.",
          icon: <Building2 size={28} />,
          color: "accent-cyan",
        },
        {
          title: "Dịch vụ Y tế & Sức khỏe",
          description:
            "Đảm bảo tính chính xác tuyệt đối trong quy trình chuyên môn, có khả năng audit và kiểm soát rủi ro.",
          icon: <Stethoscope size={28} />,
          color: "accent-rose",
        },
      ]
    : [
        {
          title: "Retail",
          description:
            "Standardizing operations and service quality across multi-site networks.",
          icon: <ShoppingBag size={28} />,
          color: "brand-500",
        },
        {
          title: "Manufacturing",
          description:
            "Digitizing SOPs and safety protocols for rapid workforce scaling.",
          icon: <HardHat size={28} />,
          color: "accent-purple",
        },
        {
          title: "Enterprise Tech",
          description:
            "Accelerating enablement and technical knowledge access for global teams.",
          icon: <Building2 size={28} />,
          color: "accent-cyan",
        },
        {
          title: "Healthcare",
          description:
            "Ensuring precision and auditability in critical clinical procedures.",
          icon: <Stethoscope size={28} />,
          color: "accent-rose",
        },
      ];

  return (
    <section
      id="use-cases"
      className="py-24 sm:py-32 lg:py-48 relative bg-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 mb-16 sm:mb-24 lg:mb-32 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 sm:gap-12">
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.35em] sm:tracking-[0.5em] mb-6 sm:mb-12"
            >
              {isVietnamese ? "Kịch bản ứng dụng AI" : "Industry coverage"}
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black font-display leading-[0.9] tracking-tighter"
            >
              {isVietnamese ? (
                <>
                  Giải pháp cho doanh nghiệp <br />
                  <span className="font-serif-italic text-brand-500 italic tracking-normal">
                    vận hành đa điểm và quy trình phức tạp.
                  </span>
                </>
              ) : (
                <>
                  Proven performance for <br />
                  <span className="font-serif-italic text-white/90 italic tracking-normal">
                    Complex Operations.
                  </span>
                </>
              )}
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/3 p-6 sm:p-8 lg:p-10 glass rounded-[2rem] sm:rounded-[3.5rem] border-white/5 text-center"
          >
            <p className="text-base sm:text-lg font-semibold text-slate-300 leading-relaxed">
              {isVietnamese
                ? "Phù hợp nhất với doanh nghiệp cần câu trả lời chính xác, đào tạo có hệ thống và kiểm soát chất lượng đồng nhất."
                : "Best suited for enterprises that require accuracy, repeatable training and operational consistency."}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {cases.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative min-h-[360px] sm:min-h-[420px] lg:h-[500px] glass rounded-[2.5rem] sm:rounded-[4rem] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-700 p-8 sm:p-10 lg:p-12 flex flex-col items-center text-center overflow-hidden"
            >
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 ${colorClasses[item.color as keyof typeof colorClasses]} rounded-[1.2rem] sm:rounded-[1.8rem] flex items-center justify-center text-white mb-8 sm:mb-12 shadow-2xl transition-transform group-hover:scale-110`}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight uppercase">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg text-slate-400 font-medium leading-relaxed mb-8 sm:mb-10">
                {item.description}
              </p>

              <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 w-11 h-11 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center text-slate-500 group-hover:text-brand-500 group-hover:bg-white transition-all duration-500 border-white/5">
                <ArrowRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
