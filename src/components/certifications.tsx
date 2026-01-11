'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface CertificationData {
  key: string;
  credentialId: string;
  icon: string;
}

interface EducationData {
  key: string;
}

const certificationsData: CertificationData[] = [
  {
    key: 'genai',
    credentialId: '101878709OCI25GAIOCP',
    icon: '🤖',
  },
  {
    key: 'aifoundations',
    credentialId: '101878709OCI25AICFA',
    icon: '☁️',
  },
  {
    key: 'java',
    credentialId: '101878709OCPJSE11',
    icon: '☕',
  },
];

const educationData: EducationData[] = [
  { key: 'esprit' },
  { key: 'isamm' },
];

export function Certifications() {
  const t = useTranslations('certifications');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24">
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

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-day-accent dark:text-night-cyan" />
                <h3 className="text-xl font-bold">{t('certificationsTitle')}</h3>
              </div>
              <div className="space-y-4">
                {certificationsData.map((cert, index) => (
                  <motion.div
                    key={cert.credentialId}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bento-card group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-day-accent/10 dark:bg-night-cyan/10 flex items-center justify-center text-2xl flex-shrink-0">
                        {cert.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-day-text dark:text-night-text group-hover:text-day-accent dark:group-hover:text-night-cyan transition-colors text-sm sm:text-base">
                          {t(`items.${cert.key}.title`)}
                        </h4>
                        <p className="text-sm text-day-accent dark:text-night-cyan font-medium mt-1">
                          {t(`items.${cert.key}.issuer`)}
                        </p>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-day-comment dark:text-night-comment">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {t(`items.${cert.key}.date`)}
                          </span>
                          <span className="font-mono">ID: {cert.credentialId}</span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-day-comment dark:text-night-comment opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <svg
                  className="w-5 h-5 text-day-accent dark:text-night-cyan"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
                <h3 className="text-xl font-bold">{t('educationTitle')}</h3>
              </div>
              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.key}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="bento-card"
                    whileHover={{ x: -5 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-day-text dark:text-night-text">
                          {t(`education.${edu.key}.degree`)}
                        </h4>
                        <p className="text-sm text-day-accent dark:text-night-cyan font-medium mt-1">
                          {t(`education.${edu.key}.institution`)}
                        </p>
                        <p className="text-xs text-day-comment dark:text-night-comment mt-1">
                          {t(`education.${edu.key}.location`)}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-day-bg dark:bg-night-bg rounded-full text-sm font-mono text-day-accent dark:text-night-cyan">
                        {t(`education.${edu.key}.year`)}
                      </span>
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
