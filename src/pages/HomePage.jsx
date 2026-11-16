import React from 'react';
import {
  Box,
  Users,
  Rocket,
  Info,
  ChevronRight,
  ArrowRight,
  Zap,
  Check
} from 'lucide-react';
import {
  PulseWaveIcon,
  MinecraftHeroBackdrop,
  CreeperCardBackdrop
} from '../components/BrandAssets';
import PulseDesktopMockup from '../components/PulseDesktopMockup';

// ============================================================================
// СТРАНИЦА 1: ГЛАВНАЯ (Точное воспроизведение референса)
// ============================================================================
const HomePage = ({ isDark, onNavigate }) => {
  return (
    <div className="animate-fade-up">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-10 pb-14 sm:pt-16 sm:pb-20">
        {/* Пиксельный фон Minecraft с луной, облаками и отражением в воде */}
        <MinecraftHeroBackdrop isDark={isDark} />

        <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Левая колонка Hero */}
            <div className="lg:col-span-6 space-y-6">
              {/* Бейдж-капсула SYNTH STUDIO */}
              <div
                className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-medium tracking-[0.14em] uppercase ${
                  isDark
                    ? 'bg-[#111116]/85 border-white/[0.1] text-zinc-300'
                    : 'bg-zinc-100 border-zinc-300 text-zinc-700'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#8B5CF6]" />
                <span>SYNTH STUDIO</span>
              </div>

              {/* Главный заголовок */}
              <h1
                className={`font-display text-4xl sm:text-5xl xl:text-[58px] font-bold tracking-[0.06em] uppercase leading-[1.06] ${
                  isDark ? 'text-white' : 'text-zinc-950'
                }`}
              >
                SYNTH STUDIO
              </h1>

              {/* Подзаголовок */}
              <p
                className={`text-xl sm:text-2xl font-normal leading-snug max-w-xl ${
                  isDark ? 'text-zinc-100' : 'text-zinc-800'
                }`}
              >
                Независимая студия разработки программных проектов.
              </p>

              {/* Короткое описание */}
              <p
                className={`text-sm sm:text-base leading-relaxed max-w-lg ${
                  isDark ? 'text-zinc-400' : 'text-zinc-600'
                }`}
              >
                Мы создаём, развиваем и совершенствуем собственные проекты, уделяя внимание
                деталям, качеству и пользовательскому опыту.
              </p>

              {/* Две кнопки действий */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isDark
                      ? 'bg-white text-zinc-950 hover:bg-zinc-200 shadow-[0_8px_30px_rgba(255,255,255,0.16)]'
                      : 'bg-zinc-950 text-white hover:bg-zinc-800 shadow-lg'
                  }`}
                >
                  <Rocket className="w-4 h-4" />
                  <span>Наши проекты</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                    isDark
                      ? 'bg-[#0F0F13]/85 text-white border-white/[0.14] hover:border-white/30 hover:bg-[#17171D]'
                      : 'bg-white text-zinc-900 border-zinc-300 hover:bg-zinc-100'
                  }`}
                >
                  <span>О студии</span>
                  <Info className="w-4 h-4 text-zinc-400" />
                </button>
              </div>
            </div>

            {/* Правая колонка Hero: объёмное окно приложения PULSE */}
            <div className="lg:col-span-6">
              <PulseDesktopMockup />
            </div>
          </div>

          {/* ИНФОРМАЦИОННАЯ ПАНЕЛЬ ПОД HERO (4 колонки без вымышленных цифр) */}
          <div
            className={`mt-14 sm:mt-16 rounded-2xl border backdrop-blur-md overflow-hidden ${
              isDark
                ? 'bg-[#0B0B0E]/90 border-white/[0.08]'
                : 'bg-white border-zinc-200 shadow-sm'
            }`}
          >
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x ${
                isDark ? 'divide-white/[0.08]' : 'divide-zinc-200'
              }`}
            >
              {/* Колонка 1: Проекты */}
              <div className="flex items-center gap-4 px-6 py-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-white/[0.04] text-white' : 'bg-zinc-100 text-zinc-900'
                  }`}
                >
                  <Box className="w-5 h-5" />
                </div>
                <div>
                  <div
                    className={`font-display text-base font-bold ${
                      isDark ? 'text-white' : 'text-zinc-950'
                    }`}
                  >
                    Проекты
                  </div>
                  <div className={`text-xs mt-0.5 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    PULSE и новые идеи в работе
                  </div>
                </div>
              </div>

              {/* Колонка 2: Аудитория */}
              <div className="flex items-center gap-4 px-6 py-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-white/[0.04] text-white' : 'bg-zinc-100 text-zinc-900'
                  }`}
                >
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div
                    className={`font-display text-base font-bold ${
                      isDark ? 'text-white' : 'text-zinc-950'
                    }`}
                  >
                    Сообщество
                  </div>
                  <div className={`text-xs mt-0.5 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    Открыты для первых пользователей
                  </div>
                </div>
              </div>

              {/* Колонка 3: Стремление к большему */}
              <div className="flex items-center gap-4 px-6 py-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-white/[0.04] text-white' : 'bg-zinc-100 text-zinc-900'
                  }`}
                >
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div
                    className={`text-sm font-medium leading-snug ${
                      isDark ? 'text-zinc-200' : 'text-zinc-800'
                    }`}
                  >
                    Стремление к большему
                  </div>
                </div>
              </div>

              {/* Колонка 4: Слоган Building something better. */}
              <div className="flex items-center gap-3 px-6 py-5">
                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#8B5CF6] shrink-0" />
                <span
                  className={`text-sm font-medium ${
                    isDark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}
                >
                  Building something better.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ «НАШИ ПРОЕКТЫ» */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-8 pt-4 pb-24">
        {/* Заголовок секции и кнопка справа */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-400 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#8B5CF6]" />
              <span>Наши проекты</span>
            </div>
            <h2
              className={`text-2xl sm:text-3xl font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-zinc-950'
              }`}
            >
              Первые шаги к большему
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className={`self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
              isDark
                ? 'bg-[#101014] hover:bg-[#17171D] text-zinc-200 border-white/[0.12] hover:border-white/25'
                : 'bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-300'
            }`}
          >
            <span>Все проекты</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Широкая главная карточка проекта PULSE */}
        <div
          className={`relative rounded-[22px] border overflow-hidden transition-all duration-300 ${
            isDark
              ? 'bg-[#0B0B0E] border-white/[0.09] hover:border-purple-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.65)]'
              : 'bg-white border-zinc-200 hover:border-purple-300 shadow-md'
          }`}
        >
          {/* Пиксельный фон с крипером в правой части карточки (в тёмной теме) */}
          {isDark && <CreeperCardBackdrop />}

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-6 p-6 sm:p-8">
            {/* Левая часть: Иконка приложения + Название PULSE */}
            <div className="lg:col-span-4 flex items-center gap-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-b from-[#1A1A20] to-[#08080A] border border-white/[0.15] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_30px_rgba(0,0,0,0.8)] flex items-center justify-center shrink-0">
                <PulseWaveIcon className="w-11 h-11 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]" />
              </div>
              <div>
                <h3
                  className={`font-display text-2xl sm:text-3xl font-bold tracking-[0.08em] uppercase ${
                    isDark ? 'text-white' : 'text-zinc-950'
                  }`}
                >
                  PULSE
                </h3>
                <p className={`text-sm mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  Minecraft Companion
                </p>
              </div>
            </div>

            {/* Описание приложения */}
            <div className="lg:col-span-3">
              <p
                className={`text-sm leading-relaxed ${
                  isDark ? 'text-zinc-300' : 'text-zinc-600'
                }`}
              >
                Отслеживайте игровое время, анализируйте активность и контролируйте свой прогресс.
              </p>
            </div>

            {/* Вертикальный разделитель + Список возможностей */}
            <div
              className={`lg:col-span-3 lg:border-l lg:pl-7 space-y-2.5 ${
                isDark ? 'lg:border-white/[0.08]' : 'lg:border-zinc-200'
              }`}
            >
              {['Подробная статистика', 'Игровой оверлей', 'История сессий'].map((feature) => (
                <div key={feature} className="flex items-center gap-2.5 text-sm">
                  <Check className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span className={isDark ? 'text-zinc-200' : 'text-zinc-700'}>{feature}</span>
                </div>
              ))}
            </div>

            {/* Кнопка «Узнать больше» */}
            <div className="lg:col-span-2 flex lg:justify-end">
              <button
                type="button"
                onClick={() => onNavigate('pulse')}
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-medium border backdrop-blur-md transition-all cursor-pointer ${
                  isDark
                    ? 'bg-[#121217]/90 hover:bg-purple-600/20 text-white border-white/[0.15] hover:border-purple-400/50'
                    : 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-900'
                }`}
              >
                <span>Узнать больше</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
