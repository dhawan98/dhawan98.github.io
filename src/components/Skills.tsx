import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { cn } from '@/lib/utils'

// Icons
import { FaPython, FaJava, FaAws, FaDocker, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiPytorch, SiTensorflow, SiLangchain, SiKubernetes, SiNumpy, SiPandas, SiScikitlearn, SiGooglecloud, SiHuggingface, SiFastapi } from 'react-icons/si'
import { Code, Database, Cpu } from 'lucide-react'

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced'; // in data but not displayed
  certification?: string;
}

const skillsData: SkillItem[] = [
  // Programming Languages
  { name: 'Python', icon: <FaPython size={28} />, category: 'Languages', level: 'Advanced' },
  { name: 'Java', icon: <FaJava size={28} />, category: 'Languages', level: 'Intermediate' },
  { name: 'C++', icon: <Code size={28} />, category: 'Languages', level: 'Intermediate' },
  { name: 'SQL', icon: <Database size={28} />, category: 'Languages', level: 'Intermediate' },

  // AI/ML Frameworks
  { name: 'PyTorch', icon: <SiPytorch size={28} />, category: 'AI/ML Frameworks', level: 'Advanced' },
  { name: 'TensorFlow', icon: <SiTensorflow size={28} />, category: 'AI/ML Frameworks', level: 'Advanced' },
  { name: 'HuggingFace', icon: <SiHuggingface size={28} />, category: 'AI/ML Frameworks', level: 'Advanced' },
  { name: 'LangChain', icon: <SiLangchain size={28} />, category: 'AI/ML Frameworks', level: 'Advanced' },
  { name: 'scikit-learn', icon: <SiScikitlearn size={28} />, category: 'AI/ML Frameworks', level: 'Intermediate' },

  // Data Science
  { name: 'NumPy', icon: <SiNumpy size={28} />, category: 'Data Science', level: 'Advanced' },
  { name: 'Pandas', icon: <SiPandas size={28} />, category: 'Data Science', level: 'Advanced' },
  { name: 'FastAPI', icon: <SiFastapi size={28} />, category: 'Data Science', level: 'Advanced' },
  { name: 'LLM Fine-tuning', icon: <Cpu size={28} />, category: 'Data Science', level: 'Advanced' },

  // Cloud & MLOps
  { name: 'AWS', icon: <FaAws size={28} />, category: 'Cloud & MLOps', level: 'Advanced' },
  { name: 'GCP', icon: <SiGooglecloud size={28} />, category: 'Cloud & MLOps', level: 'Intermediate' },
  { name: 'Docker', icon: <FaDocker size={28} />, category: 'Cloud & MLOps', level: 'Intermediate' },
  { name: 'Kubernetes', icon: <SiKubernetes size={28} />, category: 'Cloud & MLOps', level: 'Intermediate' },

  // Web Development
  { name: 'React', icon: <FaReact size={28} />, category: 'Web Development', level: 'Advanced' },
  { name: 'Node.js', icon: <FaNodeJs size={28} />, category: 'Web Development', level: 'Intermediate' },
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
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all',
              selectedCategory === category
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="rounded-2xl border border-border/40 bg-card p-6 shadow-sm">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={cn(
                'flex flex-col items-center p-4 rounded-xl bg-background border border-border/60 shadow-sm group',
                'hover:border-primary/40 hover:shadow-md transition-all duration-300'
              )}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="mb-2 text-muted-foreground group-hover:text-foreground transition-colors"
                whileHover={{ rotate: 10, scale: 1.15 }}
              >
                {skill.icon}
              </motion.div>
              <p className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
