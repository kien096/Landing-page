import React from 'react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Value Proposition */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide">
              <span>New</span>
              <span className="w-px h-3 bg-blue-200"></span>
              <span>MindShift AI Engine 2.0</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Turn your company knowledge into <br />
              <span className="text-blue-600">Performance.</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              The AI-first platform that centralizes your documents, automates training creation, and scales workforce capability—all in one place.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>No credit card required</span>
                <span className="mx-2">•</span>
                <CheckCircle2 size={16} className="text-green-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-blue-600/30 transform hover:-translate-y-1">
                  Get Started for Free
                  <ArrowRight size={18} />
                </button>
                <button className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-lg font-bold transition-all">
                  <Play size={18} fill="currentColor" className="text-slate-900" />
                  See How It Works
                </button>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 mt-8">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Partner Logos */}
                 <span className="text-xl font-bold text-slate-800">GOOGLE</span>
                 <span className="text-xl font-bold text-slate-800">NIC</span>
                 <span className="text-xl font-bold text-slate-800">JICA</span>
                 <span className="text-xl font-bold text-slate-800">BambuUP</span>
              </div>
            </div>
          </div>

          {/* Right: Product UI Visual */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-xl bg-slate-900 p-2 shadow-2xl ring-1 ring-slate-900/10">
               {/* Browser Window Mockup */}
               <div className="bg-slate-800 rounded-t-lg p-3 flex items-center gap-2">
                 <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 <div className="bg-slate-900 text-slate-400 text-xs px-3 py-1 rounded-md flex-1 text-center font-mono">mindshift.app/dashboard</div>
               </div>
               <img 
                 src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80" 
                 alt="MindShift Dashboard" 
                 className="w-full rounded-b-lg opacity-90"
               />

               {/* Floating Element: AI Notification */}
               <div className="absolute -left-6 top-20 bg-white p-4 rounded-lg shadow-xl border border-slate-100 max-w-[240px] hidden md:block animate-bounce" style={{animationDuration: '3s'}}>
                 <div className="flex gap-3">
                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path></svg>
                   </div>
                   <div>
                     <p className="text-xs text-slate-500 font-semibold mb-1">AI Suggestion</p>
                     <p className="text-sm font-bold text-slate-800">Your "Sales SOP" is outdated. Auto-update?</p>
                   </div>
                 </div>
               </div>
            </div>
            
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full -z-10 blur-3xl opacity-60"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;