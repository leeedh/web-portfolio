import React from 'react';
import { AutomationItem } from '../types';
import { Terminal, ArrowRight, Timer } from 'lucide-react';

interface AutomationCardProps {
  item: AutomationItem;
}

const AutomationCard: React.FC<AutomationCardProps> = ({ item }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-slate-900 rounded-lg text-yellow-500 border border-slate-700">
            <Terminal size={24} />
        </div>
        <h3 className="text-xl font-bold text-white">{item.title}</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex gap-3 items-start">
            <div className="min-w-[4px] h-full bg-red-500/50 rounded-full mt-1"></div>
            <div>
                <span className="text-xs uppercase tracking-wider text-red-400 font-bold block mb-1">Problem</span>
                <p className="text-slate-300 text-sm">{item.problem}</p>
            </div>
        </div>
        
        <div className="flex justify-center">
            <ArrowRight className="text-slate-600 transform rotate-90 md:rotate-0" />
        </div>

        <div className="flex gap-3 items-start">
            <div className="min-w-[4px] h-full bg-green-500/50 rounded-full mt-1"></div>
            <div>
                <span className="text-xs uppercase tracking-wider text-green-400 font-bold block mb-1">Solution & Impact</span>
                <p className="text-slate-300 text-sm">{item.solution}</p>
                <div className="mt-2 flex items-center gap-2 text-accent text-sm font-semibold bg-accent/10 px-3 py-2 rounded">
                    <Timer size={16} />
                    {item.impact}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationCard;