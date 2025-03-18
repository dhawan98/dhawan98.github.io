import React from 'react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface ExperienceProps {
  role: string;
  company: string;
  year: string;
  description: string;
  link?: string;
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  role,
  company,
  year,
  description,
  link
}) => (
  <div className={cn("border-b border-border/40 py-4")}>
    <h3 className="text-lg font-medium">{role} - {company}</h3>
    <p className="text-muted-foreground mb-2">{year}</p>
    <p className="text-muted-foreground">{description}</p>
    {link && (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-primary text-sm mt-2 hover-underline"
      >
        Learn More
      </a>
    )}
  </div>
);

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Research Assistant",
      company: "University of Florida",
      year: "2023 - Present",
      description: "Conducting research on multimodal machine learning models and developing AI/ML models for various applications."
    },
    {
      role: "Software Engineer",
      company: "Atmosphere Apps",
      year: "2022 - 2023",
      description: "Developed and deployed two projects that reached thousands of users, improving platform scalability and user engagement."
    },
    {
      role: "AI Engineer Intern",
      company: "UBTECH AI Lab",
      year: "2021",
      description: "Worked on AI model optimization and research in computer vision for humanoid robots."
    }
  ];

  return (
    <AnimatedSection id="experience" title="Experience">
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;
