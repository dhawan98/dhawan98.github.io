// src/components/Publications.tsx
import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface PublicationProps {
  title: string;
  authors: string;
  conference: string;
  year: string;
  abstract?: string;
  paperUrl?: string;
  articleUrl?: string;
  codeUrl?: string;
  image?: string;
  className?: string;
}

const Publication: React.FC<PublicationProps> = ({
  title,
  authors,
  conference,
  year,
  abstract,
  paperUrl,
  articleUrl,
  codeUrl,
  className
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div
      className={cn(
        "border-b border-border/40 py-8 transition-all duration-300 hover:bg-secondary/20 rounded-lg p-6 -mx-6",
        className
      )}
    >
      <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{authors}</p>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="font-medium text-white">{conference}</span>
        <span className="text-muted-foreground">{year}</span>
      </div>

      {abstract && (
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
      )}

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

        {articleUrl && (
          <a
            href={articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm hover-underline"
            aria-label={`Read article: ${title}`}
          >
            <FileText size={16} />
            <span>Read Article</span>
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

const researchPublications: PublicationProps[] = [
  {
    title: "MultiScript30k: Leveraging Multilingual Embeddings to Extend Cross Script Parallel Data",
    authors: "Christopher Driggers-Ellis, Detravious Brinkley, Ray Chen, Aashish Dhawan, Daisy Zhe Wang, Christan Grant",
    conference: "NAACL",
    year: "2025",
    abstract: "Generated a dataset of 30,000 parallel sentences in 10 languages using multilingual embeddings.",
    paperUrl: "https://arxiv.org/abs/2512.07442",
    //codeUrl: "https://github.com/dhawan98/Post-Processing-of-Image-Segmentation-using-CRF"
  },
  {
    title: "Post Processing of Image Segmentation using Conditional Random Fields",
    authors: "Aashish Dhawan; Pankaj Bodani; Vishal Garg",
    conference: "INDIACom",
    year: "2019",
    abstract: "Evaluated various CRFs to enhance segmentation clarity on satellite imagery.",
    paperUrl: "https://ieeexplore.ieee.org/document/8991232",
    codeUrl: "https://github.com/dhawan98/Post-Processing-of-Image-Segmentation-using-CRF"
  },
  {
    title: "A Review on Domain Adaptation and Generative Adversarial Networks",
    authors: "Aashish Dhawan; Divyanshu Mudgal; Vishal Garg; Tajinder Kumar",
    conference: "NCFSTM-2020, India",
    year: "2020",
    abstract: "This review examines challenges and opportunities in domain adaptation using GANs."
  }
];

const articlePublications: PublicationProps[] = [
  {
    title: "Building an AI Chatbot with User-Uploaded Knowledge Using LangChain and RAG",
    authors: "Aashish Dhawan",
    conference: "Medium.com",
    year: "2024",
    abstract: "A guide detailing the creation of an AI chatbot using LangChain, RAG, and modern data indexing techniques to harness user-uploaded knowledge.",
    articleUrl: "https://medium.com/@aashishdhawan_2946/building-an-ai-chatbot-with-user-uploaded-knowledge-using-langchain-and-rag-b648251de2b2",
    codeUrl: "https://github.com/dhawan98/QueryBot",
    image: "/image.jpg"
  },
  {
    title: "Getting Started with LangChain: A Beginner’s Guide to Building LLM-Powered Apps",
    authors: "Aashish Dhawan",
    conference: "Medium.com",
    year: "2025",
    abstract: "An introductory guide to building intelligent applications with LangChain.",
    articleUrl: "https://medium.com/@aashishdhawan_2946/getting-started-with-langchain-a-beginners-guide-to-building-llm-powered-apps-00a97257d2b5",
    image: "/langchain.jpg"
  },
  {
    title: "Some Things Should Stay Human: The Quiet Risks of AI Therapists",
    authors: "Aashish Dhawan",
    conference: "Medium.com",
    year: "2025",
    abstract: "My experience building a therapist powered by AI",
    articleUrl: "https://medium.com/@aashishdhawan_2946/some-things-should-stay-human-the-quiet-risks-of-ai-therapists-582137347604",
    image: "/langchain.jpg"
  },
  {
    title: "Neurosymbolic AI: The What, Why, and How of Hybrid Intelligence",
    authors: "Aashish Dhawan",
    conference: "Medium.com",
    year: "2025",
    abstract: "Do we actually understand AI? How does it make its decisions?",
    articleUrl: "https://medium.com/@aashishdhawan_2946/neurosymbolic-ai-the-what-why-and-how-of-hybrid-intelligence-55234dd5adf1",
    image: "/langchain.jpg"
  },
  {
    title: "Build Your Own AI Agent in 20 Minutes — No Coding Required!",
    authors: "Aashish Dhawan",
    conference: "Medium.com",
    year: "2025",
    abstract: "A guide demonstrating a no-code approach to rapidly set up an AI agent using modern frameworks.",
    articleUrl: "https://medium.com/@aashishdhawan_2946/build-your-own-ai-agent-in-20-minutes-no-coding-required-16bbb9a0da8f",
    image: "/agent_history.gif"
  }
];

const ResearchPublications: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-blue-500 mb-4">Research Publications</h3>
      {researchPublications.map((pub, index) => (
        <Publication key={index} {...pub} />
      ))}
    </div>
  );
};

const ArticleTile: React.FC<PublicationProps> = ({
  title,
  abstract,
  conference,
  year,
  articleUrl,
  codeUrl,
  image,
  className
}) => {
  return (
    <a
      href={articleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        className={cn(
          "bg-card border border-border/40 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md group",
          className
        )}
      >
        <div className="relative h-40">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="h-full bg-gray-200 flex items-center justify-center">
              <FileText size={40} className="text-gray-500" />
            </div>
          )}
        </div>
        <div className="p-6">
          <h4 className="text-xl font-medium mb-2 text-white">{title}</h4>
          <p className="text-muted-foreground mb-4">{abstract}</p>
          <div className="flex items-center gap-2 my-2">
            <span className="font-medium text-white">{conference}</span>
            <span className="text-muted-foreground">{year}</span>
          </div>
          {codeUrl && (
            <div className="mt-2">
              <span className="inline-flex items-center gap-1 text-sm hover:underline">
                <ExternalLink size={16} />
                <span>View Code</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

const ArticlesAndBlogs: React.FC = () => {
  return (
    <div className="space-y-8 mt-8">
      <h3 className="text-2xl font-semibold text-orange-500 mb-4">Articles & Blogs</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articlePublications.map((pub, index) => (
          <ArticleTile key={index} {...pub} />
        ))}
      </div>
    </div>
  );
};

const Publications: React.FC = () => {
  return (
    <AnimatedSection id="publications" title="Published Works">
      <div className="space-y-8">
        <ResearchPublications />
        <ArticlesAndBlogs />
      </div>
    </AnimatedSection>
  );
};

export default Publications;
