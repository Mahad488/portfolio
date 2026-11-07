import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Code2, Database, Monitor, Server } from 'lucide-react';
import { skillsData, type Skill } from '../data/skills';
import { SectionHeading } from './ui/SectionHeading';
import { SpotlightCard } from './ui/SpotlightCard';
import { CountUp } from './ui/CountUp';

type Filter = 'All' | Skill['category'];
const filters: Filter[] = ['All', 'Frontend', 'Backend', 'Database / GIS', 'Languages'];

const categoryIcon: Record<Skill['category'], React.ElementType> = {
  Frontend: Monitor,
  Backend: Server,
  'Database / GIS': Database,
  Languages: Code2,
};

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('All');
  const visible = filter === 'All' ? skillsData : skillsData.filter((s) => s.category === filter);

  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="My tech"
          highlight="toolbox"
          subtitle="The languages, frameworks and tools I use to bring ideas to life — from pixel-perfect frontends to spatial databases."
        />

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === f ? 'text-slate-950' : 'border border-slate-800 text-slate-400 hover:text-cyan-300'
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="skill-filter"
                  className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((skill, index) => {
              const Icon = categoryIcon[skill.category];
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <SpotlightCard
                    tilt={8}
                    className="group h-full rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]"
                  >
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                          <Icon size={20} />
                        </span>
                        <div>
                          <p className="font-semibold text-slate-100">{skill.name}</p>
                          <p className="text-xs text-slate-500">{skill.category}</p>
                        </div>
                      </div>
                      <CountUp to={skill.level} suffix="%" className="font-display text-2xl font-bold text-cyan-300" />
                    </div>

                    <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                      <motion.div
                        className="absolute inset-y-0 left-0 overflow-hidden rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.2 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="h-full w-full animate-shine bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]" />
                      </motion.div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
