import React, { useState } from 'react';
import { Menu, X, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onStartQuest: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onStartQuest }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundMuted, setSoundMuted] = useState(false);

  const toggleSound = () => {
    setSoundMuted(!soundMuted);
  };

  const navLinks = [
    { label: 'Quests', href: '#quests' },
    { label: 'Method', href: '#method' },
    { label: 'Jam Lab', href: '#jam-lab' },
    { label: 'Streaks', href: '#streaks' },
    { label: 'High-Five Club', href: '#high-fives' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/60 transition-all duration-200">
      <div className="h-20 max-w-[1140px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
        {/* Logo */}
        <div className="flex items-center gap-space-md">
          <a
            href="#"
            className="flex items-center gap-space-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
            aria-label="Dorora Home"
          >
            <div className="w-10 h-10 rounded-DEFAULT bg-primary flex items-center justify-center text-on-primary shadow-[0_3px_0_0_#3622ca] group-hover:scale-105 group-active:translate-y-0.5 transition-all">
              <span className="material-symbols-outlined text-[24px]">school</span>
            </div>
            <span className="font-headline-md text-headline-md text-primary tracking-tight font-extrabold lowercase">
              dorora
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-space-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-space-sm">
          {/* Sound FX Toggle */}
          <button
            onClick={toggleSound}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all"
            title={soundMuted ? "Sound muted" : "Tactile sounds active"}
            aria-label={soundMuted ? "Unmute sounds" : "Mute sounds"}
          >
            {soundMuted ? <VolumeX className="w-5 h-5 text-outline" /> : <Volume2 className="w-5 h-5 text-primary" />}
          </button>

          {/* Start Quest Primary CTA */}
          <Button
            variant="primary"
            size="sm"
            onClick={onStartQuest}
            className="hidden sm:inline-flex gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-tertiary-fixed" />
            <span>Start Quest</span>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-b border-outline-variant/60 px-margin-mobile py-space-lg flex flex-col gap-space-md shadow-lg animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-space-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-space-md py-space-sm rounded-DEFAULT text-on-surface font-label-md hover:bg-surface-container transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-space-xs border-t border-outline-variant/40">
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                onStartQuest();
              }}
              className="w-full gap-2"
            >
              <Sparkles className="w-4 h-4 text-tertiary-fixed" />
              <span>Start Your First Quest</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
