// src/components/TimelineJourney.tsx
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface JourneyEvent {
  title: string;
  date: string;
  description: string;
}

const journeyData: JourneyEvent[] = [
  {
    title: "Started the Adventure",
    date: "2015",
    description: "Began my undergraduate studies in Computer Science, igniting my passion for technology."
  },
  {
    title: "Undergraduate Milestones",
    date: "2019",
    description: "Completed my B.Tech and built the foundation for a career in research and development."
  },
  {
    title: "Graduate Studies & Research",
    date: "2021 - 2023",
    description: "Pursued my Master’s, diving deep into machine learning and AI, and contributed to innovative research projects."
  },
  {
    title: "Professional Breakthrough",
    date: "2023",
    description: "Joined the University of Florida as an ML/AI Researcher and Adjunct Faculty, expanding my horizons in academia and industry."
  }
];

const TimelineJourney: React.FC = () => {
  return (
    <AnimatedSection id="journey" title="My Journey">
      <div className="relative pl-10 border-l-4 border-primary">
        {journeyData.map((event, index) => (
          <motion.div
            key={index}
            className="relative mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-md">
              {index + 1}
            </div>
            <div className="bg-card p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-muted-foreground mb-2">{event.date}</p>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default TimelineJourney;
