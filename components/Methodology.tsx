import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, FlaskConical, Rocket } from 'lucide-react';
import { Locale } from '../types/locale';

interface MethodologyProps {
  locale: Locale;
}

const Methodology: React.FC<MethodologyProps> = ({ locale }) => {
  const isVietnamese = locale === 'vi';
  const steps = isVietnamese
    ? [
        {
          title: "Khảo sát & Đánh giá",
          description:
            "Phân tích sâu quy trình nghiệp vụ và KPI để xây dựng lộ trình triển khai AI mang lại giá trị thực tế.",
          icon: <Search size={28} />,
          step: "01",
        },
        {
          title: "Thiết kế & Kiến trúc",
          description:
            "Thiết lập cấu trúc dữ liệu và quy chuẩn Quản trị (Governance) đảm bảo hệ thống vận hành an toàn.",
          icon: <Compass size={28} />,
          step: "02",
        },
        {
          title: "Vận hành Thử nghiệm",
          description:
            "Triển khai Pilot trên các đội ngũ nòng cốt để kiểm chứng hiệu quả và tinh chỉnh độ chính xác.",
          icon: <FlaskConical size={28} />,
          step: "03",
        },
        {
          title: "Triển khai & Mở rộng",
          description:
            "Phát hành diện rộng, đào tạo quản trị viên và thiết lập hệ thống giám sát hiệu suất tự động.",
          icon: <Rocket size={28} />,
          step: "04",
        },
      ]
    : [
        {
          title: 'Audit',
          description: 'Synthesizing workflows and KPIs to define a high-impact technical scope.',
          icon: <Search size={28} />,
          step: '01',
        },
        {
          title: 'Design',
          description: 'Architecting content structures and governance rules for enterprise safety.',
          icon: <Compass size={28} />,
          step: '02',
        },
        {
          title: 'Pilot',
          description: 'Live testing with core teams to validate adoption and refine accuracy.',
          icon: <FlaskConical size={28} />,
          step: '03',
        },
        {
          title: 'Scale',
          description: 'Full-scale rollout with dedicated admin training and monitoring.',
          icon: <Rocket size={28} />,
          step: '04',
        },
      ];

  return (
    <section id="methodology" className="py-24 sm:py-32 lg:py-48 relative overflow-hidden bg-black text-white">
      {/* Decorative vertical line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-baseline justify-between mb-24 lg:mb-40 gap-12">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mb-8"
            >
              {isVietnamese ? 'Phương pháp triển khai' : 'The Process'}
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black font-display leading-[0.9] tracking-tighter"
            >
              {isVietnamese ? (
                <>
                  Lộ trình tinh gọn, <br />
                  <span className="font-serif-italic text-brand-500 italic tracking-normal">
                    Kết quả đo lường được.
                  </span>
                </>
              ) : (
                <>
                  Built for <br />
                  <span className="font-serif-italic text-brand-500 italic tracking-normal">
                    Accountability.
                  </span>
                </>
              )}
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:w-1/3 text-lg lg:text-xl font-medium text-slate-400 leading-relaxed"
          >
            {isVietnamese
              ? 'Chiến lược triển khai theo từng giai đoạn giúp giảm thiểu rủi ro và tối đa hóa giá trị doanh nghiệp.'
              : 'Agile phases designed to minimize risk and maximize measurable outcomes.'}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 relative border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-3xl shadow-2xl">
          {steps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
              className="relative p-10 lg:p-14 border-b md:border-b-0 md:border-r border-white/10 group transition-all duration-700 last:border-0"
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-brand-500 group-hover:w-full transition-all duration-700" />
              
              <div className="pointer-events-none absolute top-6 right-8 text-7xl lg:text-9xl font-black text-white/[0.02] transition-all duration-1000 group-hover:text-brand-500/10">
                {step.step}
              </div>

              <div className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center text-slate-950 mb-12 group-hover:bg-brand-500 group-hover:text-white transition-all duration-700 bg-white shadow-xl group-hover:scale-105">
                {step.icon}
              </div>

              <h3 className="relative z-10 text-2xl lg:text-3xl font-black text-white mb-6 uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="relative z-10 text-lg text-slate-400 font-medium leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
