import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { socialsData, type SocialKind } from '../data/socials';
import { SocialIcon } from './icons';
import { Reveal } from './ui/Reveal';
import { SpotlightCard } from './ui/SpotlightCard';

const glow: Record<SocialKind, string> = {
  github: 'group-hover:bg-slate-100 group-hover:text-slate-950',
  linkedin: 'group-hover:bg-[#0a66c2] group-hover:text-white',
  x: 'group-hover:bg-white group-hover:text-black',
};

export const SocialAccounts: React.FC = () => {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-6 text-center font-mono text-sm tracking-widest text-slate-500 uppercase">
            Find me online
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {socialsData.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1}>
              <SpotlightCard tilt={10} className="rounded-2xl">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur transition-colors hover:border-slate-600"
                >
                  <motion.span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-cyan-300 transition-colors duration-300 ${glow[item.kind]}`}
                    whileHover={{ scale: 1.1, rotate: -8 }}
                  >
                    <SocialIcon kind={item.kind} className="h-6 w-6" />
                  </motion.span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-slate-500">{item.name}</p>
                    <p className="truncate font-semibold text-slate-100">{item.handle}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-300"
                  />
                </a>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
