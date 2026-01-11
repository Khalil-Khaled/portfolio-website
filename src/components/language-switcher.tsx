'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { locales, localeNames, localeFlags, type Locale } from '@/i18n/config';

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('language');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    // Get the path without the current locale prefix
    const segments = pathname.split('/');
    const isLocaleInPath = locales.includes(segments[1] as Locale);
    
    let newPath: string;
    if (isLocaleInPath) {
      segments[1] = newLocale;
      newPath = segments.join('/');
    } else {
      newPath = `/${newLocale}${pathname}`;
    }

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-day-bg-alt dark:bg-night-bg-alt border border-day-bg-highlight dark:border-night-bg-highlight text-sm font-medium hover:border-day-accent dark:hover:border-night-cyan transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-4 h-4 text-day-accent dark:text-night-cyan" />
        <span className="hidden sm:inline">{localeFlags[locale]}</span>
        <span className="text-day-text dark:text-night-text">{t('current')}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-day-comment dark:text-night-comment" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 py-2 min-w-[140px] bg-day-bg dark:bg-night-bg border border-day-bg-highlight dark:border-night-bg-highlight rounded-xl shadow-xl z-50"
            role="listbox"
            aria-label="Available languages"
          >
            {locales.map((loc) => (
              <motion.button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                  locale === loc
                    ? 'bg-day-accent/10 dark:bg-night-cyan/10 text-day-accent dark:text-night-cyan'
                    : 'text-day-text dark:text-night-text hover:bg-day-bg-alt dark:hover:bg-night-bg-alt'
                }`}
                whileHover={{ x: 3 }}
                role="option"
                aria-selected={locale === loc}
              >
                <span className="text-lg">{localeFlags[loc]}</span>
                <span>{localeNames[loc]}</span>
                {locale === loc && (
                  <motion.span
                    layoutId="activeLocale"
                    className="ml-auto w-2 h-2 rounded-full bg-day-accent dark:bg-night-cyan"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
