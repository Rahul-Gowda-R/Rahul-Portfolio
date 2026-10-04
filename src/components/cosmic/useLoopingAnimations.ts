import { useEffect, type RefObject } from 'react';

/**
 * Starts one looping Web Animation per child of `containerRef`, and plays them only while the
 * container is on screen.
 *
 * Why not CSS animations: React listens for `animationiteration` at the document root, and any such
 * listener makes Chrome run looping CSS animations on the main thread every frame. Web Animations
 * fire no DOM events, so Chrome can keep these on the compositor.
 */
export function useLoopingAnimations(
  containerRef: RefObject<HTMLElement | null>,
  animateChild: (el: HTMLElement, index: number) => Animation
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const animations = Array.from(container.children as HTMLCollectionOf<HTMLElement>, animateChild);
    const observer = new IntersectionObserver(
      ([entry]) => animations.forEach((a) => (entry.isIntersecting ? a.play() : a.pause())),
      { rootMargin: '100px' }
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
      animations.forEach((a) => a.cancel());
    };
    // animateChild reads per-mount random data, so it only needs to run once
  }, []);
}
