import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Sparkles, Youtube } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { reveal } from '../components/reveal';
import { card, iconTile } from '../components/styles';
import { profile } from '../data';

const facts = [
  { Icon: Briefcase, label: 'Currently', value: `${profile.role} at ${profile.company}` },
  { Icon: GraduationCap, label: 'Education', value: 'B.E. Computer Science, VTU (2026) · CGPA 8.47' },
  { Icon: Sparkles, label: 'Focus', value: 'Generative AI, computer vision, Android, full-stack' },
  { Icon: Youtube, label: 'Beyond code', value: 'Tech-fest host & MC · YouTube: Becoming Rahul' },
];

export default function About() {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="01" label="About" title="From ML pipelines to production apps" />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.div {...reveal({ y: 24 })} className="space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              I'm an AI Engineer at {profile.company} and a 2026 Computer Science graduate with strong foundations in
              object-oriented design, data structures, algorithms, and full-stack development.
            </p>
            <p>
              Through my current role, two internships, and multiple independent projects, I've built end-to-end software
              systems, from machine learning pipelines and real-time AI applications to multi-tier web platforms.
            </p>
            <p>
              I'm passionate about designing scalable solutions to broadly defined problems, working in agile teams, and
              building products with real-world impact.
            </p>
          </motion.div>

          <motion.dl {...reveal({ y: 24, delay: 0.1 })} className={`${card} divide-y divide-white/5 p-2`}>
            {facts.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 p-4">
                <span className={iconTile}>
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">{label}</dt>
                  <dd className="mt-1 text-slate-200">{value}</dd>
                </div>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
