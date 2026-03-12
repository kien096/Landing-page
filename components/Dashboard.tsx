import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartData } from '../types';

const data: ChartData[] = [
  { name: 'Week 1', knowledge: 40, performance: 24, engagement: 24 },
  { name: 'Week 2', knowledge: 30, performance: 13, engagement: 22 },
  { name: 'Week 3', knowledge: 50, performance: 38, engagement: 32 },
  { name: 'Week 4', knowledge: 78, performance: 39, engagement: 40 },
  { name: 'Week 5', knowledge: 89, performance: 48, engagement: 50 },
  { name: 'Week 6', knowledge: 93, performance: 68, engagement: 60 },
  { name: 'Week 7', knowledge: 95, performance: 80, engagement: 75 },
];

const Dashboard: React.FC = () => {
  return (
    <section id="analytics" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-base font-bold text-brand-400 uppercase tracking-widest mb-4">Strategic Impact</h2>
            <h3 className="text-4xl lg:text-5xl font-bold font-display text-white mb-8">
              Where Strategy Meets <br/><span className="text-gradient">Measurable Result.</span>
            </h3>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Our implementation doesn't stop at deployment. We provide real-time visibility into how AI is shifting your company metrics—from knowledge retention to actual frontline performance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Knowledge Status", desc: "Real-time gap analysis" },
                { title: "Engagement AI", desc: "Deep behavior insights" },
                { title: "Performance Lift", desc: "Direct KPI correlation" },
                { title: "Compliance Core", desc: "Full audit readiness" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col p-4 glass rounded-xl border border-white/5">
                   <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                   <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="glass p-8 rounded-3xl border border-white/5 shadow-2xl relative">
              <div className="absolute top-0 right-0 p-8">
                 <div className="px-3 py-1 bg-brand-500/10 text-brand-400 text-[10px] font-bold rounded-full border border-brand-500/20">
                    LIVE DATA
                 </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-bold text-white mb-1">Knowledge vs Performance</h4>
                <p className="text-xs text-slate-500">Enterprise Adoption Velocity</p>
              </div>
              
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="name" tick={{fontSize: 10, fill: '#64748b'}} axisLine={false} tickLine={false} />
                    <YAxis tick={{fontSize: 10, fill: '#64748b'}} axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{backgroundColor: '#0f172a', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)'}}
                      itemStyle={{fontSize: '12px', fontWeight: 'bold'}}
                    />
                    <Area type="monotone" dataKey="knowledge" stroke="#38bdf8" fillOpacity={1} fill="url(#colorKnowledge)" strokeWidth={3} />
                    <Area type="monotone" dataKey="performance" stroke="#818cf8" fillOpacity={1} fill="url(#colorPerformance)" strokeWidth={3} />
                    <defs>
                      <linearGradient id="colorKnowledge" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorPerformance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#818cf8" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#818cf8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-8 flex gap-6 border-t border-white/5 pt-6">
                 <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-400"></div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Knowledge Efficiency</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-400"></div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Performance Lift</span>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Dashboard;