// Entrance animation shared by every section. It animates opacity plus a single `transform` string
// (not Motion's x/y/scale shorthands) so Motion can run it on the compositor instead of updating
// styles from JavaScript on every frame, which made scrolling stutter while cards appeared.
export const reveal = ({ x = 0, y = 0, scale = 1, delay = 0, duration = 0.6 } = {}) => ({
  initial: { opacity: 0, transform: `translate(${x}px, ${y}px) scale(${scale})` },
  whileInView: { opacity: 1, transform: 'translate(0px, 0px) scale(1)' },
  viewport: { once: true },
  transition: { duration, delay, ease: 'easeOut' as const }
});
