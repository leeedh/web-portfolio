import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, reverse = false }) => {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <div
      className={`flex flex-col md:flex-row gap-10 items-start mb-20 ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <div
          style={{
            borderRadius: 'var(--ln-radius-xl)',
            overflow: 'hidden',
            border: `1px solid ${imgHovered ? 'var(--ln-border-md)' : 'var(--ln-border)'}`,
            background: 'var(--ln-surface)',
            height: 280,
            position: 'relative',
            cursor: project.link ? 'pointer' : 'default',
            transition: 'border-color 200ms var(--ln-ease)',
          }}
          onMouseEnter={() => setImgHovered(true)}
          onMouseLeave={() => setImgHovered(false)}
          onClick={() => project.link && window.open(project.link, '_blank', 'noopener,noreferrer')}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: imgHovered ? 1 : 0.85,
                transform: imgHovered ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 300ms ease',
              }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--ln-muted)',
                fontFamily: 'monospace',
                fontSize: 13,
              }}
            >
              No Image Available
            </div>
          )}

          {/* 태그 오버레이 */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '32px 16px 16px',
              background: 'linear-gradient(to top, rgba(17,17,19,0.95) 0%, transparent 100%)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 6,
              transition: 'opacity 200ms ease',
              opacity: imgHovered ? 0.4 : 1,
            }}
          >
            {project.tags.map((tag) => (
              <span key={tag} className="ln-tag">{tag}</span>
            ))}
          </div>

          {/* "VIEW PROJECT ↗" 중앙 오버레이 — 링크 있을 때만 */}
          {project.link && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: imgHovered ? 1 : 0,
                transition: 'opacity 250ms ease',
                background: 'rgba(17,17,19,0.45)',
                backdropFilter: 'blur(2px)',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--ln-text)',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 8,
                  padding: '8px 16px',
                }}
              >
                VIEW PROJECT
                <ExternalLink size={13} />
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3
          style={{
            fontSize: 'clamp(20px, 2.5vw, 26px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: 'var(--ln-text)',
          }}
        >
          {project.title}
        </h3>
        <p style={{ fontSize: 13, color: 'var(--ln-accent)', fontWeight: 500 }}>{project.subtitle}</p>
        <p style={{ fontSize: 14, color: 'var(--ln-sub)', lineHeight: 1.75 }}>{project.description}</p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            paddingTop: 8,
            borderTop: '1px solid var(--ln-border)',
          }}
        >
          {project.points.map((point, idx) => {
            const [label, content] = point.split(': ');
            return (
              <div key={idx} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <ArrowRight
                  size={13}
                  style={{ color: 'var(--ln-accent)', flexShrink: 0, marginTop: 4 }}
                />
                <p style={{ fontSize: 13, color: 'var(--ln-sub)', lineHeight: 1.65 }}>
                  <span style={{ fontWeight: 600, color: 'var(--ln-text)' }}>{label}:</span>{' '}
                  {content}
                </p>
              </div>
            );
          })}
        </div>

        {project.link && (
          <a
            href={project.link}
            aria-label={`${project.title} 프로젝트 보기`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--ln-sub)',
              textDecoration: 'none',
              paddingTop: 8,
              transition: 'color 150ms',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--ln-text)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--ln-sub)')}
          >
            View Project <ExternalLink size={13} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
