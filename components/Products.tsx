import React from 'react';
import { Rocket } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { PRODUCT_PROJECTS } from '../constants';

const Products: React.FC = () => {
  return (
    <section id="products" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-16 border-b border-slate-700 pb-4">
        <Rocket className="text-purple-500 w-8 h-8" />
        <h2 className="text-3xl md:text-4xl font-bold">Real-world Products <span className="text-textMuted text-2xl font-normal ml-2">(Problem Solving)</span></h2>
      </div>
      <div className="space-y-12">
        {PRODUCT_PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} reverse={index % 2 === 0} />
        ))}
      </div>
    </section>
  );
};

export default Products;

