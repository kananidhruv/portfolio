'use client';

import { Code2, Cpu, Terminal, User } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const codeSnippet = `const developer = {
  name: "Dhruv Kanani",
  role: "Software Engineer",
  location: "Gujarat, India",
  philosophy: "Build scalable, performant systems",
  passion: ["Frontend", "Backend", "DSA"]
};`;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-bold text-sm uppercase tracking-widest mb-2">
            01. About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white font-heading">
            Inside the Engine
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">

          {/* Main Bio Card (Span 2 cols, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 p-8 rounded-3xl bento-card relative overflow-hidden group flex flex-col justify-end"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="/profile.jpg"
                alt="Dhruv Kanani"
                fill
                className="object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-[var(--card-bg)]/80 to-transparent" />
            </div>
            <div className="relative z-10 w-full">
              <h3 className="text-3xl font-black text-zinc-900 dark:text-white mb-4">Hello World!</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-4">
                I'm Dhruv Kanani, an IT student at Dharamsinh Desai University. I bridge the gap between complex logic and stunning user interfaces.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                My goal is to craft digital experiences that are not just functional, but genuinely extraordinary.
              </p>
            </div>
          </motion.div>

          {/* Code Window Card (Span 2 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 rounded-3xl bento-card overflow-hidden flex flex-col"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/10 dark:bg-black/40 border-b border-zinc-200/50 dark:border-white/5 border-[0.5px]">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-2 text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-widest flex items-center gap-1">
                <Terminal className="w-3 h-3" /> developer.ts
              </span>
            </div>
            <div className="p-6 font-mono text-[11px] sm:text-xs overflow-x-auto text-zinc-800 dark:text-zinc-300">
              <pre>
                <code>
                  {codeSnippet.split('\n').map((line, i) => (
                    <div key={i} className="flex leading-relaxed">
                      <span className="text-zinc-400/50 w-5 inline-block select-none">{i + 1}</span>
                      <span>
                        {line.split(' ').map((word, wIdx) => {
                          if (word === 'const' || word === 'let') return <span key={wIdx} className="text-purple-500">{word} </span>;
                          if (word.match(/^"\w+"$/) || word.match(/^".+"$/) || word.includes('"')) return <span key={wIdx} className="text-cyan-500">{word} </span>;
                          return <span key={wIdx}>{word} </span>;
                        })}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Mini Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-3xl bento-card flex flex-col justify-center items-center text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Code2 className="w-7 h-7" />
            </div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-2">DSA Focus</h4>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Algorithmic Efficiency</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-3xl bento-card flex flex-col justify-center items-center text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-7 h-7" />
            </div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Systems</h4>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Robust Architecture</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
