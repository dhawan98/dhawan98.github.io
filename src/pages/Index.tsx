
import React, { useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import Bio from '@/components/Bio';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import OpenSource from '@/components/OpenSource';
import SocialLinks from '@/components/SocialLinks';
import ResumeCTA from '@/components/ResumeCTA';
import Experience from "@/components/Experience";


const Index = () => {
  const scrollToContent = () => {
    const bioSection = document.getElementById('bio');
    if (bioSection) {
      bioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-7xl w-full mx-auto text-center">
          <div className="appear">
            {/**<span className="inline-block bg-secondary px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in">
              PhD Scholar
            </span>*/}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6">
              Aashish Dhawan
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Exploring the intersection of <span className="text-primary font-medium">AI, </span><span className="text-primary font-medium">Natural Language Processing</span> and <span className="text-primary font-medium">Computer Vision</span> to build intelligent systems.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
              <ResumeCTA />
              <SocialLinks />
            </div>
          </div>
          
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={scrollToContent}
              aria-label="Scroll to content"
              className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center transition-colors hover:bg-secondary"
            >
              <ArrowDown size={20} />
            </button>
          </div>
        </div>
      </section>
      
      {/* Main Content Sections */}
      <Bio />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Publications />
      <div className="section-divider" />
      <OpenSource />
    </MainLayout>
  );
};

export default Index;
