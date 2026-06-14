// @ts-nocheck
// ─────────────────────────────────────────────
// sections/ContactSection.tsx
// ─────────────────────────────────────────────
import { useState } from 'react';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (copied) return;
    // 已將舊 Email 改為妳的專案 Email
    navigator.clipboard.writeText('pei88625@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-24 bg-brand-950 relative overflow-hidden dark-grid">
      <div className="container px-6 mx-auto max-w-7xl relative z-10 text-center reveal-up">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-10 md:mb-12 uppercase tracking-tighter">LET'S CONNECT</h2>

        <button
          onClick={copyEmail}
          className={`group px-8 md:px-10 py-4 md:py-5 rounded-full font-bold shadow-2xl transition-all duration-500 text-sm md:text-base ${
            copied
              ? 'bg-green-500 text-white scale-105 shadow-[0_0_30px_rgba(34,197,94,0.4)]'
              : 'bg-white text-brand-950 hover:-translate-y-2'
          }`}
        >
          {copied
            ? <span className="flex items-center gap-3"><i className="fas fa-check-circle text-lg md:text-xl"></i> EMAIL COPIED!</span>
            : 'pei88625@gmail.com'
          }
        </button>

        {/* 已完全移除舊的 GitHub 與 LinkedIn 區塊 */}
      </div>
    </section>
  );
};