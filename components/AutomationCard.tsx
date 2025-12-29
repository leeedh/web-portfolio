import React from 'react';
import { AutomationItem } from '../types';
import { Terminal, ArrowRight, Timer } from 'lucide-react';

interface AutomationCardProps {
  item: AutomationItem;
}

const AutomationCard: React.FC<AutomationCardProps> = ({ item }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 md:p-5 hover:bg-slate-800 transition-colors duration-300 h-full flex flex-col">
      <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
        <div className="p-2 md:p-3 bg-slate-900 rounded-lg text-yellow-500 border border-slate-700 flex-shrink-0">
            <Terminal size={20} className="md:w-6 md:h-6" />
        </div>
        <h3 className="text-base md:text-lg lg:text-xl font-bold text-white leading-tight">{item.title}</h3>
      </div>
      
      <div className="space-y-3 md:space-y-4 flex-grow">
        <div className="flex gap-2 md:gap-3 items-start">
            <div className="min-w-[4px] h-full bg-red-500/50 rounded-full mt-1 flex-shrink-0"></div>
            <div className="min-w-0">
                <span className="text-xs uppercase tracking-wider text-red-400 font-bold block mb-1">Problem</span>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{item.problem}</p>
            </div>
        </div>
        
        <div className="flex justify-center">
            <ArrowRight className="text-slate-600 transform rotate-90 md:rotate-0 w-4 h-4 md:w-5 md:h-5" />
        </div>

        <div className="flex gap-2 md:gap-3 items-start">
            <div className="min-w-[4px] h-full bg-green-500/50 rounded-full mt-1 flex-shrink-0"></div>
            <div className="min-w-0 flex-grow">
                <span className="text-xs uppercase tracking-wider text-green-400 font-bold block mb-1">Solution & Impact</span>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">{item.solution}</p>
                <div className="mt-2 flex items-center gap-2 text-accent text-xs md:text-sm font-semibold bg-accent/10 px-2 md:px-3 py-1.5 md:py-2 rounded">
                    <Timer size={14} className="md:w-4 md:h-4 flex-shrink-0" />
                    <span className="leading-tight">{item.impact}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationCard;