# 🎒 Dorora — English That Speaks to You

> A joyful, tactile, and interactive English language learning platform built with **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Vite**.

![Dorora Banner](public/assets/mascot/waving-cheerfully.png)

## ✨ Features

- **Tactile 3D Design Language:** Faithful reproduction of the Stitch design system with custom Material 3 color palettes (`surface`, `surface-container-*`, `primary`, `secondary`, `tertiary`) and physical press-down button feedback (`.tactile-btn-primary`, `.tactile-btn-secondary`, `.tactile-btn-tertiary`).
- **Subtle, Refined Motion:** Smooth viewport reveals, gentle hover card elevations, and controlled micro-interactions that feel responsive and premium.
- **Local High-Res Mascot Renders:** Beautiful 3D mascot characters bundled locally in `public/assets/mascot/` for offline-ready, high-speed rendering.
- **Interactive Speech Synthesis:** Listen to native vocabulary pronunciations ("Apple") with Web Speech API integration.
- **Interactive Quests & Onboarding Modal:** Multi-step quest dialog with goal selection and first tactile speaking practice.
- **Dynamic Flame Streak Runner:** Interactive weekly momentum tracker with clickable day goals and score calculation.
- **High-Five Club Celebration:** Real-time high-five counter with festive confetti bursts and tactile audio feedback.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/dev-abrarfahim/dorora.git

# Navigate into project directory
cd dorora

# Install dependencies
npm install
```

### Running Locally

```bash
# Start Vite development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Building for Production

```bash
# Type check and build bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) + [Google Material Symbols](https://fonts.google.com/icons)
- **Effects:** [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Audio:** Web Audio API & Web Speech API

---

## 📄 License

MIT © 2026 Dorora Learning Inc.
