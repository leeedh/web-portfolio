import React from 'react';
import { Project } from '../types';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, reverse = false }) => {
  return (
    <div className={`flex flex-col md:flex-row gap-8 items-start mb-24 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      {/* Visual Side */}
      <div className="w-full md:w-1/2 relative group">
        <div className="absolute inset-0 bg-accent/20 rounded-xl transform rotate-3 transition-transform group-hover:rotate-1"></div>
        <div className="relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-2xl h-64 md:h-80 w-full flex items-center justify-center">
            {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            ) : (
                <div className="text-slate-600 font-mono text-lg">No Image Available</div>
            )}
            
            {/* Tech Stack Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-900 to-transparent">
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs font-semibold bg-slate-900/80 text-accent border border-accent/30 rounded-full backdrop-blur-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-3xl font-bold text-white">{project.title}</h3>
        <p className="text-lg text-accent font-medium">{project.subtitle}</p>
        <p className="text-slate-400 leading-relaxed">
          {project.description}
        </p>

        <div className="pt-4 space-y-3">
          {project.points.map((point, idx) => {
             const [label, content] = point.split(': ');
             return (
              <div key={idx} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-white">{label}:</span> {content}
                </p>
              </div>
             );
          })}
        </div>

        {project.link && (
            <a href={project.link} className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors pt-4 font-semibold">
                View Project <ExternalLink size={16} />
            </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;