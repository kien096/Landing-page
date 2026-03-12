import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Sparkles } from 'lucide-react';
import { Locale } from '../types/locale';

interface TeamProps {
  locale: Locale;
}

const Testimonials: React.FC<TeamProps> = ({ locale }) => {
  const isVietnamese = locale === 'vi';
  const reviews = isVietnamese
    ? [
        {
          company: 'EuroPlast (EuP)',
          role: 'Giám đốc sản xuất',
          name: 'Nguyen Duc Vu',
          content:
            'Số hóa 20 năm SOP sản xuất từng là bài toán rất nặng. MindShift giúp chúng tôi chuẩn hóa đào tạo an toàn cho 7 nhà máy. Mức độ tuân thủ tăng rõ rệt.',
          initials: 'DV',
          color: 'bg-brand-500',
        },
        {
          company: 'BanhMyBa',
          role: 'Founder',
          name: 'Khang',
          content:
            'Team bếp và vận hành có thể xem lại công thức, tiêu chuẩn phục vụ ngay trên mobile. Việc giữ đồng nhất chất lượng từ xa dễ hơn nhiều.',
          initials: 'K',
          color: 'bg-purple-600',
        },
        {
          company: 'Abbey Vietnam',
          role: 'HR Manager',
          name: 'Hue Ha',
          content:
            'Onboarding nhân viên sales đã nhanh hơn rất nhiều. MindCoach giúp nhân sự mới role-play tình huống và vào việc nhanh hơn.',
          initials: 'HH',
          color: 'bg-blue-600',
        },
        {
          company: 'Polyfill JSC',
          role: 'HR Manager',
          name: 'Pham Minh',
          content:
            'Tài liệu kỹ thuật phức tạp được chuyển thành quiz và workflow để học dễ hơn. Team kỹ thuật tham gia đào tạo tích cực hơn trước.',
          initials: 'PL',
          color: 'bg-slate-800',
        },
      ]
    : [
        {
          company: 'EuroPlast (EuP)',
          role: 'Manufacturing Director',
          name: 'Nguyen Duc Vu',
          content:
            'Digitizing 20 years of manufacturing SOPs used to be a nightmare. MindShift helped us standardize safety training across 7 factories. Compliance improved significantly.',
          initials: 'DV',
          color: 'bg-brand-500',
        },
        {
          company: 'BanhMyBa',
          role: 'Founder',
          name: 'Khang',
          content:
            'Our kitchen and operations teams can review recipes and service standards from mobile. Maintaining consistency remotely is much easier now.',
          initials: 'K',
          color: 'bg-purple-600',
        },
        {
          company: 'Abbey Vietnam',
          role: 'HR Manager',
          name: 'Hue Ha',
          content:
            'Sales onboarding is much faster now. MindCoach lets new hires role-play scenarios and get productive sooner.',
          initials: 'HH',
          color: 'bg-blue-600',
        },
        {
          company: 'Polyfill JSC',
          role: 'HR Manager',
          name: 'Pham Minh',
          content:
            'Complex technical manuals became much easier to learn from once they were turned into quizzes and guided workflows.',
          initials: 'PL',
          color: 'bg-slate-800',
        },
      ];

  const scrollingReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="trust" className="py-48 relative overflow-hidden bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 mb-16 sm:mb-24 lg:mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 sm:gap-4 px-5 sm:px-8 py-2 sm:py-3 glass rounded-full shadow-2xl border-white/5 text-[9px] sm:text-[10px] font-black tracking-[0.3em] sm:tracking-[0.5em] text-brand-500 mb-6 sm:mb-12 uppercase"
        >
          <Sparkles size={18} className="text-accent-purple" />
          {isVietnamese ? 'Đối tác nói về MindShift' : 'Client references'}
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-black font-display leading-[0.9] tracking-tighter"
        >
          {isVietnamese ? (
            <>
              Minh chứng kết quả thực tế, <br />
              <span className="font-serif-italic text-white/90 italic tracking-normal">
                được xác nhận bởi các chuyên gia.
              </span>
            </>
          ) : (
            <>
              Outcomes from <br />
              <span className="font-serif-italic text-white/90 italic tracking-normal">
                production deployments.
              </span>
            </>
          )}
        </motion.h3>
      </div>

      <div className="relative w-full overflow-hidden pb-16 sm:pb-24 lg:pb-32">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 lg:w-[300px] bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 lg:w-[300px] bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none"></div>

        <motion.div
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="flex w-max"
        >
          {scrollingReviews.map((review, idx) => (
            <div
              key={`${review.company}-${idx}`}
              className="w-[85vw] max-w-[420px] sm:w-[500px] md:w-[600px] mx-3 sm:mx-6 lg:mx-10 flex-shrink-0 glass p-8 sm:p-12 lg:p-16 rounded-[2.5rem] sm:rounded-[4rem] lg:rounded-[5rem] border-white/5 hover:bg-white/[0.04] hover:border-brand-500/20 transition-all duration-1000 group cursor-default shadow-3xl"
            >
              <div className="flex justify-between items-start mb-8 sm:mb-12 lg:mb-16">
                <div className="flex gap-2 text-brand-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="sm:w-[18px] sm:h-[18px]" fill="currentColor" />
                  ))}
                </div>
                <Quote
                  size={40}
                  className="sm:w-[60px] sm:h-[60px] text-white/[0.02] group-hover:text-brand-500/10 transition-all transform group-hover:-rotate-12 duration-1000"
                  fill="currentColor"
                />
              </div>

              <p className="text-slate-300 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 sm:mb-12 lg:mb-16 font-medium tracking-tight">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 mt-auto">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ${review.color} rounded-[1.2rem] sm:rounded-[1.5rem] lg:rounded-[2rem] flex items-center justify-center text-white font-black text-lg sm:text-xl lg:text-2xl shadow-xl transform transition-transform shrink-0`}
                >
                  {review.initials}
                </div>
                <div className="space-y-1">
                  <div className="font-black text-white text-xl sm:text-2xl tracking-tighter">
                    {review.name}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.25em] sm:tracking-[0.4em] mb-1 leading-none">
                      {review.role}
                    </span>
                    <span className="text-[11px] font-black text-brand-500 uppercase tracking-[0.2em]">
                      {review.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 mt-16 sm:mt-24 lg:mt-32">
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-36 opacity-10 grayscale contrast-200 hover:opacity-100 hover:grayscale-0 transition-all duration-2000">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tighter uppercase whitespace-nowrap">
            EuroPlast
          </span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tighter uppercase whitespace-nowrap">
            Abbey Vietnam
          </span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tighter uppercase whitespace-nowrap">
            BanhMyBa
          </span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tighter uppercase whitespace-nowrap">
            POLYFILL
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
