import React from 'react';
import { ArrowRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';

// ============================================================================
// СТРАНИЦА 5: О СТУДИИ (SYNTH STUDIO)
// ============================================================================
const AboutPage = ({ isDark, onNavigate }) => {
  const principles = [
    {
      icon: Sparkles,
      title: 'Внимание к деталям',
      description:
        'Каждый элемент интерфейса, отступ, анимация и сценарий взаимодействия проектируются как часть цельной экосистемы.'
    },
    {
      icon: ShieldCheck,
      title: 'Качество и стабильность',
      description:
        'Мы стремимся создавать надёжные программные продукты, которые работают предсказуемо, быстро и не перегружают систему.'
    },
    {
      icon: Layers,
      title: 'Чистый пользовательский опыт',
      description:
        'Визуальная чистота, понятная навигация и отсутствие лишнего шума помогают сосредоточиться на главном.'
    }
  ];

  return (
    <div className="animate-fade-up max-w-[1200px] mx-auto px-4 sm:px-8 py-14 sm:py-20 space-y-14">
      <div className="max-w-3xl space-y-5">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-[#101015] text-xs font-medium tracking-[0.14em] uppercase text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-purple-500" />
          <span>SYNTH STUDIO</span>
        </div>

        <h1
          className={`font-display text-3xl sm:text-5xl font-bold tracking-wide uppercase ${
            isDark ? 'text-white' : 'text-zinc-950'
          }`}
        >
          О студии
        </h1>

        <p
          className={`text-lg sm:text-xl leading-relaxed ${
            isDark ? 'text-zinc-200' : 'text-zinc-800'
          }`}
        >
          SYNTH STUDIO — независимая студия разработки программных проектов. Мы создаём,
          развиваем и совершенствуем собственные проекты, уделяя внимание деталям, качеству и
          пользовательскому опыту.
        </p>

        <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Наш подход строится вокруг девиза{' '}
          <span className="text-purple-400 font-medium">Building something better.</span> —
          последовательного создания современных инструментов и приложений с единой эстетикой,
          продуманной архитектурой и высокой культурой исполнения.
        </p>
      </div>

      {/* Принципы разработки */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`p-7 rounded-2xl border space-y-3 ${
                isDark ? 'bg-[#0B0B0E] border-white/[0.08]' : 'bg-white border-zinc-200'
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Icon className="w-5 h-5" />
              </div>
              <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                {item.title}
              </h2>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Переход к проекту PULSE */}
      <div
        className={`rounded-2xl border p-7 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 ${
          isDark ? 'bg-[#0B0B0E] border-white/[0.08]' : 'bg-zinc-50 border-zinc-200'
        }`}
      >
        <div className="space-y-1.5">
          <div className="text-xs font-medium text-purple-400 uppercase tracking-wider">
            Текущий фокус
          </div>
          <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-zinc-950'}`}>
            Первый проект студии — PULSE
          </h3>
          <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Познакомьтесь с приложением-компаньоном для Minecraft и его возможностями.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('pulse')}
          className={`self-start sm:self-auto inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
            isDark
              ? 'bg-white text-zinc-950 hover:bg-zinc-200'
              : 'bg-zinc-950 text-white hover:bg-zinc-800'
          }`}
        >
          <span>Перейти к PULSE</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
