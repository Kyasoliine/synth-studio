import React, { useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { PulseWaveIcon } from '../components/BrandAssets';

// ============================================================================
// СТРАНИЦА 4: ОБНОВЛЕНИЯ (Журнал изменений / Changelog)
// ============================================================================
const UpdatesPage = ({ isDark, onNavigate }) => {
  const [filter, setFilter] = useState('all');

  return (
    <div className="animate-fade-up max-w-[1040px] mx-auto px-4 sm:px-8 py-14 sm:py-20 space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-purple-400 uppercase tracking-[0.14em]">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span>Changelog</span>
          </div>
          <h1
            className={`font-display text-3xl sm:text-5xl font-bold tracking-wide uppercase ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}
          >
            Обновления
          </h1>
          <p className={`text-sm sm:text-base max-w-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Официальный журнал изменений проектов SYNTH STUDIO: новые функции, улучшения интерфейса
            и исправления.
          </p>
        </div>

        {/* Фильтр по проектам */}
        <div className="flex items-center gap-2">
          {[
            { id: 'all', label: 'Все проекты' },
            { id: 'pulse', label: 'PULSE' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                filter === tab.id
                  ? isDark
                    ? 'bg-[#191626] text-white border-purple-500/40'
                    : 'bg-purple-50 text-purple-900 border-purple-300'
                  : isDark
                  ? 'bg-[#0E0E12] text-zinc-400 border-white/[0.08] hover:text-white'
                  : 'bg-white text-zinc-600 border-zinc-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Карточка статуса первого публичного релиза PULSE */}
      <div
        className={`rounded-[22px] border p-6 sm:p-8 space-y-6 ${
          isDark ? 'bg-[#0B0B0E] border-white/[0.09]' : 'bg-white border-zinc-200 shadow-sm'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center">
              <PulseWaveIcon className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                  PULSE — Подготовка первого публичного релиза
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500 mt-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Дата выпуска будет объявлена при публикации сборки</span>
              </div>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/15 text-purple-300 border border-purple-500/30">
            В разработке
          </span>
        </div>

        {/* Структура разделов будущего релиз-ноута */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className={`p-4 rounded-xl border ${
              isDark ? 'bg-[#101015] border-white/[0.06]' : 'bg-zinc-50 border-zinc-200'
            }`}
          >
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              Новые функции
            </div>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Список ключевых возможностей дебютной версии PULSE будет опубликован вместе с
              выходом релиза.
            </p>
          </div>

          <div
            className={`p-4 rounded-xl border ${
              isDark ? 'bg-[#101015] border-white/[0.06]' : 'bg-zinc-50 border-zinc-200'
            }`}
          >
            <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
              Улучшения
            </div>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Здесь будут фиксироваться оптимизации производительности, интерфейса и пользовательского
              опыта.
            </p>
          </div>

          <div
            className={`p-4 rounded-xl border ${
              isDark ? 'bg-[#101015] border-white/[0.06]' : 'bg-zinc-50 border-zinc-200'
            }`}
          >
            <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
              Исправления
            </div>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Детальный перечень исправленных ошибок для каждой опубликованной версии приложения.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-zinc-500">
            Ссылка на скачивание появится в карточке релиза после публикации файла.
          </span>
          <button
            type="button"
            onClick={() => onNavigate('pulse')}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
          >
            <span>Подробнее о PULSE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatesPage;
