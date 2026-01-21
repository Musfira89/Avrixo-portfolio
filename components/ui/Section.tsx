import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'primary' | 'secondary' | 'gradient';
}

export const Section = ({ 
  children, 
  className, 
  id,
  background = 'primary' 
}: SectionProps) => {
  const backgrounds = {
    primary: 'bg-bg-primary',
    secondary: 'bg-bg-secondary',
    gradient: 'bg-gradient-subtle',
  };

  return (
    <section 
      id={id}
      className={cn(
        'section-padding',
        backgrounds[background],
        className
      )}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = true,
  className 
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      'mb-16',
      centered && 'text-center',
      className
    )}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};