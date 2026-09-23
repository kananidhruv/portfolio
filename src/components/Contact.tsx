'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = 'Initialization error: Name missing';
    if (!formData.email.trim()) {
      newErrors.email = 'Initialization error: Email missing';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Syntax error: Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Payload error: Message body empty';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">

        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-bold text-sm uppercase tracking-widest mb-2">
            05. Initialize Protocol
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white font-heading">
            Connect
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
          {/* Info Side */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-lg md:text-xl font-medium text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed max-w-md">
                I am actively seeking software engineering roles where I can build powerful, real-world solutions. My inbox is always open.
              </p>

              <div className="space-y-4 max-w-md">
                <a href="mailto:kananidhruv6949@gmail.com" className="group flex items-center gap-6 p-6 rounded-3xl bento-card cursor-pointer hover:border-purple-500/50">
                  <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white group-hover:bg-purple-500 group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">Email Endpoint</h4>
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">kananidhruv6949@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+919265165515" className="group flex items-center gap-6 p-6 rounded-3xl bento-card cursor-pointer hover:border-cyan-500/50">
                  <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">Direct Line</h4>
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">+91 9265165515</span>
                  </div>
                </a>

                <a href="https://www.google.com/maps/place/Gujarat,+India" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 p-6 rounded-3xl bento-card cursor-pointer hover:border-emerald-500/50">
                  <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">Coordinates</h4>
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">Gujarat, India</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            layout
            className="p-8 sm:p-10 rounded-3xl bento-card relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-16 h-full"
                >
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-green-500 blur-2xl opacity-20 rounded-full animate-pulse-slow" />
                    <CheckCircle2 className="w-20 h-20 text-emerald-500 relative z-10" />
                  </div>
                  <h3 className="text-2xl font-black text-zinc-900 dark:text-white font-heading mb-4 tracking-tighter">Transmission Successful!</h3>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 max-w-xs mb-8 leading-relaxed">
                    Received your message. I'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                  >
                    Initiate New Message <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6 flex flex-col h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border-[0.5px] text-sm font-medium text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-hidden transition-all ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-zinc-200 dark:border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500'
                          }`}
                        placeholder="Identifier (Name)"
                      />
                      {errors.name && (
                        <p className="mt-2 text-[10px] font-bold text-red-500 uppercase tracking-widest flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border-[0.5px] text-sm font-medium text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-hidden transition-all ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-zinc-200 dark:border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                          }`}
                        placeholder="Reply Address (Email)"
                      />
                      {errors.email && (
                        <p className="mt-2 text-[10px] font-bold text-red-500 uppercase tracking-widest flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border-[0.5px] text-sm font-medium text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-hidden transition-all resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-zinc-200 dark:border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500'
                          }`}
                        placeholder="Transmission Payload..."
                      />
                      {errors.message && (
                        <p className="mt-2 text-[10px] font-bold text-red-500 uppercase tracking-widest flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-auto pt-4">
                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-black text-sm uppercase tracking-widest hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-50 cursor-pointer transition-all"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-zinc-200 dark:border-zinc-800 border-t-purple-500 rounded-full animate-spin" />
                          Encrypting...
                        </>
                      ) : (
                        <>
                          Transmit Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
