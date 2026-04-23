
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { navigationItems } from '@/lib/sections';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const trackedSections = ['hero', ...navigationItems.map((item) => item.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      }
    );

    trackedSections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  const getLinkClasses = (isActive: boolean, isMobile = false) =>
    cn(
      'transition-colors',
      isMobile
        ? 'rounded-md p-2'
        : 'text-sm font-medium hover-underline',
      isActive
        ? 'text-primary'
        : isMobile
          ? 'text-foreground hover:bg-muted'
          : 'text-muted-foreground hover:text-foreground'
    );

  return (
    <nav 
      aria-label="Primary"
      className={cn(
        "fixed w-full z-50 transition-all duration-500 px-6 md:px-12 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#hero" 
          className={cn(
            'font-inter text-lg font-medium tracking-tight transition-colors',
            activeSection === 'hero' ? 'text-primary' : 'text-foreground'
          )}
          onClick={() => setMobileMenuOpen(false)}
          aria-current={activeSection === 'hero' ? 'location' : undefined}
        >
          Aashish Dhawan
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={getLinkClasses(activeSection === item.id)}
              aria-current={activeSection === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        id="mobile-navigation-menu"
        className={cn(
          "fixed inset-0 top-[60px] bg-background z-40 md:hidden transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 space-y-6 flex flex-col">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={getLinkClasses(activeSection === item.id, true)}
              aria-current={activeSection === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
