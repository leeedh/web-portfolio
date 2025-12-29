import React from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import AutomationCard from './components/AutomationCard';
import { AutomationSection } from './components/AutomationSection';
import GeminiChat from './components/GeminiChat';
import { GIS_PROJECTS, AUTOMATION_PROJECTS, PRODUCT_PROJECTS } from './constants';
import { Layers, Workflow, Rocket } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="bg-primary min-h-screen text-textMain selection:bg-accent selection:text-slate-900">
      <Hero />

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        
        {/* About Me Section */}
        <AboutMe />

        {/* Skills Section */}
        <Skills />

        {/* Section 1: GIS Projects */}
        <section id="gis-projects">
          <div className="flex items-center gap-4 mb-16 border-b border-slate-700 pb-4">
            <Layers className="text-accent w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold">Professional Projects <span className="text-textMuted text-2xl font-normal ml-2">(GIS)</span></h2>
          </div>
          <div className="space-y-12">
            {GIS_PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} reverse={index % 2 !== 0} />
            ))}
          </div>
        </section>

        {/* Section 2: Automation */}
        <section id="automation">
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

        {/* Section 3: Products */}
        <section id="products">
          <div className="flex items-center gap-4 mb-16 border-b border-slate-700 pb-4">
            <Rocket className="text-purple-500 w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold">Real-world Products <span className="text-textMuted text-2xl font-normal ml-2">(Problem Solving)</span></h2>
          </div>
          <div className="space-y-12">
            {PRODUCT_PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} reverse={index % 2 === 0} /> // Alternate reverse logic for visual variety
            ))}
          </div>
        </section>

        {/* Section 4: Contact */}
        <Contact />

        {/* Footer */}
        <footer className="text-center py-12 border-t border-slate-800 text-slate-500">
          <p>© {new Date().getFullYear()} GIS Developer Portfolio. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React, Tailwind & Gemini API</p>
        </footer>
      </main>

      <GeminiChat />
    </div>
  );
};

export default App;