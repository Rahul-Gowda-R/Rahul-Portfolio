import { motion } from 'motion/react';
import { ArrowUpRight, Mail } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';
import { reveal } from '../components/reveal';
import { btnPrimary, card } from '../components/styles';
import { profile, socials } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="06"
          label="Contact"
          title="Let's build something together"
          subtitle="Have a role, project, or idea in mind? Send a message and it lands straight in my inbox."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div {...reveal({ y: 24 })} className="flex flex-col gap-6">
            <a href={`mailto:${profile.email}`} className={`${btnPrimary} self-start`}>
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>

            <ul className={`${card} divide-y divide-white/5`}>
              {socials.map(({ label, href, handle, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-5 py-4 transition-colors duration-200 hover:bg-white/[0.03]"
                  >
                    <Icon className="h-5 w-5 text-slate-400 transition-colors duration-200 group-hover:text-cyan-300" />
                    <span className="font-medium text-slate-200">{label}</span>
                    <span className="ml-auto truncate text-sm text-slate-500">{handle}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-600 transition-colors duration-200 group-hover:text-cyan-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...reveal({ y: 24, delay: 0.08 })} className={`${card} p-6 sm:p-8`}>
            <h3 className="font-display text-xl font-semibold text-white">Send a message</h3>
            <p className="mb-6 mt-1 text-sm text-slate-400">All fields are required.</p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
