import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, CheckCircle2, Sparkles } from 'lucide-react';
import { sound, speakWord } from '@/lib/audio';
import { fireHighFiveConfetti } from '@/lib/confetti';
import { cn } from '@/lib/utils';

export const VisualTapCard: React.FC = () => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [sparkPoints, setSparkPoints] = useState(15);
  const [hasSparked, setHasSparked] = useState(false);

  const handlePronounce = () => {
    sound.playPop();
    speakWord("Apple. A crisp, fresh red apple.");
  };

  const handleWordSelect = (word: 'apple' | 'cherry', e: React.MouseEvent) => {
    if (word === 'apple') {
      setSelectedWord('apple');
      sound.playSuccess();
      if (!hasSparked) {
        setHasSparked(true);
        setSparkPoints((prev) => prev + 15);
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        fireHighFiveConfetti(rect.x / window.innerWidth, rect.y / window.innerHeight);
      }
    } else {
      setSelectedWord('cherry');
      sound.playPop();
    }
  };

  return (
    <section id="quests" className="w-full py-space-xl lg:py-[5rem] bg-surface-container-lowest">
      <div className="max-w-[1140px] mx-auto px-margin-mobile lg:px-margin">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"
        >
          {/* Left: Punchy Copy */}
          <div className="lg:col-span-5 flex flex-col gap-space-md order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container text-primary font-label-sm text-label-sm uppercase tracking-wider self-center lg:self-start font-bold">
              <span className="material-symbols-outlined text-[16px]">touch_app</span>
              Visual Tap &amp; Imprint
            </div>

            <div className="inline-block">
              <span className="font-headline-xl text-headline-xl text-primary font-extrabold tracking-tight lowercase block leading-[1.15]">
                see it. touch it. never forget it.
              </span>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[440px]">
              Bypass translations. Connect words directly to vivid real-world objects and feelings so English sticks on your very first try.
            </p>

            <div className="pt-space-sm flex flex-wrap items-center justify-center lg:justify-start gap-space-md">
              <div className="flex items-center gap-space-xs">
                <CheckCircle2 className="w-5 h-5 text-primary fill-primary/20" />
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Tactile Snap Memory
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <CheckCircle2 className="w-5 h-5 text-primary fill-primary/20" />
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Instant mental imprint
                </span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Frame Card with Mascot */}
          <div className="lg:col-span-7 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[460px] bg-surface-container-low rounded-xl p-space-lg shadow-soft-card flex flex-col items-center border border-outline-variant/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out">
              {/* Vocabulary Interactive Header Display */}
              <div className="w-full bg-surface-container-lowest rounded-lg p-space-md shadow-sm mb-space-md flex items-center justify-between border border-outline-variant/20">
                <div className="flex items-center gap-space-sm">
                  <button
                    onClick={handlePronounce}
                    aria-label="Listen to word"
                    className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-[0_2px_0_0_#3622ca] active:translate-y-0.5 hover:brightness-105 transition-all cursor-pointer"
                    title="Click to hear native pronunciation"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                  <div className="text-left">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold block">
                      Picture Quest: Apple
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Tap what is fresh &amp; crisp
                    </span>
                  </div>
                </div>

                <div className="px-space-sm py-space-xs rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 fill-on-tertiary-fixed" />
                  <span>+{sparkPoints} Spark</span>
                </div>
              </div>

              {/* Mascot Holding Wooden Frame Image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 my-2">
                <img
                  src="/assets/mascot/holding-wooden-frame.png"
                  alt="Dorora mascot pointing proudly at a wooden picture frame showing a red apple"
                  className="w-full h-full object-contain select-none cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-out"
                  onClick={handlePronounce}
                  title="Click to hear pronunciation"
                />
              </div>

              {/* Word Selection Chips */}
              <div className="grid grid-cols-2 gap-space-sm w-full pt-space-md">
                <button
                  onClick={(e) => handleWordSelect('apple', e)}
                  className={cn(
                    "font-label-md text-label-md py-space-sm rounded-DEFAULT text-center transition-all duration-150 flex items-center justify-center gap-space-xs cursor-pointer select-none active:translate-y-0.5",
                    selectedWord === 'apple'
                      ? "bg-primary text-on-primary shadow-[0_2px_0_0_#3622ca] font-bold"
                      : "bg-surface-container-lowest text-primary shadow-[0_2px_0_0_#c7c4d8] hover:bg-surface-container hover:-translate-y-0.5"
                  )}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {selectedWord === 'apple' ? 'check' : 'touch_app'}
                  </span>
                  <span>an apple</span>
                </button>

                <button
                  onClick={(e) => handleWordSelect('cherry', e)}
                  className={cn(
                    "font-label-md text-label-md py-space-sm rounded-DEFAULT text-center transition-all duration-150 select-none cursor-pointer active:translate-y-0.5",
                    selectedWord === 'cherry'
                      ? "bg-error-container text-on-error-container ring-1 ring-error shadow-sm"
                      : "bg-surface-container-lowest text-on-surface-variant shadow-[0_2px_0_0_#c7c4d8] opacity-60 hover:opacity-100 hover:bg-surface-container hover:-translate-y-0.5"
                  )}
                >
                  <span>a cherry</span>
                </button>
              </div>

              {/* Interactive Help Hint */}
              {selectedWord === 'apple' && (
                <div className="mt-3 text-center text-primary font-body-sm font-bold flex items-center gap-1.5 animate-in fade-in duration-200">
                  <Sparkles className="w-4 h-4 text-tertiary-fixed-dim fill-tertiary-fixed-dim" />
                  <span>Spot on! Imprinted into tactile memory.</span>
                </div>
              )}
              {selectedWord === 'cherry' && (
                <div className="mt-3 text-center text-on-surface-variant font-body-sm animate-in fade-in duration-200">
                  Almost! Look at the red fruit in Dorora's frame.
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
