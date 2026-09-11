import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/60 py-space-xl">
      <div className="max-w-[1140px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-gutter">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-xs text-primary">
              <div className="w-7 h-7 rounded-DEFAULT bg-primary flex items-center justify-center text-on-primary shadow-[0_2px_0_0_#3622ca]">
                <span className="material-symbols-outlined text-[18px]">school</span>
              </div>
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-extrabold lowercase">
                dorora
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              The joyful, playfully tactile way to master conversational English daily.
            </p>
          </div>

          {/* About */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-bold">
              About
            </span>
            <nav className="flex flex-col gap-space-xs">
              <a href="#hero" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                Meet Dorora
              </a>
              <a href="#method" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                Our Mission
              </a>
              <a href="#method" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                Tactile Learning
              </a>
              <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                Careers
              </a>
            </nav>
          </div>

          {/* Quests */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-bold">
              Quests
            </span>
            <nav className="flex flex-col gap-space-xs">
              <a href="#quests" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                Visual Tap Quests
              </a>
              <a href="#jam-lab" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                Real-Voice Jam Lab
              </a>
              <a href="#streaks" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                Flame Runner Streaks
              </a>
              <a href="#guild" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                Dorora Mastery Guild
              </a>
            </nav>
          </div>

          {/* Community */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-bold">
              Community
            </span>
            <nav className="flex flex-col gap-space-xs">
              <a href="#high-fives" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                The High-Five Club
              </a>
              <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                Friendly Guidelines
              </a>
              <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                Learner Stories
              </a>
              <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                Live Jam Sessions
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-bold">
              Legal
            </span>
            <nav className="flex flex-col gap-space-xs">
              <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                Help Center
              </a>
              <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                Cookie Preferences
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-md border-t border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant">public</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              Language:
            </span>
            <select
              aria-label="Select Language"
              className="bg-transparent font-label-sm text-label-sm text-on-surface font-bold cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary rounded px-1 py-0.5"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="ja">日本語</option>
              <option value="ko">한국어</option>
            </select>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2026 Dorora Learning Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
