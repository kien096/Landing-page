import React from 'react';
import { ShoppingBag, HardHat, Building2, Stethoscope } from 'lucide-react';

const UseCases: React.FC = () => {
  const cases = [
    {
      title: "Retail & Franchise",
      description: "Ensure brand consistency across 100+ locations. Train seasonal staff in minutes, not days.",
      icon: ShoppingBag,
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Manufacturing",
      description: "Keep safety top of mind. Digitally track compliance and SOP adherence on the factory floor.",
      icon: HardHat,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Corporate & Tech",
      description: "Onboarding, cybersecurity, and soft skills training delivered right in the flow of work.",
      icon: Building2,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Healthcare",
      description: "Critical procedure updates and compliance training that is auditable and instantly accessible.",
      icon: Stethoscope,
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-slate-900">Built for your industry</h2>
           <p className="text-slate-600 mt-2">Tailored solutions for every frontline and desk-based team.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all cursor-pointer group">
              <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;