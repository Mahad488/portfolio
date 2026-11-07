import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

const ease = [0.22, 1, 0.36, 1] as const;

/** Numbered section title whose words slide up from a mask, with an underline that draws itself. */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  eyebrow,
  title,
  highlight,
  subtitle,
  center = false,
}) => {
  const words = title.split(' ');
  const highlightWords = highlight ? highlight.split(' ') : [];

  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      <motion.p
        className={`mb-4 inline-flex items-center gap-3 font-mono text-sm tracking-widest text-cyan-400 uppercase ${
          center ? 'justify-center' : ''
        }`}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
      >
        <span className="text-slate-500">{index}</span>
        <span className="h-px w-8 bg-cyan-400/60" />
        {eyebrow}
      </motion.p>

      <h2 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
        {[...words, ...highlightWords].map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-1 align-bottom">
            <motion.span
              className={`inline-block ${i >= words.length ? 'text-gradient' : ''}`}
              initial={{ y: '110%', rotate: 4 }}
              whileInView={{ y: '0%', rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 * i, ease }}
            >
              {word}
            </motion.span>
            {' '}
          </span>
        ))}
      </h2>

      <motion.div
        className={`mt-5 h-1 w-24 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 ${
          center ? 'mx-auto' : ''
        }`}
        style={{ originX: center ? 0.5 : 0 }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3, ease }}
      />

      {subtitle && (
        <motion.p
          className={`mt-6 max-w-2xl text-slate-400 ${center ? 'mx-auto' : ''}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
