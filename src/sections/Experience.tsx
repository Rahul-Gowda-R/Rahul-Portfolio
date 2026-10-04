import SectionHeader from '../components/SectionHeader';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { experiences } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="04"
          label="Experience"
          title="Where I've worked"
          subtitle="From AI and prompt engineering internships to running IT systems and building AI in production."
        />
        <ExperienceTimeline jobs={experiences} />
      </div>
    </section>
  );
}
