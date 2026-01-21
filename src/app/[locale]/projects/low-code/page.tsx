import { ProjectDetail } from '@/components/project-detail';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'projects.items.lowCode' });
  
  return {
    title: `${t('title')} | Khalil Khaled`,
    description: t('description'),
  };
}

export default function VeggoProjectPage() {
  const images = [
    { src: 'lowcode-dashboard.png', alt: 'Platform Dashboard', caption: 'Main dashboard with widget library' },
    { src: 'lowcode-builder.png', alt: 'Application Builder', caption: 'Drag-and-drop application builder' },
    { src: 'lowcode-components.png', alt: 'Component Library', caption: 'Component library showcase' },
    { src: 'lowcode-preview.png', alt: 'Live Preview', caption: 'Live application preview' },
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

  return (
    <ProjectDetail
      projectKey="lowCode"
      images={images}
      technologies={technologies}
    />
  );
}
