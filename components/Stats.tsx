import React from 'react';
import { Timer, CheckCircle, Database, Leaf } from 'lucide-react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  {
    value: "80%",
    label: "Faster Training",
    description: "Converts internal docs to lessons instantly",
    icon: Timer
  },
  {
    value: "99%",
    label: "Error Reduction",
    description: "Through adaptive AI verification",
    icon: CheckCircle
  },
  {
    value: "100%",
    label: "Knowledge Reuse",
    description: "Eliminate knowledge drain completely",
    icon: Database
  },
  {
    value: "55%",
    label: "Retention Gain",
    description: "Using Spaced Repetition algorithms",
    icon: Leaf
  }
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-4 text-blue-100 group-hover:bg-white group-hover:text-blue-600 transition-colors">
                <stat.icon size={24} />
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1 text-blue-100">{stat.label}</div>
              <p className="text-sm text-blue-200">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;