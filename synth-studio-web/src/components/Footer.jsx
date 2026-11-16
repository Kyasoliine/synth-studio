import React from 'react';
import { SynthLogoMark } from './BrandAssets';

// ============================================================================
// МИНИМАЛИСТИЧНЫЙ ФУТЕР SYNTH STUDIO
// ============================================================================
const Footer = ({ isDark, onNavigate }) => (
  <footer
    className={`border-t transition-colors ${
      isDark ? 'bg-[#050507] border-white/[0.07]' : 'bg-zinc-50 border-zinc-200'
    }`}
  >
    <div className="max-w-[1380px] mx-auto px-4 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <SynthLogoMark className={`w-6 h-6 ${isDark ? 'text-white' : 'text-zinc-950'}`} />
        <span
          className={`font-display font-bold text-xs tracking-[0.24em] uppercase ${
            isDark ? 'text-white' : 'text-zinc-950'
          }`}
        >
          SYNTH STUDIO
        </span>
        <span className="hidden md:inline-block text-zinc-600 mx-2">•</span>
        <span className="hidden md:inline-flex items-center gap-2 text-xs text-zinc-500">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
          Building something better.
        </span>
      </div>

      <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
        {[
          { id: 'home', label: 'Главная' },
          { id: 'projects', label: 'Проекты' },
          { id: 'pulse', label: 'PULSE' },
          { id: 'updates', label: 'Обновления' },
          { id: 'about', label: 'О студии' }
        ].map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => {
              onNavigate(link.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`transition-colors cursor-pointer ${
              isDark ? 'hover:text-white' : 'hover:text-zinc-950'
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
