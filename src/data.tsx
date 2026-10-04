// All portfolio content lives here; the sections in src/sections/ only handle layout.
// Everything should be backed by Rahul's resume, LinkedIn or GitHub. Don't invent claims.
import {
  Brain,
  Code,
  Cpu,
  Database,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Network,
  Server,
  Smartphone,
  Wrench,
  Youtube,
  type LucideIcon,
} from 'lucide-react';
import type { Job } from './components/ExperienceTimeline';

export const profile = {
  name: 'Rahul Gowda R',
  role: 'AI Engineer',
  company: 'BlueOrbit Tech',
  email: 'rrahulgowda733@gmail.com',
  resume: '/Rahul-Portfolio/resume.pdf',
  github: 'https://github.com/Rahul-Gowda-R',
};

export const socials: { label: string; href: string; handle: string; Icon: LucideIcon }[] = [
  { label: 'GitHub', href: 'https://github.com/Rahul-Gowda-R', handle: 'Rahul-Gowda-R', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rahul-gowda-r/', handle: 'rahul-gowda-r', Icon: Linkedin },
  { label: 'YouTube', href: 'https://www.youtube.com/@Becoming_Rahul', handle: 'Becoming Rahul', Icon: Youtube },
  { label: 'Instagram', href: 'https://www.instagram.com/rahul_gowda_733/', handle: '@rahul_gowda_733', Icon: Instagram },
];

export const emailLink = { label: 'Email', href: `mailto:${profile.email}`, handle: profile.email, Icon: Mail };

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080`;

export type ProjectArea = 'ai' | 'mobile' | 'web';

export const projectAreas: { id: ProjectArea | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'web', label: 'Web' },
];

// Order matters: the first FEATURED_PROJECTS are shown before "View more".
export const FEATURED_PROJECTS = 6;

export const projects: {
  title: string;
  description: string;
  image: string;
  category: string;
  areas: ProjectArea[];
  tags: string[];
  link?: string; // omit when there's no public repo or demo
}[] = [
  {
    title: 'DriveGuard AI',
    description:
      'Real-time driver monitoring that detects drowsiness, yawning, distraction, and driver presence, with instant audio alerts and a live dashboard.',
    image: unsplash('1449965408869-eaa3f722e40d'),
    category: 'Computer Vision',
    areas: ['ai', 'web'],
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Flask', 'React'],
    link: 'https://github.com/Rahul-Gowda-R/DriveGuard-AI',
  },
  {
    title: 'VibeBuild AI',
    description:
      'Turns natural-language prompts into production-ready code with Google Gemini, with live preview and an AI chat in the browser.',
    image: unsplash('1555066931-4365d14bab8c'),
    category: 'Generative AI',
    areas: ['ai', 'web'],
    tags: ['Next.js', 'Gemini', 'Convex', 'Sandpack', 'Tailwind CSS'],
    link: 'https://github.com/Rahul-Gowda-R/VibeBuild-AI',
  },
  {
    title: 'RecruitAI',
    description:
      'AI-assisted recruitment platform with ATS-based resume screening, skill assessments, interview monitoring, and job matching.',
    image: unsplash('1586281380349-632531db7ed4'),
    category: 'AI Platform',
    areas: ['ai', 'web'],
    tags: ['Flask', 'MySQL', 'NLP', 'OpenCV'],
    link: 'https://github.com/Rahul-Gowda-R/RecruitAI',
  },
  {
    title: 'Controlio',
    description:
      'Android employee management app with task assignment, attendance, performance reviews, messaging, analytics, and role-based access. Built during my MindMatrix internship.',
    image: unsplash('1512941937669-90a1b58e7e9c'),
    category: 'Android',
    areas: ['mobile'],
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Room'],
    link: 'https://github.com/Rahul-Gowda-R/Controlio',
  },
  {
    title: 'ShieldSMS AI',
    description:
      'Detects phishing and spam SMS in real time with an offline ML model, URL analysis, and trusted-sender checks. No data leaves the device.',
    image: unsplash('1563986768609-322da13575f3'),
    category: 'Cybersecurity',
    areas: ['ai', 'mobile'],
    tags: ['Flutter', 'TensorFlow Lite', 'NLP', 'Python'],
    link: 'https://github.com/Rahul-Gowda-R/ShieldSMS-AI',
  },
  {
    title: 'SportTrack AI',
    description:
      'Detects and tracks players in sports videos with persistent IDs, exporting annotated video and JSON tracking data for analytics.',
    image: unsplash('1461896836934-ffe607ba8211'),
    category: 'Computer Vision',
    areas: ['ai'],
    tags: ['Python', 'YOLOv11', 'OpenCV', 'Tracking'],
    link: 'https://github.com/Rahul-Gowda-R/SportTrack-AI',
  },
  {
    title: 'Karnataka Festival Guide',
    description:
      "AI guide to Karnataka's festivals with bilingual conversations, travel recommendations, and cultural insights.",
    image: unsplash('1582510003544-4d00b7f74220'),
    category: 'AI Web App',
    areas: ['ai', 'web'],
    tags: ['React', 'TypeScript', 'Vite', 'Gemini'],
    link: 'https://github.com/Rahul-Gowda-R/Karnataka-Festival-Guide',
  },
  {
    title: 'J.A.R.V.I.S AI Assistant',
    description:
      'Iron Man-inspired assistant with voice and text interaction and real-time AI responses, built during my VaultofCodes internship.',
    image: unsplash('1677442136019-21780ecad995'),
    category: 'AI Assistant',
    areas: ['ai', 'web'],
    tags: ['Flask', 'Gemini API', 'Web Speech API'],
    link: 'https://github.com/Rahul-Gowda-R/Jarvis',
  },
  {
    title: 'Gemini AI Chatbot',
    description: 'Chatbot for question answering, summarization, and creative writing with a responsive web interface.',
    image: unsplash('1544006659-f0b21884ce1d'),
    category: 'Chatbot',
    areas: ['ai', 'web'],
    tags: ['Python', 'Flask', 'Gemini API'],
    link: 'https://github.com/Rahul-Gowda-R/Vault-of-Codes',
  },
  {
    title: 'Shopeeva',
    description:
      'Multi-tier e-commerce platform with a Node.js + MySQL backend, a normalized schema with indexed catalogue queries, and RESTful cart and checkout APIs.',
    image: unsplash('1523381210434-271e8be1f52b'),
    category: 'E-commerce',
    areas: ['web'],
    tags: ['JavaScript', 'Node.js', 'MySQL', 'REST APIs'],
  },
  {
    title: 'Hospital Management System',
    description: 'Desktop application for managing patients, doctors, and billing, with role-based access and reporting.',
    image: unsplash('1576091160550-2173dba999ef'),
    category: 'Healthcare',
    areas: [],
    tags: ['Java', 'MySQL'],
    link: 'https://github.com/Rahul-Gowda-R/Hospital-Management-System',
  },
];

// "What I work on". Each area names the projects or roles that back it up.
export const focusAreas: { title: string; description: string; evidence: string; Icon: LucideIcon }[] = [
  {
    title: 'AI & LLM applications',
    description: 'Assistants, chatbots, and code generators on the Gemini API, with careful prompt design.',
    evidence: 'J.A.R.V.I.S, VibeBuild AI, Festival Guide',
    Icon: Brain,
  },
  {
    title: 'Machine learning & vision',
    description: 'Real-time pipelines from camera or text to on-device inference and alerts.',
    evidence: 'DriveGuard AI, SportTrack AI, ShieldSMS AI',
    Icon: Cpu,
  },
  {
    title: 'Android & mobile',
    description: 'Kotlin and Flutter apps with clean MVC architecture and role-based access.',
    evidence: 'Controlio at MindMatrix, ShieldSMS AI',
    Icon: Smartphone,
  },
  {
    title: 'Full-stack web',
    description: 'React frontends on Node.js or Flask APIs with relational and NoSQL databases.',
    evidence: 'RecruitAI, Shopeeva, this portfolio',
    Icon: Server,
  },
  {
    title: 'IT & enterprise systems',
    description: 'CRM administration, networking, VPN, telephony, and structured incident troubleshooting.',
    evidence: 'IT Executive at BlueOrbit Tech',
    Icon: Network,
  },
  {
    title: 'CS foundations',
    description: 'Object-oriented design, data structures, algorithms, and system design in every project.',
    evidence: 'B.E. Computer Science, CGPA 8.47',
    Icon: Wrench,
  },
];

export const techStack: { category: string; Icon: LucideIcon; items: string[] }[] = [
  { category: 'Languages', Icon: Code, items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Kotlin', 'Dart', 'SQL', 'HTML & CSS'] },
  { category: 'Web & backend', Icon: Server, items: ['React', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'REST APIs', 'Tailwind CSS', 'Vite'] },
  { category: 'Databases', Icon: Database, items: ['MySQL', 'SQLite', 'MongoDB', 'Firebase', 'Convex'] },
  {
    category: 'AI & ML',
    Icon: Brain,
    items: ['TensorFlow Lite', 'Scikit-learn', 'OpenCV', 'MediaPipe', 'YOLO', 'Gemini API', 'NLP', 'Prompt Engineering', 'ML Pipelines', 'Edge Deployment'],
  },
  { category: 'Mobile', Icon: Smartphone, items: ['Android', 'Jetpack Compose', 'Room', 'Flutter', 'Android Studio'] },
  {
    category: 'IT & enterprise',
    Icon: Network,
    items: ['CRM Administration', 'Salesforce CRM', 'User & Access Management', 'Network Troubleshooting', 'TCP/IP, DNS & DHCP', 'VPN & IP Configuration', 'Telephony (Zoiper)', 'Hardware Troubleshooting'],
  },
  {
    category: 'Practices',
    Icon: Wrench,
    items: ['Object-Oriented Design', 'Data Structures & Algorithms', 'System Design', 'Distributed Systems', 'Agile / Sprints', 'Git & GitHub', 'GitHub Actions'],
  },
];

// Most recent first, grouped by company. Durations are calculated from the dates.
export const experiences: Job[] = [
  {
    company: 'BlueOrbit Tech',
    location: 'Bengaluru',
    roles: [
      { title: 'AI Engineer', start: '2026-10' },
      {
        title: 'IT Executive',
        start: '2026-08',
        end: '2026-10',
        highlights: [
          'Provided day-to-day IT support for users and branch operations, troubleshooting hardware, software, CRM, network, and system issues.',
          'Managed CRM user administration, including user creation, removal of inactive users, login support, and access configuration.',
          'Configured and troubleshot Zoiper telephony, VPN connectivity, IP configuration, and branch-level network access.',
          'Coordinated with development and network teams on CRM and server availability issues, investigating root causes and verifying service restoration.',
        ],
        skills: ['CRM Administration', 'Salesforce CRM', 'Networking & VPN', 'Telephony (Zoiper)', 'Hardware Support'],
      },
    ],
  },
  {
    company: 'MindMatrix',
    location: 'Bengaluru',
    type: 'Internship',
    roles: [
      {
        title: 'Android Development Intern (GenAI-Focused)',
        start: '2025-09',
        end: '2026-01',
        highlights: [
          'Designed and built Controlio, an Android Employee Performance Tracker in Kotlin, following object-oriented design principles and a scalable MVC architecture.',
          'Implemented role-based access control with GenAI-driven performance insights, writing modular, reusable components across the application layer.',
          'Delivered features iteratively in an agile sprint workflow, collaborating with cross-functional team members to ship production-ready builds.',
        ],
        skills: ['Kotlin', 'Android', 'MVC', 'GenAI', 'Agile'],
        github: 'https://github.com/Rahul-Gowda-R/Controlio',
        githubLabel: 'Controlio on GitHub',
      },
    ],
  },
  {
    company: 'VaultofCodes',
    location: 'Delhi',
    type: 'Internship',
    roles: [
      {
        title: 'AI & Prompt Engineering Intern',
        start: '2025-06',
        end: '2025-07',
        highlights: [
          'Designed and developed J.A.R.V.I.S, a full-featured AI assistant built with the Gemini API and Flask, using a client-server architecture that separates inference logic from the frontend.',
          'Engineered a voice + text interaction system with the Web Speech API, handling async request/response flows and optimizing prompt design for accuracy and latency.',
          'Delivered a working product end-to-end within a fast-paced internship cycle, managing ambiguity and iterating rapidly on user-facing features.',
        ],
        skills: ['Prompt Engineering', 'Gemini API', 'Flask', 'Web Speech API'],
        github: 'https://github.com/Rahul-Gowda-R/Vault-of-Codes',
      },
    ],
  },
];

export const education = [
  {
    degree: 'B.E. in Computer Science',
    school: 'Rajeev Institute of Technology, VTU Belagavi',
    dates: 'Graduated Jul 2026',
    score: 'CGPA 8.47',
  },
  {
    degree: 'Senior Secondary (PUC, PCMB)',
    school: 'STG PU College',
    dates: '2019 – 2021',
    score: '89.5%',
  },
];

export const certifications = [
  { name: 'The Joy of Computing Using Python', issuer: 'NPTEL' },
  { name: 'Cyber Security', issuer: 'NSDC' },
  { name: 'Automation Developer Associate', issuer: 'UiPath' },
];

export const activities = [
  { role: 'Participant', event: 'IGNITEX 2025 National Hackathon' },
  { role: 'Participant', event: 'GenAI Hackathon 2025 (Confidential AI Project)' },
  { role: 'Host & Coordinator', event: "TechKriti'24 State-Level Tech Fest" },
  { role: 'MC & Event Host', event: 'Swarit 2026' },
];

export const stats: { value: string; label: string }[] = [
  { value: String(projects.length), label: 'Projects built' },
  { value: String(experiences.length), label: 'Companies' },
  { value: '8.47', label: 'CGPA' },
  { value: String(activities.filter((a) => /hackathon/i.test(a.event)).length), label: 'Hackathons' },
];

export const navSections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

