import React, { useState } from 'react';
import { Volume2, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { sound, speakWord } from '@/lib/audio';
import { fireHighFiveConfetti } from '@/lib/confetti';
import { cn } from '@/lib/utils';

interface QuestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const QuestModal: React.FC<QuestModalProps> = ({ open, onOpenChange }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [goal, setGoal] = useState<string>('chats');
  const [testCompleted, setTestCompleted] = useState(false);

  const resetModal = () => {
    setStep(1);
    setGoal('chats');
    setTestCompleted(false);
  };

  const handleListen = () => {
    sound.playPop();
    speakWord("Good morning, world! I am ready to speak!");
  };

  const handleCompleteTest = (e: React.MouseEvent) => {
    sound.playSuccess();
    setTestCompleted(true);
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    fireHighFiveConfetti(rect.x / window.innerWidth, rect.y / window.innerHeight);
    setTimeout(() => {
      setStep(3);
    }, 600);
  };

  const goals = [
    { id: 'chats', label: 'Casual Friendly Chats', icon: '💬' },
    { id: 'travel', label: 'Spontaneous Travel', icon: '✈️' },
    { id: 'career', label: 'Meetings & Work', icon: '💼' },
    { id: 'fun', label: 'Brain Spark & Games', icon: '⚡' },
  ];

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        if (!val) resetModal();
        onOpenChange(val);
      }}
    >
      <DialogContent onClose={() => onOpenChange(false)}>
        {step === 1 && (
          <div className="flex flex-col items-center text-center gap-space-md">
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center p-2 shadow-inner">
              <img
                src="/assets/mascot/waving-cheerfully.png"
                alt="Dorora"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-extrabold">
                Welcome to Dorora!
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                What brings you to your first quest today?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm w-full pt-space-xs text-left">
              {goals.map((g) => (
                <button
                  key={g.id}
                  onClick={() => {
                    sound.playPop();
                    setGoal(g.id);
                  }}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-DEFAULT border transition-all text-left cursor-pointer",
                    goal === g.id
                      ? "border-primary bg-surface-container text-primary font-bold shadow-sm"
                      : "border-outline-variant/40 hover:bg-surface-container-low text-on-surface"
                  )}
                >
                  <span className="text-xl">{g.icon}</span>
                  <span className="text-sm font-label-md">{g.label}</span>
                </button>
              ))}
            </div>

            <Button
              variant="primary"
              size="md"
              onClick={() => {
                sound.playPop();
                setStep(2);
              }}
              className="w-full mt-2"
            >
              <span>Continue Quest</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col items-center text-center gap-space-md">
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center p-2 shadow-inner">
              <img
                src="/assets/mascot/wearing-headphones.png"
                alt="Dorora listening"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-extrabold">
                Say Your First Phrase
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Zero pressure. Tap to hear Dorora, then repeat!
              </p>
            </div>

            {/* Phrase Card */}
            <div className="w-full bg-surface-container-low p-4 rounded-DEFAULT border border-outline-variant/30 flex items-center justify-between">
              <div className="text-left">
                <span className="font-headline-sm text-headline-sm text-primary font-bold block">
                  "Good morning, world!"
                </span>
                <span className="text-xs text-on-surface-variant">Tap the speaker to hear</span>
              </div>
              <button
                onClick={handleListen}
                className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-tactile-primary active:scale-95 transition-all"
                title="Hear phrase"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={handleCompleteTest}
              className="w-full mt-2 flex items-center justify-center gap-2"
            >
              {testCompleted ? (
                <>
                  <Check className="w-5 h-5 text-tertiary-fixed" />
                  <span>Brilliant! Perfect Spark!</span>
                </>
              ) : (
                <>
                  <span>I Spoke It! 🖐️</span>
                </>
              )}
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center text-center gap-space-md py-2">
            <div className="w-24 h-24 rounded-full bg-surface-container flex items-center justify-center p-3 shadow-inner">
              <img
                src="/assets/mascot/wearing-graduation-cap.png"
                alt="Dorora graduate"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1 text-xs uppercase font-bold text-tertiary bg-tertiary-fixed px-3 py-0.5 rounded-full mb-2">
                <Sparkles className="w-3.5 h-3.5 fill-tertiary" />
                <span>Quest 1 Complete!</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-black">
                You're officially an Explorer!
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-[320px]">
                You've unlocked your first flame streak and gained <strong>+25 Sparks</strong>.
              </p>
            </div>

            <Button
              variant="primary"
              size="md"
              onClick={() => {
                sound.playPop();
                onOpenChange(false);
                resetModal();
              }}
              className="w-full mt-2"
            >
              Start Exploring Dorora
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
