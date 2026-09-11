import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'surface' | 'primary' | 'secondary' | 'tertiary' | 'white';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'surface',
  children,
  ...props
}) => {
  const variants = {
    surface: "bg-surface-container text-primary",
    primary: "bg-primary text-on-primary",
    secondary: "bg-secondary-fixed text-on-secondary-fixed",
    tertiary: "bg-tertiary-fixed text-on-tertiary-fixed",
    white: "bg-surface-container-lowest text-on-surface shadow-float-badge",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full font-label-sm uppercase tracking-wider font-bold select-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
