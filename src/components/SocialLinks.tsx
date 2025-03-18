
import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
        "hover:scale-110 hover:bg-secondary",
        className
      )}
      aria-label={label}
    >
      {icon}
    </a>
  );
};

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className, iconSize = 20 }) => {
  const socialLinks = [
    { 
      href: "https://github.com/yourusername", 
      icon: <Github size={iconSize} />, 
      label: "GitHub" 
    },
    { 
      href: "https://linkedin.com/in/yourusername", 
      icon: <Linkedin size={iconSize} />, 
      label: "LinkedIn" 
    },
    { 
      href: "https://huggingface.co/yourusername", 
      icon: <ExternalLink size={iconSize} />, 
      label: "HuggingFace" 
    },
    { 
      href: "https://kaggle.com/yourusername", 
      icon: <ExternalLink size={iconSize} />, 
      label: "Kaggle" 
    },
  ];

  return (
    <div className={cn("flex space-x-3", className)}>
      {socialLinks.map((link, index) => (
        <SocialLink
          key={index}
          href={link.href}
          icon={link.icon}
          label={link.label}
        />
      ))}
    </div>
  );
};

export default SocialLinks;
