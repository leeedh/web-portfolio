import React from 'react';
import { HERO_CONTENT } from '../constants';
import { Map, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-primary overflow-hidden py-12 md:py-0">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-accent blur-[60px] md:blur-[100px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-600 blur-[80px] md:blur-[120px] rounded-full mix-blend-screen"></div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full bg-gradient-to-l from-primary to-transparent opacity-80" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/30 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full mb-6 md:mb-8">
            <Map className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
            <span className="text-xs md:text-sm font-medium text-accent">GIS & Spatial Systems Engineer</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-textMain tracking-tight mb-2 md:mb-3 leading-[1.1]">
            <span className="block">
              <span className="text-textMuted text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium" style={{ color: 'rgba(126, 196, 187, 1)' }}>직관과 효율을 설계하는 개발자</span>
              <br className="hidden sm:block"/>
              <span className="gradient-text">이동훈입니다.</span>
            </span>
            <span className="text-textMuted text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-2 md:mt-3">{HERO_CONTENT.subtitle}</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-textMuted mb-8 md:mb-12 max-w-2xl leading-relaxed">
            {HERO_CONTENT.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a 
              href="#gis-projects" 
              className="inline-flex justify-center items-center px-6 py-3 md:px-8 md:py-4 bg-accent text-slate-900 text-sm md:text-base font-medium rounded-lg hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              View Case Studies
            </a>
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center px-6 py-3 md:px-8 md:py-4 bg-slate-800 text-textMain border border-slate-700 text-sm md:text-base font-medium rounded-lg hover:bg-slate-700 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-textMuted">
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
      </div>
    </div>
  );
};

export default Hero;