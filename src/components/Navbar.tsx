import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download } from 'lucide-react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  // Darken the bar once the 20px marker at the top of the page scrolls out of view.
  // An observer avoids a scroll listener: reading window.scrollY on every scroll event
  // forced the browser to finish pending style work mid-scroll, which caused jank.
  const topMarker = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const marker = topMarker.current;
    if (!marker) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(marker);
    return () => observer.disconnect();
  }, []);

  // Highlight the link for whichever section is crossing the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -55% 0px' }
    );
    for (const { id } of links) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', `#${id}`);
  };

  // The mobile menu's closing animation cancels any smooth scroll started while it runs,
  // so a tap inside the open menu waits for onExitComplete before scrolling.
  const pendingScroll = useRef<string | null>(null);

  const goTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (open) {
      pendingScroll.current = id;
      setOpen(false);
    } else {
      scrollToSection(id);
    }
  };

  const onMenuClosed = () => {
    if (pendingScroll.current) scrollToSection(pendingScroll.current);
    pendingScroll.current = null;
  };

  const linkClass = (id: string) =>
    `relative px-3 py-2 text-sm transition-colors duration-300 ${
      active === id ? 'text-cyan-300' : 'text-gray-300 hover:text-white'
    }`;

  return (
    <>
      <div ref={topMarker} className="absolute top-0 left-0 h-5 w-px pointer-events-none" aria-hidden="true" />
      <header
        // Near-solid background instead of backdrop-blur: re-blurring the page behind the bar on every
        // scroll frame was expensive, and the blur was barely visible on this dark design
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? 'bg-black/90 border-b border-purple-400/20 shadow-lg shadow-black/30'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a
            href="#top"
            onClick={(e) => goTo(e, 'top')}
            className="text-lg font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent"
          >
            ✦ Rahul Gowda R
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ id, label }) => (
              <a key={id} href={`#${id}`} onClick={(e) => goTo(e, id)} className={linkClass(id)}>
                {label}
                {active === id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-cyan-400 to-purple-400"
                  />
                )}
              </a>
            ))}
            <a
              href="/Rahul-Portfolio/resume.pdf"
              download
              className="ml-3 inline-flex items-center gap-2 rounded-xl border border-cyan-400/60 px-4 py-2 text-sm text-cyan-300 hover:bg-cyan-400/10 transition-colors duration-300"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 text-gray-200 hover:text-white"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence onExitComplete={onMenuClosed}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-purple-400/20"
            >
              <div className="px-4 py-3 flex flex-col">
                {links.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => goTo(e, id)}
                    className={`py-3 border-b border-white/5 ${
                      active === id ? 'text-cyan-300' : 'text-gray-200'
                    }`}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="/Rahul-Portfolio/resume.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="mt-4 mb-2 inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/60 px-4 py-2.5 text-cyan-300"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
