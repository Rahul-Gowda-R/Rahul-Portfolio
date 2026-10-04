import { navSections, profile, socials } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#top" className="font-display text-lg font-semibold text-white">
            {profile.name}
          </a>
          <p className="mt-1 text-sm text-slate-500">
            {profile.role} at {profile.company} · © {new Date().getFullYear()}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            {navSections.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors duration-200 hover:text-cyan-300">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center gap-2">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors duration-200 hover:border-cyan-400/50 hover:text-cyan-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
