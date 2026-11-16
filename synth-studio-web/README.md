# SYNTH STUDIO — Официальный веб-сайт студии

Веб-сайт независимой студии разработки программных проектов **SYNTH STUDIO** и презентационная платформа приложения **PULSE** (Minecraft Companion).

## Стек технологий
- **React 18**
- **Vite 6**
- **Tailwind CSS v4**
- **Lucide React** (иконки)

## Структура проекта
```text
synth-studio-web/
├── public/
│   ├── _redirects           # Правило маршрутизации для Cloudflare Pages
│   └── favicon.svg          # Фирменный логотип SYNTH STUDIO
├── src/
│   ├── components/
│   │   ├── BrandAssets.jsx        # Фирменные SVG-логотипы и пиксельные сцены
│   │   ├── DownloadModal.jsx      # Модальное окно статуса загрузки PULSE
│   │   ├── Footer.jsx             # Нижний колонтитул сайта
│   │   ├── Navbar.jsx             # Адаптивная навигационная панель
│   │   └── PulseDesktopMockup.jsx # Интерактивный 3D-макет окна PULSE
│   ├── pages/
│   │   ├── AboutPage.jsx          # Страница «О студии»
│   │   ├── HomePage.jsx           # Главная страница
│   │   ├── ProjectsPage.jsx       # Страница «Проекты»
│   │   ├── PulseProductPage.jsx   # Страница презентации PULSE
│   │   └── UpdatesPage.jsx        # Журнал обновлений (Changelog)
│   ├── App.jsx              # Главный компонент и маршрутизация страниц
│   ├── index.css            # Глобальные стили, шрифты, анимации и 3D-перспектива
│   └── main.jsx             # Точка входа React
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Локальный запуск
```bash
npm install
npm run dev
```

## Деплой на Cloudflare Pages через GitHub
1. Загрузите содержимое проекта в репозиторий GitHub.
2. В панели управления **Cloudflare Pages** выберите **Create a project → Connect to Git** и укажите репозиторий.
3. Настройки сборки:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Нажмите **Save and Deploy**.
