import { motion } from 'motion/react';
import { reveal } from './reveal';

// Numbered eyebrow, title and optional subtitle used at the top of every section
export default function SectionHeader({
  index,
  label,
  title,
  subtitle,
}: {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div {...reveal({ y: 20 })} className="mb-12 max-w-2xl">
      <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
        <span>{index}</span>
        <span className="h-px w-8 bg-cyan-400/40" aria-hidden="true" />
        <span>{label}</span>
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base leading-relaxed text-slate-400 sm:text-lg">{subtitle}</p>}
    </motion.div>
  );
}
