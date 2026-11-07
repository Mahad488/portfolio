import React from 'react';
import { Sparkles } from 'lucide-react';

const tech = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'MySQL',
  'Leaflet',
  'GIS Mapping',
  'Tailwind CSS',
  'Java',
  'Python',
  'C#',
  'Blazor',
  'REST APIs',
  'Git',
];

/** Infinite, hover-to-pause ribbon of technologies. */
export const TechMarquee: React.FC = () => (
  <div className="group relative -rotate-1 border-y border-cyan-500/20 bg-slate-900/60 py-5 backdrop-blur-sm">
    <div className="marquee-mask overflow-hidden">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[...tech, ...tech].map((name, i) => (
          <span
            key={`${name}-${i}`}
            aria-hidden={i >= tech.length}
            className="font-display mx-6 inline-flex items-center gap-6 text-xl font-semibold whitespace-nowrap text-slate-400 transition-colors hover:text-cyan-300 sm:text-2xl"
          >
            {name}
            <Sparkles size={18} className="text-cyan-500/70" />
          </span>
        ))}
      </div>
    </div>
  </div>
);
