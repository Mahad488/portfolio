import React from 'react';
import { skillsData } from '../data/skills';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 border-l-4 border-cyan-500 pl-4 text-3xl font-bold text-slate-100">
          Skills & Tech Stack
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className="group rounded-xl border border-slate-800 bg-slate-900/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.12)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="font-semibold text-slate-200">{skill.name}</span>
                <span className="rounded border border-cyan-800/40 bg-cyan-950 px-2 py-0.5 text-xs text-cyan-400">
                  {skill.category}
                </span>
              </div>

              <div className="relative h-3 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-cyan-400 via-cyan-500 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
                <div className="absolute inset-y-0 left-0 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="h-full w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)] animate-[shine_1.8s_linear_infinite]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};