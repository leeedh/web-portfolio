import React from 'react';
import { User, Award, Target, Zap } from 'lucide-react';

const AboutMe: React.FC = () => {
  const stats = [
    { label: "Experience", value: "4+ Years", icon: <Award className="text-accent" size={18} /> },
    { label: "Projects", value: "15+", icon: <Target className="text-accent" size={18} /> },
    { label: "Efficiency Boost", value: "1200%.", icon: <Zap className="text-accent" size={18} /> },
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
              Engineering Philosophy
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-4xl font-bold text-textMain leading-tight">
                <span className="text-accent">게으르기 위해</span>,<br /> 누구보다 <span className="text-accent">부지런히</span> 코딩합니다.
              </h2>
              <p className="text-textMuted text-lg leading-relaxed">
                "위대한 프로그래머의 3대 미덕은 나태, 성급함, 오만이다." 펄(Perl)의 창시자 래리 월의 이 말을 가장 좋아합니다. 저는 단순 반복 작업이 시간을 뺏는 것을 견디지 못합니다. 30분이 걸리는 수작업을 3초 만에 끝내기 위해서라면, 밤을 새워 자동화 스크립트를 짜는 것을 마다하지 않는 '부지런한 게으름뱅이'입니다.
              </p>
              <p className="text-textMuted text-lg leading-relaxed">
                저의 효율 추구는 단순히 코드를 넘어 서비스의 품질로 확장됩니다. 사용자가 마주하는 화면 뒤편의 복잡한 문제들을 기술적으로 해결하고, 가장 직관적인 결과물만을 화면에 그려내는 것에 집중합니다. 극한의 데이터 환경에서 단련된 최적화 감각으로, 어떠한 웹 서비스에서도 안정적이고 민첩한 퍼포먼스를 만들어냅니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-slate-800/40 border border-slate-700/50 p-5 rounded-xl flex flex-row gap-3 items-center hover:border-accent/30 transition-colors">
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

