import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FinalCtaProps {
  onJumpIn: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onJumpIn }) => {
  return (
    <section className="w-full py-space-xl lg:py-[6rem] bg-surface-container-lowest">
      <div className="max-w-[1140px] mx-auto px-margin-mobile lg:px-margin">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-surface-container rounded-xl p-space-xl lg:p-[4rem] text-center flex flex-col items-center gap-space-lg overflow-hidden border border-outline-variant/30 shadow-soft-card hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out"
        >
          {/* Subtle Ambient Glow Layers */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary-fixed blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-secondary-fixed blur-3xl opacity-50 pointer-events-none" />

          {/* Heading & Subtext */}
          <div className="relative z-10 max-w-[640px] flex flex-col items-center gap-space-sm">
            <h2 className="font-headline-xl text-headline-xl text-on-surface font-black tracking-tight leading-[1.15]">
              Ready for your first high-five?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[480px]">
              Start speaking your first sentence in under 3 minutes. Zero stress, all joy.
            </p>
          </div>

          {/* Action Button & Note */}
          <div className="relative z-10 flex flex-col items-center gap-space-xs w-full max-w-[360px]">
            <Button
              variant="primary"
              size="lg"
              onClick={onJumpIn}
              className="w-full flex items-center justify-center gap-space-xs text-center"
            >
              <span>Jump In — It's Free</span>
              <PartyPopper className="w-5 h-5 ml-1 text-tertiary-fixed" />
            </Button>
            <span className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs font-medium">
              No credit card • Play on web or mobile
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
