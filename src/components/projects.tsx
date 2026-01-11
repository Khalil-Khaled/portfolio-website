'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Star, Folder } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  period?: string;
}

const projects: Project[] = [
  {
    title: 'VEGGO – Low-Code Platform',
    description:
      'Enterprise low-code platform for building financial applications. Led frontend development, designed 75+ reusable Angular widgets, and established component architecture patterns.',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'SASS', 'Storybook'],
    featured: true,
    period: '2024 - Present',
  },
  {
    title: 'E-commerce Store – Pijiz',
    description:
      'Shopify-based e-commerce platform with custom theme development, multi-language support, payment integration, and SEO optimization.',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    liveUrl: 'https://pijiz.com',
    period: 'May 2024',
  },
  {
    title: 'Visit Dubai UI Redesign',
    description:
      'Freelance project to improve the UI/UX of Visit Dubai website. Enhanced page structure, navigation, and implemented responsive design fixes.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    period: 'Jan 2024 - Feb 2024',
  },
  {
    title: 'Banking App Migration',
    description:
      'Led the full framework upgrade from Angular v11 to v16 for a banking application. Refactored UI components and migrated custom themes.',
    technologies: ['Angular', 'TypeScript', 'Jest', 'Cypress'],
    period: 'Nov 2023 - Jan 2024',
  },
  {
    title: 'NRG Global Power – Corporate Website',
    description:
      'Built and deployed a corporate WordPress website with business email setup, SEO optimization, and GoDaddy hosting configuration.',
    technologies: ['WordPress', 'PHP', 'CSS', 'SEO'],
    liveUrl: 'https://nrgglobalpower.us',
    period: 'Oct 2023',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group ${project.featured ? 'md:col-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="bento-card h-full relative overflow-hidden"
        whileHover={{ y: -5 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-day-accent/10 dark:bg-night-cyan/10 rounded-full text-day-accent dark:text-night-cyan text-xs font-mono">
            <Star className="w-3 h-3" />
            Featured
          </div>
        )}

        {/* Image Placeholder */}
        <div className="relative mb-4 rounded-lg overflow-hidden bg-day-bg-highlight dark:bg-night-bg-highlight aspect-video">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Folder className="w-12 h-12 mx-auto mb-2 text-day-accent/40 dark:text-night-cyan/40" />
              <p className="text-xs text-day-comment dark:text-night-comment font-mono">
                {/* Add screenshot here */}
                screenshot.png
              </p>
            </div>
          </div>
          
          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-day-accent/80 dark:from-night-cyan/80 to-transparent flex items-end justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-day-accent hover:bg-white transition-colors"
                  aria-label="View live site"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-day-accent hover:bg-white transition-colors"
                  aria-label="View source code"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-day-text dark:text-night-text group-hover:text-day-accent dark:group-hover:text-night-cyan transition-colors">
              {project.title}
            </h3>
            {project.period && (
              <span className="text-xs font-mono text-day-comment dark:text-night-comment whitespace-nowrap">
                {project.period}
              </span>
            )}
          </div>
          
          <p className="text-sm text-day-text/70 dark:text-night-text/70 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-mono bg-day-bg dark:bg-night-bg rounded text-day-muted dark:text-night-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links for non-hovered state */}
        <div className="mt-4 flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-day-accent dark:text-night-cyan hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-day-accent dark:text-night-cyan hover:underline"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-day-accent dark:text-night-cyan font-mono">03.</span>
            <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
            <div className="flex-1 h-px bg-day-bg-highlight dark:bg-night-bg-highlight" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
