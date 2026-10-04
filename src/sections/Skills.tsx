import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import { reveal } from '../components/reveal';
import { card, cardHover, chip, iconTile } from '../components/styles';
import { focusAreas, techStack } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="02"
          label="Skills"
          title="What I work on"
          subtitle="Each area is backed by projects and roles you can check below."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map(({ title, description, evidence, Icon }, index) => (
            <motion.article
              key={title}
              {...reveal({ y: 24, delay: (index % 3) * 0.08 })}
              className={`${card} ${cardHover} flex flex-col p-6`}
            >
              <span className={iconTile}>
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 leading-relaxed text-slate-400">{description}</p>
              <p className="mt-auto pt-5 text-sm text-slate-500">
                <span className="text-slate-400">Seen in:</span> {evidence}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.h3 {...reveal({ y: 20 })} className="mb-5 mt-16 font-display text-xl font-semibold text-white">
          Tech stack
        </motion.h3>
        <motion.div {...reveal({ y: 24 })} className={`${card} divide-y divide-white/5`}>
          {techStack.map(({ category, Icon, items }) => (
            <div key={category} className="flex flex-col gap-3 p-5 md:flex-row md:items-start md:gap-6">
              <div className="flex w-48 shrink-0 items-center gap-3 md:pt-0.5">
                <Icon className="h-[18px] w-[18px] text-cyan-300" />
                <span className="font-medium text-slate-200">{category}</span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item} className={chip}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
