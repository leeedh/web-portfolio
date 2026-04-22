import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Terminal, RotateCcw } from 'lucide-react';

const terminalLines = [
  '$ python automation_pipeline.py --mode=monitor',
  '> Initializing data sync monitoring...',
  '> Processing 229 local government files...',
  '> CSV sanitization: 229 files processed',
  '> XML recovery pipeline: Active',
  '> Manual work reduced by 95%',
  '✓ All automations running',
];

export function AutomationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [shouldRun, setShouldRun] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  // 처음 뷰포트 진입 시 실행 시작
  useEffect(() => {
    if (isInView && !shouldRun) setShouldRun(true);
  }, [isInView]);

  // 타이핑 애니메이션 — shouldRun이 true일 때마다 실행
  useEffect(() => {
    if (!shouldRun) return;
    if (currentLineIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, terminalLines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, 380);
      return () => clearTimeout(timer);
    }
  }, [shouldRun, currentLineIndex]);

  const isFinished = displayedLines.length === terminalLines.length;

  const handleRerun = () => {
    setDisplayedLines([]);
    setCurrentLineIndex(0);
    // shouldRun은 이미 true이므로 currentLineIndex 리셋만으로 effect 재실행됨
  };

  const getLineStyle = (line: string): React.CSSProperties => {
    if (line.startsWith('$')) return { color: 'var(--ln-accent)' };
    if (line.startsWith('✓')) return { color: '#4ade80' };
    if (line.startsWith('>')) return { color: 'var(--ln-sub)' };
    return { color: 'var(--ln-text)' };
  };

  return (
    <section ref={ref}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {/* Terminal window */}
        <div
          style={{
            background: 'var(--ln-surface)',
            border: '1px solid var(--ln-border)',
            borderRadius: 'var(--ln-radius-xl)',
            overflow: 'hidden',
          }}
        >
          {/* Title bar */}
          <div
            style={{
              background: 'var(--ln-bg)',
              borderBottom: '1px solid var(--ln-border)',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div style={{ display: 'flex', gap: 6 }}>
              {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
                <div
                  key={c}
                  style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }}
                />
              ))}
            </div>
            <div style={{ marginLeft: 8, display: 'flex', alignItems: 'center', gap: 6, flex: 1 }}>
              <Terminal size={12} style={{ color: 'var(--ln-muted)' }} />
              <span style={{ fontSize: 12, fontFamily: 'monospace', color: 'var(--ln-muted)' }}>
                automation-pipeline.sh
              </span>
            </div>

            {/* Re-run 버튼 — 애니메이션 완료 후 fade-in */}
            <button
              onClick={handleRerun}
              aria-label="터미널 애니메이션 재실행"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                fontSize: 11,
                fontFamily: 'monospace',
                color: 'var(--ln-muted)',
                background: 'none',
                border: '1px solid var(--ln-border)',
                borderRadius: 4,
                padding: '3px 8px',
                cursor: 'pointer',
                transition: 'color 150ms, border-color 150ms, opacity 300ms',
                opacity: isFinished ? 1 : 0,
                pointerEvents: isFinished ? 'auto' : 'none',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--ln-text)';
                el.style.borderColor = 'var(--ln-border-md)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--ln-muted)';
                el.style.borderColor = 'var(--ln-border)';
              }}
            >
              <RotateCcw size={10} />
              re-run
            </button>
          </div>

          {/* Terminal body */}
          <div
            style={{
              padding: 24,
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 13,
              lineHeight: 1.7,
              minHeight: 280,
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {displayedLines.map((line, index) => (
              <div
                key={`${index}-${line}`}
                style={{
                  ...getLineStyle(line),
                  animation: 'ln-fade-up 0.25s cubic-bezier(0.25,0.46,0.45,0.94) both',
                }}
              >
                {line}
              </div>
            ))}
            {currentLineIndex < terminalLines.length && (
              <span
                className="animate-ln-cursor"
                style={{
                  display: 'inline-block',
                  width: 8,
                  height: 15,
                  background: 'var(--ln-accent)',
                  marginLeft: 2,
                  verticalAlign: 'middle',
                }}
              />
            )}
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4"
          style={{ gap: 8, marginTop: 12 }}
        >
          {[
            { label: 'Manual Work Reduced', value: '95%' },
            { label: 'Data Accuracy', value: '95%' },
            { label: 'Time Saved', value: '30hrs/wk' },
            { label: 'Gov. Bodies Covered', value: '229' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="ln-card"
              style={{
                padding: '16px',
                textAlign: 'center',
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 400ms ${200 + index * 80}ms, transform 400ms ${200 + index * 80}ms`,
              }}
            >
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  color: 'var(--ln-accent)',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 11, color: 'var(--ln-muted)', marginTop: 4, lineHeight: 1.4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
