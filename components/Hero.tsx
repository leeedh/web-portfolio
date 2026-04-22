import React from 'react';
import { HERO_CONTENT } from '../constants';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useMotionValue, useSpring, motion, useReducedMotion } from 'framer-motion';

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-200);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - 300);
    mouseY.set(e.clientY - rect.top - 300);
  };

  return (
    <div
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--ln-bg)' }}
      onMouseMove={handleMouseMove}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 ln-dot-bg pointer-events-none" style={{ opacity: 0.4 }} />

      {/* Accent glow — follows cursor */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          x: springX,
          y: springY,
          width: 600,
          height: 600,
          background: 'radial-gradient(circle at center, rgba(94,106,210,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ height: 200, background: 'linear-gradient(to bottom, transparent, var(--ln-bg))' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full py-32 md:py-0">
        {/* Badge */}
        <div className="animate-ln-fade-up" style={{ marginBottom: 32 }}>
          <span className="ln-section-label">GIS & Web Performance Engineering</span>
        </div>

        {/* Headline */}
        <div className="animate-ln-fade-up delay-1">
          <h1
            style={{
              fontSize: 'clamp(36px, 6vw, 68px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.08,
              color: 'var(--ln-text)',
              marginBottom: 16,
            }}
          >
            <span
              style={{
                display: 'block',
                color: 'var(--ln-sub)',
                fontSize: 'clamp(20px, 3vw, 36px)',
                fontWeight: 500,
                letterSpacing: '-0.03em',
                marginBottom: 8,
              }}
            >
              이동훈,
            </span>
            <span className="ln-gradient-text">GIS & Web Engineer</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              fontWeight: 500,
              color: 'var(--ln-sub)',
              letterSpacing: '-0.02em',
              lineHeight: 1.4,
              marginBottom: 8,
            }}
          >
            직관과 효율을 설계합니다.
          </p>
          <p
            style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)',
              fontWeight: 400,
              color: 'var(--ln-muted)',
              letterSpacing: '-0.01em',
              lineHeight: 1.5,
            }}
          >
            {HERO_CONTENT.subtitle}
          </p>
        </div>

        {/* Description */}
        <p
          className="animate-ln-fade-up delay-2"
          style={{
            fontSize: 15,
            color: 'var(--ln-sub)',
            lineHeight: 1.7,
            maxWidth: 560,
            marginTop: 24,
            marginBottom: 40,
          }}
        >
          {HERO_CONTENT.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 animate-ln-fade-up delay-3">
          <a href="#gis-projects" className="ln-btn-primary">
            View Case Studies
            <ArrowRight size={15} />
          </a>
          <a href="#contact" className="ln-btn-ghost">
            Contact Me
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        className="absolute animate-bounce"
        style={{ bottom: 32, left: '50%', transform: 'translateX(-50%)', color: 'var(--ln-muted)' }}
      >
        <ChevronDown size={20} />
      </div>
    </div>
  );
};

export default Hero;
