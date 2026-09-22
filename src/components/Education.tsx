'use client';

import { GraduationCap, Award, BookOpen, Fingerprint } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education() {
  const educationItems = [
    {
      institution: 'Dharamsinh Desai University',
      degree: 'Bachelor of Technology in Information Technology',
      period: '2023 – 2027',
      score: 'CPI: 7.13',
    },
    {
      institution: 'Shakti School',
      degree: 'Class XII (Gujarat Board)',
      period: '2022 – 2023',
      score: 'Percentage: 61.07%',
    },
    {
      institution: 'Dholakiya School',
      degree: 'Class X (Gujarat Board)',
      period: '2020 – 2021',
      score: 'Percentage: 82.83%',
    }
  ];

  const achievementItems = [
    {
      title: 'AWS Academy Graduate',
      issuer: 'Cloud Foundations',
      description: 'Validated knowledge of cloud concepts, architecture, and core AWS services.',
      icon: <Fingerprint className="w-6 h-6" />,
      color: 'text-[#FF9900]',
      bgColor: 'bg-[#FF9900]/10',
    },
    {
      title: 'DUHacks 5.0 Participant',
      issuer: 'DDU National Level Hackathon',
      description: 'Demonstrated rapid problem-solving and software engineering under intense constraints.',
      icon: <Award className="w-6 h-6" />,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-bold text-sm uppercase tracking-widest mb-2">
            04. Experience
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white font-heading">
            Education & Awards
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-purple-500" />
              Academic History
            </h3>

            <div className="relative space-y-6">
              {/* Vertical neon line */}
              <div className="absolute top-4 bottom-4 left-5 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent opacity-30" />

              {educationItems.map((item, idx) => (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-14"
                >
                  {/* Glowing Node */}
                  <div className="absolute left-[13px] top-4 w-4 h-4 rounded-full bg-black dark:bg-[#02040a] border-2 border-cyan-400 z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)] flex items-center justify-center">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
                  </div>

                  <div className="p-6 rounded-3xl bento-card border border-zinc-200/50 dark:border-white/5 group hover:border-purple-500/30 transition-colors">
                    <h4 className="text-lg font-black text-zinc-900 dark:text-white font-heading mb-1 tracking-tight">
                      {item.institution}
                    </h4>
                    <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-4">
                      {item.degree}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                      <span className="px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900">{item.period}</span>
                      <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">{item.score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-8 flex items-center gap-3">
              <Award className="w-7 h-7 text-cyan-500" />
              Achievements
            </h3>

            <div className="space-y-6">
              {achievementItems.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-3xl bento-card flex gap-6 items-start"
                >
                  <div className={`p-4 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center shrink-0`}>
                    {item.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-black text-xl text-zinc-900 dark:text-white mb-1 tracking-tight">
                      {item.title}
                    </h4>
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 block">
                      {item.issuer}
                    </span>
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
