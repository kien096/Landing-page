import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      company: "EuroPlast (EuP)",
      role: "Manufacturing Director",
      name: "Nguyen Van A",
      content: "Digitizing 20 years of manufacturing SOPs used to be a nightmare. MindShift helped us standardise safety training across 7 factories. Worker compliance improved by 40% in just two months.",
      initials: "EP",
      color: "bg-blue-600"
    },
    {
      company: "BanhMyBa (Czech Republic)",
      role: "Founder",
      name: "Tran T.",
      content: "Managing quality across our restaurant chain in Europe from Vietnam was a challenge. MindShift ensures every chef in Prague knows the exact recipes and service standards through the mobile app.",
      initials: "BM",
      color: "bg-orange-500"
    },
    {
      company: "Abbey Vietnam",
      role: "HR Manager",
      name: "Le Thi H",
      content: "Onboarding new sales staff used to take a month. With the AI Coach feature, new hires can role-play sales scenarios instantly. Time-to-productivity has dropped to just 5 days.",
      initials: "AV",
      color: "bg-indigo-600"
    },
    {
      company: "Polyfill JSC",
      role: "Technical Lead",
      name: "Pham Minh T",
      content: "The ability to instantly turn complex technical filler masterbatch manuals into simple quizzes is a game changer. Our engineering team actually enjoys the training now.",
      initials: "PL",
      color: "bg-green-600"
    }
  ];

  // Triplicate the reviews array to ensure smooth infinite scrolling
  const scrollingReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-white border-t border-slate-100 overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-6 mb-16 text-center">
        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Customer Stories</span>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
          Trusted by Market Leaders
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          From heavy manufacturing to international F&B chains, MindShift is powering the workforce behind Vietnam's top enterprises.
        </p>
      </div>

      {/* Infinite Scroll Marquee */}
      <div className="relative w-full">
         {/* Gradient Masks for fading effect */}
         <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
         <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
         
         <div className="flex w-max animate-scroll py-4">
            {scrollingReviews.map((review, idx) => (
               <div key={idx} className="w-[350px] md:w-[450px] mx-4 flex-shrink-0 bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 hover:-translate-y-2 transition-all duration-300 group cursor-default">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                        ))}
                    </div>
                    <Quote size={32} className="text-slate-200 group-hover:text-blue-200 transition-colors" fill="currentColor" />
                  </div>

                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 line-clamp-4">
                    "{review.content}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className={`w-12 h-12 ${review.color} rounded-full flex items-center justify-center text-white font-bold text-sm tracking-widest shadow-md`}>
                      {review.initials}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{review.name}</div>
                      <div className="text-xs text-slate-500 font-medium">{review.role}</div>
                      <div className="text-xs font-bold text-blue-600 mt-0.5">{review.company}</div>
                    </div>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Partner Logos/Names */}
       <div className="container mx-auto px-6 mt-20">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
            Proudly partnering with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-lg md:text-xl font-black text-slate-800 uppercase tracking-tight">EuroPlast</span>
             <span className="text-lg md:text-xl font-black text-slate-800 uppercase tracking-tight">Abbey Vietnam</span>
             <span className="text-lg md:text-xl font-black text-slate-800 uppercase tracking-tight">BanhMyBa</span>
             <span className="text-lg md:text-xl font-black text-slate-800 uppercase tracking-tight">POLYFILL</span>
          </div>
        </div>

    </section>
  );
};

export default Testimonials;