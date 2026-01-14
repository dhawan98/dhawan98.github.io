
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
    // {
    //   title: "Multimodal Emotion Recognition",
    //   description: "A deep learning model that integrates facial expression and text sentiment analysis to recognize human emotions more accurately than unimodal approaches.",
    //   image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    //   technologies: ["PyTorch", "Transformers", "Computer Vision", "NLP"],
    //   githubUrl: "https://github.com/yourusername/multimodal-emotion"
    // },
    // {
    //   title: "Zero-shot Visual Question Answering",
    //   description: "A novel approach for answering questions about images without specific training examples, leveraging large language models and visual encoders.",
    //   image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    //   technologies: ["CLIP", "GPT-3", "Vision-Language Models"],
    //   githubUrl: "https://github.com/yourusername/zero-shot-vqa"
    // },
    // {
    //   title: "NLP for Medical Text Analysis",
    //   description: "A specialized NLP framework for processing medical literature and clinical notes, identifying relationships between symptoms, diagnoses, and treatments.",
    //   image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    //   technologies: ["BERT", "BioBERT", "Medical NLP", "Knowledge Graphs"],
    //   githubUrl: "https://github.com/yourusername/medical-nlp"
    // },


    {
      title: "Latent Recurrent World-Model Reasoning for Vision–Language Agents",
      description: "Developed a latent recurrent reasoning framework that learns internal world-state representations and planning trajectories for vision–language agents, achieving strong generalization on navigation and symbolic reasoning benchmarks.",
      image: "/coco-r.png",
      technologies: ["CLIP", "FastAPI", "Python", "Reasoning Models", "Neuro-symbolic Models"],
      githubUrl: "https://github.com/dhawan98/coconut-r (code releases soon)"
    },
    {
      title: "Explainable Few-Shot Object Detection for Indigenous Manuscripts via Concept-Based Adaptive Feature Transfer",
      description: "Designed a concept-based, explainable few-shot object detection system for Indigenous Mixtec manuscripts using Adaptive Feature Transfer (AFT) and hierarchical visual explanations, outperforming CLIP baselines in 1–10 shot regimes.",
      image: "/mixtec.png",
      technologies: ["CLIP", "FastAPI", "Python", "OpenCV", "PyTorch"],
      githubUrl: "https://github.com/dhawan98/Objectlearning-demo (code releases soon)"
    },

    {
      title: "Whisper: Your personal therapist",
      description: "Built a full stack app using FASTAPI and react, which acts as a personal therapist supporting text and voice and added gamification to keep track of your progress",
      image: "/whisperAI.png",
      technologies: ["FastAPI", "React", "Typescript", "OpenAI"],
      githubUrl: "https://github.com/dhawan98/Whisper-AI-Therapist"
    },
    {
      title: "Image-Generation Toolkit",
      description: "Nope! that's not me up there. It is AI generated me using diffusion models, PEFT and LoRAs ",
      image: "/LoRA.jpeg",
      technologies: ["LoRA", "Diffusers", "Vision-Language Models"],
      githubUrl: "https://github.com/yourusername/zero-shot-vqa"
    },
    {
      title: "Satellite Image Segmentation using CRF",
      description: "A project utilizing Conditional Random Fields to refine segmented images, enhancing the accuracy of segmentation outputs from various techniques.",
      image: "/CRF.png",
      technologies: ["Python", "ML/AI", "Conditional Random Fields"],
      githubUrl: "https://github.com/dhawan98/Post-Processing-of-Image-Segmentation-using-CRF"
    },

    {
      title: "Personal Portfolio Website",
      description: "A responsive and modern personal portfolio website built using Tailwind CSS and TypeScript, showcasing projects, skills, and experiences.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80",
      technologies: ["Tailwind CSS", "TypeScript", "HTML", "JavaScript"],
      githubUrl: "https://github.com/dhawan98/dhawan98.github.io"
    },
    {
      title: "Paper2Code",
      description: "An AI-powered tool that converts research papers into functional Python code implementations by extracting key insights and generating corresponding scripts.",
      image: "/paper2code.png",
      technologies: ["Python", "FastAPI", "Streamlit", "OpenAI API"],
      githubUrl: "https://github.com/dhawan98/Paper2Code"
    },
    {
      title: "QueryBot",
      description: "An AI-powered chatbot that utilizes LangChain, OpenAI, FastAPI, and Streamlit to provide context-aware responses based on user-uploaded documents.",
      image: "/image.jpg",
      technologies: ["LangChain", "OpenAI", "FastAPI", "Streamlit", "FAISS"],
      githubUrl: "https://github.com/dhawan98/QueryBot"
    },
    {
      title: "BankMicroservice",
      description: "A real-time banking microservice implementing event-sourcing for balance calculations, developed using Java, Maven, and Spring Boot.",
      image: "/micro.jpeg",
      technologies: ["Java", "Maven", "Spring Boot"],
      githubUrl: "https://github.com/dhawan98/BankMicroservice"
    }




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
