'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: 'React.js', color: 'from-cyan-400 to-blue-500', icon: <ReactLogo /> },
    { name: 'Node.js', color: 'from-green-400 to-emerald-600', icon: <NodejsLogo /> },
    { name: 'TypeScript', color: 'from-blue-400 to-indigo-600', icon: <TypeScriptLogo /> },
    { name: 'Spring Boot', color: 'from-emerald-400 to-teal-600', icon: <SpringBootLogo /> },
    { name: 'JavaScript', color: 'from-yellow-400 to-amber-500', icon: <JavaScriptLogo /> },
    { name: 'Python', color: 'from-blue-300 to-yellow-300', icon: <PythonLogo /> },
    { name: 'MongoDB', color: 'from-green-500 to-emerald-700', icon: <MongodbLogo /> },
    { name: 'PostgreSQL', color: 'from-blue-500 to-blue-700', icon: <PostgresLogo /> },
    { name: 'Java', color: 'from-red-500 to-orange-500', icon: <JavaLogo /> },
    { name: 'Tailwind CSS', color: 'from-cyan-300 to-blue-400', icon: <TailwindLogo /> },
    { name: 'Django', color: 'from-emerald-600 to-green-800', icon: <DjangoLogo /> },
    { name: '.NET', color: 'from-purple-500 to-indigo-700', icon: <DotNetLogo /> },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-bold text-sm uppercase tracking-widest mb-2">
            02. Arsenal
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white font-heading">
            Technologies
          </h2>
        </div>

        {/* Tech Grid Mosaic */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="relative p-6 rounded-3xl bento-card flex flex-col items-center justify-center gap-3 overflow-hidden group"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />

              <div className="w-10 h-10 flex items-center justify-center relative z-10">
                {skill.icon}
              </div>
              <span className="text-xs sm:text-sm font-bold text-zinc-700 dark:text-zinc-300 relative z-10 text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Minimalist inline SVGs 
function TypeScriptLogo() {
  return <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#3178c6]" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0zm21.6 15.6h-2.6V18h-2.1v-6.9h6.8v4.5zm-8.8-1.5c-.1-1-.8-1.5-1.9-1.5-1 0-1.7.5-1.7 1.3 0 .7.4 1.1 1.7 1.6 1.8.6 2.8 1.1 2.8 2.8 0 1.9-1.5 3-3.7 3-2.1 0-3.5-1.1-3.6-2.9h2.1c.1 1 .9 1.4 1.6 1.4.9 0 1.5-.4 1.5-1.1 0-.8-.5-1.1-1.8-1.6-1.7-.6-2.7-1.3-2.7-2.8 0-1.7 1.4-2.8 3.4-2.8 2 0 3.2.9 3.3 2.7H12.8z" /></svg>;
}

function JavaScriptLogo() {
  return <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#F7DF1E]" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0zm22 18.5c0 .6-.4 1-1 1h-2.5c-.6 0-1-.4-1-1v-2.5h1.5v1.5H21v-3.5h-2.5c-.6 0-1-.4-1-1V12c0-.6.4-1 1-1H21c.6 0 1 .4 1 1v6.5zm-6.5-6h-2v4.5h-1.5v-4.5H10v-1.5h5.5v1.5z" /></svg>;
}

function JavaLogo() {
  return <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#b07219]" xmlns="http://www.w3.org/2000/svg"><path d="M11.95 2C10.74 2 9.5 2.56 8.5 3.65c-.75.83-1.1 1.9-1.1 2.92v.22c0 .48.33.87.82.94.51.08.97-.24 1.07-.74.07-.37.2-.74.43-1.07.61-.88 1.44-1.22 2.23-1.22 1.34 0 2.25.96 2.25 2.37v.34c0 .35-.07.7-.22 1.02-.37.8-1.18 1.25-2.02 1.63-.98.44-2.04.91-2.82 1.76a4.89 4.89 0 0 0-1.15 3.09v.22c0 .54.44.98.98.98h2.04c.54 0 .98-.44.98-.98V15.1c0-.4.12-.79.35-1.11.45-.63 1.28-1.04 2.15-1.42.98-.43 2.07-.9 2.87-1.81.79-.9 1.18-2.08 1.18-3.32C17.5 4.54 15.22 2 11.95 2z" /><rect x="9.95" y="19" width="4.1" height="2" rx="0.5" /></svg>;
}

function PythonLogo() {
  return <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#3776AB]" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v4zm-.5-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75z" /></svg>;
}

function ReactLogo() {
  return <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full fill-none stroke-current text-[#61DAFB]" strokeWidth="1.2" xmlns="http://www.w3.org/2000/svg"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /><circle r="2" className="fill-current" /></svg>;
}

function NodejsLogo() {
  return <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#339933]" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm1 14.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V12h1v4.5zm0-6.5h-1V9h1v1z" /></svg>;
}

function SpringBootLogo() {
  return <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#6db33f]" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 12C22.5 6.2 17.8 1.5 12 1.5S1.5 6.2 1.5 12 6.2 22.5 12 22.5 22.5 17.8 22.5 12zm-12.8 4.2c.1-.1.2-.2.3-.3.8-.8 1.5-1.9 1.5-3.3s-.7-2.5-1.5-3.3c-.1-.1-.2-.2-.3-.3-.1.2-.2.4-.2.6 0 .5.3.9.7 1.2.6.4.9 1.1.9 1.8s-.3 1.4-.9 1.8c-.4.3-.7.7-.7 1.2 0 .3.1.5.2.7.1-.1.2-.2.3-.3zM15.4 9.5c.3.5.5 1.1.5 1.8s-.2 1.3-.5 1.8c-.3.4-.4.9-.4 1.3 0 .4.2.8.5 1 .3.3.7.4 1.1.2.1-.1.2-.1.3-.2 1.2-1.2 1.9-2.8 1.9-4.7s-.7-3.5-1.9-4.7c-.1-.1-.2-.1-.3-.2-.4-.2-.8-.1-1.1.2-.3.3-.5.7-.5 1 0 .5.1.9.4 1.3z" /></svg>;
}

function DjangoLogo() {
  return <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#092E20] dark:text-[#44B78B]" xmlns="http://www.w3.org/2000/svg"><path d="M11 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 11 2zm3.3 14.8c-.4.2-.8.2-1.2.2-1.3 0-2.2-.6-2.2-2.1V11H9.8V9.5h1.1V7.8l1.6-.9v2.6h1.8V11h-1.8v3.5c0 .6.3.8.8.8.2 0 .4 0 .5-.1v1.6z" /></svg>;
}

function TailwindLogo() {
  return <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#06B6D4]" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.094c-.218 0-.443.007-.674.022-2.185.138-4.225.867-5.968 2.052 1.83.67 3.326 1.879 4.195 3.513 1.09-.766 2.404-1.222 3.823-1.222 2.146 0 4.025 1.036 5.215 2.637 1.057-2.13 1.002-4.664-.254-6.425-1.57-2.203-4.004-3.565-6.337-3.565v2.988zm-6.388 5.76c-.958 1.93-.907 4.227.23 5.823 1.42 1.996 3.626 3.228 5.738 3.228.198 0 .401-.006.61-.02 1.98-.125 3.826-.786 5.405-1.859-1.657-.607-3.01-1.702-3.797-3.18-1.01.71-2.205 1.132-3.5 1.132-1.944 0-3.645-.939-4.723-2.39L5.612 11.85z" /></svg>;
}

function PostgresLogo() {
  return <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#336791]" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" /></svg>;
}

function MongodbLogo() {
  return <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#47A248]" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16.5c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z" /></svg>;
}

function DotNetLogo() {
  return <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#512BD4]" xmlns="http://www.w3.org/2000/svg"><path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1.2 13h-2.4v-4.5c0-.6.4-1 1-1s1 .4 1 1V15zm2.8-4.5c0-.6.4-1 1-1s1 .4 1 1V15h-2v-4.5zM6 15V9h2v4.5h1V15H6z" /></svg>;
}
