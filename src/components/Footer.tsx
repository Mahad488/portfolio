import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { socialsData } from '../data/socials';
import { SocialIcon } from './icons';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/60 backdrop-blur">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/60 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row lg:px-8">
        <div className="text-center md:text-left">
          <a href="#home" className="font-display text-xl font-bold text-slate-100">
            Muhammad Mahad Rafiq<span className="text-cyan-400">.</span>
          </a>
          <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-500">
            Built with React, TypeScript & Framer Motion
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="inline-flex text-rose-400"
            >
              <Heart size={14} className="fill-rose-400" />
            </motion.span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialsData.map((s) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-colors hover:border-cyan-400/60 hover:text-cyan-300"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <SocialIcon kind={s.kind} className="h-4 w-4" />
            </motion.a>
          ))}
        </div>

        <p className="text-sm text-slate-500">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};
