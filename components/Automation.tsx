import React from 'react';
import { Workflow } from 'lucide-react';
import AutomationCard from './AutomationCard';
import { AutomationSection } from './AutomationSection';
import { AUTOMATION_PROJECTS } from '../constants';

const Automation: React.FC = () => {
  return (
    <section id="automation" className="scroll-mt-24">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          marginBottom: 40,
          paddingBottom: 24,
          borderBottom: '1px solid var(--ln-border)',
        }}
      >
        <span className="ln-section-label" style={{ alignSelf: 'flex-start' }}>
          <Workflow size={12} />
          Automation
        </span>
        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 30px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: 'var(--ln-text)',
          }}
        >
          Data Pipeline & Workflow Automation
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <AutomationSection />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 10 }}>
          {AUTOMATION_PROJECTS.map((item) => (
            <AutomationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Automation;
