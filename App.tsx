import React from 'react';
import Navbar from './components/Navbar';
import SectionDotNav from './components/SectionDotNav';
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
    <div className="bg-ln-bg min-h-screen text-ln-text">
      <Navbar />
      <SectionDotNav />
      <Hero />

      <main className="max-w-5xl mx-auto px-6 py-24 space-y-36">
        <AboutMe />
        <GISProjects />
        <Products />
        <Skills />
        <Automation />
        <Contact />

        <footer className="text-center py-12 text-ln-muted" style={{ borderTop: '1px solid var(--ln-border)' }}>
          <p className="text-sm">© {new Date().getFullYear()} LDH.dev — GIS & Web Engineer Portfolio</p>
          <p className="text-xs mt-1.5">Built with React, Tailwind & Gemini API</p>
        </footer>
      </main>

      <GeminiChat />
    </div>
  );
};

export default App;
