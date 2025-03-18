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
    role: 'ML/AI Researcher',
    company: 'University of Florida',
    year: '2023 - Present',
    description: [
      'Pioneering research on AI-driven translation for underrepresented languages.',
      'Integrating multimodal techniques to enhance translation accuracy.'
    ],
    icon: <FaUniversity className="text-white" />
  },
  {
    role: 'Adjunct Faculty',
    company: 'University of Florida',
    year: '2023 - Present',
    description: [
      'Designed and delivered courses in Machine Learning and Programming Principles.',
      'Implemented AI tools for automated grading and content generation for 300+ students.'
    ],
    icon: <FaBriefcase className="text-white" />
  },
  {
    role: 'Graduate Assistant',
    company: 'University of Florida',
    year: '2021 - 2023',
    description: [
      'Supported course delivery in ML and programming language concepts.',
      'Streamlined administrative tasks and contributed to research projects.'
    ],
    icon: <FaBriefcase className="text-white" />
  },
  {
    role: 'ML/LLM/AI Consultant',
    company: 'Atmosphere Apps',
    year: '2022 - 2023',
    description: [
      'Led development of AI solutions reaching thousands of users.',
      'Optimized platform scalability and boosted user engagement.'
    ],
    icon: <FaCogs className="text-white" />
  },
  {
    role: 'Research Intern',
    company: 'UBTECH AI Lab, University of Sydney, Australia',
    year: '2021',
    description: [
      'Optimized AI models for humanoid robotics and computer vision applications.',
      'Collaborated with international teams to deploy cutting-edge AI techniques.'
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
                className={`relative md:flex md:items-start ${
                  isLeftSide ? 'md:justify-start' : 'md:justify-end'
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
