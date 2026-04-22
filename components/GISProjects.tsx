import React from 'react';
import { Layers } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { GIS_PROJECTS } from '../constants';

const GISProjects: React.FC = () => {
  return (
    <section id="gis-projects" className="scroll-mt-24">
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
          <Layers size={12} />
          GIS Projects
        </span>
        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 30px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: 'var(--ln-text)',
          }}
        >
          Professional Projects
          <span style={{ fontSize: 16, fontWeight: 400, color: 'var(--ln-muted)', marginLeft: 12 }}>
            GIS / Spatial
          </span>
        </h2>
      </div>
      <div>
        {GIS_PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default GISProjects;
