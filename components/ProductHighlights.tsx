import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Orbit, Layers } from "lucide-react";
import { Locale } from "../types/locale";
import ScoutIllustration from "./illustrations/ScoutIllustration";
import CoachIllustration from "./illustrations/CoachIllustration";

interface ProductHighlightsProps {
  locale: Locale;
}

const ProductHighlights: React.FC<ProductHighlightsProps> = ({ locale }) => {
  const isVietnamese = locale === "vi";

  const products = [
    {
      name: "MindScout",
      tagline: isVietnamese
        ? "Tìm kiếm khách hàng chuẩn xác"
        : "Lead Intelligence & Operations",
      description: isVietnamese
        ? "Tự động săn tìm, thẩm định và kết nối với khách hàng tiềm năng mà không cần tốn hàng giờ sàng lọc thủ công."
        : "Automate high-intent lead discovery and validation with AI-driven precision.",
      features: isVietnamese
        ? [
            "Săn tìm theo chân dung mục tiêu",
            "Thẩm định chất lượng tự động",
            "Cập nhật dữ liệu thời gian thực",
          ]
        : [
            "Targeted Discovery",
            "Automated Validation",
            "Live Performance Feed",
          ],
      Illustration: ScoutIllustration,
      id: "mindscout",
      color: "brand",
      link: "https://scout.mindshift.io.vn/",
    },
    {
      name: "MindCoach",
      tagline: isVietnamese
        ? "Trợ lý ảo & Đào tạo thực chiến"
        : "Corporate Brain & AI Training",
      description: isVietnamese
        ? "Số hóa toàn bộ quy trình và tri thức nội bộ thành Trợ lý AI thông minh, hỗ trợ đội ngũ giải quyết công việc tức thì."
        : "Transform company knowledge into interactive AI mentors for instant staff enablement.",
      features: isVietnamese
        ? [
            "Truy xuất tài liệu nội bộ",
            "Đóng vai huấn luyện nhân sự",
            "Tự động hóa Onboarding",
          ]
        : ["Knowledge Assistant", "Scenario Training", "Automated Tracking"],
      Illustration: CoachIllustration,
      id: "mindcoach",
      color: "brand",
      link: "https://learn.mindshift.io.vn/",
    },
  ];

  return (
    <section
      id="products"
      className="py-24 sm:py-32 lg:py-48 bg-black text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-24 sm:mb-32">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black text-brand-500 uppercase tracking-[0.5em] mb-6"
          >
            {isVietnamese ? "Giải pháp tiêu biểu" : "Product Suite"}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`font-black font-display leading-[0.9] tracking-tighter ${
              isVietnamese
                ? "text-3xl sm:text-5xl lg:text-6xl"
                : "text-4xl sm:text-6xl lg:text-7xl"
            }`}
          >
            {isVietnamese ? (
              <>
                Nâng tầm hiệu suất doanh nghiệp <br />
                <span className="font-serif-italic text-brand-500 italic tracking-normal ">
                  bằng các giải pháp AI chuyên biệt.
                </span>
              </>
            ) : (
              <>
                Engineered for <br />
                <span className="font-serif-italic text-brand-500 italic tracking-normal">
                  Business Impact.
                </span>
              </>
            )}
          </motion.h2>
        </div>

        <div className="space-y-32 sm:space-y-48 lg:space-y-64">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`flex flex-col ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-16 lg:gap-32`}
            >
              <div className="lg:w-1/2 space-y-10">
                <div className="flex items-center gap-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-2xl bg-brand-500 shadow-brand-500/20"
                  >
                    {product.id === "mindscout" ? (
                      <Orbit size={24} />
                    ) : (
                      <Zap size={24} fill="currentColor" />
                    )}
                  </motion.div>
                  <div>
                    <h3
                      className={`font-black font-display tracking-tight leading-none uppercase ${
                        isVietnamese
                          ? "text-3xl sm:text-5xl"
                          : "text-4xl sm:text-6xl"
                      }`}
                    >
                      {product.name}
                    </h3>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mt-2">
                      {product.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-lg sm:text-2xl text-slate-400 font-medium leading-relaxed max-w-lg text-balance">
                  {product.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature) => (
                    <motion.div
                      key={feature}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-8 h-8 glass rounded-lg flex items-center justify-center text-brand-500 border border-white/5 shadow-xl transition-all group-hover:bg-brand-500 group-hover:text-white">
                        <Layers size={14} />
                      </div>
                      <span className="font-bold text-slate-300 text-sm sm:text-base tracking-tight">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="pt-8">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex w-full sm:w-auto justify-center px-10 py-5 rounded-2xl items-center gap-6 bg-white text-black hover:bg-brand-500 hover:text-white transition-all duration-300 shadow-2xl font-black overflow-hidden"
                  >
                    <span className="relative z-10 text-[10px] uppercase tracking-[0.3em]">
                      {isVietnamese ? "Trải nghiệm ngay" : "Try Now"}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="group-hover:rotate-45 transition-transform"
                    />
                  </motion.a>
                </div>
              </div>

              <div className="lg:w-1/2 relative group w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative z-10 p-2 glass rounded-[3.5rem] border-white/10 shadow-2xl overflow-hidden backdrop-blur-3xl"
                >
                  <product.Illustration />
                </motion.div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] blur-[160px] rounded-full -z-10 opacity-10 bg-brand-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
