import React from 'react';
import {
  Download,
  ChevronRight,
  ArrowRight,
  Clock,
  BarChart2,
  History,
  Layers,
  Monitor,
  Tag
} from 'lucide-react';
import { PulseWaveIcon } from '../components/BrandAssets';
import PulseDesktopMockup from '../components/PulseDesktopMockup';

// ============================================================================
// СТРАНИЦА 3: ПРЕЗЕНТАЦИЯ ПРИЛОЖЕНИЯ PULSE
// ============================================================================
const PulseProductPage = ({ isDark, onNavigate, onOpenDownloadModal }) => {
  const features = [
    {
      icon: Clock,
      title: 'Учёт игровых сессий',
      description:
        'Автоматическая фиксация времени текущей и завершённых сессий с точностью до секунды без лишней нагрузки на систему.'
    },
    {
      icon: BarChart2,
      title: 'Подробная статистика',
      description:
        'Аналитика общего игрового времени, количества запусков, личных рекордов и распределения активности по дням недели.'
    },
    {
      icon: Layers,
      title: 'Игровой оверлей',
      description:
        'Минималистичный информационный оверлей, который органично дополняет игровой процесс и не отвлекает от экрана.'
    },
    {
      icon: History,
      title: 'История сессий',
      description:
        'Структурированный журнал всех игровых сессий с датой, временем начала и длительностью каждой игры.'
    }
  ];

  return (
    <div className="animate-fade-up max-w-[1380px] mx-auto px-4 sm:px-8 py-12 sm:py-18 space-y-16">
      {/* Хлебные крошки */}
      <div className="flex items-center gap-2 text-xs text-zinc-500">
        <button
          type="button"
          onClick={() => onNavigate('projects')}
          className="hover:text-zinc-300 transition-colors cursor-pointer"
        >
          Проекты
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-purple-400 font-medium">PULSE</span>
      </div>

      {/* Верхний блок презентации PULSE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-[#1A1A20] to-[#08080A] border border-white/[0.15] flex items-center justify-center shadow-lg">
              <PulseWaveIcon className="w-9 h-9 text-white" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-purple-500/15 text-purple-300 border border-purple-500/30 mb-1">
                Minecraft Companion
              </div>
              <h1
                className={`font-display text-3xl sm:text-5xl font-bold tracking-[0.08em] uppercase ${
                  isDark ? 'text-white' : 'text-zinc-950'
                }`}
              >
                PULSE
              </h1>
            </div>
          </div>

          <p
            className={`text-lg leading-relaxed ${
              isDark ? 'text-zinc-200' : 'text-zinc-800'
            }`}
          >
            Десктопное приложение-компаньон для Minecraft, созданное в единой дизайн-системе SYNTH
            STUDIO.
          </p>

          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            PULSE помогает отслеживать игровое время, анализировать динамику активности по дням,
            хранить историю сессий и использовать аккуратный игровой оверлей в минималистичном
            тёмном интерфейсе.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={onOpenDownloadModal}
              className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                isDark
                  ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                  : 'bg-zinc-950 text-white hover:bg-zinc-800'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Статус скачивания</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('updates')}
              className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium border transition-all cursor-pointer ${
                isDark
                  ? 'bg-[#101015] text-zinc-200 border-white/[0.12] hover:border-white/25'
                  : 'bg-white text-zinc-800 border-zinc-300 hover:bg-zinc-100'
              }`}
            >
              <span>Журнал обновлений</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Интерактивное превью интерфейса PULSE */}
        <div className="lg:col-span-6">
          <PulseDesktopMockup />
        </div>
      </div>

      {/* Основные возможности */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-medium text-purple-400 uppercase tracking-[0.14em] mb-1">
            Функциональность
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-bold ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}
          >
            Основные возможности PULSE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className={`p-6 rounded-2xl border transition-colors ${
                  isDark
                    ? 'bg-[#0B0B0E] border-white/[0.08] hover:border-purple-500/25'
                    : 'bg-white border-zinc-200'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-zinc-950'
                  }`}
                >
                  {feat.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Блоки технической информации (Честные слоты без выдуманных версий и требований) */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Текущая версия */}
        <div
          className={`p-6 rounded-2xl border space-y-3 ${
            isDark ? 'bg-[#0B0B0E] border-white/[0.08]' : 'bg-white border-zinc-200'
          }`}
        >
          <div className="flex items-center gap-2.5 text-sm font-semibold text-purple-400">
            <Tag className="w-4 h-4" />
            <span>Текущая версия</span>
          </div>
          <div className={`text-base font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            Ожидает публикации
          </div>
          <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Номер актуальной публичной сборки будет указан здесь одновременно с выходом первого
            официального релиза.
          </p>
        </div>

        {/* Системные требования */}
        <div
          className={`p-6 rounded-2xl border space-y-3 ${
            isDark ? 'bg-[#0B0B0E] border-white/[0.08]' : 'bg-white border-zinc-200'
          }`}
        >
          <div className="flex items-center gap-2.5 text-sm font-semibold text-purple-400">
            <Monitor className="w-4 h-4" />
            <span>Системные требования</span>
          </div>
          <div className={`text-base font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            Десктопная платформа (PC)
          </div>
          <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Точные минимальные и рекомендуемые системные требования будут опубликованы перед
            открытием загрузки дистрибутива.
          </p>
        </div>

        {/* История обновлений и загрузка */}
        <div
          className={`p-6 rounded-2xl border space-y-3 ${
            isDark ? 'bg-[#0B0B0E] border-white/[0.08]' : 'bg-white border-zinc-200'
          }`}
        >
          <div className="flex items-center gap-2.5 text-sm font-semibold text-purple-400">
            <Download className="w-4 h-4" />
            <span>Установочный файл</span>
          </div>
          <div className={`text-base font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            Публичная сборка готовится
          </div>
          <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Прямая ссылка на скачивание появится сразу после завершения подготовки первого
            установочного пакета.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PulseProductPage;
