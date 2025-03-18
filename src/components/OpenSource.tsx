
import React from 'react';
import { Github, Star, GitFork } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface ContributionProps {
  project: string;
  description: string;
  role: string;
  contributions: string[];
  url: string;
  stars?: number;
  forks?: number;
  className?: string;
}

const Contribution: React.FC<ContributionProps> = ({
  project,
  description,
  role,
  contributions,
  url,
  stars,
  forks,
  className
}) => {
  return (
    <div 
      className={cn(
        "bg-card border border-border/40 rounded-lg p-6 transition-all duration-300",
        "hover:shadow-md hover:border-border",
        className
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-medium">{project}</h3>
        
        {(stars !== undefined || forks !== undefined) && (
          <div className="flex items-center gap-4">
            {stars !== undefined && (
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star size={16} />
                {stars}
              </span>
            )}
            {forks !== undefined && (
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <GitFork size={16} />
                {forks}
              </span>
            )}
          </div>
        )}
      </div>
      
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <div className="mb-4">
        <span className="text-sm font-medium">Role: </span>
        <span className="text-sm text-muted-foreground">{role}</span>
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Key Contributions:</h4>
        <ul className="list-disc list-inside space-y-1">
          {contributions.map((contribution, index) => (
            <li key={index} className="text-sm text-muted-foreground pl-2">
              {contribution}
            </li>
          ))}
        </ul>
      </div>
      
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm hover-underline"
        aria-label={`View ${project} on GitHub`}
      >
        <Github size={16} />
        <span>View Project</span>
      </a>
    </div>
  );
};

const OpenSource: React.FC = () => {
  const contributions = [
    {
      project: "Hugging Face Transformers",
      description: "A library of state-of-the-art pre-trained models for natural language understanding and generation.",
      role: "Contributor",
      contributions: [
        "Implemented multimodal fusion techniques for vision-language models",
        "Added support for medical domain fine-tuning recipes",
        "Fixed bugs in the attention mechanism implementation",
        "Improved documentation for vision-transformer models"
      ],
      url: "https://github.com/huggingface/transformers",
      stars: 64000,
      forks: 15300
    },
    {
      project: "PyTorch Image Models (timm)",
      description: "A collection of image models, layers, utilities, optimizers, schedulers, data-loaders, and more for PyTorch.",
      role: "Contributor",
      contributions: [
        "Added implementation of novel attention mechanism",
        "Contributed optimizations for mixed precision training",
        "Fixed CUDA memory leaks in forward pass",
        "Added benchmarking tools for model comparison"
      ],
      url: "https://github.com/rwightman/pytorch-image-models",
      stars: 23800,
      forks: 4100
    },
    {
      project: "ML Research Tools",
      description: "A personal collection of utilities and tools for machine learning research, with a focus on reproducibility and experiment tracking.",
      role: "Creator & Maintainer",
      contributions: [
        "Developed comprehensive logging and experiment tracking",
        "Created utilities for hyperparameter optimization",
        "Implemented visualization tools for model interpretability",
        "Added integration with popular ML frameworks"
      ],
      url: "https://github.com/yourusername/ml-research-tools",
      stars: 430,
      forks: 87
    }
  ];

  return (
    <AnimatedSection id="opensource" title="Open Source Contributions" staggered={true}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {contributions.map((contribution, index) => (
          <Contribution key={index} {...contribution} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default OpenSource;
