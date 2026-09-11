import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Sparkles, Hand } from 'lucide-react';
import { sound } from '@/lib/audio';
import { fireHighFiveConfetti } from '@/lib/confetti';

export const PocketDororaAndHighFive: React.FC = () => {
  const [highFiveCount, setHighFiveCount] = useState(52419820);
  const [isHighFiving, setIsHighFiving] = useState(false);

  const handleHighFive = (e: React.MouseEvent) => {
    sound.playHighFive();
    setHighFiveCount((prev) => prev + 1);
    setIsHighFiving(true);
    setTimeout(() => setIsHighFiving(false), 200);

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    fireHighFiveConfetti(rect.x / window.innerWidth, rect.y / window.innerHeight);
  };

  return (
    <section id="high-fives" className="w-full py-space-xl lg:py-[5rem] bg-surface-container-lowest">
      <div className="max-w-[1140px] mx-auto px-margin-mobile lg:px-margin">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Title: Pocket Dorora */}
          <div className="text-center max-w-[640px] mx-auto mb-space-xl">
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container text-primary font-label-sm text-label-sm uppercase tracking-wider mb-space-xs font-bold">
              <Smartphone className="w-4 h-4" />
              Pocket Dorora
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight block">
              your pocket tutor, everywhere you go.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              Sneak in a 2-minute dialogue while waiting for coffee or on the train. Dorora pops right out whenever you have a minute.
            </p>
          </div>

          {/* Center Mascot App Graphic: Peeking behind smartphone */}
          <div className="relative max-w-[600px] mx-auto flex flex-col items-center justify-center mb-space-xl">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
              <img
                src="/assets/mascot/peeking-smartphone.png"
                alt="Dorora mascot winking and playfully peeking out from behind a sleek smartphone"
                className="w-full h-full object-contain select-none cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
                onClick={handleHighFive}
                title="Give Dorora a high-five!"
              />
            </div>

            {/* App Store Download Badges */}
            <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-md">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  sound.playPop();
                }}
                className="tactile-btn-secondary px-space-lg py-space-sm rounded-full bg-surface-container-lowest flex items-center gap-space-sm border border-outline-variant/30 hover:bg-surface-container hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[24px]">phone_iphone</span>
                <div className="flex flex-col text-left">
                  <span className="font-label-sm text-[10px] leading-3 uppercase text-on-surface-variant font-semibold">
                    Download on the
                  </span>
                  <span className="font-label-md text-label-md text-on-surface font-bold">
                    App Store
                  </span>
                </div>
              </a>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  sound.playPop();
                }}
                className="tactile-btn-secondary px-space-lg py-space-sm rounded-full bg-surface-container-lowest flex items-center gap-space-sm border border-outline-variant/30 hover:bg-surface-container hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[24px]">android</span>
                <div className="flex flex-col text-left">
                  <span className="font-label-sm text-[10px] leading-3 uppercase text-on-surface-variant font-semibold">
                    Get it on
                  </span>
                  <span className="font-label-md text-label-md text-on-surface font-bold">
                    Google Play
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Social Proof Metrics: The High-Five Club */}
          <div className="bg-surface-container-low rounded-xl p-space-lg lg:p-space-xl border border-outline-variant/30 shadow-soft-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              {/* Mascot Celebration */}
              <div className="lg:col-span-4 flex items-center justify-center">
                <div
                  className={`relative w-48 h-48 sm:w-56 sm:h-56 cursor-pointer transition-transform duration-150 ${
                    isHighFiving ? 'scale-105' : 'hover:scale-[1.02]'
                  }`}
                  onClick={handleHighFive}
                  title="Tap to exchange a High-Five!"
                >
                  <img
                    src="/assets/mascot/for-a-high-five.png"
                    alt="Dorora mascot extending open hand for a high-five with colorful confetti"
                    className="w-full h-full object-contain select-none"
                  />
                </div>
              </div>

              {/* Numbers & The High-Five Club Claim */}
              <div className="lg:col-span-8 flex flex-col gap-space-md text-center lg:text-left">
                <div>
                  <span className="font-label-md text-label-md text-primary uppercase tracking-wider font-bold">
                    The High-Five Club
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs font-black">
                    celebrate every single win.
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-[500px]">
                    Over 50 million high-fives exchanged. No penalties, no shame—just pure encouragement and friendly claps from Dorora and friends.
                  </p>
                </div>

                {/* Interactive High-Five Action Button */}
                <div className="flex justify-center lg:justify-start">
                  <button
                    onClick={handleHighFive}
                    className="tactile-btn-primary px-space-lg py-space-sm rounded-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider flex items-center gap-2 select-none active:translate-y-[2px] transition-all"
                  >
                    <Hand className="w-5 h-5 text-tertiary-fixed" />
                    <span>Give Dorora a High-Five! 🖐️</span>
                  </button>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-space-md pt-space-sm border-t border-outline-variant/30">
                  <div className="flex flex-col">
                    <span className="font-headline-xl text-headline-xl text-primary font-black">
                      {(highFiveCount / 1000000).toFixed(1)}M+
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                      High-Fives Given
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-xl text-headline-xl text-primary font-black flex items-center justify-center lg:justify-start gap-1">
                      4.9 <Sparkles className="w-5 h-5 text-tertiary-fixed-dim fill-tertiary-fixed-dim inline" />
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                      Learner Love
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-xl text-headline-xl text-primary font-black">
                      100%
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                      Pressure-Free
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
