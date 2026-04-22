import React, { useState } from 'react';
import { Code2, Globe2, Cpu, CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const categories = [
    {
      title: 'Frontend Development',
      description: '고성능 UI와 최적화된 사용자 경험을 위한 인터페이스 구축',
      icon: <Code2 size={20} style={{ color: '#7b87e8' }} />,
      iconBg: 'rgba(94,106,210,0.15)',
      iconBorder: 'rgba(94,106,210,0.25)',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Zustand'],
    },
    {
      title: 'GIS & Spatial Engine',
      description: '대규모 공간 데이터 렌더링 및 3D 지도 시각화 분석',
      icon: <Globe2 size={20} style={{ color: '#4ade80' }} />,
      iconBg: 'rgba(74,222,128,0.10)',
      iconBorder: 'rgba(74,222,128,0.20)',
      skills: ['CesiumJS', 'WebGL', 'PostGIS', 'GeoServer', 'Leaflet'],
    },
    {
      title: 'Automation & Backend',
      description: '업무 효율 개선을 위한 데이터 파이프라인 및 스크립트 설계',
      icon: <Cpu size={20} style={{ color: '#c084fc' }} />,
      iconBg: 'rgba(192,132,252,0.10)',
      iconBorder: 'rgba(192,132,252,0.20)',
      skills: ['Python (Pandas)', 'OpenCV', 'Node.js', 'Selenium', 'SQL'],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24">
      <div style={{ marginBottom: 40 }}>
        <span className="ln-section-label" style={{ marginBottom: 12, display: 'inline-flex' }}>
          Technical Expertise
        </span>
        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 30px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: 'var(--ln-text)',
            marginTop: 12,
            marginBottom: 8,
          }}
        >
          Full-Stack from Geospatial to Automation
        </h2>
        <p style={{ fontSize: 14, color: 'var(--ln-sub)', lineHeight: 1.6 }}>
          다양한 기술 스택을 활용하여 복합적인 문제에 대한 최적의 솔루션을 제공합니다.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="ln-card"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            style={{
              padding: 24,
              opacity: hoveredIdx !== null && hoveredIdx !== idx ? 0.4 : 1,
              transition: 'opacity 200ms ease',
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: cat.iconBg,
                border: `1px solid ${cat.iconBorder}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
              }}
            >
              {cat.icon}
            </div>

            <h3
              style={{
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: 'var(--ln-text)',
                marginBottom: 6,
              }}
            >
              {cat.title}
            </h3>
            <p style={{ fontSize: 13, color: 'var(--ln-sub)', lineHeight: 1.6, marginBottom: 16 }}>
              {cat.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {cat.skills.map((skill, j) => (
                <span key={j} className="ln-tag">
                  <CheckCircle2 size={10} style={{ color: 'var(--ln-accent)' }} />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
