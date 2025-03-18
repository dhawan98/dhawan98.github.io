
import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary mt-24 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="text-center md:text-left max-w-sm">
            <h3 className="text-xl font-medium mb-4">John Doe</h3>
            <p className="text-muted-foreground mb-6">
              PhD Student at University of Florida, researching the intersection of Natural Language Processing and Computer Vision.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
                <MapPin size={14} />
                <span>Gainesville, FL, USA</span>
              </div>
              <a 
                href="mailto:john.doe@ufl.edu" 
                className="flex items-center justify-center md:justify-start gap-2 text-sm hover-underline"
              >
                <Mail size={14} />
                <span>john.doe@ufl.edu</span>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <SocialLinks />
            <a 
              href="#hero" 
              className="text-sm hover-underline"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Back to Top
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/40 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground order-2 md:order-1">
            &copy; {currentYear} John Doe. All rights reserved.
          </div>
          
          <div className="mb-4 md:mb-0 order-1 md:order-2">
            <span className="text-sm text-muted-foreground">Built with love and code</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
