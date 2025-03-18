
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
  articleUrl?: string;
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
  articleUrl,
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

        {articleUrl && (
          <a 
            href={articleUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm hover-underline"
            aria-label={`Read Article: ${title}`}
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
      title: "Post Processing of Image Segmentation using Conditional Random Fields",
      authors: "Aashish Dhawan; Pankaj Bodani; Vishal Garg",
      conference: "International Conference on Computing for Sustainable Global Development (INDIACom)",
      year: "2019",
      abstract: "The output of image the segmentation process is usually not very clear due to low quality features of Satellite images. The purpose of this study is to find a suitable Conditional Random Field (CRF) to achieve better clarity in a segmented image. We started with different types of CRFs and studied them as to why they are or are not suitable for our purpose. We evaluated our approach on two different datasets - Satellite imagery having low quality features and high quality Aerial photographs. During the study we experimented with various CRFs to find which CRF gives the best results on images and compared our results on these datasets to show the pitfalls and potentials of different approaches.",
      paperUrl: "https://ieeexplore.ieee.org/document/8991232",
      codeUrl: "https://github.com/dhawan98/Post-Processing-of-Image-Segmentation-using-CRF"
    },
    {
      title: "A Review on Domain Adaptation and Generative Adversarial Networks",
      authors: "Aashish Dhawan; Divyanshu Mudgal; Vishal Garg; Tajinder Kumar",
      conference: "National Conference on Frontiers of Science, Technology and Management (NCFSTM-2020), India",
      year: "2020",
      //abstract: "The output of image the segmentation process is usually not very clear due to low quality features of Satellite images. The purpose of this study is to find a suitable Conditional Random Field (CRF) to achieve better clarity in a segmented image. We started with different types of CRFs and studied them as to why they are or are not suitable for our purpose. We evaluated our approach on two different datasets - Satellite imagery having low quality features and high quality Aerial photographs. During the study we experimented with various CRFs to find which CRF gives the best results on images and compared our results on these datasets to show the pitfalls and potentials of different approaches.",
      //paperUrl: "https://ieeexplore.ieee.org/document/8991232",
      //codeUrl: "https://github.com/dhawan98/Post-Processing-of-Image-Segmentation-using-CRF"
    },
    {
      title: "Building an AI Chatbot with User-Uploaded Knowledge Using LangChain and RAG",
      authors: "Aashish Dhawan",
      conference: "Medium.com",
      year: "2024",
      abstract: "This guide details building an AI chatbot using LangChain, RAG, and technologies such as OpenAI, FAISS, and Pinecone. It outlines steps for data ingestion, indexing, and querying to create a context-aware chatbot with user-uploaded knowledge.",
      articleUrl: "https://medium.com/@aashishdhawan_2946/building-an-ai-chatbot-with-user-uploaded-knowledge-using-langchain-and-rag-b648251de2b2",
      codeUrl: "https://github.com/dhawan98/QueryBot"
    },
    {
      title: "Getting started with langchain: a beginners guide to building llm powered apps",
      authors: "Aashish Dhawan",
      conference: "Medium.com",
      year: "2025",
      abstract: "This guide introduces LangChain, a Python framework for building LLM-powered applications. It covers setup, core concepts, and practical steps to create intelligent apps using chains and agents, leveraging technologies like OpenAI, Hugging Face, and vector databases.",
      articleUrl: "https://medium.com/@aashishdhawan_2946/getting-started-with-langchain-a-beginners-guide-to-building-llm-powered-apps-00a97257d2b5",
      //codeUrl: 
    },
    {
      title: "Build Your Own AI Agent in 20 Minutes — No Coding Required!",
      authors: "Aashish Dhawan",
      conference: "Medium.com",
      year: "2025",
      abstract: "This guide demonstrates how to build an agentic AI system in 20 minutes without coding using LangChain, OpenAI, and Flowise. It covers setting up a no-code interface, configuring LLM-powered workflows, and deploying a functional AI agent for real-world applications.",
      articleUrl: "https://medium.com/@aashishdhawan_2946/build-your-own-ai-agent-in-20-minutes-no-coding-required-16bbb9a0da8f",
      //codeUrl: 
    }
  ];

  return (
    <AnimatedSection id="publications" title="Published Works">
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
