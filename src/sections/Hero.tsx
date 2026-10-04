import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { reveal } from '../components/reveal';
import { btnPrimary, btnSecondary } from '../components/styles';
import { profile, socials, stats, projects } from '../data';

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

// Syntax-highlighted profile card shown beside the intro on large screens
function CodeCard() {
  const k = 'text-violet-300'; // keyword
  const p = 'text-sky-300'; // property
  const s = 'text-emerald-300'; // string
  const n = 'text-amber-300'; // number
  const c = 'text-slate-500'; // comment
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-cyan-500/5">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-400/70" />
        <span className="h-3 w-3 rounded-full bg-amber-300/70" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
        <span className="ml-3 font-mono text-xs text-slate-500">rahul.ts</span>
      </div>
      <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-7 text-slate-300">
        <code>
          <span className={k}>export const</span> rahul = {'{'}
          {'\n'}  <span className={p}>role</span>: <span className={s}>"{profile.role}"</span>,
          {'\n'}  <span className={p}>company</span>: <span className={s}>"{profile.company}"</span>,
          {'\n'}  <span className={p}>focus</span>: [<span className={s}>"GenAI"</span>, <span className={s}>"Android"</span>, <span className={s}>"Full-stack"</span>],
          {'\n'}  <span className={p}>stack</span>: [<span className={s}>"Python"</span>, <span className={s}>"Kotlin"</span>, <span className={s}>"React"</span>],
          {'\n'}  <span className={p}>projects</span>: <span className={n}>{projects.length}</span>,
          {'\n'}  <span className={p}>degree</span>: <span className={s}>"B.E. Computer Science"</span>,{' '}
          <span className={c}>// 2026</span>
          {'\n'}  <span className={p}>cgpa</span>: <span className={n}>8.47</span>,
          {'\n'}{'}'};
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative px-4 pb-20 pt-32 sm:px-6 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <motion.p
              {...reveal({ y: 16 })}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/5 px-3 py-1.5 text-xs font-medium text-emerald-200"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
              Currently {profile.role} at {profile.company}
            </motion.p>

            <motion.h1
              {...reveal({ y: 24, delay: 0.05, duration: 0.7 })}
              className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              {...reveal({ y: 24, delay: 0.1, duration: 0.7 })}
              className="mt-5 max-w-xl text-xl leading-snug text-slate-200 sm:text-2xl"
            >
              AI Engineer building intelligent software, from{' '}
              <span className="text-cyan-300">ML pipelines</span> to{' '}
              <span className="text-cyan-300">Android</span> and the <span className="text-cyan-300">web</span>.
            </motion.p>

            <motion.p {...reveal({ y: 24, delay: 0.15, duration: 0.7 })} className="mt-4 max-w-xl leading-relaxed text-slate-400">
              Computer Science graduate (2026) with hands-on experience across generative AI, computer vision, mobile, and
              full-stack development, from internships to production IT systems.
            </motion.p>

            <motion.div {...reveal({ y: 24, delay: 0.2, duration: 0.7 })} className="mt-8 flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => scrollTo('projects')} className={btnPrimary}>
                View projects
                <ArrowRight className="h-4 w-4" />
              </button>
              <a href={profile.resume} download className={btnSecondary}>
                <Download className="h-4 w-4" />
                Download resume
              </a>
            </motion.div>

            <motion.ul {...reveal({ y: 24, delay: 0.25, duration: 0.7 })} className="mt-8 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-colors duration-200 hover:border-cyan-400/50 hover:text-cyan-300"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div {...reveal({ y: 32, delay: 0.2, duration: 0.8 })} className="hidden md:block">
            <CodeCard />
          </motion.div>
        </div>

        <motion.dl
          {...reveal({ y: 24, delay: 0.3, duration: 0.7 })}
          className="mt-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4"
          style={{ gap: '1px' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-slate-950/90 px-5 py-5">
              <dt className="text-xs uppercase tracking-wider text-slate-500">{stat.label}</dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-white">{stat.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
