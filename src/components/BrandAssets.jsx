import React from 'react';

// ============================================================================
// ФИРМЕННЫЕ SVG-ЛОГОТИПЫ И ПИКСЕЛЬНЫЕ АССЕТЫ
// ============================================================================

/**
 * Фирменная монограмма SYNTH STUDIO (геометрическая S из двух угловых лент)
 */
export const SynthLogoMark = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
    {/* Верхняя лента S */}
    <path
      d="M11 6H27L23.5 11H14.5L12.2 14.2H24.8L22 18.2H7.5L11 13.2L11 6Z"
      fill="currentColor"
    />
    {/* Нижняя лента S */}
    <path
      d="M25 30H9L12.5 25H21.5L23.8 21.8H11.2L14 17.8H28.5L25 22.8V30Z"
      fill="currentColor"
      fillOpacity="0.9"
    />
  </svg>
);

/**
 * Иконка пульса для приложения PULSE
 */
export const PulseWaveIcon = ({ className = "w-6 h-6", strokeWidth = 2.4 }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path
      d="M3 17H8.5L11.5 9.5L16 23.5L20 12.5L22.5 17H29"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Изометрический пиксельный блок травы Minecraft для карточки статуса в окне PULSE
 */
export const MinecraftGrassBlock = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    {/* Верхняя грань (трава) */}
    <polygon points="24,4 44,14 24,24 4,14" fill="#5D9C42" />
    <polygon points="24,4 34,9 24,14 14,9" fill="#6AB04C" />
    <polygon points="14,14 24,19 19,21.5 9,16.5" fill="#4E8736" />
    {/* Левая грань (земля + свисающая трава) */}
    <polygon points="4,14 24,24 24,44 4,34" fill="#79553A" />
    <polygon points="4,14 24,24 24,29 20,27 20,30 16,28 16,26 11,23.5 11,27 7,25 7,21 4,19.5" fill="#528B39" />
    <rect x="8" y="31" width="3" height="3" fill="#5E402A" />
    <rect x="16" y="35" width="3" height="3" fill="#684830" />
    {/* Правая грань (затенённая земля + трава) */}
    <polygon points="44,14 24,24 24,44 44,34" fill="#5E402A" />
    <polygon points="44,14 24,24 24,29 28,27 28,29.5 33,27 33,25 38,22.5 38,26 41,24.5 41,20 44,18.5" fill="#43742E" />
    <rect x="30" y="32" width="3" height="3" fill="#4B3220" />
    <rect x="36" y="28" width="3" height="3" fill="#6D4C33" />
  </svg>
);

/**
 * Атмосферный монохромный пиксельный пейзаж Minecraft с квадратной луной,
 * облаками, силуэтами деревьев, гор и отражением в воде (строго как на референсе)
 */
export const MinecraftHeroBackdrop = ({ isDark }) => (
  <div
    className={`pointer-events-none absolute inset-0 overflow-hidden select-none transition-opacity duration-500 ${
      isDark ? 'opacity-100' : 'opacity-20'
    }`}
    aria-hidden="true"
  >
    {/* Радиальное свечение луны */}
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(circle at 48% 54%, rgba(255,255,255,0.22) 0%, rgba(140,145,160,0.08) 28%, rgba(5,5,7,0.92) 72%)'
      }}
    />

    <svg
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full object-cover"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#07070A" />
          <stop offset="45%" stopColor="#17181E" />
          <stop offset="68%" stopColor="#2B2D36" />
          <stop offset="100%" stopColor="#070709" />
        </linearGradient>
        <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B1C22" />
          <stop offset="35%" stopColor="#111216" />
          <stop offset="100%" stopColor="#050507" />
        </linearGradient>
        <filter id="moonGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="24" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Небо */}
      <rect width="1440" height="515" fill="url(#skyGrad)" />

      {/* Пиксельные облака */}
      <g className="animate-clouds" fill="#32343E" opacity="0.55">
        <rect x="260" y="135" width="96" height="14" />
        <rect x="284" y="121" width="52" height="14" />
        <rect x="440" y="168" width="120" height="14" />
        <rect x="462" y="154" width="68" height="14" />
        <rect x="615" y="128" width="140" height="16" />
        <rect x="645" y="112" width="76" height="16" />
        <rect x="835" y="162" width="110" height="14" />
        <rect x="855" y="148" width="60" height="14" />
      </g>

      {/* Квадратная луна Minecraft */}
      <g filter="url(#moonGlow)">
        <rect x="652" y="384" width="68" height="68" fill="#F4F5F8" />
        <rect x="658" y="390" width="56" height="56" fill="#FFFFFF" />
      </g>

      {/* Дальний пиксельный горизонт / горы */}
      <g fill="#121317">
        <polygon points="0,515 0,390 60,390 60,360 130,360 130,410 210,410 210,455 340,455 340,485 520,485 520,515" />
        <polygon points="1440,515 1440,375 1360,375 1360,340 1270,340 1270,395 1170,395 1170,445 1040,445 1040,485 880,485 880,515" />
      </g>

      {/* Водная гладь */}
      <rect x="0" y="515" width="1440" height="245" fill="url(#waterGrad)" />

      {/* Пиксельное отражение луны на воде */}
      <g className="animate-water" fill="#D4D7E0">
        <rect x="646" y="522" width="80" height="4" opacity="0.65" />
        <rect x="656" y="531" width="60" height="4" opacity="0.55" />
        <rect x="640" y="540" width="92" height="3" opacity="0.45" />
        <rect x="660" y="550" width="52" height="4" opacity="0.5" />
        <rect x="648" y="562" width="76" height="3" opacity="0.35" />
        <rect x="664" y="575" width="44" height="3" opacity="0.3" />
        <rect x="654" y="590" width="64" height="2" opacity="0.22" />
        <rect x="668" y="608" width="36" height="2" opacity="0.16" />
      </g>

      {/* Силуэты блочных елей и рельефа слева */}
      <g fill="#09090C">
        {/* Берег слева */}
        <rect x="0" y="490" width="455" height="270" />
        <rect x="455" y="520" width="65" height="240" />
        <rect x="520" y="555" width="45" height="205" />
        {/* Пиксельные деревья слева */}
        <rect x="40" y="210" width="22" height="280" />
        <rect x="10" y="245" width="82" height="28" />
        <rect x="22" y="217" width="58" height="28" />
        <rect x="34" y="192" width="34" height="25" />

        <rect x="165" y="275" width="18" height="215" />
        <rect x="135" y="305" width="78" height="24" />
        <rect x="147" y="281" width="54" height="24" />
        <rect x="159" y="260" width="30" height="21" />

        <rect x="285" y="340" width="16" height="155" />
        <rect x="255" y="365" width="76" height="22" />
        <rect x="267" y="343" width="52" height="22" />
        <rect x="279" y="325" width="28" height="18" />

        <rect x="385" y="395" width="14" height="110" />
        <rect x="362" y="415" width="60" height="18" />
        <rect x="372" y="398" width="40" height="18" />
      </g>

      {/* Силуэты блочных елей и рельефа справа */}
      <g fill="#09090C">
        <rect x="960" y="495" width="480" height="265" />
        <rect x="895" y="530" width="65" height="230" />
        <rect x="845" y="565" width="50" height="195" />

        <rect x="1350" y="205" width="24" height="290" />
        <rect x="1315" y="240" width="94" height="30" />
        <rect x="1330" y="210" width="64" height="30" />
        <rect x="1345" y="185" width="34" height="25" />

        <rect x="1220" y="295" width="18" height="205" />
        <rect x="1188" y="325" width="82" height="24" />
        <rect x="1202" y="301" width="54" height="24" />
        <rect x="1215" y="280" width="28" height="21" />

        <rect x="1080" y="365" width="16" height="140" />
        <rect x="1052" y="390" width="72" height="20" />
        <rect x="1064" y="370" width="48" height="20" />
      </g>
    </svg>

    {/* Нижний градиентный переход в глубокий чёрный фон страницы */}
    <div
      className="absolute inset-x-0 bottom-0 h-44"
      style={{
        background: 'linear-gradient(to bottom, rgba(5,5,7,0) 0%, #050507 100%)'
      }}
    />
  </div>
);

/**
 * Декоративный пиксельный арт с силуэтом крипера для правой части карточки PULSE
 */
export const CreeperCardBackdrop = () => (
  <div
    className="pointer-events-none absolute right-0 top-0 bottom-0 w-72 overflow-hidden opacity-35 select-none"
    aria-hidden="true"
  >
    <div
      className="absolute inset-0 z-10"
      style={{
        background:
          'linear-gradient(90deg, #0B0B0E 0%, rgba(11,11,14,0.35) 55%, rgba(11,11,14,0.15) 100%)'
      }}
    />
    <svg viewBox="0 0 280 180" className="w-full h-full object-cover">
      <rect width="280" height="180" fill="#17181D" />
      {/* Луна в углу */}
      <rect x="135" y="26" width="24" height="24" fill="#A1A5B2" opacity="0.6" />
      {/* Силуэты блоков и крипера справа */}
      <g fill="#0A0A0D">
        <rect x="0" y="130" width="280" height="50" />
        <rect x="40" y="95" width="38" height="35" />
        <rect x="92" y="110" width="44" height="20" />
        {/* Голова и тело крипера */}
        <rect x="196" y="22" width="52" height="52" />
        <rect x="204" y="74" width="36" height="62" />
        <rect x="194" y="136" width="24" height="28" />
        <rect x="226" y="136" width="24" height="28" />
      </g>
      {/* Лицо крипера */}
      <g fill="#353842">
        <rect x="205" y="34" width="11" height="11" />
        <rect x="228" y="34" width="11" height="11" />
        <rect x="216" y="45" width="12" height="10" />
        <rect x="210" y="52" width="24" height="10" />
        <rect x="210" y="62" width="7" height="7" />
        <rect x="227" y="62" width="7" height="7" />
      </g>
    </svg>
  </div>
);
