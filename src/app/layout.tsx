import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Khalil Khaled | Frontend Engineer',
  description:
    'Frontend engineer with 5+ years of experience building scalable, modern web applications using Angular, React, and TypeScript. Passionate about UI performance, developer experience, and clean architecture.',
  keywords: [
    'Frontend Engineer',
    'Angular Developer',
    'React Developer',
    'TypeScript',
    'Web Development',
    'Tunisia',
    'Software Engineer',
  ],
  authors: [{ name: 'Khalil Khaled' }],
  creator: 'Khalil Khaled',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://khalilkhaled.dev',
    title: 'Khalil Khaled | Frontend Engineer',
    description:
      'Frontend engineer with 5+ years of experience building scalable, modern web applications.',
    siteName: 'Khalil Khaled Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khalil Khaled | Frontend Engineer',
    description:
      'Frontend engineer with 5+ years of experience building scalable, modern web applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
