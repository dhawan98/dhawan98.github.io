
import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface PublicationProps {
  title: string;
  authors: string;
  conference: string;
  year: string;
  abstract: string;
  paperUrl?: string;
  codeUrl?: string;
  className?: string;
}

const Publication: React.FC<PublicationProps> = ({
  title,
  authors,
  conference,
  year,
  abstract,
  paperUrl,
  codeUrl,
  className
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div 
      className={cn(
        "border-b border-border/40 py-8 transition-all duration-300",
        "hover:bg-secondary/20 rounded-lg p-6 -mx-6",
        className
      )}
    >
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{authors}</p>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="font-medium">{conference}</span>
        <span className="text-muted-foreground">{year}</span>
      </div>
      
      <div className="relative">
        <p 
          className={cn(
            "text-muted-foreground transition-all duration-300",
            isExpanded ? "" : "line-clamp-2"
          )}
        >
          {abstract}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary text-sm mt-2 hover-underline"
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      </div>
      
      <div className="flex flex-wrap gap-4 mt-4">
        {paperUrl && (
          <a 
            href={paperUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm hover-underline"
            aria-label={`Read paper: ${title}`}
          >
            <FileText size={16} />
            <span>Read Paper</span>
          </a>
        )}
        
        {codeUrl && (
          <a 
            href={codeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm hover-underline"
            aria-label={`View code for: ${title}`}
          >
            <ExternalLink size={16} />
            <span>Code</span>
          </a>
        )}
      </div>
    </div>
  );
};

const Publications: React.FC = () => {
  const publications = [
    {
      title: "Vision-Language Models for Medical Image Understanding: A Survey",
      authors: "Doe, J., Smith, A., Johnson, B.",
      conference: "Conference on Neural Information Processing Systems (NeurIPS)",
      year: "2023",
      abstract: "This paper presents a comprehensive survey of vision-language models applied to medical image understanding. We review recent advances in multimodal learning that combine visual features from medical images with textual information from clinical reports. Our analysis covers architectural innovations, training strategies, and benchmark performances across various medical imaging domains including radiology, pathology, and dermatology.",
      paperUrl: "https://arxiv.org/abs/example",
      codeUrl: "https://github.com/yourusername/med-vlm-survey"
    },
    {
      title: "Self-Supervised Contrastive Learning for Cross-Modal Representation in Scientific Documents",
      authors: "Doe, J., Wang, L., Kumar, P., Chen, S.",
      conference: "International Conference on Machine Learning (ICML)",
      year: "2022",
      abstract: "We propose a novel self-supervised contrastive learning framework for learning joint representations of text and figures in scientific publications. Our approach leverages the natural co-occurrence of figures and their captions to learn representations that capture the semantic relationships between modalities without requiring manual annotations. Experiments on scientific document understanding tasks demonstrate significant improvements over unimodal and existing multimodal approaches.",
      paperUrl: "https://arxiv.org/abs/example2",
      codeUrl: "https://github.com/yourusername/scientific-contrastive"
    },
    {
      title: "Attention Mechanisms for Fine-Grained Visual-Linguistic Alignment",
      authors: "Smith, A., Doe, J., Brown, M.",
      conference: "Association for Computational Linguistics (ACL)",
      year: "2021",
      abstract: "This paper introduces a novel attention mechanism designed specifically for fine-grained alignment between visual regions and linguistic phrases. Our approach extends traditional cross-attention by incorporating structural constraints derived from syntactic parsing of the text. We demonstrate that this structured attention significantly improves performance on tasks requiring precise grounding of language to visual elements, such as referring expression comprehension and visual question answering.",
      paperUrl: "https://arxiv.org/abs/example3"
    }
  ];

  return (
    <AnimatedSection id="publications" title="Publications">
      <div className="space-y-4">
        {publications.map((publication, index) => (
          <Publication 
            key={index} 
            {...publication} 
          />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Publications;
