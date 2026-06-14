// ─────────────────────────────────────────────
// sections/AboutSection.tsx
// ─────────────────────────────────────────────
import { useLang } from '../LangContext';
import { SKILLS, CERTIFICATES, ABOUT_CONTENT } from '../data';

export const AboutSection = () => {
  const { lang } = useLang();
  const t = ABOUT_CONTENT[lang];

  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-start">

          {/* Left: Education + Certificates */}
          <div className="space-y-10 reveal-up">
            <div>
              <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase mb-8">{t.edu.eyebrow}</h2>
              <div className="relative pl-8 space-y-12 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-100">
                
                {/* 學校自動循環渲染 */}
                {t.edu.schools.map((school, index) => (
                  <div key={school.name + index} className="relative">
                    <div className={`absolute -left-[37px] top-1.5 w-4 h-4 bg-white border-4 ${index === 0 ? 'border-brand-950' : 'border-brand-200'} rounded-full z-10`}></div>
                    
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h4 className="text-xl md:text-2xl font-bold text-brand-950 leading-snug min-w-0">{school.name}</h4>
                      <span className="text-[10px] md:text-xs font-bold text-brand-500 uppercase tracking-wider whitespace-nowrap flex-shrink-0 mt-1.5">{school.period}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <p className="text-sm md:text-brand-600 font-medium">{school.dept}</p>
                      {/* 強調博士候選人標籤 */}
                      {school.status && (
                        <span className="px-2 py-0.5 bg-brand-100 text-brand-950 rounded text-[10px] font-bold tracking-wide">
                          {school.status}
                        </span>
                      )}
                    </div>
                    
                    {/* 碩士論文區塊 */}
                    {school.thesis && (
                      <div className="p-4 md:p-5 bg-brand-50 rounded-2xl border border-brand-100 hover:shadow-lg transition-shadow mb-3">
                        <p className="text-xs md:text-sm font-bold text-brand-950 flex items-center gap-2 mb-2">
                          <i className="fas fa-file-alt text-brand-400"></i> {t.edu.thesisLabel}
                        </p>
                        <p className="text-xs md:text-sm text-brand-800 italic leading-relaxed">{school.thesis}</p>
                      </div>
                    )}

                    {/* 顯示每間學校各自的成績 (GPA) */}
                    {school.gpa && (
                      <div className="text-[11px] font-bold text-brand-400 uppercase tracking-widest pl-1">
                        {school.gpa}
                      </div>
                    )}
                  </div>
                ))}

              </div>
            </div>

            {/* 證照欄位優化 */}
            <div>
              <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase mb-6">{t.certs.eyebrow}</h2>
              <div className="grid grid-cols-1 gap-4">
                {CERTIFICATES[lang as 'zh' | 'en'].map(cert => (
                  <div key={cert.name} className="p-5 border border-brand-100 rounded-3xl flex flex-col md:flex-row md:items-center gap-4 bg-white hover:shadow-md transition-all">
                    <div className="flex items-center gap-4 min-w-[200px]">
                      <div className="text-brand-950 w-10 h-10 rounded-2xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                        <i className={`fas ${cert.icon} text-lg`}></i>
                      </div>
                      <div>
                        <p className="text-base font-bold text-brand-950">{cert.name}</p>
                        <p className="text-xs text-brand-500 font-medium">{cert.sub}</p>
                      </div>
                    </div>
                    
                    {/* 如果有細項證照標籤，在這裡大字橫排印出來 */}
                    {cert.tags && cert.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2 md:pt-0 md:pl-4 md:border-l border-brand-100">
                        {cert.tags.map(tag => (
                          <span key={tag} className="px-3 py-1.5 bg-brand-50 border border-brand-200/60 text-brand-950 rounded-xl text-xs font-bold shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Academic Archive (Paper + Conference) + Skills */}
          <div className="space-y-10 reveal-up delay-200">

            {/* 上區塊：學術發表 (Journal Paper) - 已移除頂部橫線 */}
            <div className="space-y-4">
              {t.paper.eyebrow && <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase">{t.paper.eyebrow}</h2>}
              <h3 className="text-2xl font-bold tracking-tight text-brand-950">{t.paper.title}</h3>
              <ul className="list-disc pl-5 space-y-3 text-sm md:text-base leading-relaxed text-brand-600 text-justify break-words">
                {t.paper.list.map((item, i) => (
                  <li key={i} className="pl-1 hover:text-brand-950 transition-colors">{item}</li>
                ))}
              </ul>
            </div>

            {/* 下區塊：國際研討會 (Conference) - 已將 border-t 橫線移除 */}
            <div className="space-y-4 pt-2">
              {t.conference.eyebrow && <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase">{t.conference.eyebrow}</h2>}
              <h3 className="text-2xl font-bold tracking-tight text-brand-950">{t.conference.title}</h3>
              <ul className="list-disc pl-5 space-y-4 text-sm md:text-base leading-relaxed text-brand-600 text-justify break-words">
                {t.conference.list.map((item, i) => (
                  <li key={i} className="pl-1 hover:text-brand-950 transition-colors">{item}</li>
                ))}
              </ul>
            </div>

            {/* 核心技能區塊 - 已將 border-t 橫線移除 */}
            <div className="pt-4">
              <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase mb-6">{t.skills.eyebrow}</h2>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-brand-950 text-white rounded-full text-[10px] md:text-xs font-medium cursor-default transition-all duration-300 hover:bg-brand-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:-translate-y-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};