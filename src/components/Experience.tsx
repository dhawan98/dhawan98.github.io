import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { cn } from '@/lib/utils'
import { FaUniversity, FaBriefcase, FaRobot, FaCogs } from 'react-icons/fa'

interface ExperienceProps {
  role: string
  company: string
  year: string
  description: string[]
  link?: string
  icon: React.ReactNode
}

const experiences: ExperienceProps[] = [
  {
    role: 'Computational Data Scientist Intern',
    company: 'ExxonMobil · Houston, TX',
    year: 'May 2026 – Present',
    description: [
      'Building explainable AI (XAI) workflows that translate model outputs, optimization results, and operational constraints into plain-English explanations for non-technical stakeholders.',
      'Developing Python-based XAI tooling to probe model behavior and support "why," "what changed," and "what-if" reasoning in live operational workflows.',
    ],
    icon: <FaBriefcase className="text-white" />
  },
  {
    role: 'Machine Learning Researcher',
    company: 'Data Science & Research Lab, University of Florida',
    year: 'May 2024 – Present',
    description: [
      'Built a few-shot object detection pipeline (CLIP + SAM + DINO + Adaptive Feature Transfer + OHAC) that improved accuracy by 15% over CLIP baselines while preserving concept-level visual explanations.',
      'Developed a retrieval-augmented long-context translation system for low-resource Indigenous languages using Qwen2.5-VL, BM25, and Gemini 2.5 Flash — system won the AmericasNLP 2026 Shared Task at ACL.',
      'Fine-tuned multilingual mBART-50 with multi-GPU DDP training, reducing training time by 50% and producing publication-ready ablations and chrF++ evaluation pipelines.',
    ],
    icon: <FaUniversity className="text-white" />
  },
  {
    role: 'Adjunct Instructor',
    company: 'University of Florida',
    year: 'Aug 2023 – Present',
    description: [
      'Designed and delivered lectures, assignments, and rubrics for Programming Languages and Machine Learning courses serving 300+ students per semester.',
      'Mentored students and TAs on capstone projects: AI chatbots, recommender systems, and real-time computer vision pipelines.',
    ],
    icon: <FaBriefcase className="text-white" />
  },
  {
    role: 'AI Engineer, Consultant',
    company: 'Atmosphere Apps · Gainesville, FL',
    year: 'Aug 2023 – Apr 2024',
    description: [
      'Built GPT-4-integrated recommendation and multilingual transcription workflows using prompt-tuned LLMs, OpenAI Whisper, and NLP extraction; improved prescription matching accuracy by 20% for 5,000+ users.',
      'Converted audio and video across 10+ languages into searchable transcripts, structured summaries, and quiz outputs, achieving 95% transcription accuracy.',
    ],
    icon: <FaCogs className="text-white" />
  },
  {
    role: 'Research Assistant',
    company: 'Graphics Imaging & Light Measurement Lab, University of Florida',
    year: 'Jan 2021 – May 2023',
    description: [
      'Built deep learning pipelines for multispectral image synthesis, quantum simulation acceleration, and material-scattering prediction; reduced evaluation time by up to 82%.',
    ],
    icon: <FaUniversity className="text-white" />
  },
  {
    role: 'Visiting Researcher',
    company: 'UBTECH AI Lab, University of Sydney · Australia',
    year: 'Dec 2019 – Mar 2020',
    description: [
      'Implemented a CNN-based multi-source domain adaptation framework with shared feature extractors and domain-specific classifiers; achieved 71–98% accuracy across 345 categories on 0.6M samples.',
    ],
    icon: <FaRobot className="text-white" />
  },
  {
    role: 'Research Intern',
    company: 'Space Applications Center, ISRO · Ahmedabad, India',
    year: 'May 2019 – Aug 2019',
    description: [
      'Developed a CNN–CRF satellite image segmentation pipeline on LISS-3 and POTSDAM datasets; improved segmentation accuracy by 5% and cut inference time from 36 hours to 0.2 seconds (648,000× speedup).',
    ],
    icon: <FaRobot className="text-white" />
  }
]

const Experience: React.FC = () => {
  return (
    <AnimatedSection id="experience" title="Experience">
      <div className="relative mx-auto max-w-5xl">
        {/* Vertical line for desktop */}
        <div className="absolute left-1/2 top-0 hidden md:block h-full w-[2px] bg-border" />
        <div className="flex flex-col space-y-12 md:space-y-16">
          {experiences.map((exp, index) => {
            const isLeftSide = index % 2 === 0
            return (
              <motion.div
                key={index}
                className={`relative md:flex md:items-start ${isLeftSide ? 'md:justify-start' : 'md:justify-end'
                  }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icon in a filled gradient circle */}
                <div
                  className={cn(
                    "absolute z-10 left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg"
                  )}
                >
                  {exp.icon}
                </div>
                {/* Experience Card */}
                <div
                  className={`
                    mt-12 md:mt-0 
                    md:w-1/2 p-5 rounded-lg shadow-md bg-card
                    ${isLeftSide ? 'md:ml-6' : 'md:mr-6'}
                  `}
                  style={{ minWidth: '280px' }}
                >
                  <h3 className="text-xl font-semibold">
                    {exp.role} @ {exp.company}
                  </h3>
                  <p className="text-muted-foreground mb-2">{exp.year}</p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm mt-2 hover:underline inline-block"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Experience
