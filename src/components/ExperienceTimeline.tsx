import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, Github, MapPin } from 'lucide-react';
import { reveal } from './reveal';

export interface Role {
  title: string;
  start: string; // 'YYYY-MM'
  end?: string; // 'YYYY-MM'; omit for a current role
  highlights?: string[];
  skills?: string[];
  github?: string;
  githubLabel?: string;
}

export interface Job {
  company: string;
  location: string;
  type?: string; // e.g. 'Internship'
  roles: Role[]; // most recent first
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const parse = (ym: string) => {
  const [year, month] = ym.split('-').map(Number);
  return { year, month };
};

const formatMonth = (ym: string) => {
  const { year, month } = parse(ym);
  return `${MONTHS[month - 1]} ${year}`;
};

const formatRange = (start: string, end?: string) => `${formatMonth(start)} – ${end ? formatMonth(end) : 'Present'}`;

// Counts both the first and last month, like LinkedIn (Aug–Oct = 3 mos). Current roles count up to today.
const formatDuration = (start: string, end?: string) => {
  const s = parse(start);
  const now = new Date();
  const e = end ? parse(end) : { year: now.getFullYear(), month: now.getMonth() + 1 };
  const months = Math.max(1, (e.year - s.year) * 12 + (e.month - s.month) + 1);
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (rest) parts.push(`${rest} mo${rest > 1 ? 's' : ''}`);
  return parts.join(' ');
};

const Pill = ({ children, current = false }: { children: React.ReactNode; current?: boolean }) => (
  <span
    className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${
      current ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300' : 'border-white/10 bg-white/5 text-slate-300'
    }`}
  >
    {children}
  </span>
);

const Meta = ({ dates, location }: { dates: string; location?: string }) => (
  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-slate-400">
    <span className="inline-flex items-center gap-1.5">
      <Calendar className="w-4 h-4 text-slate-500" />
      {dates}
    </span>
    {location && (
      <span className="inline-flex items-center gap-1.5">
        <MapPin className="w-4 h-4 text-slate-500" />
        {location}
      </span>
    )}
  </div>
);

// Highlights, skill tags and the GitHub link shared by single- and multi-role cards
const RoleDetails = ({ role }: { role: Role }) => (
  <>
    {role.highlights && (
      <ul className="mt-4 space-y-2 text-[15px] text-slate-300 leading-relaxed">
        {role.highlights.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    )}
    {(role.skills?.length || role.github) && (
      <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
        {role.skills?.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-200"
          >
            {skill}
          </span>
        ))}
        {role.github && (
          <a
            href={role.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 hover:text-white transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            {role.githubLabel ?? 'View on GitHub'}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    )}
  </>
);

export default function ExperienceTimeline({ jobs }: { jobs: Job[] }) {
  return (
    // A thin rail with one dot per company; companies with several roles get a nested rail
    <ol className="relative max-w-4xl border-l border-white/10 ml-2 space-y-8">
      {jobs.map((job, index) => {
        const current = job.roles.some((r) => !r.end);
        const first = job.roles[job.roles.length - 1];
        const latest = job.roles[0];
        const companyLine = (
          <>
            <span className="font-medium text-cyan-300">{job.company}</span>
            {job.type && (
              <>
                <span className="text-slate-500"> · </span>
                <span className="text-slate-400">{job.type}</span>
              </>
            )}
          </>
        );

        return (
          <li key={job.company} className="relative pl-6 sm:pl-10">
            <span
              className={`absolute -left-[7px] top-7 w-3.5 h-3.5 rounded-full ring-4 ${
                current ? 'bg-cyan-400 ring-cyan-400/20' : 'bg-slate-900 border-2 border-cyan-400/70 ring-transparent'
              }`}
              aria-hidden="true"
            />
            <motion.article
              {...reveal({ y: 24, delay: index * 0.1 })}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 sm:p-6 transition-colors duration-300 hover:border-cyan-400/40"
            >
              {job.roles.length === 1 ? (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-white leading-snug">{latest.title}</h3>
                      <p className="mt-1 text-sm sm:text-base">{companyLine}</p>
                    </div>
                    <Pill current={!latest.end}>{latest.end ? formatDuration(latest.start, latest.end) : 'Current'}</Pill>
                  </div>
                  <Meta
                    dates={`${formatRange(latest.start, latest.end)}${latest.end ? '' : ` · ${formatDuration(latest.start)}`}`}
                    location={job.location}
                  />
                  <RoleDetails role={latest} />
                </>
              ) : (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-white leading-snug">{job.company}</h3>
                      {job.type && <p className="mt-1 text-sm sm:text-base text-slate-400">{job.type}</p>}
                    </div>
                    <Pill>{formatDuration(first.start, latest.end)}</Pill>
                  </div>
                  <Meta dates={formatRange(first.start, latest.end)} location={job.location} />

                  <ol className="mt-5 space-y-6 border-l border-white/10 pl-5">
                    {job.roles.map((role) => (
                      <li key={`${role.title}-${role.start}`} className="relative">
                        <span
                          className={`absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full ${
                            role.end ? 'bg-slate-600' : 'bg-cyan-400'
                          }`}
                          aria-hidden="true"
                        />
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="font-semibold text-white leading-snug">{role.title}</h4>
                          {!role.end && <Pill current>Current</Pill>}
                        </div>
                        <p className="mt-1 text-sm text-slate-400">
                          {formatRange(role.start, role.end)} · {formatDuration(role.start, role.end)}
                        </p>
                        <RoleDetails role={role} />
                      </li>
                    ))}
                  </ol>
                </>
              )}
            </motion.article>
          </li>
        );
      })}
    </ol>
  );
}
