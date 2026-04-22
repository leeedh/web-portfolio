import React from 'react';
import { AutomationItem } from '../types';
import { ArrowDown, Activity, Database, ShieldCheck, Clock, Zap, Timer } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface AutomationCardProps {
  item: AutomationItem;
}

const iconMap: Record<string, React.ComponentType<LucideProps>> = { Activity, Database, ShieldCheck };
const statIconMap: Record<string, React.ComponentType<LucideProps>> = { Clock, Zap, Timer };

const AutomationCard: React.FC<AutomationCardProps> = ({ item }) => {
  const HeaderIcon = iconMap[item.iconName] || Activity;
  const StatIcon = statIconMap[item.statIconName] || Timer;

  return (
    <div
      className="ln-card"
      style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 9,
            background: 'rgba(255,200,0,0.10)',
            border: '1px solid rgba(255,200,0,0.20)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <HeaderIcon size={18} style={{ color: '#f5c542' }} />
        </div>
        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--ln-text)',
            lineHeight: 1.4,
          }}
        >
          {item.title}
        </h3>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {/* Problem */}
        <div
          style={{
            background: 'rgba(239,68,68,0.06)',
            border: '1px solid rgba(239,68,68,0.15)',
            borderRadius: 'var(--ln-radius)',
            padding: '10px 12px',
          }}
        >
          <span
            style={{
              display: 'block',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#f87171',
              marginBottom: 4,
            }}
          >
            Problem
          </span>
          <p style={{ fontSize: 12, color: 'var(--ln-sub)', lineHeight: 1.6 }}>{item.problem}</p>
        </div>

        {/* Arrow */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ArrowDown size={14} style={{ color: 'var(--ln-muted)' }} />
        </div>

        {/* Solution */}
        <div
          style={{
            background: 'rgba(74,222,128,0.05)',
            border: '1px solid rgba(74,222,128,0.15)',
            borderRadius: 'var(--ln-radius)',
            padding: '10px 12px',
          }}
        >
          <span
            style={{
              display: 'block',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#4ade80',
              marginBottom: 4,
            }}
          >
            Solution & Impact
          </span>
          <p style={{ fontSize: 12, color: 'var(--ln-sub)', lineHeight: 1.6, marginBottom: 10 }}>
            {item.solution}
          </p>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 12,
              fontWeight: 500,
              color: 'var(--ln-accent)',
              background: 'var(--ln-accent-dim)',
              border: '1px solid rgba(94,106,210,0.2)',
              borderRadius: 6,
              padding: '6px 10px',
            }}
          >
            <StatIcon size={13} />
            {item.impact}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationCard;
