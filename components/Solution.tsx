import React from 'react';
import { Check, UploadCloud, BrainCircuit, LineChart } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section id="solutions" className="py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-6 space-y-32">
        
        {/* Feature 1: Ingestion */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <UploadCloud size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Don't build courses from scratch. <br />
              <span className="text-blue-600">Let AI do it.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Stop wasting weeks on instructional design. Upload your existing PDF manuals, PowerPoints, or video recordings. MindShift's AI engine instantly converts them into engaging, gamified lessons.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600"><Check size={14} /></div>
                <span className="text-slate-700 font-medium">Parse complex technical SOPs instantly</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600"><Check size={14} /></div>
                <span className="text-slate-700 font-medium">Auto-generate quizzes and flashcards</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600"><Check size={14} /></div>
                <span className="text-slate-700 font-medium">Keep content synced with your documents</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-xl">
            {/* Abstract visual for file upload -> Course */}
            <div className="flex items-center justify-between gap-4">
               <div className="w-24 h-32 bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col items-center justify-center p-2">
                  <div className="w-8 h-1 bg-slate-200 mb-2 rounded"></div>
                  <div className="w-12 h-1 bg-slate-200 mb-1 rounded"></div>
                  <div className="w-12 h-1 bg-slate-200 mb-1 rounded"></div>
                  <span className="text-[10px] text-slate-400 mt-2">PDF</span>
               </div>
               <div className="flex-1 h-px bg-slate-300 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-blue-600 text-white p-2 rounded-full">
                     <BrainCircuit size={16} />
                  </div>
               </div>
               <div className="w-24 h-32 bg-blue-600 text-white rounded-lg shadow-lg flex flex-col items-center justify-center p-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white/30 mb-2"></div>
                  <span className="text-[10px] font-bold">Course Ready</span>
               </div>
            </div>
            <div className="mt-8 text-center text-sm text-slate-500 italic">
               "Converted 'Safety Manual 2024' in 32 seconds..."
            </div>
          </div>
        </div>

        {/* Feature 2: Contextual AI (Reversed) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
             <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
              <BrainCircuit size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              A Personal "Mind Coach" <br />
              <span className="text-purple-600">for every employee.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              It's not just a search bar. It's a conversational AI that understands your company's specific context. Employees can ask "How do I process a refund?" and get an exact answer based on your guidelines, not generic internet data.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600"><Check size={14} /></div>
                <span className="text-slate-700 font-medium">RAG Technology ensures 100% accurate answers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600"><Check size={14} /></div>
                <span className="text-slate-700 font-medium">Role-play simulations for sales & support</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600"><Check size={14} /></div>
                <span className="text-slate-700 font-medium">24/7 Availability for deskless workers</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
             <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white relative flex flex-col">
                   {/* Mobile Screen Content */}
                   <div className="bg-slate-50 p-4 border-b">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs">AI</div>
                        <div className="text-sm font-bold text-slate-800">Mind Coach</div>
                      </div>
                   </div>
                   <div className="flex-1 p-4 space-y-4 overflow-hidden">
                      <div className="bg-slate-100 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl text-sm text-slate-700">
                        How can I help you today?
                      </div>
                      <div className="bg-blue-600 text-white p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl text-sm ml-auto max-w-[80%]">
                        What's the procedure for heavy machinery shutdown?
                      </div>
                      <div className="bg-slate-100 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl text-sm text-slate-700">
                        Based on <strong>Protocol 7A</strong>:
                        <ol className="list-decimal ml-4 mt-2 space-y-1">
                          <li>Turn off main power.</li>
                          <li>Engage emergency brake.</li>
                          <li>Log time in Logbook B.</li>
                        </ol>
                      </div>
                   </div>
                   <div className="p-3 border-t">
                      <div className="h-10 bg-slate-100 rounded-full w-full"></div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;