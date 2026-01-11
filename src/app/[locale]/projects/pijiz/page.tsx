import { ProjectDetail } from '@/components/project-detail';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'projects.items.pijiz' });
  
  return {
    title: `${t('title')} | Khalil Khaled`,
    description: t('description'),
  };
}

export default function PijizProjectPage() {
  const images = [
    { src: 'pijiz-home.png', alt: 'Pijiz Homepage', caption: 'Homepage with featured products' },
    { src: 'pijiz-product.png', alt: 'Pijiz Product Page', caption: 'Product detail page' },
    { src: 'pijiz-cart.png', alt: 'Pijiz Cart', caption: 'Shopping cart experience' },
    { src: 'pijiz-checkout.png', alt: 'Pijiz Checkout', caption: 'Streamlined checkout flow' },
  ];

  const technologies = [
    'Shopify',
    'Liquid',
    'JavaScript',
    'CSS3',
    'SEO',
    'Google Analytics',
  ];

  const highlights = [
    'Built custom Shopify theme matching brand identity',
    'Implemented multi-language support (Arabic, English, French)',
    'Integrated multiple payment gateways including local options',
    'Optimized page speed scoring 90+ on Google PageSpeed',
    'Set up Google Analytics and conversion tracking',
    'Configured custom domain and professional email',
  ];

  return (
    <ProjectDetail
      projectKey="pijiz"
      images={images}
      technologies={technologies}
      liveUrl="https://pijiz.com"
      role="Full Stack Developer"
      duration="May 2024"
      highlights={highlights}
    />
  );
}
