import React from 'react';
import { GraduationCap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Degree {
  degree: string;
  institution: string;
  location: string;
  period: string;
  detail?: string;
  lab?: string;
  advisor?: string;
}

const degrees: Degree[] = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "University of Florida",
    location: "Gainesville, FL",
    period: "Aug 2025 – May 2028 (Expected)",
    lab: "Data Science and Research Lab",
    advisor: "Advised by Dr. Daisy Wang",
  },
  {
    degree: "M.S. in Computer Science",
    institution: "University of Florida",
    location: "Gainesville, FL",
    period: "Jan 2021 – May 2023",
    detail: "Coursework: Natural Language Processing · Deep Learning for Computer Graphics · Trustworthy ML",
  },
  {
    degree: "B.Tech. in Computer Science",
    institution: "Kurukshetra University",
    location: "Haryana, India",
    period: "Aug 2015 – May 2019",
  },
];

const Education: React.FC = () => {
  return (
    <AnimatedSection id="education" title="Education">
      <div className="space-y-4 max-w-3xl mx-auto">
        {degrees.map((d, i) => (
          <div
            key={i}
            className="flex gap-4 items-start p-5 rounded-xl bg-card border border-border/40 hover:border-border transition-colors duration-200"
          >
            <div className="mt-0.5 w-9 h-9 rounded-full bg-secondary flex items-center justify-center shrink-0">
              <GraduationCap size={16} className="text-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-semibold text-foreground">{d.degree}</h3>
                <span className="text-sm text-muted-foreground shrink-0">{d.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                {d.institution} · {d.location}
              </p>
              {d.lab && (
                <p className="text-sm text-foreground/80 font-medium mt-1.5">{d.lab}</p>
              )}
              {d.advisor && (
                <p className="text-sm text-muted-foreground mt-0.5">{d.advisor}</p>
              )}
              {d.detail && (
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d.detail}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Education;
