import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Award, Target, Zap } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

interface StatItem {
  label: string;
  rawValue: number;
  suffix: string;
  postfix?: string;
  duration?: number;
  icon: React.ReactNode;
}

const StatCard: React.FC<{ stat: StatItem; isInView: boolean }> = ({ stat, isInView }) => {
  const count = useCountUp(stat.rawValue, isInView, stat.duration ?? 1600);
  return (
    <div
      className="ln-card"
      style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: 8 }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          background: 'var(--ln-accent-dim)',
          border: '1px solid rgba(94,106,210,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {stat.icon}
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
          {stat.label}
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: 'var(--ln-text)',
            marginTop: 2,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {count}
          {stat.suffix}
          {stat.postfix && (
            <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--ln-sub)', marginLeft: 2 }}>
              {stat.postfix}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const AboutMe: React.FC = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: '-80px' });

  const stats: StatItem[] = [
    {
      label: 'Experience',
      rawValue: 4,
      suffix: '+',
      postfix: ' Yrs',
      duration: 1200,
      icon: <Award size={16} style={{ color: 'var(--ln-accent)' }} />,
    },
    {
      label: 'Projects',
      rawValue: 15,
      suffix: '+',
      duration: 1400,
      icon: <Target size={16} style={{ color: 'var(--ln-accent)' }} />,
    },
    {
      label: 'Efficiency Boost',
      rawValue: 1200,
      suffix: '%',
      duration: 2000,
      icon: <Zap size={16} style={{ color: 'var(--ln-accent)' }} />,
    },
  ];

  return (
    <section id="about" className="scroll-mt-24">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        {/* Profile Image */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-start">
          <div
            style={{
              width: 260,
              height: 340,
              borderRadius: 'var(--ln-radius-xl)',
              overflow: 'hidden',
              border: '1px solid var(--ln-border)',
              position: 'relative',
            }}
          >
            <img
              src="/image/ldh_.png"
              alt="이동훈 프로필"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(17,17,19,0.8) 0%, transparent 50%)',
              }}
            />
            <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--ln-text)' }}>이동훈</p>
              <p style={{ fontSize: 12, color: 'var(--ln-accent)', marginTop: 2 }}>GIS & Web Engineer</p>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-7/12" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span className="ln-section-label">Engineering Philosophy</span>

          <div>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.5vw, 34px)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 1.2,
                color: 'var(--ln-text)',
                marginBottom: 16,
              }}
            >
              <span style={{ color: 'var(--ln-accent)' }}>게으르기 위해</span>,{' '}
              <br />
              누구보다{' '}
              <span style={{ color: 'var(--ln-accent)' }}>부지런히</span>{' '}
              코딩합니다.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p style={{ fontSize: 14, color: 'var(--ln-sub)', lineHeight: 1.75 }}>
                "위대한 프로그래머의 3대 미덕은 나태, 성급함, 오만이다." 펄(Perl)의 창시자 래리 월의 이 말을
                가장 좋아합니다. 저는 단순 반복 작업이 시간을 뺏는 것을 견디지 못합니다.
              </p>
              <p style={{ fontSize: 14, color: 'var(--ln-sub)', lineHeight: 1.75 }}>
                저의 효율 추구는 단순히 코드를 넘어 서비스의 품질로 확장됩니다. 극한의 데이터 환경에서
                단련된 최적화 감각으로, 어떠한 웹 서비스에서도 안정적이고 민첩한 퍼포먼스를 만들어냅니다.
              </p>
            </div>
          </div>

          {/* Stats — countup on scroll-into-view */}
          <div
            ref={statsRef}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}
          >
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
