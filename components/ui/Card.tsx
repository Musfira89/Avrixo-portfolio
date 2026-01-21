import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glassmorphism?: boolean;
}

export const Card = ({ children, className, hover = true, glassmorphism = true }: CardProps) => {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300';
  const glassStyles = glassmorphism ? 'glass' : 'bg-bg-secondary border border-white/10';
  const hoverStyles = hover ? 'hover:scale-105 hover:border-brand-blue/50 cursor-pointer' : '';

  return (
    <div className={cn(baseStyles, glassStyles, hoverStyles, className)}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader = ({ children, className }: CardHeaderProps) => {
  return <div className={cn('mb-4', className)}>{children}</div>;
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className }: CardTitleProps) => {
  return <h3 className={cn('text-2xl font-bold text-text-primary', className)}>{children}</h3>;
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription = ({ children, className }: CardDescriptionProps) => {
  return <p className={cn('text-text-secondary leading-relaxed', className)}>{children}</p>;
};