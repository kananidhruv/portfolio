'use client';

import { ExternalLink, Database, Cpu, Globe, Boxes, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'ReAtmos',
      subtitle: 'AI-Powered Environmental Action Platform',
      description: 'End-to-end platform predicting Air Quality using LSTM models to automatically trigger environmental clean-ups.',
      points: [
        'Built LSTM-based models for accurate AQI forecasting.',
        'Implemented custom Proof-of-Work CarbonCoin rewards using ECDSA.',
        'Integrated OAuth 2.0 with interactive live monitoring dashboards.'
      ],
      tags: ['React.js', 'Python', 'LSTM Models', 'Blockchain', 'MongoDB'],
      github: 'https://github.com/kananidhruv',
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      glowColor: 'from-cyan-500/0 via-cyan-500/20 to-cyan-500/0',
      accentColor: 'text-cyan-500',
    },
    {
      title: 'Meo Mix',
      subtitle: 'Premium Natural Refreshment Brand',
      description: 'A bespoke, multi-page client website featuring a vibrant, premium visual identity for a natural juice brand.',
      points: [
        'Handled end-to-end delivery from design mocking to deploying live traffic.',
        'Structured complex interactive forms and robust home, about, and product layouts.',
        'Ensured highly responsive fluid structures and optimized loading performance.'
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Design System'],
      github: 'https://github.com/kananidhruv',
      icon: <Layout className="w-8 h-8 text-orange-400" />,
      glowColor: 'from-orange-500/0 via-orange-500/20 to-orange-500/0',
      accentColor: 'text-orange-500',
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-bold text-sm uppercase tracking-widest mb-2">
            03. Deployments
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white font-heading">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative flex flex-col rounded-[2rem] bento-card overflow-hidden"
            >
              {/* Dynamic Scanning Glow Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="p-8 flex flex-col flex-1 h-full z-10">
                <div className="mb-6 bg-zinc-900/5 dark:bg-black/30 w-16 h-16 rounded-2xl flex items-center justify-center border border-zinc-200/50 dark:border-white/5 border-[0.5px]">
                  {project.icon}
                </div>

                <h3 className="text-3xl font-black text-zinc-900 dark:text-white group-hover:text-purple-500 transition-colors font-heading tracking-tight mb-1">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className={`text-sm font-bold ${project.accentColor} mb-4`}>
                    {project.subtitle}
                  </p>
                )}

                <p className="text-sm text-zinc-600 dark:text-zinc-300 font-medium mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {project.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-sm text-zinc-500 dark:text-zinc-400 flex items-start gap-3 leading-relaxed">
                      <span className={`font-bold select-none ${project.accentColor} mt-0.5`}>›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-bold px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200/50 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-zinc-800 dark:text-white px-5 py-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <GithubIcon className="w-5 h-5" />
                      View Code
                    </a>
                  )}
                </div>
              </div>

              {/* Ambient Background Glow Effect on Card Hover */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/5 mix-blend-screen rounded-full blur-[80px] group-hover:bg-purple-500/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
