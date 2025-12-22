import React from 'react';
import { Brain, Mail, Phone, Globe, MapPin, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-4 text-white">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Brain size={20} />
              </div>
              <span className="text-xl font-bold">MindShift</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              The Workforce Accelerator. Scaling for National Competitiveness through AI-powered enterprise knowledge management and training.
            </p>
            <div className="flex gap-4">
              {/* Achievement Badges (Text based) */}
              <div className="bg-slate-800 px-3 py-1 rounded text-xs border border-slate-700 flex items-center gap-2">
                <Award size={14} className="text-yellow-500" /> Top 11 AI Startups
              </div>
              <div className="bg-slate-800 px-3 py-1 rounded text-xs border border-slate-700 flex items-center gap-2">
                <Award size={14} className="text-yellow-500" /> Techfest Top 100
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3 flex gap-12">
            <div>
              <h4 className="text-white font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">Knowledge Graph</a></li>
                <li><a href="#" className="hover:text-blue-400">Mind Coach AI</a></li>
                <li><a href="#" className="hover:text-blue-400">Analytics</a></li>
                <li><a href="#" className="hover:text-blue-400">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:w-1/3">
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <a href="mailto:infor@mindshift.io.vn" className="hover:text-white transition-colors">infor@mindshift.io.vn</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={18} className="text-blue-500" />
                <a href="https://mindshift.io.vn" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">mindshift.io.vn</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span className="hover:text-white transition-colors">0384990991</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 mt-1" />
                <span>Vietnam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} MindShift Vietnam Technology Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;