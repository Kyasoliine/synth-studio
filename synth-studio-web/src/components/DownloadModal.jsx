import React from 'react';
import { ArrowRight, X, Bell } from 'lucide-react';
import { PulseWaveIcon } from './BrandAssets';

// ============================================================================
// МОДАЛЬНОЕ ОКНО СТАТУСА ЗАГРУЗКИ PULSE (Без фейковых файлов и ссылок)
// ============================================================================
const DownloadModal = ({ isOpen, onClose, isDark, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-up"
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
    >
      <div
        className={`relative w-full max-w-md rounded-3xl border p-7 space-y-5 shadow-2xl ${
          isDark
            ? 'bg-[#0E0E13] border-white/[0.12] text-white'
            : 'bg-white border-zinc-200 text-zinc-950'
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть окно"
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors cursor-pointer ${
            isDark ? 'text-zinc-400 hover:bg-white/[0.06] hover:text-white' : 'text-zinc-500 hover:bg-zinc-100'
          }`}
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <PulseWaveIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 id="download-modal-title" className="font-display text-xl font-bold tracking-wide">
              Скачать PULSE
            </h3>
            <p className="text-xs text-zinc-400">Minecraft Companion от SYNTH STUDIO</p>
          </div>
        </div>

        <div
          className={`p-4 rounded-2xl border text-sm leading-relaxed space-y-2 ${
            isDark
              ? 'bg-[#14141B] border-white/[0.07] text-zinc-300'
              : 'bg-zinc-50 border-zinc-200 text-zinc-700'
          }`}
        >
          <div className="flex items-center gap-2 text-purple-400 font-medium text-xs uppercase tracking-wider">
            <Bell className="w-3.5 h-3.5" />
            <span>Подготовка релиза</span>
          </div>
          <p>
            Публичный установочный файл PULSE ещё не опубликован. Прямая ссылка на скачивание и
            номер версии появятся здесь и в журнале обновлений сразу после выхода сборки.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
          <button
            type="button"
            onClick={() => {
              onClose();
              onNavigate('pulse');
            }}
            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              isDark
                ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                : 'bg-zinc-950 text-white hover:bg-zinc-800'
            }`}
          >
            <span>Обзор PULSE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onNavigate('updates');
            }}
            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs sm:text-sm font-medium border transition-colors cursor-pointer ${
              isDark
                ? 'bg-transparent border-white/[0.14] text-zinc-200 hover:bg-white/[0.05]'
                : 'border-zinc-300 text-zinc-800 hover:bg-zinc-100'
            }`}
          >
            <span>К обновлениям</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
