import React from 'react';
import { cn } from '@/lib/utils';
import { sound } from '@/lib/audio';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'chip';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  soundEffect?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', soundEffect = true, onClick, children, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (soundEffect) {
        sound.playPop();
      }
      onClick?.(e);
    };

    const baseStyles = "inline-flex items-center justify-center font-label-lg uppercase tracking-wider font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary select-none disabled:opacity-50 disabled:pointer-events-none";

    const variantStyles = {
      primary: "tactile-btn-primary rounded-full bg-primary text-on-primary hover:brightness-105 active:brightness-95",
      secondary: "tactile-btn-secondary rounded-full bg-surface-container-lowest text-primary hover:bg-surface-container-low",
      tertiary: "tactile-btn-tertiary rounded-full bg-tertiary-fixed text-on-tertiary-fixed hover:brightness-105",
      ghost: "rounded-full bg-transparent hover:bg-surface-container text-on-surface",
      chip: "tactile-btn-secondary rounded-DEFAULT bg-surface-container-lowest text-on-surface font-label-md capitalize hover:bg-surface-container",
    };

    const sizeStyles = {
      sm: "px-space-md py-space-xs text-label-sm h-9",
      md: "px-space-lg py-space-md text-label-md h-12",
      lg: "px-space-xl py-space-md text-label-lg h-14",
      icon: "w-10 h-10 p-0 rounded-full",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
