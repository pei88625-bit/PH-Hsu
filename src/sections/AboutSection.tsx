// ─────────────────────────────────────────────
// sections/AboutSection.tsx
// ─────────────────────────────────────────────
import { useState } from 'react';
import { useLang } from '../LangContext';
import { SKILLS, CERTIFICATES, ABOUT_CONTENT, type PublicationItem } from '../data';

import ijss24tImage from '../assets/IJSS24T.png';
import iatImage from '../assets/IAT.png';
import rqdImage from '../assets/RQD.png';
import cImage from '../assets/C.png';

const PublicationVisual = ({ type, lang }: { type: PublicationItem['visualType']; lang: 'zh' | 'en' }) => {
  const isZh = lang === 'zh';

  let imgSrc = '';
  let altText = '';
  let caption = '';

  switch (type) {
    case 'supply-chain':
      imgSrc = ijss24tImage;
      altText = 'Dual-Channel Green Supply Chain Model';
      caption = isZh ? '雙通路綠色供應鏈模型圖' : 'Dual-Channel Green Supply Chain Model';
      break;
    case 'remanufacturing':
      imgSrc = iatImage;
      altText = 'Remanufacturing Circular Model';
      caption = isZh ? '再製造循環模型圖' : 'Remanufacturing Circular Model';
      break;
    case 'rework':
      imgSrc = rqdImage;
      altText = 'Mfg Quality & Rework Flow';
      caption = isZh ? '品質檢驗與返工流程圖' : 'Mfg Quality & Rework Flow';
      break;
    case 'green-investment':
      imgSrc = cImage;
      altText = 'Eco-Equipment Investment Model';
      caption = isZh ? '環保設備投資與減排決策模型圖' : 'Eco-Equipment Investment Model';
      break;
    default:
      return null;
  }

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center gap-3">
      <div className="text-center font-bold text-xs uppercase tracking-widest text-brand-500 mb-1">
        {caption}
      </div>
      <div className="w-full bg-white border border-brand-100/80 rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow group overflow-hidden flex items-center justify-center">
        <img
          src={imgSrc}
          alt={altText}
          className="w-full h-auto max-h-[240px] md:max-h-[380px] object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export const AboutSection = () => {
  const { lang } = useLang();
  const t = ABOUT_CONTENT[lang];
  const [selectedPub, setSelectedPub] = useState<PublicationItem | null>(null);

  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-start">

          {/* Left: Education + Certificates */}
          <div className="space-y-10 reveal-up">
            <div>
              <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase mb-8">{t.edu.eyebrow}</h2>
              <div className="relative pl-8 space-y-12 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-100">
                
                {t.edu.schools.map((school, index) => (
                  <div key={school.name + index} className="relative">
                    <div className={`absolute -left-[37px] top-1.5 w-4 h-4 bg-white border-4 ${index === 0 ? 'border-brand-950' : 'border-brand-200'} rounded-full z-10`}></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-3 mb-1">
                      <h4 className="text-xl md:text-2xl font-bold text-brand-950 leading-snug min-w-0">{school.name}</h4>
                      <span className="text-[10px] md:text-xs font-bold text-brand-500 uppercase tracking-wider whitespace-nowrap flex-shrink-0 mt-1 sm:mt-1.5">{school.period}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <p className="text-sm md:text-brand-600 font-medium">{school.dept}</p>
                      {school.status && (
                        <span className="px-2 py-0.5 bg-brand-100 text-brand-950 rounded text-[10px] font-bold tracking-wide">
                          {school.status}
                        </span>
                      )}
                    </div>
                    
                    {school.thesis && (
                      <div className="p-4 md:p-5 bg-brand-50 rounded-2xl border border-brand-100 hover:shadow-lg transition-shadow mb-3">
                        <p className="text-xs md:text-sm font-bold text-brand-950 flex items-center gap-2 mb-2">
                          <i className="fas fa-file-alt text-brand-400"></i> {t.edu.thesisLabel}
                        </p>
                        <p className="text-xs md:text-sm text-brand-800 italic leading-relaxed">{school.thesis}</p>
                      </div>
                    )}

                    {school.gpa && (
                      <div className="text-[11px] font-bold text-brand-400 uppercase tracking-widest pl-1">
                        {school.gpa}
                      </div>
                    )}
                  </div>
                ))}

              </div>
            </div>

            {/* Certificates */}
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
                    
                    {cert.tags && cert.tags.length > 0 && (
                      <div className="flex flex-col items-start gap-2 pt-3 md:pt-0 md:pl-6 md:border-l border-brand-100 w-full md:w-auto">
                        {cert.tags.map(tag => (
                          <span key={tag} className="px-3 py-1.5 bg-brand-50 border border-brand-200/60 text-brand-950 rounded-xl text-xs font-bold shadow-sm whitespace-nowrap">
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

            {/* Scholarly Journal Paper */}
            <div className="space-y-4">
              {t.paper.eyebrow && <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase">{t.paper.eyebrow}</h2>}
              <h3 className="text-2xl font-bold tracking-tight text-brand-950">{t.paper.title}</h3>
              <div className="space-y-4">
                {t.paper.list.map((item: PublicationItem) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedPub(item)}
                    className="group relative p-6 bg-white border border-brand-100 rounded-3xl hover:border-brand-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex justify-between items-center gap-4"
                  >
                    <div className="space-y-2.5 min-w-0 flex-1">
                      <h4 className="text-base font-bold text-brand-950 leading-snug group-hover:text-brand-600 transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex flex-wrap gap-2 items-center text-xs">
                        <span className="px-2 py-0.5 bg-brand-50 border border-brand-200 text-brand-600 text-[9px] font-bold rounded-md flex-shrink-0">
                          {item.year}
                        </span>
                        <span className="text-brand-500 truncate max-w-[150px] md:max-w-xs">
                          {item.venue}
                        </span>
                        <span className="text-brand-400 italic truncate max-w-[120px] md:max-w-[200px]">
                          {item.authors}
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-50 group-hover:bg-brand-950 group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <i className="fas fa-paper-plane text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conference Block */}
            <div className="space-y-4 pt-2">
              {t.conference.eyebrow && <h2 className="text-xs font-semibold tracking-widest text-brand-500 uppercase">{t.conference.eyebrow}</h2>}
              <h3 className="text-2xl font-bold tracking-tight text-brand-950">{t.conference.title}</h3>
              <div className="space-y-4">
                {t.conference.list.map((item: PublicationItem) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedPub(item)}
                    className="group relative p-6 bg-white border border-brand-100 rounded-3xl hover:border-brand-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex justify-between items-center gap-4"
                  >
                    <div className="space-y-2.5 min-w-0 flex-1">
                      <h4 className="text-base font-bold text-brand-950 leading-snug group-hover:text-brand-600 transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex flex-wrap gap-2 items-center text-xs">
                        <span className="px-2 py-0.5 bg-brand-50 border border-brand-200 text-brand-600 text-[9px] font-bold rounded-md flex-shrink-0">
                          {item.year}
                        </span>
                        <span className="text-brand-500 truncate max-w-[150px] md:max-w-xs">
                          {item.venue}
                        </span>
                        <span className="text-brand-400 italic truncate max-w-[120px] md:max-w-[200px]">
                          {item.authors}
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-50 group-hover:bg-brand-950 group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <i className="fas fa-paper-plane text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Skills */}
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

      {/* ── Modal Window ── */}
      {selectedPub && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-950/40 backdrop-blur-md p-4 md:p-6 overflow-y-auto transition-all animate-fade-in" 
          onClick={() => setSelectedPub(null)}
        >
          <div 
            className="relative w-full max-w-5xl rounded-[2.5rem] md:rounded-[3rem] bg-white border border-brand-100 shadow-2xl overflow-hidden flex flex-col md:flex-row md:h-[80vh] max-h-[90vh] md:max-h-[720px] animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPub(null)}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white border border-brand-100 shadow-sm flex items-center justify-center text-brand-950 hover:bg-brand-50 hover:scale-105 active:scale-95 transition-all"
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>

            {/* Left Panel: Diagram / Architecture Visualization */}
            <div className="w-full md:w-1/2 p-8 md:p-12 bg-brand-50/55 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-brand-100/50 min-h-[320px] md:min-h-0 flex-shrink-0">
              <PublicationVisual type={selectedPub.visualType} lang={lang} />
            </div>

            {/* Right Panel: Abstract & Details */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between gap-6 overflow-y-auto md:max-h-full">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 text-[9px] font-bold tracking-[0.2em] uppercase rounded-full text-brand-500 border border-brand-200">
                  {selectedPub.id.startsWith('paper') 
                    ? (lang === 'zh' ? '期刊論文學術發表' : 'Scholarly Journal Paper')
                    : (lang === 'zh' ? '國際研討會學術發表' : 'International Conference')
                  }
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-brand-950 leading-snug">
                  {selectedPub.title}
                </h4>
                <div className="space-y-1 text-xs text-brand-500">
                  <p><strong>{lang === 'zh' ? '作者：' : 'Authors: '}</strong>{selectedPub.authors}</p>
                  <p><strong>{lang === 'zh' ? '發表平台：' : 'Venue: '}</strong>{selectedPub.venue} ({selectedPub.year})</p>
                </div>
                <div className="w-full h-[1px] bg-brand-100/70 my-2"></div>
                <div className="space-y-2">
                  <h5 className="text-[10px] font-bold text-brand-400 uppercase tracking-widest">
                    {lang === 'zh' ? '論文摘要' : 'Abstract'}
                  </h5>
                  <p className="text-xs md:text-sm text-brand-700 leading-relaxed text-justify break-words">
                    {selectedPub.abstract}
                  </p>
                </div>
              </div>

              {selectedPub.link && (
                <a 
                  href={selectedPub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-950 text-white rounded-full font-bold text-xs shadow-lg hover:shadow-brand-500/20 hover:-translate-y-1 active:scale-95 transition-all self-start"
                >
                  <span>{lang === 'zh' ? '查看文獻連結 (DOI)' : 'View Publication (DOI)'}</span>
                  <i className="fas fa-external-link-alt text-[9px] group-hover:translate-x-0.5 transition-transform"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};