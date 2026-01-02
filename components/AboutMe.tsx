import React from 'react';
import { User, Award, Target, Zap } from 'lucide-react';

const AboutMe: React.FC = () => {
  const stats = [
    { label: "Experience", value: "5+ Years", icon: <Award className="text-accent" size={18} /> },
    { label: "Projects", value: "15+ Delivered", icon: <Target className="text-accent" size={18} /> },
    { label: "Efficiency Boost", value: "1200% Avg.", icon: <Zap className="text-accent" size={18} /> },
  ];

  return (
    <section id="about" className="scroll-mt-24 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Profile Image Area */}
          <div className="relative w-full md:w-2/5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl group-hover:bg-accent/30 transition-all duration-500"></div>
              <div className="relative w-64 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-2xl border border-slate-700 shadow-2xl">
                <img 
                  src="/image/ldh_.png" 
                  alt="Candidate Profile" 
                  className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-bold text-xl">이동훈</p>
                  <p className="text-accent text-sm">GIS & Web Engineer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Area */}
          <div className="w-full md:w-3/5 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest">
              <User size={14} />
              Who I Am
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-textMain leading-tight">
                데이터의 <span className="text-accent">공간적 가치</span>를 <br />
                코드로 실현하는 개발자입니다.
              </h2>
              <p className="text-textMuted text-lg leading-relaxed">
                복잡하게 얽힌 공간 정보와 대규모 데이터를 다루는 것에 익숙합니다. 
                단순한 시각화를 넘어, 사용자가 데이터를 통해 실질적인 인사이트를 얻을 수 있도록 
                엔지니어링적 최적화와 직관적인 UX를 설계하는 데 집중합니다.
              </p>
              <p className="text-textMuted text-lg leading-relaxed">
                3D 디지털 트윈부터 업무 프로세스 자동화 파이프라인까지, 
                문제가 있는 곳에 기술적 해결책을 제시하며 비즈니스 효율을 극대화하는 것이 저의 핵심 역량입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-slate-800/40 border border-slate-700/50 p-5 rounded-xl flex flex-col gap-3 hover:border-accent/30 transition-colors">
                  <div className="p-2 w-fit bg-slate-900 rounded-lg shadow-inner">{stat.icon}</div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">{stat.label}</div>
                    <div className="text-textMain font-bold text-xl">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

