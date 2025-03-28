import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { cn } from '@/lib/utils'

// Icons
import { FaPython, FaJava, FaAws, FaDocker, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiPytorch, SiTensorflow, SiLangchain, SiKubernetes, SiNumpy, SiPandas, SiScikitlearn, SiGooglecloud } from 'react-icons/si'
import { Code, Database } from 'lucide-react'

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced'; // in data but not displayed
  certification?: string;
}

const skillsData: SkillItem[] = [
  // Programming Languages
  { name: 'Python', icon: <FaPython size={28} />, category: 'Languages', level: 'Advanced', certification: 'https://www.coursera.org/learn/python' },
  { name: 'Java', icon: <FaJava size={28} />, category: 'Languages', level: 'Intermediate' },
  { name: 'C++', icon: <Code size={28} />, category: 'Languages', level: 'Intermediate' },
  { name: 'SQL', icon: <Database size={28} />, category: 'Databases', level: 'Intermediate' },

  // Data Science Libraries
  { name: 'NumPy', icon: <SiNumpy size={28} />, category: 'Data Science', level: 'Advanced' },
  { name: 'Pandas', icon: <SiPandas size={28} />, category: 'Data Science', level: 'Advanced' },
  { name: 'scikit-learn', icon: <SiScikitlearn size={28} />, category: 'Data Science', level: 'Intermediate' },

  // AI/ML Frameworks
  { name: 'PyTorch', icon: <SiPytorch size={28} />, category: 'AI/ML Frameworks', level: 'Advanced' },
  { name: 'TensorFlow', icon: <SiTensorflow size={28} />, category: 'AI/ML Frameworks', level: 'Advanced', certification: 'https://www.coursera.org/learn/deep-learning-tensorflow' },
  { name: 'LangChain', icon: <SiLangchain size={28} />, category: 'AI/ML Frameworks', level: 'Intermediate' },

  // Cloud & MLOps
  { name: 'AWS', icon: <FaAws size={28} />, category: 'Cloud & MLOps', level: 'Advanced', certification: 'https://aws.amazon.com/certification/' },
  { name: 'GCP', icon: <SiGooglecloud size={28} />, category: 'Cloud & MLOps', level: 'Intermediate' },
  { name: 'Kubernetes', icon: <SiKubernetes size={28} />, category: 'Cloud & MLOps', level: 'Intermediate' },
  { name: 'Docker', icon: <FaDocker size={28} />, category: 'Cloud & MLOps', level: 'Intermediate' },

  // Web Development
  { name: 'React', icon: <FaReact size={28} />, category: 'Web Development', level: 'Advanced' },
  { name: 'Node.js', icon: <FaNodeJs size={28} />, category: 'Web Development', level: 'Intermediate' }
];

// Dynamic Filter Options
const categories = ['All', ...new Set(skillsData.map(skill => skill.category))];

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <AnimatedSection id="skills" title="Skills">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] animate-gradient" />

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all',
              selectedCategory === category
                ? 'bg-[#5E5CE6] text-white shadow-md'
                : 'bg-[#334155] text-white hover:bg-[#5E5CE6] hover:text-white'
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Big Skills Container */}
      <div className="relative rounded-2xl bg-[#1e293b] p-6 shadow-xl mx-4">
        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={cn(
                'flex flex-col items-center p-3 sm:p-4 md:p-5 rounded-2xl bg-[#1e293b] border border-[#5E5CE6] shadow-md group',
                'hover:shadow-xl hover:scale-105 transition-transform duration-300'
              )}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Skill Icon */}
              <motion.div
                className="mb-2"
                whileHover={{ rotate: 15, scale: 1.2 }}
              >
                {skill.icon}
              </motion.div>
              <p className="text-sm text-center text-white">{skill.name}</p>
              {/* Certification Link */}
              {skill.certification && (
                <a
                  href={skill.certification}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-xs mt-2 hover:underline"
                >
                  Certification
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
