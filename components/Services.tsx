import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Code2,
  Layers,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Locale } from "../types/locale";

interface ServicesProps {
  locale: Locale;
}

const Services: React.FC<ServicesProps> = ({ locale }) => {
  const isVietnamese = locale === "vi";
  const services = isVietnamese
    ? [
        {
          title: "Tư vấn Lộ trình AI",
          description:
            "Xác định chính xác bộ phận và quy trình nòng cốt để ứng dụng AI, đảm bảo hiệu quả đầu tư tối ưu nhất.",
          icon: <Lightbulb size={28} />,
          color: "bg-brand-500",
          tag: "Assess",
        },
        {
          title: "Xây dựng AI chuyên biệt",
          description:
            "Thiết kế các Trợ lý AI riêng cho từng nghiệp vụ, am hiểu sâu sắc dữ liệu và kiến thức nội bộ của bạn.",
          icon: <Code2 size={28} />,
          color: "bg-accent-purple",
          tag: "Build",
        },
        {
          title: "Kết nối Hệ sinh thái số",
          description:
            "Tích hợp mượt mà giải pháp AI vào CRM, ERP và các công cụ làm việc sẵn có của doanh nghiệp.",
          icon: <Layers size={28} />,
          color: "bg-accent-cyan",
          tag: "Integrate",
        },
        {
          title: "Quản trị & Bảo mật dữ liệu",
          description:
            "Đảm bảo an toàn tuyệt đối với hạ tầng bảo mật đa lớp và quy trình quản trị dữ liệu chuẩn doanh nghiệp.",
          icon: <ShieldCheck size={28} />,
          color: "bg-slate-900",
          tag: "Control",
        },
      ]
    : [
        {
          title: "Case Assessment",
          description:
            "Identifying high-impact business cases to ensure clear ROI before deployment.",
          icon: <Lightbulb size={28} />,
          color: "bg-brand-500",
          tag: "Assess",
        },
        {
          title: "Custom AI Build",
          description:
            "Designing assistants tailored to your data, workflows, and operational logic.",
          icon: <Code2 size={28} />,
          color: "bg-accent-purple",
          tag: "Build",
        },
        {
          title: "Ecosystem Sync",
          description:
            "Seamlessly integrating AI into your existing enterprise portals and workflows.",
          icon: <Layers size={28} />,
          color: "bg-accent-cyan",
          tag: "Integrate",
        },
        {
          title: "Governance",
          description:
            "Enterprise-grade security and access controls implemented from the start.",
          icon: <ShieldCheck size={28} />,
          color: "bg-slate-900",
          tag: "Control",
        },
      ];

  return (
    <section
      id="services"
      className="py-24 sm:py-32 lg:py-48 relative overflow-hidden bg-black text-white"
    >
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-500/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 lg:mb-36 gap-12">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-black text-brand-500 uppercase tracking-[0.5em] mb-8"
            >
              {isVietnamese ? "Dịch vụ triển khai" : "Expertise"}
            </motion.p>
            <motion.h3
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
                  Tư vấn lộ trình đến triển khai, <br />
                  <span className="font-serif-italic text-brand-500 italic tracking-normal ">
                    hiện thực hóa sức mạnh AI.
                  </span>
                </>
              ) : (
                <>
                  Assessment to <br />
                  <span className="font-serif-italic text-brand-500 italic tracking-normal ">
                    Production.
                  </span>
                </>
              )}
            </motion.h3>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-auto lg:pt-24"
          >
            <div className="glass p-8 sm:p-10 rounded-[3rem] border border-white/10 flex items-center justify-between gap-10 group hover:border-brand-500/30 transition-all duration-500 shadow-2xl backdrop-blur-3xl">
              <div className="text-slate-400 font-medium max-w-[280px] text-lg leading-relaxed group-hover:text-white transition-colors text-pretty">
                {isVietnamese
                  ? "Đồng hành cùng doanh nghiệp Việt trong hành trình chuyển đổi số và tối ưu hóa năng suất bằng AI."
                  : "Delivering results for top-tier enterprise teams in SEA."}
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all cursor-pointer shadow-xl shrink-0"
              >
                <ArrowRight size={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-10 lg:p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 hover:border-brand-500/20 hover:bg-white/[0.05] transition-all duration-700 overflow-hidden shadow-xl"
            >
              <div
                className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center text-white mb-10 shadow-2xl group-hover:scale-110 transition-transform duration-500`}
              >
                {service.icon}
              </div>
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-brand-500 mb-6">
                {service.tag}
              </span>
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-6 tracking-tight uppercase">
                {service.title}
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed font-medium text-pretty">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
