import { memo, useRef, useState } from 'react';
import { useLoopingAnimations } from './useLoopingAnimations';

const makeStreak = () => {
  const startY = Math.random() * window.innerHeight * 0.5;
  const cycle = 10000 + Math.random() * 10000; // the streak takes the first 15% of the cycle, then rests
  return { startY, cycle, delay: -Math.random() * cycle };
};

const ShootingStars = memo(function ShootingStars() {
  const ref = useRef<HTMLDivElement>(null);
  // Randomize once per mount so parent re-renders don't restart the streaks
  const [streaks] = useState(() => Array.from({ length: 3 }, makeStreak));

  useLoopingAnimations(ref, (el, i) => {
    const { startY, cycle, delay } = streaks[i];
    const end = `translate(-100px, ${startY + 200}px) rotate(-45deg)`;
    return el.animate(
      [
        { transform: `translate(100vw, ${startY}px) rotate(-45deg)`, easing: 'ease-out' },
        { transform: end, offset: 0.15 },
        { transform: end },
      ],
      { duration: cycle, delay, iterations: Infinity }
    );
  });

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {streaks.map((_, i) => (
        <div key={i} className="shooting-star" />
      ))}
    </div>
  );
});

export default ShootingStars;
