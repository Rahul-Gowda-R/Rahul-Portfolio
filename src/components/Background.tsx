import StarField from './cosmic/StarField';
import ShootingStars from './cosmic/ShootingStar';

// One fixed backdrop for the whole page: two soft static glows plus the twinkling stars.
// Being fixed, it never repaints while scrolling, so it costs far less than a star field per section.
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60rem 40rem at 15% -10%, rgba(34, 211, 238, 0.10), transparent 60%),' +
            'radial-gradient(50rem 35rem at 95% 10%, rgba(139, 92, 246, 0.10), transparent 60%),' +
            'radial-gradient(40rem 30rem at 50% 110%, rgba(34, 211, 238, 0.05), transparent 60%)',
        }}
      />
      <div className="absolute inset-0 opacity-60">
        <StarField count={90} />
      </div>
      <ShootingStars />
    </div>
  );
}
