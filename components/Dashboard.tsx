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
    <section id="analytics" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Comprehensive Analytics</span>
            <h2 className="text-3xl font-bold mt-2 mb-6 text-slate-900">
              Where Learning Meets <br/>Measurable Business Impact
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Managers can accurately assess learners' knowledge status and training quality. Our dashboards link learning data directly to KPIs.
            </p>
            
            <ul className="space-y-4">
              {[
                "Track employee knowledge gaps in real-time",
                "Visualize campaign performance trends",
                "Correlate training completion with productivity metrics",
                "Export reports for compliance and auditing"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-800">Knowledge vs Performance</h3>
                <div className="flex gap-2 text-xs">
                   <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Knowledge</span>
                   <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Performance</span>
                </div>
              </div>
              
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" tick={{fontSize: 12, fill: '#94a3b8'}} axisLine={false} tickLine={false} />
                    <YAxis tick={{fontSize: 12, fill: '#94a3b8'}} axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                    />
                    <Area type="monotone" dataKey="knowledge" stroke="#3b82f6" fillOpacity={1} fill="url(#colorKnowledge)" strokeWidth={3} />
                    <Area type="monotone" dataKey="performance" stroke="#22c55e" fillOpacity={1} fill="url(#colorPerformance)" strokeWidth={3} />
                    <defs>
                      <linearGradient id="colorKnowledge" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorPerformance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Dashboard;