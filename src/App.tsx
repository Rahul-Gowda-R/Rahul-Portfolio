import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import StarField from './components/cosmic/StarField';
import ShootingStars from './components/cosmic/ShootingStar';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import ExperienceTimeline, { type Job } from './components/ExperienceTimeline';
import { reveal } from './components/reveal';
import {
  ChevronDown,
  ChevronUp,
  Github,
  Linkedin,
  Youtube,
  Download,
  Code,
  Brain,
  Database,
  Palette,
  Rocket,
  Globe,
  Sparkles,
  Instagram,
  Server,
  Smartphone,
  Wrench,
  Calendar,
  GraduationCap,
  BadgeCheck,
  Trophy,
  Mail,
  Network
} from 'lucide-react';

export default function App() {
  const skills = [
    {
      title: 'Web Development (MERN Stack)',
      description: 'Full-stack development with MongoDB, Express, React, and Node.js',
      icon: <Code className="w-8 h-8 text-blue-400" />,
      constellation: '✦ ✧ ✦'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Building intelligent systems and implementing ML algorithms',
      icon: <Brain className="w-8 h-8 text-white" />,
      constellation: '⋆ ✦ ⋆'
    },
    {
      title: 'Prompt Engineering',
      description: 'Designing effective prompts for AI systems and chatbots',
      icon: <Sparkles className="w-8 h-8 text-gray-400" />,
      constellation: '✧ ⋆ ✧'
    },
    {
      title: 'Java & DSA',
      description: 'Strong foundation in Java programming and data structures',
      icon: <Database className="w-8 h-8 text-blue-400" />,
      constellation: '✦ ⋆ ✦'
    },
    {
      title: 'Creative Projects & Content Creation',
      description: 'Building unique experiences and creating engaging content',
      icon: <Palette className="w-8 h-8 text-gray-300" />,
      constellation: '⋆ ✧ ⋆'
    },
  ];

  const unsplash = (id: string) =>
    `https://images.unsplash.com/photo-${id}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080`;

  const projects: {
    title: string;
    description: string;
    image: string;
    link?: string; // omit when there's no public repo or demo
    linkText?: string;
    category: string;
    ongoing?: boolean;
  }[] = [
    {
      title: 'DriveGuard AI',
      description: 'Real-time driver monitoring system that detects drowsiness, yawning, distraction, and driver presence with OpenCV and MediaPipe, with instant audio alerts and a live React dashboard.',
      image: unsplash('1449965408869-eaa3f722e40d'),
      link: 'https://github.com/Rahul-Gowda-R/DriveGuard-AI',
      linkText: 'View on GitHub',
      category: 'Computer Vision'
    },
    {
      title: 'VibeBuild AI',
      description: 'Full-stack app that turns natural language prompts into production-ready code using Google Gemini, with live preview and AI chat. Built with Next.js, Convex, Sandpack, and Tailwind CSS.',
      image: unsplash('1555066931-4365d14bab8c'),
      link: 'https://github.com/Rahul-Gowda-R/VibeBuild-AI',
      linkText: 'View on GitHub',
      category: 'Generative AI'
    },
    {
      title: 'RecruitAI',
      description: 'AI-assisted recruitment platform with ATS-based resume screening, skill assessments, interview monitoring, and job matching. Built with Flask, MySQL, NLP, and OpenCV.',
      image: unsplash('1586281380349-632531db7ed4'),
      link: 'https://github.com/Rahul-Gowda-R/RecruitAI',
      linkText: 'View on GitHub',
      category: 'AI Platform'
    },
    {
      title: 'Controlio',
      description: 'Android employee management app with task assignment, attendance tracking, performance reviews, messaging, analytics, and role-based access. Built with Kotlin, Jetpack Compose, Firebase, and Room during my Android internship at MindMatrix.',
      image: unsplash('1512941937669-90a1b58e7e9c'),
      link: 'https://github.com/Rahul-Gowda-R/Controlio',
      linkText: 'View on GitHub',
      category: 'Android'
    },
    {
      title: 'ShieldSMS AI',
      description: 'Flutter app that detects phishing and spam SMS in real time using an offline ML model, URL analysis, and trusted sender verification, with risk scores and smishing alerts.',
      image: unsplash('1563986768609-322da13575f3'),
      link: 'https://github.com/Rahul-Gowda-R/ShieldSMS-AI',
      linkText: 'View on GitHub',
      category: 'Cybersecurity'
    },
    {
      title: 'SportTrack AI',
      description: 'Detects and tracks players in sports videos with YOLOv11 and centroid tracking, assigning persistent player IDs and exporting annotated videos and JSON tracking data.',
      image: unsplash('1461896836934-ffe607ba8211'),
      link: 'https://github.com/Rahul-Gowda-R/SportTrack-AI',
      linkText: 'View on GitHub',
      category: 'Machine Learning'
    },
    {
      title: 'Karnataka Festival Guide',
      description: "AI-powered guide to Karnataka's festivals with bilingual conversations, travel recommendations, and cultural insights. Built with React, TypeScript, Vite, and Google Gemini.",
      image: unsplash('1582510003544-4d00b7f74220'),
      link: 'https://github.com/Rahul-Gowda-R/Karnataka-Festival-Guide',
      linkText: 'View on GitHub',
      category: 'AI Web App'
    },
    {
      title: 'J.A.R.V.I.S AI Assistant',
      description: "Iron Man-inspired virtual assistant with text and voice interaction and real-time AI responses. Built with Flask, the Google Gemini API, and the Web Speech API.",
      image: unsplash('1677442136019-21780ecad995'),
      link: 'https://github.com/Rahul-Gowda-R/Jarvis',
      linkText: 'View on GitHub',
      category: 'AI Assistant'
    },
    {
      title: 'Gemini AI Chatbot',
      description: 'AI chatbot for question answering, text summarization, and creative writing, with a responsive web interface. Built with Python, Flask, and the Google Gemini API.',
      image: unsplash('1544006659-f0b21884ce1d'),
      link: 'https://github.com/Rahul-Gowda-R/Vault-of-Codes',
      linkText: 'View on GitHub',
      category: 'Chatbot'
    },
    {
      title: 'Hospital Management System',
      description: 'Java application with MySQL integration for managing patients, doctors, and billing, featuring role-based access and reporting.',
      image: unsplash('1576091160550-2173dba999ef'),
      link: 'https://github.com/Rahul-Gowda-R/Hospital-Management-System',
      linkText: 'View on GitHub',
      category: 'Healthcare'
    },
    {
      title: 'Shopeeva',
      description: 'Multi-tier e-commerce platform with a decoupled frontend and a Node.js + MySQL backend for the product catalogue, user sessions, and orders. Features a normalized MySQL schema with indexed catalogue queries and RESTful cart and checkout APIs.',
      image: unsplash('1523381210434-271e8be1f52b'),
      category: 'E-commerce'
    }
  ];

  // Every item here should be backed by a project or the experience section
  const techStack = [
    {
      category: 'Languages',
      icon: <Code className="w-5 h-5 text-cyan-300" />,
      items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Kotlin', 'Dart', 'SQL', 'HTML & CSS']
    },
    {
      category: 'Web & Backend',
      icon: <Server className="w-5 h-5 text-cyan-300" />,
      items: ['React', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'REST APIs', 'Tailwind CSS', 'Vite']
    },
    {
      category: 'Databases',
      icon: <Database className="w-5 h-5 text-cyan-300" />,
      items: ['MySQL', 'SQLite', 'MongoDB', 'Firebase', 'Convex']
    },
    {
      category: 'AI & Machine Learning',
      icon: <Brain className="w-5 h-5 text-cyan-300" />,
      items: [
        'TensorFlow Lite', 'Scikit-learn', 'OpenCV', 'MediaPipe', 'YOLO', 'Google Gemini API', 'NLP',
        'Prompt Engineering', 'ML Pipelines', 'Real-time Inference', 'Edge Deployment'
      ]
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="w-5 h-5 text-cyan-300" />,
      items: ['Android', 'Jetpack Compose', 'Room', 'Flutter', 'Android Studio']
    },
    {
      category: 'CS Fundamentals & Practices',
      icon: <Wrench className="w-5 h-5 text-cyan-300" />,
      items: [
        'Object-Oriented Design', 'Data Structures', 'Algorithms', 'Complexity Analysis', 'System Design',
        'Distributed Systems', 'Agile / Sprints', 'Git & GitHub', 'GitHub Actions'
      ]
    },
    {
      category: 'IT & Enterprise Systems',
      icon: <Network className="w-5 h-5 text-cyan-300" />,
      items: [
        'CRM Administration', 'Salesforce CRM', 'User & Access Management', 'Network Troubleshooting',
        'TCP/IP, DNS & DHCP', 'VPN & IP Configuration', 'Telephony (Zoiper)', 'Hardware Troubleshooting',
        'Incident Troubleshooting'
      ]
    }
  ];

  // Most recent first, grouped by company. Durations are calculated from the dates.
  const experiences: Job[] = [
    {
      company: 'BlueOrbit Tech',
      location: 'Bengaluru',
      roles: [
        {
          title: 'AI Engineer',
          start: '2026-10'
        },
        {
          title: 'IT Executive',
          start: '2026-08',
          end: '2026-10',
          highlights: [
            'Provided day-to-day IT support for users and branch operations, troubleshooting hardware, software, CRM, network, and system issues.',
            'Managed CRM user administration, including user creation, removal of inactive users, login support, and access configuration.',
            'Configured and troubleshot Zoiper telephony, VPN connectivity, IP configuration, and branch-level network access.',
            'Coordinated with development and network teams on CRM and server availability issues, investigating root causes and verifying service restoration.'
          ],
          skills: ['CRM Administration', 'Salesforce CRM', 'Networking & VPN', 'Telephony (Zoiper)', 'Hardware Support']
        }
      ]
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
            'Delivered features iteratively in an agile sprint workflow, collaborating with cross-functional team members to ship production-ready builds.'
          ],
          skills: ['Kotlin', 'Android', 'MVC', 'GenAI', 'Agile'],
          github: 'https://github.com/Rahul-Gowda-R/Controlio',
          githubLabel: 'Controlio on GitHub'
        }
      ]
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
            'Delivered a working product end-to-end within a fast-paced internship cycle, managing ambiguity and iterating rapidly on user-facing features.'
          ],
          skills: ['Prompt Engineering', 'Gemini API', 'Flask', 'Web Speech API'],
          github: 'https://github.com/Rahul-Gowda-R/Vault-of-Codes'
        }
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering (B.E.), Computer Science',
      school: 'Rajeev Institute of Technology, VTU Belagavi',
      dates: 'Graduated Jul 2026',
      score: 'CGPA: 8.47'
    },
    {
      degree: 'Senior Secondary (PUC, PCMB)',
      school: 'STG PU College',
      dates: '2019 – 2021',
      score: 'Percentage: 89.5%'
    }
  ];

  const certifications = [
    { name: 'The Joy of Computing Using Python', issuer: 'NPTEL' },
    { name: 'Cyber Security', issuer: 'NSDC' },
    { name: 'Automation Developer Associate', issuer: 'UiPath' }
  ];

  const activities = [
    { role: 'Participant', event: 'IGNITEX 2025 National Hackathon' },
    { role: 'Participant', event: 'GenAI Hackathon 2025 (Confidential AI Project)' },
    { role: 'Host & Coordinator', event: "TechKriti'24 State-Level Tech Fest" },
    { role: 'MC & Event Host', event: 'Swarit 2026' }
  ];

  // Mark off-screen sections so globals.css can pause their background animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) entry.target.toggleAttribute('data-offscreen', !entry.isIntersecting);
      },
      { rootMargin: '100px' }
    );
    document.querySelectorAll('section, footer').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // The first FEATURED_COUNT projects are always shown; the rest sit behind "View More"
  const FEATURED_COUNT = 4;
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, FEATURED_COUNT);
  const hiddenCount = projects.length - FEATURED_COUNT;

  const toggleProjects = () => {
    if (showAllProjects) {
      // Collapsing removes cards above the button, so jump back to the section
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAllProjects(!showAllProjects);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 via-gray-800 to-black">
        {/* Cosmic Background Elements */}
        <StarField />
        <ShootingStars />

        {/* Subtle nebula-like background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-bounce slow"></div>
          <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-gray-500/5 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-white/3 rounded-full blur-2xl"></div>

          {/* Constellation patterns */}
          <div className="absolute top-1/4 left-1/3 text-2xl text-white/20 animate-pulse">✦</div>
          <div className="absolute top-1/3 right-1/4 text-xl text-blue-300/30 animate-pulse delay-1000">⋆</div>
          <div className="absolute bottom-1/3 left-1/4 text-3xl text-gray-300/20 animate-pulse delay-2000">✧</div>
          <div className="absolute bottom-1/4 right-1/3 text-lg text-white/25 animate-pulse delay-500">✦</div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            {...reveal({ scale: 0.8, duration: 1.2 })}
            className="mb-6"
          >
            <div className="text-4xl mb-4 text-blue-400">✦ ⋆ ✧ ⋆ ✦</div>
          </motion.div>

          <motion.h1
            {...reveal({ y: 30, duration: 0.8 })}
            className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 via-gray-300 to-white bg-clip-text text-transparent leading-tight"
            style={{ textShadow: '0 0 30px rgba(147, 197, 253, 0.3)' }}
          >
            Rahul Gowda R
          </motion.h1>

          <motion.div
            {...reveal({ delay: 0.3, duration: 1 })}
            className="text-2xl mb-4 text-gray-400"
          >
            ⋆ ✧ ⋆
          </motion.div>

          <motion.p
            {...reveal({ y: 20, delay: 0.2, duration: 0.8 })}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed"
            style={{ textShadow: '0 0 20px rgba(147, 197, 253, 0.2)' }}
          >
            AI Engineer | Full-Stack & Android Developer | ML Enthusiast | Creative Builder
          </motion.p>

          <motion.div
            {...reveal({ y: 20, delay: 0.6, duration: 0.8 })}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-gray-700 to-blue-600 hover:from-gray-800 hover:to-blue-700 text-white rounded-2xl px-8 py-6 text-lg shadow-lg shadow-blue-500/25 border border-gray-600/30"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="w-5 h-5 mr-2" />
              View Projects
            </Button>
            <a href="/Rahul-Portfolio/resume.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-300 hover:bg-blue-400/10 rounded-2xl px-8 py-6 text-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative">
        <StarField />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            {...reveal({ y: 30, duration: 0.8 })}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div
                {...reveal({ x: -30, duration: 0.8 })}
                className="mb-6"
              >
                <div className="text-2xl text-blue-400 mb-2">⋆ ✧ ⋆</div>
                <h2 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                  About Me
                </h2>
              </motion.div>

              <motion.p
                {...reveal({ x: -30, delay: 0.2, duration: 0.8 })}
                className="text-lg text-gray-200 mb-8 leading-relaxed"
              >
                I'm an AI Engineer at BlueOrbit Tech and a 2026 Computer Science graduate with strong foundations in object-oriented design,
                data structures, algorithms, and full-stack development. Through my current role, two internships, and multiple
                independent projects, I've built end-to-end software systems, from machine learning pipelines and
                real-time AI applications to multi-tier web platforms. I'm passionate about designing scalable
                solutions to broadly defined problems, working in agile teams, and building products with
                real-world impact.
              </motion.p>

              <a href="/Rahul-Portfolio/resume.pdf" download>
                <Button
                  variant="outline"
                  className="border-blue-400 text-blue-300 hover:bg-blue-400/10 rounded-2xl"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="relative">
              <motion.div
                {...reveal({ scale: 0.8, duration: 1 })}
                className="w-80 h-80 mx-auto bg-gradient-to-br from-gray-900/40 via-black/40 to-blue-900/40 rounded-full flex items-center justify-center relative overflow-hidden border border-gray-600/30"
                style={{
                  boxShadow: '0 0 50px rgba(147, 197, 253, 0.3), inset 0 0 50px rgba(167, 139, 250, 0.2)'
                }}
              >
                {/* Orbital rings */}
                <div className="absolute inset-4 border border-blue-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-8 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                <div className="absolute inset-12 border border-gray-400/20 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>

                {/* Central core */}
                <div className="relative z-10 text-center">
                  <div
                    className="orb-core w-24 h-24 bg-gradient-to-br from-blue-400 to-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
                  >
                    <Rocket className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-cyan-200 font-medium">Creative Developer</p>
                  <div className="text-purple-300 mt-2">⋆ ✦ ⋆</div>
                </div>

                {/* Floating particles */}
                <div className="absolute top-8 right-12 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-ping"></div>
                <div className="absolute bottom-12 left-8 w-2 h-2 bg-purple-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute top-1/3 left-6 w-4 h-4 bg-indigo-400 rounded-full opacity-40 animate-bounce"></div>
                <div className="absolute bottom-16 left-10 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 left-12 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-1/4 right-8 w-4 h-4 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </motion.div> {/* closes orb motion.div */}
            </div> {/* closes right grid column */}
          </motion.div> {/* closes the grid motion.div */}
        </div> {/* closes max-w-6xl container */}
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-800 relative">
        <ShootingStars />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            {...reveal({ y: 30, duration: 0.8 })}
            className="text-center mb-16"
          >
            <div className="text-3xl text-purple-300 mb-4">✦ ⋆ ✧ ⋆ ✦</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-gradient-to-r from-purple-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-lg text-cyan-100">
              Technologies and areas I'm passionate about
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                {...reveal({ y: 30, scale: 0.9, delay: index * 0.1 })}
                className="group transition-transform duration-300 hover:-translate-y-2.5 hover:scale-[1.02]"
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-indigo-900/50 border border-purple-400/30 hover:border-cyan-400/50 transition-all duration-500 rounded-2xl overflow-hidden relative">
                  {/* Cosmic background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="text-center relative z-10">
                    <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center border border-purple-400/30 transition-transform duration-500 hover:rotate-[360deg] hover:scale-110">
                      {skill.icon}
                    </div>
                    <div className="text-sm text-purple-300 mb-2">{skill.constellation}</div>
                    <CardTitle className="text-xl text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {skill.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-center text-cyan-100 leading-relaxed">
                      {skill.description}
                    </CardDescription>
                  </CardContent>

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: 'inset 0 0 20px rgba(147, 197, 253, 0.1)' }}></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 px-4 bg-gradient-to-b from-gray-800 via-black to-gray-900 relative">
        <StarField />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            {...reveal({ y: 30, duration: 0.8 })}
            className="text-center mb-16"
          >
            <div className="text-3xl text-blue-400 mb-4">⋆ ✧ ⋆ ✧ ⋆</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-gradient-to-r from-white via-blue-200 to-gray-300 bg-clip-text text-transparent">
              Tech Stack
            </h2>
            <p className="text-lg text-gray-300">
              Languages, frameworks, and tools I've used to build real projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((group, index) => (
              <motion.div
                key={group.category}
                {...reveal({ y: 30, delay: (index % 3) * 0.1 })}
                // A card left alone on the last row stretches across it
                className={`rounded-2xl p-6 bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-indigo-900/50 border border-purple-400/30 hover:border-cyan-400/50 transition-colors duration-500 ${
                  index === techStack.length - 1 && techStack.length % 2 === 1 ? 'md:col-span-2' : ''
                } ${index === techStack.length - 1 && techStack.length % 3 === 1 ? 'lg:col-span-3' : 'lg:col-span-1'}`}
              >
                <h3 className="flex items-center gap-3 text-lg font-semibold text-white mb-4">
                  <span className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-400/30 flex items-center justify-center">
                    {group.icon}
                  </span>
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1 rounded-full text-sm text-cyan-100 bg-slate-800/60 border border-cyan-400/20 hover:border-cyan-400/60 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-800 relative">
        <StarField />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            {...reveal({ y: 30, duration: 0.8 })}
            className="text-center mb-16"
          >
            <div className="text-4xl text-cyan-300 mb-6">✧ ⋆ ✦ ⋆ ✧</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-gradient-to-r from-cyan-300 via-purple-300 to-violet-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-purple-200">
              Some of my recent work and contributions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                {...reveal({ y: 30, delay: (index % 2) * 0.2, duration: 0.8 })}
                className="transition-transform duration-300 hover:-translate-y-3"
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/60 via-purple-900/40 to-indigo-900/60 border border-cyan-400/30 hover:border-purple-400/60 transition-all duration-500 rounded-2xl overflow-hidden group relative">
                  {/* Cosmic glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-purple-900/40 to-transparent"></div>

                    {/* Category badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 text-white px-3 py-1 rounded-full text-sm border border-purple-400/30">
                      {project.category}
                    </div>

                    {/* Constellation overlay */}
                    <div className="absolute bottom-4 left-4 text-cyan-300/60 text-xl">⋆ ✧ ⋆</div>
                  </div>

                  <CardHeader className="relative z-10">
                    <CardTitle className="text-xl text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 relative z-10">
                    <CardDescription className="text-cyan-100 mb-6 leading-relaxed">
                      {project.description}
                    </CardDescription>

                    {project.ongoing ? (
                      <Button
                        variant="outline"
                        disabled
                        className="border-gray-500 text-gray-400 rounded-xl cursor-not-allowed"
                      >
                        <Rocket className="w-4 h-4 mr-2" />
                        {project.linkText}
                      </Button>
                    ) : project.link && (
                      <Button
                        variant="outline"
                        className="border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 rounded-xl group-hover:border-purple-400 group-hover:text-purple-300 transition-all duration-300"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Rocket className="w-4 h-4 mr-2" />
                          {project.linkText}
                        </a>
                      </Button>
                    )}
                  </CardContent>

                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: 'inset 0 0 30px rgba(147, 197, 253, 0.1)' }}></div>
                </Card>
              </motion.div>
            ))}
          </div>

          {hiddenCount > 0 && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={toggleProjects}
                aria-expanded={showAllProjects}
                className="group inline-flex items-center gap-2 rounded-2xl border border-cyan-400/50 bg-slate-800/40 px-8 py-3 text-cyan-300 transition-all duration-300 hover:border-purple-400/60 hover:bg-cyan-400/10 hover:text-purple-200 shadow-lg shadow-cyan-500/10"
              >
                {showAllProjects ? (
                  <>
                    Show Less
                    <ChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  </>
                ) : (
                  <>
                    View More Projects ({hiddenCount})
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-b from-gray-800 via-black to-gray-900 relative">
        <ShootingStars />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            {...reveal({ y: 30, duration: 0.8 })}
            className="text-center mb-16"
          >
            <div className="text-3xl text-violet-300 mb-6">⋆ ✧ ⋆ ✧ ⋆</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-gradient-to-r from-violet-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-lg text-purple-200">
              My professional journey and learning experiences
            </p>
          </motion.div>

          <ExperienceTimeline jobs={experiences} />
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-800 relative">
        <StarField />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div {...reveal({ y: 30, duration: 0.8 })} className="text-center mb-16">
            <div className="text-3xl text-cyan-300 mb-6">✧ ⋆ ✦ ⋆ ✧</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-gradient-to-r from-cyan-300 via-blue-200 to-violet-300 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-lg text-purple-200">Where I built my foundations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.article
                key={edu.degree}
                {...reveal({ y: 24, delay: index * 0.1 })}
                className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition-colors duration-300 hover:border-cyan-400/40"
              >
                <div className="mb-4 flex items-start gap-4">
                  <span className="w-11 h-11 shrink-0 rounded-xl border border-cyan-400/25 bg-cyan-400/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-cyan-300" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white leading-snug">{edu.degree}</h3>
                    <p className="mt-1 text-cyan-300">{edu.school}</p>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span className="inline-flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    {edu.dates}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-medium text-slate-200">
                    {edu.score}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Activities Section */}
      <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-gray-800 via-black to-gray-900 relative">
        <ShootingStars />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div {...reveal({ y: 30, duration: 0.8 })} className="text-center mb-16">
            <div className="text-3xl text-violet-300 mb-6">⋆ ✧ ⋆ ✧ ⋆</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-gradient-to-r from-violet-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Certifications & Activities
            </h2>
            <p className="text-lg text-purple-200">Learning, hackathons, and leading events</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.article
              {...reveal({ y: 24 })}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6"
            >
              <h3 className="flex items-center gap-3 text-lg font-semibold text-white mb-5">
                <BadgeCheck className="w-5 h-5 text-cyan-300" />
                Certifications
              </h3>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex items-start justify-between gap-4">
                    <span className="text-slate-200 leading-snug">{cert.name}</span>
                    <span className="shrink-0 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3 py-0.5 text-xs font-medium text-cyan-200">
                      {cert.issuer}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              {...reveal({ y: 24, delay: 0.1 })}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6"
            >
              <h3 className="flex items-center gap-3 text-lg font-semibold text-white mb-5">
                <Trophy className="w-5 h-5 text-cyan-300" />
                Activities & Leadership
              </h3>
              <ul className="space-y-4">
                {activities.map((activity) => (
                  <li key={activity.event} className="leading-snug">
                    <span className="block text-slate-200">{activity.event}</span>
                    <span className="text-sm text-slate-400">{activity.role}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-800 relative">
        <StarField />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            {...reveal({ y: 30, duration: 0.8 })}
            className="text-center mb-16"
          >
            <div className="text-4xl text-cyan-300 mb-6">✧ ⋆ ✦ ⋆ ✧</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-gradient-to-r from-cyan-300 via-purple-300 to-violet-300 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-purple-200">
              Let's connect and discuss opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact form (unchanged) */}
            <motion.div
              {...reveal({ x: -30, duration: 0.8 })}
            >
              <Card className="rounded-2xl bg-gradient-to-br from-slate-800/60 via-purple-900/40 to-indigo-900/60 border border-cyan-400/30 hover:border-purple-400/50 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <CardHeader className="relative z-10">
                  <CardTitle className="text-white text-xl flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
                    Send Message
                  </CardTitle>
                  <div className="text-purple-300 text-sm">⋆ ✧ ⋆</div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            {/* Connect With Me */}
            <motion.div
              {...reveal({ x: 30, duration: 0.8 })}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-cyan-400" />
                  Connect With Me
                </h3>
                <div className="space-y-4">

                  {/* Email */}
                  <a
                    href="mailto:rrahulgowda733@gmail.com"
                    className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/40 border border-purple-400/20 hover:border-cyan-400/40 hover:bg-slate-800/60 transition-all duration-300 group hover:translate-x-2.5 hover:scale-[1.02]"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                      <Mail className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-white group-hover:text-cyan-300 transition-colors duration-300">Email</span>
                      <div className="text-purple-300/60 text-sm break-all">rrahulgowda733@gmail.com</div>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Rahul-Gowda-R"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/40 border border-purple-400/20 hover:border-cyan-400/40 hover:bg-slate-800/60 transition-all duration-300 group hover:translate-x-2.5 hover:scale-[1.02]"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                      <Github className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <span className="text-white group-hover:text-cyan-300 transition-colors duration-300">GitHub</span>
                      <div className="text-purple-300/60 text-sm">My Code Repository</div>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/rahul-gowda-r/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/40 border border-purple-400/20 hover:border-cyan-400/40 hover:bg-slate-800/60 transition-all duration-300 group hover:translate-x-2.5 hover:scale-[1.02]"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                      <Linkedin className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <span className="text-white group-hover:text-cyan-300 transition-colors duration-300">LinkedIn</span>
                      <div className="text-purple-300/60 text-sm">Professional Network</div>
                    </div>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@Becoming_Rahul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/40 border border-purple-400/20 hover:border-cyan-400/40 hover:bg-slate-800/60 transition-all duration-300 group hover:translate-x-2.5 hover:scale-[1.02]"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                      <Youtube className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <span className="text-white group-hover:text-cyan-300 transition-colors duration-300">YouTube</span>
                      <div className="text-purple-300/60 text-sm">Becoming Rahul</div>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/rahul_gowda_733/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/40 border border-purple-400/20 hover:border-cyan-400/40 hover:bg-slate-800/60 transition-all duration-300 group hover:translate-x-2.5 hover:scale-[1.02]"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                      <Instagram className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <span className="text-white group-hover:text-cyan-300 transition-colors duration-300">Instagram</span>
                      <div className="text-purple-300/60 text-sm">@rahul_gowda_733</div>
                    </div>
                  </a>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-b from-black to-gray-900 text-gray-200 relative">
        <StarField />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">

            {/* About */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Rahul Gowda R
              </h3>
              <p className="text-cyan-200/80 leading-relaxed">
                AI Engineer and Computer Science graduate building AI, mobile, and full-stack software.
              </p>
              <div className="text-purple-300/60 mt-3">✦ ⋆ ✧</div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-4 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
                Quick Links
              </h4>
              <div className="space-y-3">
                <a href="#about" className="block hover:text-cyan-300 transition-colors duration-300 text-cyan-100/80 hover:translate-x-2 transform">
                  ⋆ About
                </a>
                <a href="#skills" className="block hover:text-cyan-300 transition-colors duration-300 text-cyan-100/80 hover:translate-x-2 transform">
                  ✧ Skills
                </a>
                <a href="#projects" className="block hover:text-cyan-300 transition-colors duration-300 text-cyan-100/80 hover:translate-x-2 transform">
                  ✦ Projects
                </a>
                <a href="#contact" className="block hover:text-cyan-300 transition-colors duration-300 text-cyan-100/80 hover:translate-x-2 transform">
                  ⋆ Contact
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-white mb-4 flex items-center">
                <Globe className="w-4 h-4 mr-2 text-purple-400" />
                Social Media
              </h4>
              <div className="flex space-x-4">
                {[
                  { label: 'GitHub', href: 'https://github.com/Rahul-Gowda-R', Icon: Github },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rahul-gowda-r/', Icon: Linkedin },
                  { label: 'YouTube', href: 'https://www.youtube.com/@Becoming_Rahul', Icon: Youtube },
                  { label: 'Instagram', href: 'https://www.instagram.com/rahul_gowda_733/', Icon: Instagram }
                ].map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="hover:text-cyan-300 transition-[color,border-color,rotate,scale] duration-300 w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center border border-purple-400/20 hover:border-cyan-400/40 hover:scale-110 hover:rotate-[360deg]"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}

              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-purple-400/20 pt-8 text-center">
            <div className="text-2xl text-purple-300/40 mb-4">✧ ⋆ ✦ ⋆ ✧</div>
            <p className="text-cyan-200/60">
              © {new Date().getFullYear()} <span className="text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text">Rahul Gowda R</span>.
              All rights reserved.
            </p>
          </div>
        </div>  
      </footer>
    </div>
);
}