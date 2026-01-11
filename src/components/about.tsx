'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Users, Zap, Globe } from 'lucide-react';

export function About() {
  const t = useTranslations('about');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Code2, value: '5+', label: t('stats.years') },
    { icon: Users, value: '75+', label: t('stats.components') },
    { icon: Zap, value: '160+', label: t('stats.bugs') },
    { icon: Globe, value: '3', label: t('stats.languages') },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-day-accent dark:text-night-cyan font-mono">{t('sectionNumber')}.</span>
            <h2 className="text-3xl sm:text-4xl font-bold">{t('title')}</h2>
            <div className="flex-1 h-px bg-day-bg-highlight dark:bg-night-bg-highlight" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-day-text/80 dark:text-night-text/80 leading-relaxed">
                I&apos;m a frontend engineer passionate about building{' '}
                <span className="text-day-accent dark:text-night-cyan font-medium">
                  scalable, modern web applications
                </span>{' '}
                that deliver exceptional user experiences. With expertise in Angular and a
                strong foundation in React and TypeScript, I bring ideas to life with clean,
                maintainable code.
              </p>
              <p className="text-day-text/80 dark:text-night-text/80 leading-relaxed">
                Currently at <span className="font-medium">VERMEG</span>, I lead frontend
                development for a low-code platform, where I&apos;ve designed a{' '}
                <span className="text-day-accent dark:text-night-cyan font-medium">
                  reusable component library of 75+ widgets
                </span>{' '}
                and mentored junior developers. I&apos;m always exploring new technologies
                and best practices to level up my craft.
              </p>
              <p className="text-day-text/80 dark:text-night-text/80 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me contributing to open-source,
                exploring AI/ML certifications, or planning my next adventure.
                I&apos;m open to international relocation and excited about new challenges
                in dynamic, product-driven teams.
              </p>

              {/* Tech Stack Highlight */}
              <div className="pt-4">
                <p className="text-sm font-mono text-day-comment dark:text-night-comment mb-3">
                  {t('techTitle')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Tailwind', 'Jest', 'Cypress'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-mono bg-day-bg-alt dark:bg-night-bg-alt border border-day-bg-highlight dark:border-night-bg-highlight rounded-full text-day-accent dark:text-night-cyan"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Image Placeholder & Stats */}
            <div className="space-y-8">
              {/* Profile Image Placeholder */}
              <motion.div
                className="relative aspect-square max-w-sm mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-day-accent/20 to-day-accent-alt/20 dark:from-night-cyan/20 dark:to-night-accent/20 rounded-2xl transform rotate-3" />
                <div className="relative bg-day-bg-alt dark:bg-night-bg-alt rounded-2xl overflow-hidden border border-day-bg-highlight dark:border-night-bg-highlight">
                  {/* Replace this div with your actual image */}
                  <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-day-accent/10 to-day-accent-alt/10 dark:from-night-cyan/10 dark:to-night-accent/10">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-day-bg-highlight dark:bg-night-bg-highlight flex items-center justify-center">
                        <span className="text-4xl font-bold text-gradient">KK</span>
                      </div>
                      <p className="text-sm text-day-comment dark:text-night-comment font-mono">
                        {/* Your photo here */}
                        {t('imagePlaceholder')}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bento-card text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-day-accent dark:text-night-cyan" />
                    <div className="text-2xl font-bold text-day-text dark:text-night-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-day-comment dark:text-night-comment">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
