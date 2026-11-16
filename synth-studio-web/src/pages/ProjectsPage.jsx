import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PulseWaveIcon, CreeperCardBackdrop } from '../components/BrandAssets';

// ============================================================================
// СТРАНИЦА 2: ПРОЕКТЫ (Каталог проектов студии)
// ============================================================================
const ProjectsPage = ({ isDark, onNavigate }) => {
  return (
    <div className="animate-fade-up max-w-[1380px] mx-auto px-4 sm:px-8 py-14 sm:py-20 space-y-12">
      <div className="max-w-2xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-purple-400 uppercase tracking-[0.14em]">
          <span className="w-2 h-2 rounded-full bg-purple-500" />
          <span>Портфолио студии</span>
        </div>
        <h1
          className={`font-display text-3xl sm:text-5xl font-bold tracking-wide uppercase ${
            isDark ? 'text-white' : 'text-zinc-950'
          }`}
        >
          Проекты SYNTH STUDIO
        </h1>
        <p className={`text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Мы фокусируемся на создании продуманных десктопных и программных решений. Ниже
          представлен наш дебютный публичный продукт.
        </p>
      </div>

      {/* Карточка главного проекта PULSE */}
      <div
        className={`relative rounded-[24px] border overflow-hidden p-7 sm:p-10 transition-all ${
          isDark
            ? 'bg-[#0B0B0E] border-white/[0.09] hover:border-purple-500/35'
            : 'bg-white border-zinc-200 shadow-sm'
        }`}
      >
        {isDark && <CreeperCardBackdrop />}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 max-w-2xl">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-[#1A1A20] to-[#08080A] border border-white/[0.15] flex items-center justify-center shrink-0">
              <PulseWaveIcon className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h2
                  className={`font-display text-2xl sm:text-3xl font-bold tracking-[0.08em] ${
                    isDark ? 'text-white' : 'text-zinc-950'
                  }`}
                >
                  PULSE
                </h2>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/15 text-purple-300 border border-purple-500/30">
                  Minecraft Companion
                </span>
              </div>
              <p className={`text-sm sm:text-base ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Приложение-компаньон для Minecraft: учёт игровых сессий, наглядная статистика
                активности, история запусков и аккуратный игровой оверлей.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('pulse')}
              className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                isDark
                  ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                  : 'bg-zinc-950 text-white hover:bg-zinc-800'
              }`}
            >
              <span>Открыть страницу PULSE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Честный блок о следующих проектах без вымышленных названий */}
      <div
        className={`rounded-[22px] border border-dashed p-8 text-center space-y-2 ${
          isDark
            ? 'bg-[#09090C]/60 border-white/[0.1] text-zinc-400'
            : 'bg-zinc-50 border-zinc-300 text-zinc-600'
        }`}
      >
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/10 text-purple-400 mb-1">
          <Sparkles className="w-5 h-5" />
        </div>
        <h3 className={`text-base font-semibold ${isDark ? 'text-zinc-200' : 'text-zinc-900'}`}>
          Новые проекты в проработке
        </h3>
        <p className="text-sm max-w-lg mx-auto">
          PULSE — первый публично представленный проект SYNTH STUDIO. Новые концепции и
          инструменты будут опубликованы здесь по мере готовности.
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;
