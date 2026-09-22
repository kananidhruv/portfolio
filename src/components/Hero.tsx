'use client';

import { Mail, ArrowRight, ArrowDown, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom inline SVG icons for brand socials
function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Hero() {
  const socials = [
    { name: 'GitHub', icon: GithubIcon, href: 'https://github.com/kananidhruv' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com/in/kananidhruv' },
    { name: 'Email', icon: Mail, href: 'mailto:kananidhruv6949@gmail.com' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-circuit-pattern">
      {/* Background Aurora Orbs for Hero */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-aurora pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-cyan-500/20 dark:bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen animate-aurora pointer-events-none" style={{ animationDelay: '-5s' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-900/50 bg-purple-500/5 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-8 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Next-Gen Software Engineer
        </motion.div>

        {/* Massive Typography */}
        <div className="text-center w-full relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter mb-4 text-zinc-900 dark:text-white"
          >
            DHRUV{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">
              KANANI
            </span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-xl sm:text-3xl font-bold text-zinc-600 dark:text-zinc-300 font-heading mb-8"
          >
            Crafting scalable systems & immersive digital experiences.
          </motion.h2>
        </div>

        {/* Condensed Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center text-sm sm:text-lg text-zinc-500 dark:text-zinc-400 mb-12 leading-relaxed"
        >
          Motivated developer with a deep foundation in problem-solving and modern web engineering. Currently a B.Tech IT student at Dharamsinh Desai University.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group relative flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold text-sm sm:text-base cursor-pointer overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 dark:group-hover:opacity-40 transition-opacity duration-300" />
            <span className="relative z-10">Explore My Work</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="group relative flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold text-sm sm:text-base cursor-pointer backdrop-blur-md transition-all hover:bg-white dark:hover:bg-zinc-800 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] active:scale-95"
          >
            Start a Conversation
          </a>
        </motion.div>

        {/* Social Floating Island */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center p-2 rounded-2xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-xl"
        >
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 mx-1 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
                aria-label={social.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* Floating Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-400 hidden md:block"
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="w-6 h-6 hover:text-purple-500 transition-colors" />
        </a>
      </motion.div>
    </section>
  );
}
