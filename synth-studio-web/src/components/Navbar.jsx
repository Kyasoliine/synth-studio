import React, { useState } from 'react';
import {
  Home,
  Box,
  FileText,
  Users,
  Sun,
  Moon,
  Download,
  Menu,
  X
} from 'lucide-react';
import { SynthLogoMark } from './BrandAssets';

// ============================================================================
// ВЕРХНЯЯ НАВИГАЦИЯ (HEADER)
// ============================================================================
const Navbar = ({ currentPage, onNavigate, isDark, onToggleTheme, onOpenDownloadModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Главная', icon: Home },
    { id: 'projects', label: 'Проекты', icon: Box },
    { id: 'updates', label: 'Обновления', icon: FileText },
    { id: 'about', label: 'О студии', icon: Users }
  ];

  const handleNav = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 backdrop-blur-xl border-b ${
        isDark
          ? 'bg-[#050507]/80 border-white/[0.07]'
          : 'bg-white/85 border-zinc-200/80'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
        {/* Левая часть: логотип SYNTH STUDIO */}
        <button
          type="button"
          onClick={() => handleNav('home')}
          className="flex items-center gap-3.5 group cursor-pointer focus:outline-none"
        >
          <SynthLogoMark
            className={`w-7 h-7 transition-transform duration-300 group-hover:scale-105 ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}
          />
          <span
            className={`h-5 w-[1px] ${isDark ? 'bg-white/15' : 'bg-zinc-300'}`}
            aria-hidden="true"
          />
          <span
            className={`font-display font-bold text-xs sm:text-sm tracking-[0.26em] uppercase ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}
          >
            SYNTH STUDIO
          </span>
        </button>

        {/* Центральная навигация (Desktop) */}
        <nav className="hidden lg:flex items-center gap-2" aria-label="Основная навигация">
          {navItems.map((item) => {
            const Icon = item.icon;
            // Страница pulse подсвечивает вкладку «Проекты»
            const isActive =
              currentPage === item.id || (currentPage === 'pulse' && item.id === 'projects');

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? isDark
                      ? 'bg-[#171522] text-white border border-purple-500/25 shadow-[0_0_24px_rgba(124,58,237,0.22)]'
                      : 'bg-purple-50 text-purple-950 border border-purple-300 shadow-sm'
                    : isDark
                    ? 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isActive
                      ? isDark
                        ? 'text-white'
                        : 'text-purple-700'
                      : isDark
                      ? 'text-zinc-400'
                      : 'text-zinc-500'
                  }`}
                />
                <span>{item.label}</span>

                {/* Тонкая фиолетовая полоска снизу у активного пункта как на референсе */}
                {isActive && (
                  <span
                    className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full bg-purple-500 shadow-[0_0_10px_#8B5CF6]"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Правая часть: переключатель темы и кнопка «Скачать PULSE» */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Переключатель темы */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
            title={isDark ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full border transition-all cursor-pointer ${
              isDark
                ? 'bg-[#0F0F14] border-white/[0.1] text-zinc-300 hover:border-white/25'
                : 'bg-zinc-100 border-zinc-300 text-zinc-700 hover:bg-zinc-200'
            }`}
          >
            <Sun className={`w-3.5 h-3.5 ${!isDark ? 'text-amber-500' : 'text-zinc-500'}`} />
            <Moon className={`w-3.5 h-3.5 ${isDark ? 'text-white' : 'text-zinc-400'}`} />
          </button>

          {/* Кнопка Скачать PULSE */}
          <button
            type="button"
            onClick={onOpenDownloadModal}
            className={`hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
              isDark
                ? 'bg-[#121217] hover:bg-[#191922] text-white border-white/[0.14] hover:border-purple-500/40 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                : 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-900'
            }`}
          >
            <span>Скачать PULSE</span>
            <Download className="w-4 h-4 text-zinc-300" />
          </button>

          {/* Бургер-кнопка для мобильных экранов */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Открыть меню навигации"
            className={`lg:hidden p-2.5 rounded-full border transition-colors cursor-pointer ${
              isDark
                ? 'bg-[#121217] border-white/[0.1] text-white'
                : 'bg-zinc-100 border-zinc-300 text-zinc-900'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Выпадающее мобильное меню */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-4 pt-3 pb-5 space-y-2 ${
            isDark ? 'bg-[#08080B] border-white/[0.08]' : 'bg-white border-zinc-200'
          }`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              currentPage === item.id || (currentPage === 'pulse' && item.id === 'projects');
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? isDark
                      ? 'bg-[#181524] text-white border border-purple-500/30'
                      : 'bg-purple-50 text-purple-900 border border-purple-200'
                    : isDark
                    ? 'text-zinc-400 hover:bg-white/[0.04]'
                    : 'text-zinc-600 hover:bg-zinc-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDownloadModal();
            }}
            className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-purple-600 hover:bg-purple-500 text-white transition-colors cursor-pointer"
          >
            <span>Скачать PULSE</span>
            <Download className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
