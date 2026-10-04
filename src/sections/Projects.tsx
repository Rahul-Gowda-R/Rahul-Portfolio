import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronDown, ChevronUp, Github } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { reveal } from '../components/reveal';
import { btnSecondary, card, chip } from '../components/styles';
import { FEATURED_PROJECTS, projectAreas, projects, type ProjectArea } from '../data';

export default function Projects() {
  const [area, setArea] = useState<ProjectArea | 'all'>('all');
  const [showAll, setShowAll] = useState(false);

  const matching = area === 'all' ? projects : projects.filter((p) => p.areas.includes(area));
  // "View more" only applies to the unfiltered list; a filter always shows every match
  const collapsible = area === 'all' && matching.length > FEATURED_PROJECTS;
  const visible = collapsible && !showAll ? matching.slice(0, FEATURED_PROJECTS) : matching;
  const hiddenCount = matching.length - FEATURED_PROJECTS;

  const toggle = () => {
    // Collapsing removes cards above the button, so jump back to the section
    if (showAll) document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    setShowAll(!showAll);
  };

  const count = (id: ProjectArea | 'all') => (id === 'all' ? projects.length : projects.filter((p) => p.areas.includes(id)).length);

  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="03"
          label="Projects"
          title="Things I've built"
          subtitle="AI systems, mobile apps, and full-stack platforms, with source code on GitHub."
        />

        <motion.div {...reveal({ y: 16 })} className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {projectAreas.map(({ id, label }) => {
            const active = area === id;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={active}
                onClick={() => setArea(id)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active
                    ? 'border-cyan-400 bg-cyan-400 text-slate-950'
                    : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-400/40 hover:text-white'
                }`}
              >
                {label}
                <span className={`ml-2 text-xs ${active ? 'text-slate-800' : 'text-slate-500'}`}>{count(id)}</span>
              </button>
            );
          })}
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <motion.article
              key={project.title}
              {...reveal({ y: 24, delay: (index % 3) * 0.08 })}
              className={`${card} group flex flex-col overflow-hidden transition-[border-color,translate] duration-300 hover:-translate-y-1 hover:border-cyan-400/40`}
            >
              <div className="relative h-44 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-200">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-400">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li key={tag} className={chip}>
                      {tag}
                    </li>
                  ))}
                </ul>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 self-start pt-5 text-sm font-medium text-cyan-300 transition-colors duration-200 hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    View code
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {collapsible && (
          <div className="mt-10 flex justify-center">
            <button type="button" onClick={toggle} aria-expanded={showAll} className={btnSecondary}>
              {showAll ? (
                <>
                  Show less
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  View more projects ({hiddenCount})
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
