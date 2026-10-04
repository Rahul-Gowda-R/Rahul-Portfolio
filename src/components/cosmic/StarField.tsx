import { memo, useRef, useState } from 'react';
import { useLoopingAnimations } from './useLoopingAnimations';

interface Star {
  x: number;
  y: number;
  r: number;
}

interface Layer {
  stars: Star[];
  duration: number;
  delay: number;
}

const LAYER_COUNT = 3;

// Stars are split across a few SVG layers that are drawn once. Each layer twinkles as a group,
// so the browser animates LAYER_COUNT elements per field instead of one element per star.
// (Animating every star separately forced ~200 style updates per frame while scrolling.)
const makeLayers = (count: number): Layer[] =>
  Array.from({ length: LAYER_COUNT }, (_, i) => ({
    stars: Array.from({ length: Math.ceil(count / LAYER_COUNT) }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      r: Math.random() * 1.5 + 0.5,
    })),
    duration: 3000 + i * 1100 + Math.random() * 800,
    delay: -Math.random() * 4000,
  }));

const TWINKLE: Keyframe[] = [
  { opacity: 0.15, easing: 'ease-in-out' },
  { opacity: 1, easing: 'ease-in-out' },
  { opacity: 0.15 },
];

// Generated once per mount, so parent re-renders never move the stars
const StarField = memo(function StarField({ count = 100 }: { count?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [layers] = useState(() => makeLayers(window.innerWidth < 768 ? Math.round(count / 2) : count));

  useLoopingAnimations(ref, (el, i) =>
    el.animate(TWINKLE, { duration: layers[i].duration, delay: layers[i].delay, iterations: Infinity })
  );

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {layers.map((layer, i) => (
        <svg key={i} className="star-layer" width="100%" height="100%">
          {layer.stars.map((star, j) => (
            <circle key={j} cx={`${star.x}%`} cy={`${star.y}%`} r={star.r} fill="#fff" />
          ))}
        </svg>
      ))}
    </div>
  );
});

export default StarField;
