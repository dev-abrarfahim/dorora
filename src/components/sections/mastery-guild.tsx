import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, BookOpen, GraduationCap } from 'lucide-react';
import { sound, speakWord } from '@/lib/audio';

export const MasteryGuild: React.FC = () => {
  const handleMascotClick = () => {
    sound.playSuccess();
    speakWord("Congratulations, Explorer! Your Dorora scroll is certified!");
  };

  return (
    <section id="guild" className="w-full py-space-xl lg:py-[5rem] bg-surface">
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
              {/* Certification Seal Chip */}
              <div className="w-full bg-surface-container-high rounded-lg p-space-md shadow-sm mb-space-md flex items-center justify-between border border-outline-variant/30">
                <div className="flex items-center gap-space-sm text-left">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold block">
                      Explorer Level 2
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Ready for Conversational Quests
                    </span>
                  </div>
                </div>
                <span className="px-space-sm py-space-xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-sm">
                  Certified
                </span>
              </div>

              {/* Image: Mascot with Graduation Cap & Diploma */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 my-1">
                <img
                  src="/assets/mascot/wearing-graduation-cap.png"
                  alt="Dorora mascot wearing graduation cap and round glasses holding diploma scroll"
                  className="w-full h-full object-contain select-none cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-out"
                  onClick={handleMascotClick}
                  title="Click to celebrate graduation milestone!"
                />
              </div>

              {/* Guild Credential Note */}
              <div className="w-full text-center pt-space-md border-t border-outline-variant/20">
                <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                  "Every milestone unlocks genuine speaking confidence, one scroll at a time."
                </p>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-5 flex flex-col gap-space-md text-center lg:text-left">
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container text-primary font-label-sm text-label-sm uppercase tracking-wider self-center lg:self-start font-bold">
              <GraduationCap className="w-4 h-4" />
              Dorora Mastery Guild
            </div>

            <div className="inline-block">
              <span className="font-headline-xl text-headline-xl text-primary font-extrabold tracking-tight lowercase block leading-[1.15]">
                playful steps to real fluency.
              </span>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[440px]">
              Every quest unlocks certified milestones from simple chats to confident debates. Collect your Dorora scrolls as your fluency blooms.
            </p>

            <div className="pt-space-xs flex flex-col gap-space-xs max-w-[400px]">
              <div className="flex items-center gap-space-sm p-space-xs">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Progressive milestone scrolls
                </span>
              </div>
              <div className="flex items-center gap-space-sm p-space-xs">
                <BookOpen className="w-5 h-5 text-primary shrink-0" />
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Real-life dialogue readiness
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
