'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ProjectGallery } from './project-gallery';

export interface ProjectDetailProps {
  projectKey: string;
  images: { src: string; alt: string; caption?: string }[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectDetail({
  projectKey,
  images,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectDetailProps) {
  const t = useTranslations('projectDetails');
  const tProjects = useTranslations('projects.items');
  
  // Get translated role, duration, and highlights
  const role = t(`${projectKey}.role`);
  const duration = t(`${projectKey}.duration`);
  
  // Get highlights as array from translations
  const highlightsCount = 6; // Maximum number of highlights
  const highlights: string[] = [];
  for (let i = 0; i < highlightsCount; i++) {
    try {
      const highlight = t(`${projectKey}.highlights.${i}`);
      if (highlight && !highlight.includes('MISSING_MESSAGE')) {
        highlights.push(highlight);
      }
    } catch {
      break;
    }
  }

  return (
    <article className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-day-accent dark:text-night-cyan hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('backToProjects')}
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-day-text dark:text-night-text mb-4">
                {tProjects(`${projectKey}.title`)}
              </h1>
              <p className="text-lg text-day-text/70 dark:text-night-text/70 leading-relaxed">
                {tProjects(`${projectKey}.description`)}
              </p>
            </motion.header>

            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ProjectGallery images={images} />
            </motion.div>

            {/* Challenge Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-day-text dark:text-night-text flex items-center gap-3">
                <span className="w-8 h-1 bg-day-accent dark:bg-night-cyan rounded-full" />
                {t('challenge')}
              </h2>
              <p className="text-day-text/80 dark:text-night-text/80 leading-relaxed">
                {t(`${projectKey}.challenge`)}
              </p>
            </motion.section>

            {/* Solution Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-day-text dark:text-night-text flex items-center gap-3">
                <span className="w-8 h-1 bg-day-accent dark:bg-night-cyan rounded-full" />
                {t('solution')}
              </h2>
              <p className="text-day-text/80 dark:text-night-text/80 leading-relaxed">
                {t(`${projectKey}.solution`)}
              </p>
            </motion.section>

            {/* Key Highlights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-day-text dark:text-night-text flex items-center gap-3">
                <span className="w-8 h-1 bg-day-accent dark:bg-night-cyan rounded-full" />
                {t('highlights')}
              </h2>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 text-day-text/80 dark:text-night-text/80"
                  >
                    <span className="text-day-accent dark:text-night-cyan">▹</span>
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Results Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-day-text dark:text-night-text flex items-center gap-3">
                <span className="w-8 h-1 bg-day-accent dark:bg-night-cyan rounded-full" />
                {t('results')}
              </h2>
              <p className="text-day-text/80 dark:text-night-text/80 leading-relaxed">
                {t(`${projectKey}.results`)}
              </p>
            </motion.section>
          </div>

          {/* Sidebar - 2 columns */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Project Info Card */}
            <div className="bento-card sticky top-24 space-y-6">
              {/* Quick Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-day-accent/10 dark:bg-night-cyan/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-day-accent dark:text-night-cyan" />
                  </div>
                  <div>
                    <p className="text-xs text-day-comment dark:text-night-comment font-mono">
                      {t('role')}
                    </p>
                    <p className="font-medium text-day-text dark:text-night-text">{role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-day-accent/10 dark:bg-night-cyan/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-day-accent dark:text-night-cyan" />
                  </div>
                  <div>
                    <p className="text-xs text-day-comment dark:text-night-comment font-mono">
                      {t('duration')}
                    </p>
                    <p className="font-medium text-day-text dark:text-night-text">{duration}</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-day-bg-highlight dark:bg-night-bg-highlight" />

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-mono text-day-comment dark:text-night-comment mb-3">
                  {t('techStack')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-mono bg-day-bg dark:bg-night-bg rounded-full text-day-accent dark:text-night-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-day-bg-highlight dark:bg-night-bg-highlight" />

              {/* Links */}
              <div className="space-y-3">
                {liveUrl && (
                  <motion.a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-day-accent dark:bg-night-cyan text-white dark:text-night-bg font-medium hover:shadow-lg hover:shadow-day-accent/25 dark:hover:shadow-night-cyan/25 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('viewLive')}
                  </motion.a>
                )}
                {githubUrl && (
                  <motion.a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-day-accent dark:border-night-cyan text-day-accent dark:text-night-cyan font-medium hover:bg-day-accent/10 dark:hover:bg-night-cyan/10 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4" />
                    {t('viewCode')}
                  </motion.a>
                )}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </article>
  );
}
