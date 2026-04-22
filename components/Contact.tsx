import React from 'react';
import { Mail, Github, Linkedin, FileText, Download, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-24">
      <div
        style={{
          background: 'var(--ln-surface)',
          border: '1px solid var(--ln-border)',
          borderRadius: 'var(--ln-radius-xl)',
          padding: 'clamp(32px, 5vw, 64px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 320,
            height: 320,
            background: 'radial-gradient(circle, rgba(94,106,210,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="grid md:grid-cols-2 gap-12 items-start" style={{ position: 'relative', zIndex: 1 }}>
          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <span className="ln-section-label" style={{ marginBottom: 12, display: 'inline-flex' }}>
                Contact
              </span>
              <h2
                style={{
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  color: 'var(--ln-text)',
                  marginTop: 12,
                  lineHeight: 1.15,
                }}
              >
                Get In{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7b87e8 0%, #5e6ad2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Touch
                </span>
              </h2>
              <p style={{ fontSize: 14, color: 'var(--ln-sub)', lineHeight: 1.75, maxWidth: 380, marginTop: 12 }}>
                협업 제안, 기술적인 교류, 혹은 저에 대해 궁금한 점이 있다면 언제든 환영합니다.
              </p>
            </div>

            {/* Contact items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: <Mail size={16} />, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                { icon: <MapPin size={16} />, label: 'Location', value: CONTACT_INFO.location, href: undefined },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 9,
                      background: 'var(--ln-accent-dim)',
                      border: '1px solid rgba(94,106,210,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--ln-accent)',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: 'var(--ln-muted)',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: 'var(--ln-text)',
                          textDecoration: 'none',
                          transition: 'color 150ms',
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--ln-accent)')}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--ln-text)')}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--ln-text)' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { icon: <Github size={18} />, href: CONTACT_INFO.github, label: 'GitHub' },
                { icon: <Linkedin size={18} />, href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--ln-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--ln-sub)',
                    transition: 'all 150ms',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'var(--ln-border-md)';
                    el.style.color = 'var(--ln-text)';
                    el.style.background = 'rgba(255,255,255,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'var(--ln-border)';
                    el.style.color = 'var(--ln-sub)';
                    el.style.background = 'rgba(255,255,255,0.03)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Resume card */}
          <div
            style={{
              background: 'var(--ln-bg)',
              border: '1px solid var(--ln-border)',
              borderRadius: 'var(--ln-radius-xl)',
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: 20,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: 'var(--ln-accent-dim)',
                border: '1px solid rgba(94,106,210,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FileText size={28} style={{ color: 'var(--ln-accent)' }} />
            </div>
            <div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--ln-text)',
                }}
              >
                Full Resume
              </h3>
              <p style={{ fontSize: 13, color: 'var(--ln-sub)', marginTop: 6, lineHeight: 1.6 }}>
                경력 사항과 상세 기술 역량이 포함된 PDF 이력서를 확인해 보세요.
              </p>
            </div>
            <a
              href={CONTACT_INFO.resumeUrl}
              className="ln-btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '12px 24px' }}
            >
              Download CV <Download size={15} />
            </a>
            <p
              style={{
                fontSize: 10,
                color: 'var(--ln-muted)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Updated Oct 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
