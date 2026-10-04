import { motion } from 'motion/react';
import { BadgeCheck, Calendar, GraduationCap, Trophy } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { reveal } from '../components/reveal';
import { accentChip, card, cardHover, chip, iconTile } from '../components/styles';
import { activities, certifications, education } from '../data';

export default function Education() {
  return (
    <section id="education" className="relative px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="05"
          label="Education"
          title="Education & achievements"
          subtitle="Degrees, certifications, hackathons, and the events I've led."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.article
              key={edu.degree}
              {...reveal({ y: 24, delay: index * 0.08 })}
              className={`${card} ${cardHover} flex flex-col p-6`}
            >
              <div className="mb-5 flex items-start gap-4">
                <span className={iconTile}>
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{edu.degree}</h3>
                  <p className="mt-1 text-slate-400">{edu.school}</p>
                </div>
              </div>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-white/5 pt-4 text-sm">
                <span className="inline-flex items-center gap-1.5 text-slate-400">
                  <Calendar className="h-4 w-4 text-slate-500" />
                  {edu.dates}
                </span>
                <span className={accentChip}>{edu.score}</span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <motion.article {...reveal({ y: 24 })} className={`${card} p-6`}>
            <h3 className="mb-5 flex items-center gap-3 font-display text-lg font-semibold text-white">
              <BadgeCheck className="h-5 w-5 text-cyan-300" />
              Certifications
            </h3>
            <ul className="divide-y divide-white/5">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
                  <span className="text-slate-200">{cert.name}</span>
                  <span className={chip}>{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article {...reveal({ y: 24, delay: 0.08 })} className={`${card} p-6`}>
            <h3 className="mb-5 flex items-center gap-3 font-display text-lg font-semibold text-white">
              <Trophy className="h-5 w-5 text-cyan-300" />
              Activities & leadership
            </h3>
            <ul className="divide-y divide-white/5">
              {activities.map((activity) => (
                <li key={activity.event} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
                  <span className="text-slate-200">{activity.event}</span>
                  <span className="shrink-0 text-sm text-slate-500">{activity.role}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
