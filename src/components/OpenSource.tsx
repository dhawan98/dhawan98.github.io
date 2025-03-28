
import React from 'react';
import { Github, Star, GitFork } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ContributionProps {
  project: string;
  description: string;
  role: string;
  contributions: string[];
  url: string;
  stars?: number;
  forks?: number;
  image: string;
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
  image,
  className
}) => {
  return (
    <div 
      className={cn(
        "bg-card border border-border/40 rounded-lg overflow-hidden transition-all duration-300",
        "hover:shadow-md hover:border-border group",
        className
      )}
    >
      <div className="relative">
        <AspectRatio ratio={16/9}>
          <img 
            src={image} 
            alt={`${project} visualization`} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </AspectRatio>
        
        <div className="absolute top-3 right-3 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
          {stars !== undefined && (
            <span className="flex items-center gap-1 text-sm text-white">
              <Star size={14} className="text-yellow-400" />
              {stars.toLocaleString()}
            </span>
          )}
          {forks !== undefined && (
            <span className="flex items-center gap-1 text-sm text-white">
              <GitFork size={14} />
              {forks.toLocaleString()}
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{project}</h3>
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
          className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
          aria-label={`View ${project} on GitHub`}
        >
          <Github size={16} />
          <span>View Project</span>
        </a>
      </div>
    </div>
  );
};

const OpenSource: React.FC = () => {
  const contributions = [
    
    {
      "project": "ComfyUI",
      "description": "An open-source, node-based UI for creating stable diffusion workflows.",
      "role": "Contributor",
      "contributions": [
        "Fixed `attn_mask` issue in `DoubleStreamBlock.forward()` by allowing kwargs",
        "Updated `model.py` for improved compatibility with attention mask arguments",
        "Ensured stable execution across diffusion workflows using updated attention logic"
      ],
      "url": "https://github.com/comfyanonymous/ComfyUI",
      "stars": 72600,
      "forks": 7900,
      "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1470&q=80"
    },
    
    {
      project: "ML tools",
      description: "An open-source platform that integrates various AI tools and models to enable exploration and experimentation in generative AI, computer vision, and language tasks.",
      role: "Creator & Instructor",
      contributions: [
        "Developed Jupyter notebooks illustrating key ML and DL concepts",
    "Designed practical examples for algorithms like Batch vs. Stochastic Gradient Descent",
    "Created demos on CNNs for image classification tasks",
    "Implemented GANs for generating synthetic data",
    "Provided insights into challenges like vanishing gradients and overfitting"
      ],
      url: "https://github.com/dhawan98/AI_ExplorerHub",
      stars: 0,
      forks: 0,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1470&q=80"
    }
    
  ];

  return (
    <AnimatedSection id="opensource" title="Open Source Contributions" staggered={true}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contributions.map((contribution, index) => (
          <Contribution key={index} {...contribution} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default OpenSource;
