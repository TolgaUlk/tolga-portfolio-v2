import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to the returned ref's container and adds
 * the `.is-visible` class to any descendant `.reveal-item` as it scrolls into
 * view. Pair with the `.reveal-item` CSS (see index.css) for a subtle
 * fade-up-on-scroll effect. Cheap, dependency-free, and respects
 * prefers-reduced-motion automatically via the CSS.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = container.matches('.reveal-item') ? [container] : Array.from(container.querySelectorAll<HTMLElement>('.reveal-item'));

    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return ref;
}
