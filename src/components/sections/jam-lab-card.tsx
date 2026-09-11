import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, Headphones, Activity } from 'lucide-react';
import { sound, speakWord } from '@/lib/audio';

export const JamLabCard: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [flowPercent, setFlowPercent] = useState(98);

  const toggleListening = () => {
    sound.playPop();
    if (!isListening) {
      setIsListening(true);
      speakWord("Nice rhythm! Try saying: Let's have a great day!");
      setFlowPercent(99);
    } else {
      setIsListening(false);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isListening) {
      interval = setInterval(() => {
        setFlowPercent(Math.floor(96 + Math.random() * 4));
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isListening]);

  return (
    <section id="jam-lab" className="w-full py-space-xl lg:py-[5rem] bg-surface">
      <div className="max-w-[1140px] mx-auto px-margin-mobile lg:px-margin">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"
        >
          {/* Left Visual Card */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[460px] bg-surface-container-lowest rounded-xl p-space-lg shadow-soft-card flex flex-col items-center border border-outline-variant/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out">
              {/* Voice Frequency Visualizer */}
              <div className="w-full flex items-center justify-center gap-1.5 py-space-sm mb-space-sm h-14">
                {[
                  { height: 'h-5', delay: 0.05, color: 'bg-secondary-container' },
                  { height: 'h-9', delay: 0.1, color: 'bg-primary' },
                  { height: 'h-12', delay: 0.15, color: 'bg-primary-container' },
                  { height: 'h-7', delay: 0.2, color: 'bg-primary' },
                  { height: 'h-10', delay: 0.12, color: 'bg-surface-tint' },
                  { height: 'h-4', delay: 0.18, color: 'bg-secondary-container' },
                  { height: 'h-8', delay: 0.08, color: 'bg-primary' },
                  { height: 'h-5', delay: 0.22, color: 'bg-secondary-container' },
                ].map((bar, index) => (
                  <span
                    key={index}
                    className={`w-1.5 rounded-full ${bar.color} ${bar.height} transition-transform duration-300 ${
                      isListening ? 'animate-pulse' : 'opacity-80'
                    }`}
                  />
                ))}
              </div>

              {/* Mascot Wearing Sky-Blue Headphones Image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 my-1">
                <img
                  src="/assets/mascot/wearing-headphones.png"
                  alt="Dorora mascot wearing chunky sky-blue headphones speaking into studio mic with soundwaves"
                  className="w-full h-full object-contain select-none cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-out"
                  onClick={toggleListening}
                  title="Click to toggle speaking practice"
                />
              </div>

              {/* Live Feedback Dialog Box */}
              <div className="w-full bg-surface-container-high rounded-lg p-space-md mt-space-md flex items-center justify-between border border-outline-variant/30">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[24px]">graphic_eq</span>
                  <div className="text-left">
                    <span className="font-body-md text-body-md text-on-surface font-semibold block">
                      Vocal Flow
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {flowPercent}% Natural Cadence
                    </span>
                  </div>
                </div>
                <span className="px-space-sm py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold shadow-sm">
                  Friendly AI Ear
                </span>
              </div>

              {/* Interactive Practice Button */}
              <button
                onClick={toggleListening}
                className="mt-3 inline-flex items-center gap-2 text-xs font-label-sm uppercase tracking-wider text-secondary font-bold hover:text-primary transition-colors cursor-pointer"
              >
                {isListening ? (
                  <>
                    <MicOff className="w-4 h-4 text-error" />
                    <span>Listening Active • Click to Pause</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-4 h-4 text-secondary" />
                    <span>Click Mascot to Practice Voice</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-5 flex flex-col gap-space-md text-center lg:text-left">
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider self-center lg:self-start font-bold">
              <Headphones className="w-4 h-4" />
              Real-Voice Jam Lab
            </div>

            <div className="inline-block">
              <span className="font-headline-xl text-headline-xl text-secondary font-extrabold tracking-tight lowercase block leading-[1.15]">
                speak freely, zero stage fright.
              </span>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[440px]">
              Talk with Dorora just like a friend. Dorora's gentle pitch &amp; rhythm listener catches your nuance without ever judging your accent.
            </p>

            <div className="pt-space-xs">
              <div className="inline-flex items-center gap-space-sm px-space-md py-space-sm rounded-full bg-surface-container-high text-on-surface shadow-sm">
                <Activity className="w-5 h-5 text-primary" />
                <span className="font-label-md text-label-md font-bold">
                  Safe-Space Speaking Companion
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
