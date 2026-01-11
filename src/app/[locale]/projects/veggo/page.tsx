import { ProjectDetail } from '@/components/project-detail';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'projects.items.veggo' });
  
  return {
    title: `${t('title')} | Khalil Khaled`,
    description: t('description'),
  };
}

export default function VeggoProjectPage() {
  const images = [
    { src: 'veggo-dashboard.png', alt: 'VEGGO Dashboard', caption: 'Main dashboard with widget library' },
    { src: 'veggo-builder.png', alt: 'VEGGO Builder', caption: 'Drag-and-drop application builder' },
    { src: 'veggo-components.png', alt: 'VEGGO Components', caption: 'Component library showcase' },
    { src: 'veggo-preview.png', alt: 'VEGGO Preview', caption: 'Live application preview' },
  ];

  const technologies = [
    'Angular',
    'TypeScript',
    'RxJS',
    'NgRx',
    'SASS',
    'Storybook',
    'Jest',
    'Cypress',
    'GitLab CI/CD',
    'Docker',
  ];

  const highlights = [
    'Designed and developed 75+ reusable Angular widgets from scratch',
    'Established component architecture patterns adopted across the organization',
    'Mentored 2 junior developers, improving team velocity by 25%',
    'Achieved 95% test coverage with comprehensive unit and E2E tests',
    'Migrated CI/CD pipelines to cloud, reducing build times by 65%',
    'Created extensive documentation and Storybook stories for all components',
  ];

  return (
    <ProjectDetail
      projectKey="veggo"
      images={images}
      technologies={technologies}
      role="Lead Frontend Developer"
      duration="Jan 2024 - Present"
      highlights={highlights}
    />
  );
}
