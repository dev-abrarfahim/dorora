import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, ShieldCheck } from 'lucide-react';
import { sound } from '@/lib/audio';
import { fireHighFiveConfetti } from '@/lib/confetti';
import { cn } from '@/lib/utils';

export const FlameStreakCard: React.FC = () => {
  const [days, setDays] = useState([
    { label: 'M', completed: true },
    { label: 'T', completed: true },
    { label: 'W', completed: true },
    { label: 'T', completed: true },
    { label: 'F', completed: true },
    { label: 'S', completed: true },
    { label: 'S', completed: true, isCurrent: true },
  ]);

  const [flameLevel, setFlameLevel] = useState(7);
  const [flameEnergy, setFlameEnergy] = useState(40);

  const toggleDay = (index: number, e: React.MouseEvent) => {
    sound.playPop();
    const updated = [...days];
    updated[index].completed = !updated[index].completed;
    setDays(updated);

    const completedCount = updated.filter((d) => d.completed).length;
    setFlameLevel(completedCount);
    setFlameEnergy(completedCount * 6);

    if (updated[index].completed) {
      sound.playSpark();
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      fireHighFiveConfetti(rect.x / window.innerWidth, rect.y / window.innerHeight);
    }
  };

  return (
    <section id="streaks" className="w-full py-space-xl lg:py-[5rem] bg-surface-container-lowest">
      <div className="max-w-[1140px] mx-auto px-margin-mobile lg:px-margin">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"
        >
          {/* Left: Text Content */}
          <div className="lg:col-span-5 flex flex-col gap-space-md order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm uppercase tracking-wider self-center lg:self-start font-bold">
              <Flame className="w-4 h-4 text-tertiary-container fill-tertiary-container" />
              Flame Runner Streaks
            </div>

            <div className="inline-block">
              <span className="font-headline-xl text-headline-xl text-tertiary-container font-extrabold tracking-tight lowercase block leading-[1.15]">
                turn daily momentum into fire.
              </span>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[440px]">
              Build a habit that won't cool off. Keep your Flame burning every dawn with quick 3-minute power sprints and spark shields.
            </p>

            <div className="pt-space-sm flex flex-col sm:flex-row items-center lg:items-start gap-space-sm">
              <div className="flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface-container text-on-surface shadow-sm">
                <ShieldCheck className="w-5 h-5 text-tertiary" />
                <span className="font-label-md text-label-md font-semibold">
                  Active Spark Shield Included
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual: Streak Flame Card Counter */}
          <div className="lg:col-span-7 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[460px] bg-surface-container-low rounded-xl p-space-lg shadow-soft-card flex flex-col items-center border border-outline-variant/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out">
              {/* Counter Header */}
              <div className="w-full bg-surface-container-lowest rounded-lg p-space-md shadow-sm mb-space-md flex items-center justify-between border border-outline-variant/20">
                <div className="flex items-center gap-space-sm">
                  <span className="text-[26px]">🔥</span>
                  <div className="text-left">
                    <span className="font-headline-sm text-headline-sm text-tertiary font-extrabold block">
                      Flame Level {flameLevel}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Burning Bright!
                    </span>
                  </div>
                </div>
                <div className="px-space-md py-space-xs rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold shadow-sm">
                  +{flameEnergy} Flame Energy
                </div>
              </div>

              {/* Mascot Wearing Orange Athletic Headband Image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 my-1">
                <img
                  src="/assets/mascot/wearing-orange-headband.png"
                  alt="Dorora mascot wearing orange runner headband holding a blazing flame"
                  className="w-full h-full object-contain select-none cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-out"
                  onClick={(e) => {
                    sound.playSpark();
                    const rect = (e.target as HTMLElement).getBoundingClientRect();
                    fireHighFiveConfetti(rect.x / window.innerWidth, rect.y / window.innerHeight);
                  }}
                  title="Click for celebratory sparks!"
                />
              </div>

              {/* Weekly Tracker Dots */}
              <div className="flex items-center justify-between w-full pt-space-md px-space-sm border-t border-outline-variant/20">
                {days.map((day, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => toggleDay(idx, e)}
                    className="flex flex-col items-center gap-1 group focus:outline-none cursor-pointer"
                    title={`Day ${day.label}: Click to toggle`}
                  >
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                      {day.label}
                    </span>
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center font-bold text-label-sm transition-all duration-150 shadow-sm active:scale-90",
                        day.completed
                          ? day.isCurrent
                            ? "bg-tertiary text-on-tertiary shadow-sm"
                            : "bg-primary text-on-primary group-hover:brightness-105"
                          : "bg-surface-container-high text-on-surface-variant border border-outline-variant"
                      )}
                    >
                      {day.completed ? (day.isCurrent ? "🔥" : "✓") : "·"}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
