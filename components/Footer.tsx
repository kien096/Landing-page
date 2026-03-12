import React from 'react';
import { Mail, Phone, Award, ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Locale } from '../types/locale';

interface FooterProps {
  locale: Locale;
}

const Footer: React.FC<FooterProps> = ({ locale }) => {
  const isVietnamese = locale === 'vi';

  return (
    <footer className="bg-black text-white pt-24 sm:pt-32 lg:pt-48 pb-10 sm:pb-16 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24 lg:mb-32">
          <div className="lg:col-span-1 space-y-10">
            <div className="flex flex-col">
              <span className="text-3xl font-black font-display leading-none tracking-tighter uppercase">
                MindShift
              </span>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-500 mt-2">
                Enterprise AI
              </span>
            </div>
            <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-sm">
              {isVietnamese
                ? 'MindShift cung cấp hệ điều hành AI tối ưu cho Lead Generation, Đào tạo số hóa và Quản trị tri thức doanh nghiệp.'
                : 'Building high-performance AI solutions for B2B growth and enterprise knowledge operations.'}
            </p>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500/50 transition-all border-white/5 backdrop-blur-3xl shadow-xl"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a
                href="./"
                className={`rounded-xl border px-5 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all ${
                  locale === 'en' ? 'border-brand-500 bg-brand-500 text-white' : 'border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                EN
              </a>
              <a
                href="./vi.html"
                className={`rounded-xl border px-5 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all ${
                  locale === 'vi' ? 'border-brand-500 bg-brand-500 text-white' : 'border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                VI
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600 mb-10">
              {isVietnamese ? 'Sản phẩm' : 'Products'}
            </h4>
            <ul className="space-y-6 text-xl font-black tracking-tighter uppercase">
              <li>
                <a
                  href="https://scout.mindshift.io.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-500 transition-all flex items-center gap-2 group"
                >
                  MindScout{' '}
                  <ArrowUpRight size={18} className="text-slate-800 group-hover:text-brand-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="https://learn.mindshift.io.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-500 transition-all flex items-center gap-2 group"
                >
                  MindCoach{' '}
                  <ArrowUpRight size={18} className="text-slate-800 group-hover:text-brand-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </li>
              <li><a href="#solutions-detail" className="hover:text-brand-500 transition-all">{isVietnamese ? 'Giải pháp' : 'Solutions'}</a></li>
              <li><a href="#methodology" className="hover:text-brand-500 transition-all">{isVietnamese ? 'Quy trình' : 'Methodology'}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600 mb-10">
              {isVietnamese ? 'Công ty' : 'Company'}
            </h4>
            <ul className="space-y-6 text-xl font-black tracking-tighter uppercase">
              <li><a href="#services" className="hover:text-brand-500 transition-all">{isVietnamese ? 'Dịch vụ' : 'Services'}</a></li>
              <li><a href="#products" className="hover:text-brand-500 transition-all">{isVietnamese ? 'Sản phẩm' : 'Products'}</a></li>
              <li><a href="#trust" className="hover:text-brand-500 transition-all">{isVietnamese ? 'Khách hàng' : 'Customers'}</a></li>
            </ul>
          </div>

          <div className="space-y-12">
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600 mb-10">
              {isVietnamese ? 'Liên hệ' : 'Contact'}
            </h4>
            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand-500 border-white/10 group-hover:bg-brand-500 group-hover:text-white transition-all shadow-xl">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:infor@mindshift.io.vn" className="text-lg font-black hover:text-brand-500 transition-colors tracking-tight">
                    infor@mindshift.io.vn
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-accent-cyan border-white/10 group-hover:bg-accent-cyan group-hover:text-white transition-all shadow-xl">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">
                    {isVietnamese ? 'Tư vấn' : 'Direct Support'}
                  </p>
                  <span className="text-lg font-black tracking-tight">0384990991</span>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="glass px-6 py-4 rounded-2xl border border-white/10 flex items-center gap-4 shadow-2xl backdrop-blur-3xl">
                <Award size={24} className="text-brand-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-wider leading-tight text-white/80">
                  {isVietnamese ? 'Được ghi nhận trong top 11 AI startups tại Việt Nam' : 'Top 11 AI Startups in Vietnam'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-center lg:text-left">
            &copy; {new Date().getFullYear()} MindShift Vietnam.{" "}
            <span className="text-slate-600 font-medium">
              {isVietnamese
                ? "Đồng hành cùng sự phát triển của Doanh nghiệp Việt."
                : "Built for real-world impact."}
            </span>
          </p>
          <div className="flex gap-12">
            <a href="#" className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
