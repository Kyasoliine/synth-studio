import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import PulseProductPage from './pages/PulseProductPage';
import UpdatesPage from './pages/UpdatesPage';
import AboutPage from './pages/AboutPage';

// ============================================================================
// ГЛАВНЫЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ
// ============================================================================
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDark, setIsDark] = useState(true);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${
        isDark ? 'bg-[#050507] text-white' : 'bg-[#FAFAFC] text-zinc-950'
      }`}
    >
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
        onOpenDownloadModal={() => setDownloadModalOpen(true)}
      />

      <main className="flex-1">
        {currentPage === 'home' && <HomePage isDark={isDark} onNavigate={setCurrentPage} />}
        {currentPage === 'projects' && (
          <ProjectsPage isDark={isDark} onNavigate={setCurrentPage} />
        )}
        {currentPage === 'pulse' && (
          <PulseProductPage
            isDark={isDark}
            onNavigate={setCurrentPage}
            onOpenDownloadModal={() => setDownloadModalOpen(true)}
          />
        )}
        {currentPage === 'updates' && <UpdatesPage isDark={isDark} onNavigate={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage isDark={isDark} onNavigate={setCurrentPage} />}
      </main>

      <Footer isDark={isDark} onNavigate={setCurrentPage} />

      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        isDark={isDark}
        onNavigate={setCurrentPage}
      />
    </div>
  );
}
