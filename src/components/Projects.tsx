import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, GitBranch, ShoppingCart, Star } from 'lucide-react';
import { projectsData, type Project } from '../data/projects';
import { socialsData } from '../data/socials';
import { SectionHeading } from './ui/SectionHeading';
import { SpotlightCard } from './ui/SpotlightCard';
import { Reveal } from './ui/Reveal';
import { GitHubLogo } from './icons';

const MapPreview: React.FC = () => (
  <svg viewBox="0 0 400 220" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="heat" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.7" />
        <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="heat2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="400" height="220" fill="#0b1324" />
    {/* city blocks */}
    {Array.from({ length: 9 }).map((_, i) => (
      <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50 + 20} y2="220" stroke="#1e293b" strokeWidth="6" />
    ))}
    {Array.from({ length: 6 }).map((_, i) => (
      <line key={`h${i}`} x1="0" y1={i * 44} x2="400" y2={i * 44 - 10} stroke="#1e293b" strokeWidth="5" />
    ))}
    <path d="M0 160 C 80 120, 140 190, 220 140 S 340 80, 400 110" stroke="#1d4ed8" strokeOpacity="0.5" strokeWidth="14" fill="none" />
    {/* heat spots */}
    <circle cx="110" cy="80" r="60" fill="url(#heat)">
      <animate attributeName="r" values="50;65;50" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="300" cy="150" r="50" fill="url(#heat2)">
      <animate attributeName="r" values="40;58;40" dur="5s" repeatCount="indefinite" />
    </circle>
    {/* animated route */}
    <path
      d="M40 190 L120 150 L170 95 L250 110 L320 60 L370 40"
      fill="none"
      stroke="#22d3ee"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="8 8"
    >
      <animate attributeName="stroke-dashoffset" from="64" to="0" dur="1.6s" repeatCount="indefinite" />
    </path>
    {/* pins */}
    {[
      [120, 150],
      [250, 110],
      [370, 40],
    ].map(([x, y], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="6" fill="#22d3ee" />
        <circle cx={x} cy={y} r="6" fill="none" stroke="#22d3ee" strokeWidth="2">
          <animate attributeName="r" values="6;20" dur="2s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0" dur="2s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
        </circle>
      </g>
    ))}
    {/* mini telemetry panel */}
    <rect x="14" y="14" width="120" height="52" rx="8" fill="#020817" fillOpacity="0.85" stroke="#334155" />
    <text x="24" y="34" fill="#94a3b8" fontSize="10" fontFamily="monospace">
      LIVE TELEMETRY
    </text>
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <rect key={i} x={24 + i * 14} y={42} width="8" height="16" rx="2" fill="#22d3ee" fillOpacity={0.4 + (i % 3) * 0.2}>
        <animate
          attributeName="height"
          values="6;16;10;6"
          dur={`${1.2 + (i % 3) * 0.4}s`}
          repeatCount="indefinite"
        />
      </rect>
    ))}
  </svg>
);

const ShopPreview: React.FC = () => (
  <div className="relative grid h-full w-full grid-cols-3 gap-3 bg-[#0b1324] p-5" aria-hidden="true">
    {[
      'from-cyan-500/40 to-blue-600/40',
      'from-purple-500/40 to-pink-500/40',
      'from-amber-400/40 to-rose-500/40',
      'from-emerald-400/40 to-cyan-500/40',
      'from-blue-500/40 to-indigo-600/40',
      'from-pink-500/40 to-purple-600/40',
    ].map((g, i) => (
      <motion.div
        key={i}
        className="flex flex-col gap-1.5 rounded-lg border border-slate-700/60 bg-slate-900/80 p-2"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.25, ease: 'easeInOut' }}
      >
        <div className={`h-8 rounded-md bg-linear-to-br ${g}`} />
        <div className="h-1.5 w-3/4 rounded bg-slate-700" />
        <div className="h-1.5 w-1/3 rounded bg-cyan-400/60" />
      </motion.div>
    ))}
    <motion.div
      className="absolute right-4 bottom-4 flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/40"
      animate={{ rotate: [0, -12, 12, -6, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5 }}
    >
      <ShoppingCart size={20} />
      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
        3
      </span>
    </motion.div>
  </div>
);

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [imageFailed, setImageFailed] = useState(!project.image);
  const link = project.liveUrl ?? project.githubUrl;
  const host = link ? link.replace(/^https?:\/\//, '').replace(/\.git$/, '').replace(/\/$/, '') : project.title;

  return (
    <Reveal delay={index * 0.15} className="h-full">
      <SpotlightCard
        tilt={6}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur transition-[border-color,box-shadow] duration-500 hover:border-cyan-500/40 hover:shadow-[0_20px_60px_-15px_rgba(34,211,238,0.35)]"
      >
        {/* Browser-style preview */}
        <div className="relative m-3 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
          <div className="flex items-center gap-1.5 border-b border-slate-800 bg-slate-900 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-2 truncate rounded-md bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-slate-400">
              {host}
            </span>
          </div>
          <div className="relative h-52 overflow-hidden">
            <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
              {!imageFailed && project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  onError={() => setImageFailed(true)}
                />
              ) : project.preview === 'shop' ? (
                <ShopPreview />
              ) : (
                <MapPreview />
              )}
            </div>
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-20" />
          </div>
          {project.featured && (
            <span className="absolute top-12 right-3 inline-flex items-center gap-1 rounded-full border border-amber-300/40 bg-amber-400/15 px-2.5 py-1 text-[11px] font-semibold text-amber-200 backdrop-blur">
              <Star size={12} className="fill-amber-300 text-amber-300" /> Featured
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col justify-between gap-5 px-6 pt-3 pb-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-50 transition-colors group-hover:text-cyan-300">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">{project.description}</p>
          </div>

          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-200"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06, type: 'spring', stiffness: 300, damping: 18 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex items-center gap-3 border-t border-slate-800 pt-5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/60 hover:text-cyan-300"
                >
                  <GitBranch size={16} /> Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-shadow hover:shadow-cyan-400/50"
                >
                  <ExternalLink size={16} /> Live Demo
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  );
};

export const Projects: React.FC = () => {
  const github = socialsData.find((s) => s.kind === 'github');

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Things I've"
          highlight="built"
          subtitle="A selection of projects where I combined clean UI, solid backends and spatial data."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

          {github && (
            <Reveal delay={projectsData.length * 0.15} className="h-full md:col-span-2 lg:col-span-1">
              <motion.a
                href={github.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-full min-h-72 flex-col items-center justify-center gap-5 overflow-hidden rounded-3xl border-2 border-dashed border-slate-700 p-8 text-center transition-colors hover:border-cyan-400/60"
                whileHover={{ y: -6 }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 transition-colors duration-500 group-hover:from-cyan-500/10 group-hover:via-blue-500/5 group-hover:to-purple-500/10" />
                <motion.span
                  className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 text-slate-200 transition-colors group-hover:bg-cyan-400 group-hover:text-slate-950"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7 }}
                >
                  <GitHubLogo className="h-8 w-8" />
                </motion.span>
                <div className="relative">
                  <p className="text-xl font-bold text-slate-100">More on GitHub</p>
                  <p className="mt-1 text-sm text-slate-400">Explore all my repositories &amp; experiments</p>
                </div>
                <span className="relative inline-flex items-center gap-1 text-sm font-semibold text-cyan-300">
                  {github.handle}
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </motion.a>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};
