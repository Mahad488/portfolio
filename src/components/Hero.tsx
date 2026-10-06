import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import profileImage from '../../photo/Image 2.jpeg';

const GitHubLogo = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.04.78 2.1v3.12c0 .31.2.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedInLogo = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
    <path d="M6.94 8.5A1.5 1.5 0 1 1 6.94 5.5a1.5 1.5 0 0 1 0 3ZM5.5 9.75h2.88v8.75H5.5V9.75Zm4.75 0h2.76v1.2h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.43 1.9 3.43 4.38v4.65h-2.88v-4.36c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.13-1.67 2.3v4.44H10.25V9.75Z" />
  </svg>
);

const XLogo = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
    <path d="M18.9 2h3.6l-7.86 8.98L22.8 22h-7.11l-5.56-8.16L3.42 22H-.18l8.42-9.62L.8 2h7.27l5.03 7.45L18.9 2Zm-1.26 18h1.97L7.1 3.9H5.05L17.64 20Z" />
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column Text */}
        <motion.div 
          className="lg:col-span-7 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-800/40">
            Hi, I'm
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Muhammad Mahad Rafiq
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-400">
            Full Stack Developer <span className="text-cyan-400">|</span> GIS Enthusiast
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-2xl">
            I craft full-stack web applications, spatial GIS dashboards, and scalable databases. Focused on clean architecture, modern UX, and spatial data integration.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4 pt-2">
            {[
              { icon: GitHubLogo, href: 'https://github.com/Mahad488' },
              { icon: LinkedInLogo, href: 'https://www.linkedin.com/in/muhammad-mahad-rafiq-942295389/' },
              { icon: XLogo, href: 'https://x.com/MuhammadMahadR2' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition-all hover:border-cyan-500/50 hover:text-cyan-400"
              >
                <social.icon />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold hover:border-slate-700 hover:text-white transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Column Profile Image */}
        <motion.div 
          className="lg:col-span-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-cyan-500 to-blue-600 blur-2xl opacity-20 animate-pulse" />
            <div className="relative w-full h-full rounded-3xl border-2 border-slate-800 bg-slate-900 overflow-hidden p-2">
              <img
                src={profileImage}
                alt="Muhammad Mahad Rafiq"
                className="w-full h-full object-cover rounded-2xl"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600';
                }}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};