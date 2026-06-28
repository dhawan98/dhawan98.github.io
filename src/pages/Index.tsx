
import React from 'react';
import { ArrowDown, Award } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import Bio from '@/components/Bio';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import OpenSource from '@/components/OpenSource';
import SocialLinks from '@/components/SocialLinks';
import ResumeCTA from '@/components/ResumeCTA';
import Experience from "@/components/Experience";
import Skills from '@/components/Skills';
import BeyondTheLab from '@/components/BeyondTheLab'


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
            {/* Achievement badge */}
            <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Award size={14} className="text-primary" />
              <span>ACL 2026 · AmericasNLP Shared Task Winner</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-4">
              Aashish Dhawan
            </h1>

            <p className="text-base md:text-lg font-medium text-muted-foreground mb-5 tracking-wide">
              ML Researcher · PhD @ University of Florida
            </p>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Building systems at the intersection of{' '}
              <span className="text-foreground font-medium">multimodal AI</span>,{' '}
              <span className="text-foreground font-medium">low-resource NLP</span>, and{' '}
              <span className="text-foreground font-medium">computer vision</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
      <Education />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Publications />
      <div className="section-divider" />
      <OpenSource />
      <div className="section-divider" />
      <BeyondTheLab />
    </MainLayout>
  );
};

export default Index;
