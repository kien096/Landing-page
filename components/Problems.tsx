import React from 'react';
import { FileText, Zap, BarChart3, Smartphone, Users, Shield } from 'lucide-react';

const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Everything you need to <span className="text-blue-600">upskill</span> your workforce
          </h2>
          <p className="text-lg text-slate-600">
            One platform to centralize knowledge, automate training, and track performance. Replaces your LMS, drive, and spreadsheets.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Large Card: AI Creation */}
          <div className="md:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Instant Course Creation</h3>
              <p className="text-slate-600 max-w-md">
                Upload your PDFs, SOPs, or Videos. Our AI analyzes the content and automatically generates interactive micro-lessons, quizzes, and summaries in seconds.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            {/* Visual Decor */}
            <div className="absolute top-1/2 right-[-20px] translate-y-[-50%] opacity-20 group-hover:opacity-40 transition-opacity hidden md:block">
              <FileText size={200} className="text-blue-600" />
            </div>
          </div>

          {/* Tall Card: Mobile Learning */}
          <div className="md:row-span-2 bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
             <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Training in their pocket</h3>
                <p className="text-slate-400 mb-8">
                  Deskless workers? No problem. MindShift is mobile-first, allowing teams to learn anytime, anywhere.
                </p>
                <div className="mt-auto flex justify-center">
                  <div className="w-40 bg-slate-800 rounded-t-2xl border-t border-l border-r border-slate-700 p-2 pb-0">
                    <div className="bg-white rounded-t-xl h-32 w-full opacity-90"></div>
                  </div>
                </div>
             </div>
          </div>

          {/* Card: Analytics */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">ROI Analytics</h3>
            <p className="text-slate-600 text-sm">
              Don't just track completion. Track impact. Link training scores to real-world business KPIs.
            </p>
          </div>

          {/* Card: Centralized Brain */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Secure Knowledge</h3>
            <p className="text-slate-600 text-sm">
              Your enterprise brain, centralized. Prevent knowledge loss when employees leave.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;