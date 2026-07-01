import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Badge } from './components/ui/badge';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import StarField from './components/cosmic/StarField';
import ShootingStars from './components/cosmic/ShootingStar';
import {
  Github,
  Linkedin,
  Youtube,
  Download,
  ExternalLink,
  Code,
  Brain,
  Database,
  Palette,
  Star,
  Rocket,
  Zap,
  Globe,
  Sparkles,
  Instagram
} from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

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

  const projects = [
    {
      title: 'Hospital Management System',
      description: 'A complete system for managing hospital operations with patient records, appointments, and staff management.',
      image: 'https://images.unsplash.com/photo-1619975102725-597d006b1a0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      link: 'https://github.com/Rahul-Gowda-R/Hospital-Management-System',
      linkText: 'View on GitHub',
      category: 'Healthcare'
    },
    {
      title: 'Player Re-Identification',
      description: 'A computer vision project for identifying players across matches using advanced ML algorithms.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      link: 'https://github.com/Rahul-Gowda-R/Player-Re-Identification',
      linkText: 'View on GitHub',
      category: 'Machine Learning'
    },
    {
      title: 'Shopeeva',
      description: 'A clothing e-commerce website built with MERN stack, featuring shirts, t-shirts, and hover animations.',
      image: 'https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      link: 'https://github.com/Rahul-Gowda-R/Shopeeva',
      linkText: 'View on GitHub',
      category: 'E-commerce'
    },
    {
      title: 'J.A.R.V.I.S AI Assistant',
      description: 'A futuristic AI assistant interface with Flask, Gemini AI backend, and voice interaction capabilities.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      link: '#',
      linkText: 'Ongoing',
      category: 'AI Assistant',
      ongoing: true
    }
  ];

  const languages = [
    { name: 'JavaScript', percentage: 90, color: 'from-yellow-500 to-yellow-600' },
    { name: 'React', percentage: 85, color: 'from-blue-500 to-blue-600' },
    { name: 'Node.js', percentage: 80, color: 'from-green-500 to-green-600' },
    { name: 'Python', percentage: 85, color: 'from-blue-600 to-blue-700' },
    { name: 'Java', percentage: 75, color: 'from-red-500 to-red-600' },
    { name: 'MongoDB', percentage: 80, color: 'from-green-600 to-green-700' },
    { name: 'Express.js', percentage: 85, color: 'from-gray-500 to-gray-600' },
    { name: 'HTML/CSS', percentage: 95, color: 'from-orange-500 to-orange-600' },
    { name: 'AI/ML', percentage: 70, color: 'from-purple-500 to-purple-600' },
    { name: 'Git', percentage: 85, color: 'from-red-600 to-red-700' }
  ];

  const experiences = [
    {
      title: 'AI & Prompt Engineering Intern',
      company: 'Vault of Codes',
      description: 'Learned AI prompt design, chatbot development, and deployed an AI-powered assistant.',
      period: '2025',
      constellation: '⋆ ✦ ⋆ ✧ ⋆',
      github: 'https://github.com/Rahul-Gowda-R/Vault-of-Codes'
    },
    {
      title: 'MERN Stack Development',
      company: 'Crystallize Technologies',
      description: 'Worked on full-stack development projects using MongoDB, Express, React, and Node.js.',
      period: '2025',
      constellation: '✧ ⋆ ✦ ⋆ ✧',
      github: '' // keep empty for now
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 via-gray-800 to-black">
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="text-4xl mb-4 text-blue-400">✦ ⋆ ✧ ⋆ ✦</div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 via-gray-300 to-white bg-clip-text text-transparent leading-tight"
            style={{ textShadow: '0 0 30px rgba(147, 197, 253, 0.3)' }}
          >
            Rahul Gowda R
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl mb-4 text-gray-400"
          >
            ⋆ ✧ ⋆
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed"
            style={{ textShadow: '0 0 20px rgba(147, 197, 253, 0.2)' }}
          >
            Engineering Student | Web Developer | AI Enthusiast | Creative Builder
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
            <a href="/Portfolio-Website/resume.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-300 hover:bg-blue-400/10 rounded-2xl px-8 py-6 text-lg backdrop-blur-sm"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative">
        <StarField />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="text-2xl text-blue-400 mb-2">⋆ ✧ ⋆</div>
                <h2 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                  About Me
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-200 mb-8 leading-relaxed"
              >
                I'm an engineering student passionate about web development, AI, and creative projects.
                I love building tools, apps, and unique experiences on the web. Currently exploring MERN Stack,
                AI-powered assistants, and real-world applications of machine learning.
              </motion.p>

              <a href="/Portfolio-Website/resume.pdf" download>
                <Button
                  variant="outline"
                  className="border-blue-400 text-blue-300 hover:bg-blue-400/10 rounded-2xl backdrop-blur-sm"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-80 h-80 mx-auto bg-gradient-to-br from-gray-900/40 via-black/40 to-blue-900/40 rounded-full flex items-center justify-center relative overflow-hidden backdrop-blur-sm border border-gray-600/30"
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
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="w-24 h-24 bg-gradient-to-br from-blue-400 to-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
                  >
                    <Rocket className="w-12 h-12 text-white" />
                  </motion.div>
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
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-800 relative">
        <ShootingStars />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-indigo-900/50 backdrop-blur-sm border border-purple-400/30 hover:border-cyan-400/50 transition-all duration-500 rounded-2xl overflow-hidden relative">
                  {/* Cosmic background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="text-center relative z-10">
                    <motion.div
                      className="mb-4 mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center backdrop-blur-sm border border-purple-400/30"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {skill.icon}
                    </motion.div>
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

      {/* Languages & Technologies Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-800 via-black to-gray-900 relative">
        <StarField />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-3xl text-blue-400 mb-4">⋆ ✧ ⋆ ✧ ⋆</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-gradient-to-r from-white via-blue-200 to-gray-300 bg-clip-text text-transparent">
              Languages & Technologies
            </h2>
            <p className="text-lg text-gray-300">
              My proficiency levels in various programming languages and technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium group-hover:text-blue-300 transition-colors duration-300">
                    {lang.name}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {lang.percentage}%
                  </span>
                </div>
                <div className="relative w-full h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`h-full bg-gradient-to-r ${lang.color} rounded-full relative overflow-hidden`}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </motion.div>
                </div>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, rotateX: -5 }}
                style={{ perspective: '1000px' }}
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/60 via-purple-900/40 to-indigo-900/60 backdrop-blur-sm border border-cyan-400/30 hover:border-purple-400/60 transition-all duration-500 rounded-2xl overflow-hidden group relative">
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
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-purple-400/30">
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
                        className="border-gray-500 text-gray-400 rounded-xl backdrop-blur-sm cursor-not-allowed"
                      >
                        <Rocket className="w-4 h-4 mr-2" />
                        {project.linkText}
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 rounded-xl backdrop-blur-sm group-hover:border-purple-400 group-hover:text-purple-300 transition-all duration-300"
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
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-800 via-black to-gray-900 relative">
        <ShootingStars />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-3xl text-violet-300 mb-6">⋆ ✧ ⋆ ✧ ⋆</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-gradient-to-r from-violet-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Experience & Internships
            </h2>
            <p className="text-lg text-purple-200">
              My professional journey and learning experiences
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                whileHover={{ x: 10, scale: 1.02 }}
                style={{ perspective: '1000px' }}
              >
                <Card className="bg-gradient-to-r from-slate-800/60 via-purple-900/40 to-indigo-900/60 backdrop-blur-sm border border-purple-400/30 hover:border-cyan-400/50 transition-all duration-500 rounded-2xl group relative overflow-hidden">
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-cyan-600/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Constellation decorations */}
                  <div className="absolute top-4 right-4 text-purple-300/40 text-sm">{experience.constellation}</div>

                  <CardHeader className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl md:text-2xl text-white group-hover:text-cyan-300 transition-colors duration-300 mb-3">
                          {experience.title}
                        </CardTitle>
                        <div className="flex flex-col md:flex-row md:items-center gap-3">
                          <Badge
                            variant="outline"
                            className="border-cyan-400 text-cyan-300 bg-cyan-400/10 backdrop-blur-sm hover:bg-cyan-400/20 transition-colors duration-300 w-fit"
                          >
                            <Star className="w-3 h-3 mr-1" />
                            {experience.company}
                          </Badge>
                          <span className="text-purple-300 flex items-center">
                            <Zap className="w-4 h-4 mr-2" />
                            {experience.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <CardDescription className="text-cyan-100 text-base leading-relaxed">
                      {experience.description}
                    </CardDescription>

                    {experience.github && (
                      <a href={experience.github} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-4 border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 rounded-xl backdrop-blur-sm"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Button>
                      </a>
                    )}
                  </CardContent>

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: 'inset 0 0 25px rgba(147, 197, 253, 0.1)' }}></div>

                  {/* Corner accent */}
                  <div className="absolute bottom-4 left-4 text-violet-300/30 text-xs">✦</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-800 relative">
        <StarField />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl bg-gradient-to-br from-slate-800/60 via-purple-900/40 to-indigo-900/60 backdrop-blur-sm border border-cyan-400/30 hover:border-purple-400/50 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <CardHeader className="relative z-10">
                  <CardTitle className="text-white text-xl flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
                    Send Message
                  </CardTitle>
                  <div className="text-purple-300 text-sm">⋆ ✧ ⋆</div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Form fields unchanged */}
                    <div>
                      <Input
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="rounded-xl bg-slate-800/50 border-purple-400/30 text-white placeholder:text-cyan-200/60 focus:border-cyan-400 backdrop-blur-sm"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="rounded-xl bg-slate-800/50 border-purple-400/30 text-white placeholder:text-cyan-200/60 focus:border-cyan-400 backdrop-blur-sm"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="rounded-xl min-h-32 bg-slate-800/50 border-purple-400/30 text-white placeholder:text-cyan-200/60 focus:border-cyan-400 backdrop-blur-sm"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white rounded-xl border border-purple-400/30"
                    >
                      <Rocket className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Connect With Me */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-cyan-400" />
                  Connect With Me
                </h3>
                <div className="space-y-6">

                  {/* GitHub */}
                  <motion.a
                    href="https://github.com/Rahul-Gowda-R"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/40 border border-purple-400/20 hover:border-cyan-400/40 hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-sm group"
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                      <Github className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <span className="text-white group-hover:text-cyan-300 transition-colors duration-300">GitHub</span>
                      <div className="text-purple-300/60 text-sm">My Code Repository</div>
                    </div>
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    href="https://www.linkedin.com/in/rahul-gowda-r/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/40 border border-purple-400/20 hover:border-cyan-400/40 hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-sm group"
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                      <Linkedin className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <span className="text-white group-hover:text-cyan-300 transition-colors duration-300">LinkedIn</span>
                      <div className="text-purple-300/60 text-sm">Professional Network</div>
                    </div>
                  </motion.a>

                  {/* YouTube */}
                  <motion.a
                    href="https://www.youtube.com/@Becoming_Rahul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/40 border border-purple-400/20 hover:border-cyan-400/40 hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-sm group"
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                      <Youtube className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <span className="text-white group-hover:text-cyan-300 transition-colors duration-300">YouTube</span>
                      <div className="text-purple-300/60 text-sm">Becoming Rahul</div>
                    </div>
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                    href="https://www.instagram.com/rahul_gowda_733/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/40 border border-purple-400/20 hover:border-cyan-400/40 hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-sm group"
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                      <Instagram className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <span className="text-white group-hover:text-cyan-300 transition-colors duration-300">Instagram</span>
                      <div className="text-purple-300/60 text-sm">@rahul_gowda_733</div>
                    </div>
                  </motion.a>

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
                Engineering Student passionate about web development, AI, and creative projects.
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

                {/* GitHub */}
                <motion.a
                  href="https://github.com/Rahul-Gowda-R"
                  className="hover:text-cyan-300 transition-colors duration-300 w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center border border-purple-400/20 hover:border-cyan-400/40 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/rahul-gowda-r/"
                  className="hover:text-cyan-300 transition-colors duration-300 w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center border border-purple-400/20 hover:border-cyan-400/40 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>

                {/* YouTube */}
                <motion.a
                  href="https://www.youtube.com/@Becoming_Rahul"
                  className="hover:text-cyan-300 transition-colors duration-300 w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center border border-purple-400/20 hover:border-cyan-400/40 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Youtube className="w-5 h-5" />
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://www.instagram.com/rahul_gowda_733/"
                  className="hover:text-cyan-300 transition-colors duration-300 w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center border border-purple-400/20 hover:border-cyan-400/40 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>

              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-purple-400/20 pt-8 text-center">
            <div className="text-2xl text-purple-300/40 mb-4">✧ ⋆ ✦ ⋆ ✧</div>
            <p className="text-cyan-200/60">
              © 2025 <span className="text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text">Rahul Gowda R</span>.
              All rights reserved.
            </p>
          </div>
        </div>  
      </footer>
    </div>
);
}