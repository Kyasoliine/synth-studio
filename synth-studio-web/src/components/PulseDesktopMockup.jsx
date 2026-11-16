import React, { useState, useEffect, useMemo } from 'react';
import {
  Home,
  Clock,
  BarChart2,
  Play,
  Trophy,
  ChevronDown,
  Settings,
  History,
  X,
  Minus,
  Square
} from 'lucide-react';
import { PulseWaveIcon, MinecraftGrassBlock } from './BrandAssets';

// ============================================================================
// ИНТЕРАКТИВНЫЙ МАКЕТ ДЕСКТОПНОГО ОКНА PULSE (Как на референсе)
// ============================================================================
const PulseDesktopMockup = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [period, setPeriod] = useState('7 дней');
  // Живой тикающий таймер, стартующий со значения из референса: 01:24:37 (5077 сек)
  const [elapsedSeconds, setElapsedSeconds] = useState(1 * 3600 + 24 * 60 + 37);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTimer = useMemo(() => {
    const hrs = String(Math.floor(elapsedSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(elapsedSeconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  }, [elapsedSeconds]);

  const chartData = useMemo(() => {
    if (period === '30 дней') {
      return [
        { day: 'Пн', height: 62 },
        { day: 'Вт', height: 48 },
        { day: 'Ср', height: 74 },
        { day: 'Чт', height: 82 },
        { day: 'Пт', height: 68 },
        { day: 'Сб', height: 90 },
        { day: 'Вс', height: 78 }
      ];
    }
    // Высоты столбцов точно повторяют силуэт графика на референсе
    return [
      { day: 'Пн', height: 44 },
      { day: 'Вт', height: 32 },
      { day: 'Ср', height: 66 },
      { day: 'Чт', height: 52 },
      { day: 'Пт', height: 55 },
      { day: 'Сб', height: 38 },
      { day: 'Вс', height: 80 }
    ];
  }, [period]);

  const navItems = [
    { id: 'home', label: 'Главная', icon: Home },
    { id: 'history', label: 'История', icon: History },
    { id: 'stats', label: 'Статистика', icon: BarChart2 },
    { id: 'settings', label: 'Настройки', icon: Settings }
  ];

  return (
    <div className="pulse-window-3d relative w-full max-w-[590px] mx-auto rounded-[22px] bg-[#0B0B0F]/95 border border-white/[0.12] shadow-[0_30px_90px_rgba(0,0,0,0.85),0_0_50px_rgba(124,58,237,0.12)] overflow-hidden text-white select-none">
      {/* Верхняя панель управления окном Windows-стиля (как на референсе) */}
      <div className="flex items-center justify-end gap-4 px-5 pt-3.5 pb-1 text-zinc-400">
        <span className="hover:text-white transition-colors cursor-default" title="Свернуть">
          <Minus className="w-3.5 h-3.5" />
        </span>
        <span className="hover:text-white transition-colors cursor-default" title="Развернуть">
          <Square className="w-3 h-3" />
        </span>
        <span className="hover:text-white transition-colors cursor-default" title="Закрыть">
          <X className="w-3.5 h-3.5" />
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[158px_1fr] px-4 pb-5 pt-1 gap-4">
        {/* Левый сайдбар приложения PULSE */}
        <div className="flex flex-col justify-between sm:border-r sm:border-white/[0.06] sm:pr-3">
          <div>
            {/* Логотип PULSE в окне */}
            <div className="flex items-center gap-2.5 px-2.5 py-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/[0.12] flex items-center justify-center text-white shadow-[0_0_12px_rgba(255,255,255,0.1)]">
                <PulseWaveIcon className="w-4 h-4" />
              </div>
              <span className="font-display font-bold tracking-[0.14em] text-sm text-white">
                PULSE
              </span>
            </div>

            {/* Навигация внутри окна PULSE */}
            <nav className="flex sm:flex-col gap-1 overflow-x-auto pb-1 sm:pb-0">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-[#2D2646] to-[#1D1B29] text-white border border-purple-400/20 shadow-[0_4px_16px_rgba(124,58,237,0.18)]'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-purple-300' : 'text-zinc-500'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-2 text-[10px] text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Мониторинг активен</span>
          </div>
        </div>

        {/* Основная рабочая область окна PULSE */}
        <div className="space-y-3">
          {activeTab === 'home' && (
            <>
              {/* Карточка статуса: Блок травы + Minecraft запущен */}
              <div className="flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-[#131319] border border-white/[0.07]">
                <MinecraftGrassBlock className="w-10 h-10 shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-white leading-tight">
                    Minecraft запущен
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">Играем с 22:17</div>
                </div>
              </div>

              {/* Карточка таймера: Часы + 01:24:37 */}
              <div className="flex items-center justify-between sm:justify-start sm:gap-7 px-5 py-3.5 rounded-2xl bg-[#131319] border border-white/[0.07]">
                <div className="w-11 h-11 rounded-full border-2 border-zinc-400/80 flex items-center justify-center text-zinc-200 shrink-0">
                  <Clock className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-[32px] font-bold tracking-[0.06em] text-white leading-none tabular-nums">
                    {formattedTimer}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1.5">Текущая сессия</div>
                </div>
              </div>

              {/* Три карточки метрик в ряд */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-3 rounded-2xl bg-[#131319] border border-white/[0.07]">
                  <BarChart2 className="w-4 h-4 text-zinc-400 mb-2" />
                  <div className="text-[11px] text-zinc-400">Общее время</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">247 ч</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#131319] border border-white/[0.07]">
                  <Play className="w-4 h-4 text-zinc-400 fill-zinc-400 mb-2" />
                  <div className="text-[11px] text-zinc-400">Сессий</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">86</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#131319] border border-white/[0.07]">
                  <Trophy className="w-4 h-4 text-amber-400/90 mb-2" />
                  <div className="text-[11px] text-zinc-400">Рекорд</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">8 ч 12 мин</div>
                </div>
              </div>

              {/* Карточка графика Активность */}
              <div className="p-4 rounded-2xl bg-[#131319] border border-white/[0.07]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-zinc-200">Активность</span>
                  <button
                    type="button"
                    onClick={() => setPeriod(period === '7 дней' ? '30 дней' : '7 дней')}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1B1B23] border border-white/[0.08] text-[11px] text-zinc-300 hover:border-purple-400/40 transition-colors cursor-pointer"
                  >
                    <span>{period}</span>
                    <ChevronDown className="w-3 h-3 text-zinc-400" />
                  </button>
                </div>

                {/* Столбцы графика */}
                <div className="grid grid-cols-7 gap-2.5 items-end h-20 pt-2">
                  {chartData.map((bar) => (
                    <div key={bar.day} className="flex flex-col items-center h-full justify-end gap-1.5">
                      <div className="w-full flex-1 flex items-end justify-center">
                        <div
                          className="w-full max-w-[26px] rounded-t-md transition-all duration-500"
                          style={{
                            height: `${bar.height}%`,
                            background:
                              'linear-gradient(180deg, rgba(167, 155, 212, 0.85) 0%, rgba(74, 70, 96, 0.45) 100%)'
                          }}
                        />
                      </div>
                      <span className="text-[10px] text-zinc-500">{bar.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'history' && (
            <div className="p-4 rounded-2xl bg-[#131319] border border-white/[0.07] space-y-3 min-h-[318px]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white">Последние игровые сессии</span>
                <span className="text-[11px] text-purple-400">Автозапись</span>
              </div>
              {[
                { date: 'Сегодня, 22:17', duration: formattedTimer, status: 'Активна' },
                { date: 'Вчера, 19:40', duration: '03 ч 15 мин', status: 'Завершена' },
                { date: '14 ноя, 18:05', duration: '02 ч 48 мин', status: 'Завершена' },
                { date: '12 ноя, 21:10', duration: '04 ч 02 мин', status: 'Завершена' }
              ].map((s, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#191922] border border-white/[0.05] text-xs"
                >
                  <div>
                    <div className="text-zinc-200 font-medium">{s.date}</div>
                    <div className="text-[11px] text-zinc-500">Minecraft Java Edition</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold tabular-nums">{s.duration}</div>
                    <div
                      className={`text-[10px] ${
                        idx === 0 ? 'text-emerald-400' : 'text-zinc-500'
                      }`}
                    >
                      {s.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="p-4 rounded-2xl bg-[#131319] border border-white/[0.07] space-y-3 min-h-[318px]">
              <div className="text-xs font-semibold text-white">Сводка активности</div>
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-[#191922] border border-white/[0.05]">
                  <div className="text-[11px] text-zinc-400">Средняя сессия</div>
                  <div className="text-base font-bold text-white mt-1">2 ч 52 мин</div>
                </div>
                <div className="p-3 rounded-xl bg-[#191922] border border-white/[0.05]">
                  <div className="text-[11px] text-zinc-400">Любимый день</div>
                  <div className="text-base font-bold text-purple-300 mt-1">Воскресенье</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[#191922] border border-white/[0.05] space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-400">Регулярность недели</span>
                  <span className="text-white font-medium">7 / 7 дней</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="p-4 rounded-2xl bg-[#131319] border border-white/[0.07] space-y-3 min-h-[318px]">
              <div className="text-xs font-semibold text-white">Параметры PULSE</div>
              {[
                { title: 'Автоопределение процесса Minecraft', enabled: true },
                { title: 'Внутриигровой оверлей времени', enabled: true },
                { title: 'Запуск вместе с системой', enabled: false }
              ].map((opt, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#191922] border border-white/[0.05] text-xs"
                >
                  <span className="text-zinc-300">{opt.title}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                      opt.enabled
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    {opt.enabled ? 'Вкл' : 'Выкл'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PulseDesktopMockup;
