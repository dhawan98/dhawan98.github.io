
import React from 'react';
import AnimatedSection from './AnimatedSection';
import ResumeCTA from './ResumeCTA';
import SocialLinks from './SocialLinks';

const Bio: React.FC = () => {
  return (
    <AnimatedSection id="bio" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-4">PhD Candidate in Computer Science</h3>
            <p className="text-muted-foreground mb-4">
              University of Florida, Gainesville, FL
            </p>
            <p className="leading-relaxed mb-6">
              I am a PhD student specializing in Machine Learning and Artificial Intelligence, 
              with a focus on Natural Language Processing and Computer Vision. My research 
              integrates these two fields to develop multimodal AI systems that can understand 
              and reason about the world through both visual and textual information.
            </p>
            <p className="leading-relaxed mb-8">
              My academic journey is driven by a passion for creating AI systems that can 
              better understand and interact with humans. I am particularly interested in 
              developing models that can perform complex reasoning tasks across modalities, 
              bridging the gap between language understanding and visual perception.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <ResumeCTA />
            <SocialLinks />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Bio;
