
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  demoUrl,
  className
}) => {
  return (
    <div
      className={cn(
        "group rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md bg-card",
        "border border-border/40 hover:border-border",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm hover-underline"
              aria-label={`View ${title} on GitHub`}
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm hover-underline"
              aria-label={`View ${title} demo`}
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Latent Recurrent World-Model Reasoning for Vision–Language Agents",
      description: "Extended a text-based maze navigation architecture to visual inputs by replacing symbolic maze prefixes with CNN-derived visual tokens. Compared autoregressive vs. masked multi-step prediction models across visual maze settings, analyzing generalization, perception bottlenecks, and convergence speed.",
      image: "/coco-r.png",
      technologies: ["PyTorch", "Transformers", "CNNs", "Lightning", "Neuro-symbolic AI"],
      githubUrl: "https://github.com/dhawan98/coconut-r"
    },
    {
      title: "Explainable Few-Shot Object Detection for Indigenous Manuscripts",
      description: "Designed a concept-based few-shot detection system for Mixtec manuscripts using CLIP, SAM, DINO, and Adaptive Feature Transfer. Outperformed CLIP baselines by 15% in 1–10-shot regimes with hierarchical visual explanations of model decisions.",
      image: "/mixtec.png",
      technologies: ["CLIP", "SAM", "DINO", "PyTorch", "FastAPI", "OpenCV"],
      githubUrl: "https://github.com/dhawan98/Objectlearning-demo"
    },
    {
      title: "Paper2Code",
      description: "An AI tool that converts research papers into functional Python implementations by parsing methodology sections, extracting model architectures, and generating corresponding code with inline explanations.",
      image: "/paper2code.png",
      technologies: ["Python", "FastAPI", "Streamlit", "OpenAI API"],
      githubUrl: "https://github.com/dhawan98/Paper2Code"
    },
    {
      title: "QueryBot — RAG Document Assistant",
      description: "A retrieval-augmented chatbot that answers questions over user-uploaded documents using LangChain, FAISS vector search, and GPT-based generation. Supports multi-document indexing, semantic chunking, and source attribution.",
      image: "/image.jpg",
      technologies: ["LangChain", "OpenAI", "FastAPI", "Streamlit", "FAISS"],
      githubUrl: "https://github.com/dhawan98/QueryBot"
    },
    {
      title: "Whisper — AI Therapy Companion",
      description: "Full-stack mental health app (FastAPI + React) that supports text and voice conversations with an LLM-powered therapist. Includes session history, mood tracking, and gamified progress milestones — built mindfully with clear disclaimers about AI limitations.",
      image: "/whisperAI.png",
      technologies: ["FastAPI", "React", "TypeScript", "OpenAI"],
      githubUrl: "https://github.com/dhawan98/Whisper-AI-Therapist"
    },
    {
      title: "Satellite Image Segmentation with CRF Post-Processing",
      description: "CNN segmentation pipeline with Conditional Random Field post-processing on LISS-3 and POTSDAM satellite datasets. Improved segmentation accuracy by 5% and reduced inference from 36 hours to 0.2 seconds. Published at IEEE INDIACom 2019.",
      image: "/CRF.png",
      technologies: ["Python", "PyTorch", "Conditional Random Fields", "OpenCV"],
      githubUrl: "https://github.com/dhawan98/Post-Processing-of-Image-Segmentation-using-CRF"
    },
    {
      title: "Image-Generation Toolkit with LoRA Fine-tuning",
      description: "Personalized image generation using diffusion models, PEFT, and LoRA fine-tuning. Trained on a small set of personal photos to generate photorealistic stylized portraits — demonstrating how parameter-efficient fine-tuning enables identity-preserving generation.",
      image: "/LoRA.jpeg",
      technologies: ["LoRA", "PEFT", "Diffusers", "Stable Diffusion"],
      githubUrl: "https://github.com/dhawan98"
    },
  ];

  return (
    <AnimatedSection id="projects" title="Projects" staggered={true}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
