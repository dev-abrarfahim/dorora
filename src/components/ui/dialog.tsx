import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { sound } from '@/lib/audio';

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onOpenChange(false);
      }
    };

    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-on-background/40 backdrop-blur-sm"
            onClick={() => {
              sound.playPop();
              onOpenChange(false);
            }}
          />
          {/* Dialog Container */}
          <div className="relative z-10 w-full max-w-lg">
            {children}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export interface DialogContentProps {
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export const DialogContent: React.FC<DialogContentProps> = ({
  className,
  children,
  onClose,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 12 }}
      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      className={cn(
        "relative w-full rounded-2xl bg-surface-container-lowest p-6 sm:p-8 shadow-2xl border border-outline-variant/40",
        className
      )}
    >
      {onClose && (
        <button
          onClick={() => {
            sound.playPop();
            onClose();
          }}
          className="absolute right-4 top-4 w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      )}
      {children}
    </motion.div>
  );
};
