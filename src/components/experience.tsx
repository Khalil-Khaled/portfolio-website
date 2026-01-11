'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, ChevronDown } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer – Frontend (Low-Code Platform)',
    company: 'VERMEG',
    location: 'Tunisia',
    period: 'Jan 2024 – Present',
    description: [
      'Led code reviews and mentored 2 junior developers, improving code quality and onboarding efficiency.',
      'Designed and developed a reusable Angular component library (75+ widgets), reducing duplication by 35%.',
      'Migrated GitLab CI/CD pipelines to cloud, achieving 65% faster build times and 30% fewer failures.',
      'Contributed to functional design and actively participated in Agile ceremonies.',
    ],
    technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'GitLab CI/CD', 'Docker'],
  },
  {
    title: 'Frontend Developer – Financial Products',
    company: 'VERMEG',
    location: 'Tunisia',
    period: 'Oct 2020 – Jan 2024',
    description: [
      'Fixed 160+ bugs and delivered high-impact features across multiple Angular-based financial apps.',
      'Refactored legacy modules and contributed to Angular version upgrades (v11 to v16).',
      'Achieved 95% test coverage with unit and E2E testing (Jest, Cypress).',
      'Collaborated with UI/UX teams to convert Figma prototypes into scalable, responsive interfaces.',
    ],
    technologies: ['Angular', 'Jest', 'Cypress', 'Figma', 'SASS', 'REST APIs'],
  },
  {
    title: 'Customer Service Representative – PayPal',
    company: 'TRANSCOM',
    location: 'Tunisia',
    period: 'Oct 2017 – Apr 2020',
    description: [
      'Handled customer calls and support inquiries in English and French.',
      'Managed PayPal claims, disputes, and technical issues related to e-commerce integrations.',
      'Assisted in onboarding new hires through peer mentoring and training.',
      'Achieved 90%+ in KPIs related to resolution time, empathy, and customer satisfaction.',
    ],
  },
  {
    title: 'Software Developer Intern – Game Development',
    company: 'Stellar VFX',
    location: 'Tunisia',
    period: 'Feb 2017 – Jul 2017',
    description: [
      'Built interactive game mechanics and UI with performance optimizations.',
      'Integrated assets and performed functional testing based on gameplay feedback.',
    ],
  },
];

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const [isExpanded, setIsExpanded] = useState(index === 0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-day-bg-highlight dark:bg-night-bg-highlight" />
      
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-day-accent dark:bg-night-cyan"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
      >
        <div className="absolute inset-0 rounded-full bg-day-accent dark:bg-night-cyan animate-ping opacity-20" />
      </motion.div>

      {/* Card */}
      <motion.div
        className="bento-card cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ x: 5 }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-day-text dark:text-night-text mb-1">
              {experience.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="flex items-center gap-1 text-day-accent dark:text-night-cyan font-medium">
                <Briefcase className="w-4 h-4" />
                {experience.company}
              </span>
              <span className="text-day-comment dark:text-night-comment">
                {experience.location}
              </span>
              <span className="flex items-center gap-1 text-day-comment dark:text-night-comment font-mono text-xs">
                <Calendar className="w-3 h-3" />
                {experience.period}
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-day-comment dark:text-night-comment"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Expanded Content */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="mt-4 space-y-2">
            {experience.description.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-day-text/80 dark:text-night-text/80 text-sm"
              >
                <span className="text-day-accent dark:text-night-cyan mt-1">▹</span>
                {item}
              </li>
            ))}
          </ul>

          {experience.technologies && (
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono bg-day-bg dark:bg-night-bg rounded text-day-muted dark:text-night-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 bg-day-bg-alt/50 dark:bg-night-bg-alt/50">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-day-accent dark:text-night-cyan font-mono">02.</span>
            <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-day-bg-highlight dark:bg-night-bg-highlight" />
          </div>

          {/* Timeline */}
          <div className="max-w-3xl">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
