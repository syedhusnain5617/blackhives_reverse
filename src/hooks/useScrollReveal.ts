import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Custom hook to observe elements entering the viewport
 * and trigger the scroll-reveal animation.
 */
export function useScrollReveal<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options]);

  return { ref, isVisible };
}

/**
 * Utility hook for multiple scroll reveal elements.
 * Returns a callback ref and a set of visible indices.
 */
export function useMultiScrollReveal(threshold = 0.1) {
  const [visibleSet, setVisibleSet] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Map<number, HTMLElement>>(new Map());

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.revealIndex
            );
            if (!Number.isNaN(index)) {
              setVisibleSet((prev) => new Set(prev).add(index));
              observerRef.current?.unobserve(entry.target);
            }
          }
        });
      },
      { threshold }
    );

    elementsRef.current.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold]);

  const setRef = useCallback((index: number) => {
    return (el: HTMLElement | null) => {
      if (el) {
        el.dataset.revealIndex = String(index);
        elementsRef.current.set(index, el);
        observerRef.current?.observe(el);
      }
    };
  }, []);

  return { setRef, isVisible: (index: number) => visibleSet.has(index) };
}
