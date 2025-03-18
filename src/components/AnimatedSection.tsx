
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggered?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ id, title, children, className, delay = 0, staggered = false }) => {
  return (
    <section 
      id={id} 
      className={cn(
        "py-20 px-6 md:px-12 max-w-7xl mx-auto",
        className
      )}
    >
      <div
        className={cn(
          "appear",
          delay > 0 ? `delay-${delay}` : ""
        )}
      >
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">{title}</h2>
          <div className="w-20 h-0.5 bg-primary/20"></div>
        </div>
        
        <div className={staggered ? "stagger-fade-in" : ""}>{children}</div>
      </div>
    </section>
  );
};

export default AnimatedSection;
