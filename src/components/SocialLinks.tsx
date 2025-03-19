import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
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
      href: "https://github.com/dhawan98", 
      icon: <Github size={iconSize} />, 
      label: "GitHub" 
    },
    { 
      href: "https://www.linkedin.com/in/aashish-dhawan/", 
      icon: <Linkedin size={iconSize} />, 
      label: "LinkedIn" 
    },
    { 
      href: "mailto:aashudhawan@gmail.com", 
      icon: <Mail size={iconSize} />, 
      label: "Gmail" 
    }
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
