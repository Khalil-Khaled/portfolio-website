import { ProjectDetail } from '@/components/project-detail';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'projects.items.banking' });
  
  return {
    title: `${t('title')} | Khalil Khaled`,
    description: t('description'),
  };
}

export default function BankingProjectPage() {
  const images = [
    { src: 'banking-dashboard.png', alt: 'Banking Dashboard', caption: 'Main account dashboard' },
    { src: 'banking-transactions.png', alt: 'Banking Transactions', caption: 'Transaction history view' },
    { src: 'banking-transfers.png', alt: 'Banking Transfers', caption: 'Money transfer interface' },
    { src: 'banking-mobile.png', alt: 'Banking Mobile', caption: 'Responsive mobile view' },
  ];

  const technologies = [
    'Angular 16',
    'TypeScript',
    'RxJS',
    'NgRx',
    'Jest',
    'Cypress',
    'SASS',
    'CSS Variables',
  ];

  const highlights = [
    'Led full framework migration from Angular v11 to v16',
    'Refactored legacy modules to modern Angular patterns',
    'Migrated custom theme system to CSS variables',
    'Achieved zero production incidents during migration',
    'Improved build times by 45%',
    'Resolved 50+ long-standing framework-related bugs',
  ];

  return (
    <ProjectDetail
      projectKey="banking"
      images={images}
      technologies={technologies}
      role="Lead Frontend Developer"
      duration="Nov 2023 - Jan 2024"
      highlights={highlights}
    />
  );
}
