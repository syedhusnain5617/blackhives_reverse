import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { ProjectImage } from '@/lib/projectDetails';

interface ProjectImageCarouselProps {
  images: ProjectImage[];
  title: string;
}

export const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = images.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setActiveIndex(idx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') setLightboxOpen(false);
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
        return;
      }
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, nextSlide, prevSlide]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.targetTouches[0]) {
      touchStartX.current = e.targetTouches[0].clientX;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.targetTouches[0]) {
      touchEndX.current = e.targetTouches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      <section
        className="w-full bg-surface-canvas overflow-hidden select-none py-6 md:py-10"
        aria-label="Project screenshot showcase"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center min-h-[260px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[560px]">
            {images.map((img, idx) => {
              // Calculate offset relative to active
              let offset = idx - activeIndex;
              if (offset < -1 && total > 2) offset += total;
              if (offset > 1 && total > 2) offset -= total;

              const isActive = offset === 0;
              const isPrev = offset === -1 || (activeIndex === 0 && idx === total - 1 && total > 2);
              const isNext = offset === 1 || (activeIndex === total - 1 && idx === 0 && total > 2);

              let transform = 'translateX(160%) scale(0.7)';
              let opacity = 0;
              let zIndex = 0;
              let pointerEvents: 'auto' | 'none' = 'none';

              if (isActive) {
                transform = 'translateX(0%) scale(1)';
                opacity = 1;
                zIndex = 20;
                pointerEvents = 'auto';
              } else if (isNext) {
                transform = 'translateX(62%) scale(0.85)';
                opacity = 0.35;
                zIndex = 10;
                pointerEvents = 'auto';
              } else if (isPrev) {
                transform = 'translateX(-62%) scale(0.85)';
                opacity = 0.35;
                zIndex = 10;
                pointerEvents = 'auto';
              }

              return (
                <div
                  key={img.src}
                  className="absolute w-full max-w-[920px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    pointerEvents,
                  }}
                  onClick={() => {
                    if (!isActive) goToSlide(idx);
                  }}
                >
                  <div className="group relative w-full aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden bg-surface-elevated border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.85)] cursor-pointer">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.02]"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Enlarge Hint Button */}
                    {isActive && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxOpen(true);
                        }}
                        className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 hover:bg-black/90 text-white/90 hover:text-white border border-white/20 hover:border-white/40 px-3 py-1.5 rounded-full flex items-center gap-1.5 font-mono text-[11px] backdrop-blur-md"
                        aria-label="Enlarge screenshot"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Enlarge UI</span>
                      </button>
                    )}

                    {/* Bottom Controls Bar (inside the active card) */}
                    {isActive && (
                      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex items-end justify-between z-10 pointer-events-auto">
                        {/* Slide Indicator Dashes */}
                        <div className="flex items-center gap-2">
                          {images.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                goToSlide(dotIdx);
                              }}
                              aria-label={`Go to image ${dotIdx + 1}`}
                              className="h-[3px] rounded-full transition-all duration-300 cursor-pointer"
                              style={{
                                width: dotIdx === activeIndex ? '28px' : '7px',
                                backgroundColor: '#ffffff',
                                opacity: dotIdx === activeIndex ? 1 : 0.3,
                              }}
                            />
                          ))}
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] text-white/50 tabular-nums mr-2">
                            {String(activeIndex + 1).padStart(2, '0')}&thinsp;/&thinsp;
                            {String(total).padStart(2, '0')}
                          </span>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              prevSlide();
                            }}
                            aria-label="Previous screenshot"
                            className="w-9 h-9 rounded-full border border-white/20 bg-black/40 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md active:scale-95 cursor-pointer"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              nextSlide();
                            }}
                            aria-label="Next screenshot"
                            className="w-9 h-9 rounded-full border border-white/20 bg-black/40 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md active:scale-95 cursor-pointer"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-6xl w-full bg-surface-canvas border border-white/15 p-4 sm:p-6 shadow-2xl rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 font-mono">
              <div>
                <span className="text-[11px] text-text-muted uppercase tracking-widest block">
                  {title} // PRODUCTION UI PREVIEW
                </span>
                <span className="text-xs text-white/70">
                  {images[activeIndex]?.alt || `Screen ${activeIndex + 1} of ${total}`}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-muted mr-3">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(false)}
                  className="w-9 h-9 border border-white/20 hover:border-white text-white flex items-center justify-center transition-colors cursor-pointer rounded-lg bg-surface-elevated"
                  aria-label="Close enlarged preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Image */}
            <div className="relative overflow-hidden rounded-lg border border-white/10 max-h-[72vh] flex items-center justify-center bg-black/80">
              <img
                src={images[activeIndex]?.src}
                alt={images[activeIndex]?.alt}
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />

              {/* Prev / Next inside Modal */}
              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/70 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all backdrop-blur-md cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/70 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all backdrop-blur-md cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
