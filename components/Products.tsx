import React from 'react';
import { Rocket } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { PRODUCT_PROJECTS } from '../constants';

const Products: React.FC = () => {
  return (
    <section id="products" className="scroll-mt-24">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          marginBottom: 48,
          paddingBottom: 24,
          borderBottom: '1px solid var(--ln-border)',
        }}
      >
        <span className="ln-section-label" style={{ alignSelf: 'flex-start' }}>
          <Rocket size={12} />
          Products
        </span>
        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 30px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: 'var(--ln-text)',
          }}
        >
          Real-world Products
          <span style={{ fontSize: 16, fontWeight: 400, color: 'var(--ln-muted)', marginLeft: 12 }}>
            Problem Solving
          </span>
        </h2>
      </div>
      <div>
        {PRODUCT_PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} reverse={index % 2 === 0} />
        ))}
      </div>
    </section>
  );
};

export default Products;
