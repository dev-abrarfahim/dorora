import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { sound } from '@/lib/audio';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
];

export const LanguageRibbon: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState('en');
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSelect = (code: string) => {
    sound.playPop();
    setSelectedLang(code);
  };

  const scroll = (direction: 'left' | 'right') => {
    sound.playPop();
    if (scrollRef.current) {
      const amount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-surface-container-low py-space-md border-y border-outline-variant/30">
      <div className="max-w-[1140px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          aria-label="Previous languages"
          className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface-variant shadow-sm hover:text-primary hover:scale-105 active:scale-95 transition-all shrink-0"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable Language Chips Container */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-x-auto no-scrollbar flex items-center justify-start sm:justify-center gap-space-md select-none px-space-xs scroll-smooth"
        >
          {LANGUAGES.map((lang) => {
            const isSelected = selectedLang === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={cn(
                  "flex items-center gap-space-xs shrink-0 px-space-md py-space-xs rounded-full transition-all duration-200 cursor-pointer",
                  isSelected
                    ? "bg-surface-container-lowest text-primary shadow-sm scale-105 font-bold ring-1 ring-primary/20"
                    : "bg-surface-container-lowest/60 hover:bg-surface-container-lowest text-on-surface-variant hover:text-on-surface"
                )}
              >
                <span className="text-[18px]">{lang.flag}</span>
                <span
                  className={cn(
                    "font-label-md text-label-md uppercase tracking-wider",
                    isSelected ? "text-primary" : "text-on-surface-variant"
                  )}
                >
                  {lang.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          aria-label="Next languages"
          className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface-variant shadow-sm hover:text-primary hover:scale-105 active:scale-95 transition-all shrink-0"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
