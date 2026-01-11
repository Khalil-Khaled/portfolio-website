'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface ProjectGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="space-y-4">
        {/* Main Image */}
        <motion.div
          className="relative aspect-video rounded-2xl overflow-hidden bg-day-bg-alt dark:bg-night-bg-alt border border-day-bg-highlight dark:border-night-bg-highlight group cursor-pointer"
          onClick={() => openLightbox(currentIndex)}
          whileHover={{ scale: 1.01 }}
        >
          {/* Placeholder for main image */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-day-accent/5 to-day-accent-alt/5 dark:from-night-cyan/5 dark:to-night-accent/5">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-day-bg-highlight dark:bg-night-bg-highlight flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-day-accent/50 dark:text-night-cyan/50" />
              </div>
              <p className="text-sm text-day-comment dark:text-night-comment font-mono">
                {images[currentIndex]?.src || 'screenshot-1.png'}
              </p>
              {images[currentIndex]?.caption && (
                <p className="text-xs text-day-text/60 dark:text-night-text/60 mt-2">
                  {images[currentIndex].caption}
                </p>
              )}
            </div>
          </div>

          {/* Zoom indicator */}
          <div className="absolute top-4 right-4 p-2 rounded-lg bg-day-bg/80 dark:bg-night-bg/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn className="w-5 h-5 text-day-accent dark:text-night-cyan" />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-day-bg/80 dark:bg-night-bg/80 backdrop-blur-sm text-day-text dark:text-night-text hover:bg-day-accent hover:text-white dark:hover:bg-night-cyan dark:hover:text-night-bg transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-day-bg/80 dark:bg-night-bg/80 backdrop-blur-sm text-day-text dark:text-night-text hover:bg-day-accent hover:text-white dark:hover:bg-night-cyan dark:hover:text-night-bg transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </motion.div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? 'border-day-accent dark:border-night-cyan'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Thumbnail placeholder */}
                <div className="absolute inset-0 bg-day-bg-alt dark:bg-night-bg-alt flex items-center justify-center">
                  <span className="text-xs font-mono text-day-comment dark:text-night-comment">
                    {index + 1}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-mono">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Main lightbox image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox image placeholder */}
              <div className="aspect-video rounded-xl bg-day-bg-alt dark:bg-night-bg-alt flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-mono text-day-comment dark:text-night-comment">
                    {images[currentIndex]?.src || `screenshot-${currentIndex + 1}.png`}
                  </p>
                  {images[currentIndex]?.caption && (
                    <p className="text-sm text-day-text/60 dark:text-night-text/60 mt-2">
                      {images[currentIndex].caption}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
