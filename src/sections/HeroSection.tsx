// ─────────────────────────────────────────────
// sections/HeroSection.tsx
// ─────────────────────────────────────────────
import { useLang } from '../LangContext';
import { HERO_CONTENT } from '../data';

export const HeroSection = () => {
  const { lang } = useLang();
  const t = HERO_CONTENT[lang];

  return (
    // 💡 我們把 pt-32 改成 pt-24，並大幅收緊 pb-24 成 pb-6，直接消滅那段無用的空白背景！
    <header id="home" className="relative flex items-center justify-center pt-24 pb-6 overflow-hidden bg-grid">
      <div className="text-center px-6 relative z-10 reveal-up">
        
        {/* 頂部專業領域徽章 */}
        <span className="inline-block px-3 py-1 text-[9px] md:text-[10px] font-bold tracking-widest uppercase border border-brand-200 rounded-full mb-6 md:mb-8">
          {t.badge}
        </span>
        
        {/* 名字大標題 */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
          <span>{t.nameJp}</span>
        </h1>

        {/* 當未來妳取消註解時，標題與介紹才會平滑長出來 */}
        {(t.line1 || t.line2) && (
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 mb-6 leading-none">
            {t.line1 && <span className="text-brand-600 mr-2">{t.line1}</span>}
            {t.line2 && <span className="block text-brand-600 mt-2">{t.line2}</span>}
          </h2>
        )}

        {t.desc && (
          <p className="max-w-xl mx-auto text-base md:text-lg text-brand-600 font-light mb-8 px-4">
            {t.desc}
          </p>
        )}

        {/* 按鈕區塊 */}
        <div className="flex items-center justify-center gap-5 px-4 mt-4">
          
          {/* 💡 智慧型隱藏：當 line1 沒有被取消註解時，這整顆按鈕的外框結構連 1 像素都不會渲染！ */}
          {t.line1 && (
            <a href="#portfolio" className="group relative px-8 md:px-12 py-4 md:py-5 bg-brand-950 text-white rounded-full font-bold text-sm shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-brand-500/40 hover:-translate-y-1.5 active:scale-95 transition-all flex items-center justify-center gap-3 overflow-hidden">
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative z-10">{t.cta1}</span>
              <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform relative z-10"></i>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-700 to-brand-950 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          )}

          {/* 聯絡資訊按鈕 */}
          <a href="#contact" className="group relative px-8 md:px-12 py-4 md:py-5 bg-white/5 border border-brand-200/50 backdrop-blur-md text-brand-950 rounded-full font-bold text-sm hover:bg-white/10 hover:border-brand-950/30 hover:-translate-y-1.5 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-xl">
            <span>{t.cta2}</span>
            <i className="fas fa-paper-plane text-[10px] opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all"></i>
          </a>

        </div>
      </div>
      
      {/* 底部下滑提示線：縮短跟下方的距離 */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-20">
        <div className="w-[1.5px] h-6 bg-gradient-to-b from-brand-400 to-transparent"></div>
      </div>
    </header>
  );
};