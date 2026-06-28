
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
            <h3 className="text-xl font-medium mb-4">PhD Scholar in Computer Science</h3>
            <p className="text-muted-foreground mb-4">
              University of Florida, Gainesville, FL
            </p>
            <p className="leading-relaxed mb-6">
              I research multimodal AI and low-resource NLP at the University of Florida.
              My recent work on retrieval-augmented translation for Indigenous languages
              won the <span className="font-semibold">AmericasNLP 2026 Shared Task</span> at
              ACL (San Diego) — beating every competing team. I care about building systems
              that actually work on hard, underrepresented problems: languages with little
              data, visual domains with few labels, decisions that need to be explained.
            </p>
            <p className="leading-relaxed mb-8">
              Before my PhD I built production AI at ExxonMobil, shipped LLM pipelines for
              5,000+ users at a health-tech startup, and ran experiments at ISRO and the
              University of Sydney. I teach ML and Programming Languages at UF and have
              mentored 300+ students on projects ranging from AI chatbots to real-time
              computer vision. I like problems at the edge of what models can currently do.
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
