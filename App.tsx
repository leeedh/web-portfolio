import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Skills from './components/Skills';
import GISProjects from './components/GISProjects';
import Automation from './components/Automation';
import Products from './components/Products';
import GeminiChat from './components/GeminiChat';

const App: React.FC = () => {
  return (
    <div className="bg-primary min-h-screen text-textMain selection:bg-accent selection:text-slate-900">
      <Navbar />
      <Hero />

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        {/* About Me Section */}
        <AboutMe />

        {/* Skills Section */}
        <Skills />

        {/* GIS Projects Section */}
        <GISProjects />

        {/* Automation Section */}
        <Automation />

        {/* Products Section */}
        <Products />

        {/* Contact Section */}
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