
import React from 'react';
import { Code2, Globe2, Cpu, CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Frontend Development",
      description: "고성능 UI와 최적화된 사용자 경험을 위한 인터페이스 구축",
      icon: <Code2 className="text-blue-400" size={28} />,
      color: "border-blue-500/20",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Zustand"]
    },
    {
      title: "GIS & Spatial Engine",
      description: "대규모 공간 데이터 렌더링 및 3D 지도 시각화 분석",
      icon: <Globe2 className="text-emerald-400" size={28} />,
      color: "border-emerald-500/20",
      skills: ["CesiumJS", "WebGL", "PostGIS", "GeoServer", "Leaflet"]
    },
    {
      title: "Automation & Backend",
      description: "업무 효율 개선을 위한 데이터 파이프라인 및 스크립트 설계",
      icon: <Cpu className="text-purple-400" size={28} />,
      color: "border-purple-500/20",
      skills: ["Python (Pandas)", "OpenCV", "Node.js", "Selenium", "SQL"]
    }
  ];

  return (
    <section id="skills" className="py-12">
      <div className="flex flex-col gap-4 mb-12">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <span className="w-8 h-[2px] bg-accent"></span>
          Technical Expertise
        </h2>
        <p className="text-slate-400">다양한 기술 스택을 활용하여 복합적인 문제에 대한 최적의 솔루션을 제공합니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div key={idx} className={`bg-slate-800/30 border ${cat.color} rounded-2xl p-8 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 group`}>
            <div className="mb-6 inline-block p-4 bg-slate-900 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{cat.title}</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {cat.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <div key={j} className="flex items-center gap-1.5 px-3 py-1 bg-slate-900/80 border border-slate-700 rounded-full text-xs text-slate-300 group-hover:border-slate-500 transition-colors">
                  <CheckCircle2 size={12} className="text-accent" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
