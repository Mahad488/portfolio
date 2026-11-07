import React from 'react';
import { motion } from 'framer-motion';
import { Layers, MapPinned, Palette } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { SpotlightCard } from './ui/SpotlightCard';

const highlights = [
  { icon: Layers, title: 'Full-Stack', text: 'React, Node.js & SQL end to end.' },
  { icon: MapPinned, title: 'GIS & Maps', text: 'Spatial dashboards & heatmaps.' },
  { icon: Palette, title: 'Clean UI', text: 'Polished, responsive interfaces.' },
];

type Token = { t: string; c?: string };

// A tiny "code editor" describing me — each line types in on scroll.
const codeLines: Token[][] = [
  [{ t: 'const ', c: 'text-purple-400' }, { t: 'mahad', c: 'text-cyan-300' }, { t: ' = {' }],
  [{ t: '  role: ' }, { t: "'Full Stack Developer'", c: 'text-emerald-300' }, { t: ',' }],
  [{ t: '  education: ' }, { t: "'Software Engineering'", c: 'text-emerald-300' }, { t: ',' }],
  [
    { t: '  stack: [' },
    { t: "'React'", c: 'text-emerald-300' },
    { t: ', ' },
    { t: "'TypeScript'", c: 'text-emerald-300' },
    { t: ', ' },
    { t: "'Node'", c: 'text-emerald-300' },
    { t: '],' },
  ],
  [{ t: '  passion: ' }, { t: "'GIS & spatial data'", c: 'text-emerald-300' }, { t: ',' }],
  [{ t: '  location: ' }, { t: "'Pakistan 🇵🇰'", c: 'text-emerald-300' }, { t: ',' }],
  [{ t: '  openToWork: ' }, { t: 'true', c: 'text-amber-300' }, { t: ',' }],
  [{ t: '};' }],
];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading index="01" eyebrow="About" title="Turning ideas into" highlight="real products" />

        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="min-w-0 space-y-6 text-lg leading-relaxed text-slate-400">
            <Reveal>
              <p>
                I'm a <span className="font-semibold text-slate-100">Software Engineering undergraduate</span>{' '}
                specializing in full-stack application development and spatial{' '}
                <span className="font-semibold text-cyan-300">GIS mapping platforms</span>.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                I build web products using modern JavaScript/TypeScript ecosystems, state management architectures, and
                relational SQL backends.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                I'm passionate about solving real-world problems through clean interfaces, scalable systems, and
                data-driven user experiences.
              </p>
            </Reveal>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={0.15 * i + 0.2}>
                  <SpotlightCard
                    tilt={10}
                    className="group h-full rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur"
                  >
                    <motion.div
                      className="mb-3 inline-flex rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-2.5 text-cyan-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon size={20} />
                    </motion.div>
                    <h3 className="text-base font-semibold text-slate-100">{title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{text}</p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal from="right" delay={0.2} className="min-w-0">
            <SpotlightCard
              tilt={6}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-cyan-500/10 backdrop-blur"
            >
              <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900/80 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-mono text-xs text-slate-500">about-me.ts</span>
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-7 text-slate-300 sm:p-6 sm:text-[15px]">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    className="flex"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
                  >
                    <span className="mr-5 w-5 shrink-0 text-right text-slate-600 select-none">{i + 1}</span>
                    <code>
                      {line.map((tok, j) => (
                        <span key={j} className={tok.c}>
                          {tok.t}
                        </span>
                      ))}
                    </code>
                  </motion.div>
                ))}
                <motion.div
                  className="flex"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + codeLines.length * 0.12 }}
                >
                  <span className="mr-5 w-5 shrink-0 text-right text-slate-600 select-none">{codeLines.length + 1}</span>
                  <span className="inline-block h-5 w-2 translate-y-1 animate-blink bg-cyan-400" />
                </motion.div>
              </pre>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
