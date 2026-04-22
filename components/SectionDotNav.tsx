import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'gis-projects', label: 'Projects' },
  { id: 'products', label: 'Products' },
  { id: 'skills', label: 'Skills' },
  { id: 'automation', label: 'Automation' },
  { id: 'contact', label: 'Contact' },
];

const SectionDotNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="hidden md:flex"
      style={{
        position: 'fixed',
        right: 24,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 50,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
      }}
    >
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id;
        const isHovered = hoveredId === id;
        return (
          <div
            key={id}
            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Tooltip label */}
            <div
              style={{
                position: 'absolute',
                right: 20,
                whiteSpace: 'nowrap',
                fontSize: 11,
                fontWeight: 500,
                color: 'var(--ln-text)',
                background: 'var(--ln-surface)',
                border: '1px solid var(--ln-border)',
                borderRadius: 4,
                padding: '3px 8px',
                pointerEvents: 'none',
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translateX(0)' : 'translateX(4px)',
                transition: 'opacity 150ms ease, transform 150ms ease',
              }}
            >
              {label}
            </div>

            {/* Dot */}
            <button
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              aria-label={`${label} 섹션으로 이동`}
              style={{
                width: isActive ? 10 : 6,
                height: isActive ? 10 : 6,
                borderRadius: '50%',
                background: isActive ? 'var(--ln-accent)' : isHovered ? 'var(--ln-sub)' : 'var(--ln-border-md)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'width 200ms ease, height 200ms ease, background 200ms ease',
                display: 'block',
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SectionDotNav;
