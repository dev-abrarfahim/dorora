import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sound, speakWord } from '@/lib/audio';

interface HeroSectionProps {
  onStartQuest: () => void;
  onMeetDorora: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartQuest, onMeetDorora }) => {
  const handleHelloClick = () => {
    sound.playSpark();
    speakWord("Hello! Welcome to Dorora!");
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-surface-container-lowest pt-4 lg:pt-8">
      <div className="max-w-[1140px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-xl lg:pb-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Mascot Presentation Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-center justify-center relative order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
              {/* Ambient Glow Aura */}
              <div className="absolute inset-4 rounded-full bg-surface-container blur-3xl opacity-70 pointer-events-none"></div>

              {/* Mascot Hero Image (Local high-res asset) */}
              <img
                src="/assets/mascot/waving-cheerfully.png"
                alt="Dorora mascot waving cheerfully with a friendly Hello bubble"
                className="relative z-10 w-full h-full object-contain select-none drop-shadow-md cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-out"
                onClick={handleHelloClick}
                title="Click Dorora to say Hello!"
              />

              {/* Speech Bubble Floating Badge */}
              <button
                onClick={handleHelloClick}
                className="absolute -top-2 left-4 sm:left-6 z-20 bg-surface-container-lowest rounded-full px-space-md py-space-xs shadow-[0_4px_16px_rgba(24,20,69,0.08)] border border-outline-variant/30 flex items-center gap-space-xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-pointer"
                title="Hear Dorora speak!"
              >
                <span className="text-[20px]">👋</span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">Hello!</span>
              </button>

              {/* Vocab Chip: Bottom Left */}
              <div className="absolute -bottom-2 -left-2 sm:left-0 z-20 bg-surface-container-lowest rounded-DEFAULT px-space-md py-space-xs shadow-[0_4px_16px_rgba(24,20,69,0.06)] border border-outline-variant/30 flex items-center gap-space-xs hover:-translate-y-0.5 transition-transform duration-200">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim"></span>
                <span className="font-label-md text-label-md text-on-surface">Intuitive Quest</span>
              </div>

              {/* Vocab Chip: Top Right */}
              <div className="absolute top-1/4 -right-2 sm:-right-4 z-20 bg-surface-container-lowest rounded-full px-space-md py-space-xs shadow-[0_4px_16px_rgba(24,20,69,0.06)] border border-outline-variant/30 flex items-center gap-space-xs hover:-translate-y-0.5 transition-transform duration-200">
                <Sparkles className="w-4 h-4 text-tertiary fill-tertiary" />
                <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wide font-bold">
                  Spark +25
                </span>
              </div>
            </div>
          </motion.div>

          {/* Typography & CTA Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-space-lg order-1 lg:order-2"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">
              <span className="material-symbols-outlined text-[16px]">waving_hand</span>
              Dorora welcomes you to intuitive English
            </div>

            {/* Headline */}
            <h1 className="font-headline-xl text-headline-xl text-on-background tracking-tight max-w-[560px] font-extrabold leading-[1.15]">
              English that speaks to you.
            </h1>

            {/* Description */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[480px]">
              Say hello to zero cramming. Learn English naturally through play, voice, and instant smiles.
            </p>

            {/* Tactile Action Buttons */}
            <div className="w-full max-w-[380px] flex flex-col gap-space-sm pt-space-xs">
              <Button
                variant="primary"
                size="lg"
                onClick={onStartQuest}
                className="w-full flex items-center justify-center gap-space-xs text-center"
              >
                <span>Start Your First Quest</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onMeetDorora}
                className="w-full text-center"
              >
                Meet Dorora
              </Button>
            </div>

            {/* Social Proof Metric */}
            <div className="flex items-center gap-space-md pt-space-xs text-on-surface-variant">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm ring-2 ring-surface-container-lowest">
                  D
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm ring-2 ring-surface-container-lowest">
                  R
                </div>
                <div className="w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm ring-2 ring-surface-container-lowest">
                  A
                </div>
              </div>
              <div className="flex items-center gap-1 font-body-sm text-body-sm">
                <span className="font-bold text-on-surface">52M+</span> cheerful quest explorers
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
