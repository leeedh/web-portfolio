import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'gis-projects' },
    { name: 'Products', id: 'products' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        background: isScrolled ? 'rgba(17,17,19,0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        padding: isScrolled ? '12px 0' : '20px 0',
        transition: 'all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <button onClick={scrollToTop} className="flex items-center gap-2 group" aria-label="홈으로 이동">
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 7,
              background: 'var(--ln-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 13,
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.03em',
              transition: 'opacity 150ms',
            }}
            className="group-hover:opacity-80"
          >
            L
          </div>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ln-text)', letterSpacing: '-0.02em' }}>
            LDH<span style={{ color: 'var(--ln-muted)' }}>.dev</span>
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="ln-nav-link"
                data-active={isActive ? 'true' : 'false'}
              >
                {link.name}
              </a>
            );
          })}
          <div style={{ width: 1, height: 16, background: 'var(--ln-border)', margin: '0 8px' }} />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="ln-btn-primary"
            style={{ padding: '7px 16px', fontSize: 13 }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          style={{ color: 'var(--ln-sub)', padding: 4, position: 'relative', zIndex: 101, background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(17,17,19,0.98)',
          backdropFilter: 'blur(20px)',
          zIndex: 90,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleNavClick(e, link.id)}
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: activeSection === link.id ? 'var(--ln-text)' : 'var(--ln-sub)',
              textDecoration: 'none',
              padding: '12px 24px',
            }}
          >
            {link.name}
          </a>
        ))}
        <div style={{ marginTop: 24 }}>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="ln-btn-primary"
            style={{ fontSize: 15, padding: '12px 32px' }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
