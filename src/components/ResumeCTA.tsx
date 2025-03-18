
import React from 'react';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResumeCTAProps {
  className?: string;
}

const ResumeCTA: React.FC<ResumeCTAProps> = ({ className }) => {
  return (
    <a
      href="/Resume.pdf"
      className={cn(
        "inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg",
        "transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-md",
        "group focus:outline-none focus:ring-2 focus:ring-primary/70 focus:ring-offset-2",
        className
      )}
      download="Resume.pdf"
    >
      <span className="font-medium">Download CV</span>
      <Download size={18} className="transition-transform group-hover:translate-y-[2px]" />
    </a>
  );
};

export default ResumeCTA;
