
import React from 'react';
import { Mail, Github, Linkedin, FileText, Send, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="bg-slate-800/20 border border-slate-700/50 rounded-3xl p-8 md:p-16 backdrop-blur-md relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Get In <span className="text-accent">Touch</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-md">
                협업 제안, 기술적인 교류, 혹은 저에 대해 궁금한 점이 있다면 언제든 환영합니다. 
                함께 새로운 가치를 만들어갈 준비가 되어 있습니다.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-700">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg hover:text-accent transition-colors font-semibold">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-700">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-lg font-semibold">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href={CONTACT_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-slate-900 rounded-2xl border border-slate-700 hover:border-accent/50 hover:bg-slate-800 transition-all text-slate-400 hover:text-accent"
              >
                <Github size={24} />
              </a>
              <a 
                href={CONTACT_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-slate-900 rounded-2xl border border-slate-700 hover:border-accent/50 hover:bg-slate-800 transition-all text-slate-400 hover:text-accent"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-8 bg-slate-900/50 border border-slate-700/50 rounded-2xl space-y-6 text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-2">
              <FileText size={40} className="text-accent" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Full Resume</h3>
              <p className="text-slate-400 text-sm">
                경력 사항과 상세 기술 역량이 포함된 <br /> PDF 이력서를 확인해 보세요.
              </p>
            </div>
            <a 
              href={CONTACT_INFO.resumeUrl}
              className="w-full py-4 bg-accent hover:bg-teal-400 text-slate-900 font-bold rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-accent/20"
            >
              Download CV <Send size={18} />
            </a>
            <p className="text-[10px] text-slate-600 uppercase font-bold tracking-[0.2em]">
              Updated Oct 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
