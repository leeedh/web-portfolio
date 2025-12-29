import React from 'react';
import { Workflow } from 'lucide-react';
import AutomationCard from './AutomationCard';
import { AutomationSection } from './AutomationSection';
import { AUTOMATION_PROJECTS } from '../constants';

const Automation: React.FC = () => {
  return (
    <section id="automation" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-12 border-b border-slate-700 pb-4">
        <Workflow className="text-yellow-500 w-8 h-8" />
        <h2 className="text-3xl md:text-4xl font-bold">Data Pipeline & Workflow Automation</h2>
      </div>
      <div className="space-y-12">
        <AutomationSection />
        <div className="grid md:grid-cols-3 gap-6">
          {AUTOMATION_PROJECTS.map((item) => (
            <AutomationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Automation;

